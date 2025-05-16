interface AuthFormProps {
    title: string;
    onSubmit: (e: React.FormEvent) => void;
    children: React.ReactNode;
};

export default function AuthForm({ title, onSubmit, children }: AuthFormProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50">
      <div className="p-8 bg-white rounded-xl shadow-md w-full max-w-md">
        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-7 items-center w-full"
        >
          <label className="text-2xl text-center w-full">{title}</label>
          {children}
        </form>
      </div>
    </div>
  );
}