// components/Cmd.tsx
interface CmdProps {
  children: React.ReactNode;
}

export function Cmd({ children }: CmdProps) {
  return (
    <code className="rounded bg-teal-400/10 px-1.5 py-0.5 text-teal-400">
      {children}
    </code>
  );
}
