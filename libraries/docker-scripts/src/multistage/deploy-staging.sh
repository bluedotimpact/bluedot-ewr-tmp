#!/usr/bin/env bash
set -euxo pipefail

APP_NAME=$(basename "$PWD")
REPO_URL="ewr.vultrcr.com/bluedot20240228nj"
IMAGE_NAME="bluedot-$APP_NAME"
VERSION_TAG="$(TZ=UTC date +'%Y%m%d.%H%M%S').$(git rev-parse --short HEAD)"

# Use the corresponding env file for staging environment.
cp .env.staging.template .env.production

# Add no index robots.txt to the public folder.
mkdir -p public
echo "User-agent: *
Disallow: /" > public/robots.txt

# Build
APP_NAME=$APP_NAME VERSION_TAG=$VERSION_TAG npm run build --if-present
docker build --platform="linux/amd64" -t $IMAGE_NAME --build-arg APP_NAME="$APP_NAME" --build-arg VERSION_TAG="$VERSION_TAG" .

# Tag and push to registry
docker login https://ewr.vultrcr.com/bluedot20240228nj -u 0cdab27d-43ec-4a7c-a480-ae4f4ee20d8c -p B4mKg4USTJfxGG6jC87ENveWzXcXMbwvUyic
docker tag $IMAGE_NAME $REPO_URL/$IMAGE_NAME:$VERSION_TAG
docker tag $IMAGE_NAME $REPO_URL/$IMAGE_NAME:latest
echo "Upload initiated at $(TZ=UTC date +'%Y-%m-%d %H:%M:%SZ')"
docker push $REPO_URL/$IMAGE_NAME:$VERSION_TAG
docker push $REPO_URL/$IMAGE_NAME:latest

# Restart nodes in cluster so they pull the new image
# kubectl rollout restart deployment $IMAGE_NAME-deployment
# kubectl rollout status deployment $IMAGE_NAME-deployment
