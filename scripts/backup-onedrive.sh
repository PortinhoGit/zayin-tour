#!/bin/bash
# Backup script for Zayin Tour project to OneDrive
# Usage: bash scripts/backup-onedrive.sh

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PROJECT_NAME="zayin-tour"

# OneDrive path (adjust to your OneDrive folder)
ONEDRIVE_DIR="$HOME/OneDrive/Backups/${PROJECT_NAME}"

# Create backup directory if it doesn't exist
mkdir -p "$ONEDRIVE_DIR"

BACKUP_DIR="$ONEDRIVE_DIR/backup_${TIMESTAMP}"

echo "=== Zayin Tour Backup ==="
echo "Source: $PROJECT_DIR"
echo "Destination: $BACKUP_DIR"
echo ""

rsync -av --progress \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  --exclude 'out' \
  --exclude '.env' \
  --exclude '.env.local' \
  --exclude '.DS_Store' \
  --exclude '*.log' \
  "$PROJECT_DIR/" "$BACKUP_DIR/"

echo ""
echo "=== Backup complete! ==="
echo "Location: $BACKUP_DIR"
echo "Timestamp: $TIMESTAMP"
