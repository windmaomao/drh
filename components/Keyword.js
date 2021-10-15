export default function Keyword({ children, code = false }) {
  return (
    <span>
      {children}
      <style jsx>{`
        font-weight: 600;
        background-color: #fafafa;
        padding: 0.2rem;
        font-style: ${code ? 'normal': 'italic' };
      `}</style>
    </span>
  )
}
