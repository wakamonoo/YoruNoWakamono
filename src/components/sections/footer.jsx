export default function Footer() {
  return (
    <div className="bg-panel p-2">
      <p className="text-center text-xs text-muted font-normal">
        Copyright © {new Date().getFullYear()} wakamonoo
      </p>
    </div>
  );
}
