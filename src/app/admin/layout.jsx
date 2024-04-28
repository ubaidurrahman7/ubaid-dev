import { ClerkProvider } from "@clerk/nextjs";
import AdminNavbar from "./AdminNavar";

export default function layout({ children }) {
  return (
    <ClerkProvider>
      <AdminNavbar />
      <div className="mt-4">{children}</div>
    </ClerkProvider>
  );
}
