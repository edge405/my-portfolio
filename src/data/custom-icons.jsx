import cursorAiIcon from "../assets/cursor-ai.png";
import claudeAiIcon from "../assets/claude-ai.png";
import cpanelIcon from "../assets/cpanel.png";

export const customIcons = {
  CursorAI: ({ className }) => (
    <img src={cursorAiIcon} alt="Cursor AI" className={className} />
  ),
  Antigravity: ({ className }) => (
    <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/antigravity-color.png" alt="Antigravity" className={className} />
  ),
  Claude: ({ className }) => (
    <img src={claudeAiIcon} alt="Claude AI" className={className} />
  ),
  CPanel: () => (
    <img src={cpanelIcon} alt="cPanel" style={{ width: '100px', height: 'auto', objectFit: 'contain' }} />
  ),
};

export const iconMap = {
  "CursorAI": customIcons.CursorAI,
  "Antigravity": customIcons.Antigravity,
  "Claude": customIcons.Claude,
  "CPanel": customIcons.CPanel,
};
