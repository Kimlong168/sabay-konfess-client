export const getDuration = (timestamp: string): string => {
  if (!timestamp) return "";

  const timeNum = Number(timestamp);
  if (isNaN(timeNum)) return "";

  const past = new Date(timeNum); // assumes timestamp is in milliseconds
  const now = new Date();
  const diffMs = now.getTime() - past.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (seconds < 60) return `${seconds}s`;
  if (minutes < 60) return `${minutes}mn`;
  if (hours < 24) return `${hours}h`;
  return `${days}days`;
};
