#!/usr/bin/env bash
set -euo pipefail

HOME_DIR="${HOME:-/home/$(whoami)}"
NODE_VERSION="20.19.5"
NODE_DIR="$HOME_DIR/.local/share/node-v${NODE_VERSION}-linux-x64"
NODE_TARBALL="$HOME_DIR/.local/share/node-v${NODE_VERSION}-linux-x64.tar.xz"
LOCAL_BIN="$HOME_DIR/.local/bin"
NPM_GLOBAL="$HOME_DIR/.npm-global"
BASHRC="$HOME_DIR/.bashrc"

mkdir -p "$HOME_DIR/.local/share" "$LOCAL_BIN" "$NPM_GLOBAL/bin"

if [ ! -x "$NODE_DIR/bin/node" ]; then
  curl -fsSL "https://nodejs.org/download/release/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz" -o "$NODE_TARBALL"
  tar -xf "$NODE_TARBALL" -C "$HOME_DIR/.local/share"
fi

ln -sfn "$NODE_DIR/bin/node" "$LOCAL_BIN/node"
ln -sfn "$NODE_DIR/bin/npm" "$LOCAL_BIN/npm"
ln -sfn "$NODE_DIR/bin/npx" "$LOCAL_BIN/npx"

if ! grep -Fq 'export NPM_CONFIG_PREFIX="$HOME/.npm-global"' "$BASHRC"; then
  printf '\nexport NPM_CONFIG_PREFIX="$HOME/.npm-global"\n' >> "$BASHRC"
fi

if ! grep -Fq 'export PATH="$HOME/.npm-global/bin:$HOME/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"' "$BASHRC"; then
  printf 'export PATH="$HOME/.npm-global/bin:$HOME/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"\n' >> "$BASHRC"
fi

export NPM_CONFIG_PREFIX="$NPM_GLOBAL"
export PATH="$NPM_GLOBAL/bin:$LOCAL_BIN:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

npm install -g @openai/codex --loglevel=error

cat > "$LOCAL_BIN/codex-session" <<'EOF'
#!/usr/bin/env bash
set -euo pipefail

SESSION_NAME="${1:-codex}"
export NPM_CONFIG_PREFIX="$HOME/.npm-global"
export PATH="$HOME/.npm-global/bin:$HOME/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

if tmux has-session -t "$SESSION_NAME" 2>/dev/null; then
  exec tmux attach -t "$SESSION_NAME"
fi

exec tmux new -s "$SESSION_NAME" "cd /mnt/c/Users/joel6/Desktop/MACBOOK_BOY/notebook-atelier && codex"
EOF

chmod +x "$LOCAL_BIN/codex-session"

echo "node: $(node --version)"
echo "npm: $(npm --version)"
echo "codex: $(codex --version)"
