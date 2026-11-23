function Badge({ text }) {
  const style = text === 'New' ? 'badge badge-new' : 'badge';
  return <span className={style}>{text}</span>;
}

export default Badge;