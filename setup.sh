#!/bin/sh

echo "Installing Git hooks."

ln -sf ../../hooks/pre-commit .git/hooks/pre-commit
