# JOB 01

set -e
echo "[--------BUILD iniciado--------]"
docker run --rm -v jenkins_lab_data:/var/jenkins_home -w "$WORKSPACE" node:20-alpine sh -c "npm ci && npm run build"
echo "[--------BUILD finalizado------]"

# JOB 02

set -e
echo "[--------TESTS iniciado--------]"
docker run --rm -v jenkins_lab_data:/var/jenkins_home -w "$WORKSPACE" node:20-alpine sh -c "npm ci && npm test" || true
echo "[--------TESTS finalizado------]"
