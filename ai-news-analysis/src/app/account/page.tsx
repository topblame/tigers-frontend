import { AccountPanel } from "@/features/auth/components/AccountPanel";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-6 px-4 py-10">
        <div className="rounded-3xl border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/20 text-primary">
              <span className="text-xl">🔐</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">계정 & 로그인</h1>
              <p className="text-sm text-muted-foreground">
                Google OAuth 로그인, 닉네임 관리, 세션 상태 점검을 진행하세요.
              </p>
            </div>
          </div>
        </div>
        <AccountPanel />
      </main>
    </div>
  );
}
