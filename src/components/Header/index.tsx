import Image from "next/image";
import logoImg from "../../assets/logo-ignite-shop.svg";
import { HeaderContainer } from "./styles";
import Cart from "../Cart";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const { pathname } = useRouter();

  const showCart = pathname !== "/success";

  return (
    <HeaderContainer>
      <Link href="/" prefetch={false}>
        <Image src={logoImg} alt="" />
      </Link>

      {showCart && <Cart />}
    </HeaderContainer>
  );
}
