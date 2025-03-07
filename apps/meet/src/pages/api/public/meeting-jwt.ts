import type { NextApiRequest, NextApiResponse } from 'next';
import jsonwebtoken from 'jsonwebtoken';
import createHttpError from 'http-errors';
import { apiRoute } from '../../../lib/api/apiRoute';
import db, { groupDiscussionTable, zoomAccountTable } from '../../../lib/api/db';
import env from '../../../lib/api/env';
import { parseZoomLink } from '../../../lib/zoomLinkParser';

export type MeetingJwtRequest = {
  groupDiscussionId: string,
  participantId?: string,
};

export type MeetingJwtResponse = {
  type: 'success',
  meetingSdkJwt: string,
  meetingNumber: string,
  meetingPassword: string,
} | {
  type: 'error',
  message: string,
};

const ZOOM_ROLE = {
  HOST: 1,
  PARTICIPANT: 0,
};

export default apiRoute(async (
  req: NextApiRequest,
  res: NextApiResponse<MeetingJwtResponse>,
) => {
  const groupDiscussion = await db.get(groupDiscussionTable, req.body.groupDiscussionId);
  if (req.body.participantId && !groupDiscussion.Attendees.includes(req.body.participantId)) {
    await db.update(groupDiscussionTable, { ...groupDiscussion, Attendees: [...groupDiscussion.Attendees, req.body.participantId] });
  }
  if (!groupDiscussion['Zoom account']) {
    throw new createHttpError.InternalServerError(`Group discussion ${groupDiscussion.id} missing Zoom account`);
  }
  const zoomAccount = await db.get(zoomAccountTable, groupDiscussion['Zoom account']);
  const { meetingNumber, meetingPassword } = parseZoomLink(zoomAccount['Meeting link']);

  const issuedAt = Math.round(Date.now() / 1000);
  const expiresAt = issuedAt + 3600 * 4;
  const oPayload = {
    sdkKey: env.NEXT_PUBLIC_ZOOM_CLIENT_ID,
    mn: meetingNumber,
    role: groupDiscussion.Facilitators.includes(req.body.participantId) ? ZOOM_ROLE.HOST : ZOOM_ROLE.PARTICIPANT,
    iat: issuedAt,
    exp: expiresAt,
    tokenExp: expiresAt,
  };

  const meetingSdkJwt = jsonwebtoken.sign(oPayload, env.ZOOM_CLIENT_SECRET, { algorithm: 'HS256' });

  res.status(200).json({
    type: 'success',
    meetingSdkJwt,
    meetingNumber,
    meetingPassword,
  });
}, 'insecure_no_auth');

export const maxDuration = 60;
