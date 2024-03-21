import { useRouter } from "next/router";

export function Product() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
