import Image from "next/image";
import { useRouter } from "next/router";

import * as S from "./styles";

const Page404 = () => {
  const router = useRouter();

  return (
    <S.Container>
      <Image src="/img/404.svg" alt="Pokedex" fill />
      <button onClick={() => router.push("/dashboard/1")}>Return</button>
    </S.Container>
  );
};

export { Page404 };
