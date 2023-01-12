import Image from "next/image";

// #0055d1
import * as S from "./styles";

const HomePage = () => {
  return (
    <main>
      <S.HeaderContainer>
        <div>
          <Image
            src={"/img/logo-pokedex.png"}
            alt="Logo Pokedex"
            width={297}
            height={61}
          />
          <Image
            src={"/img/settings.svg"}
            alt="Settings"
            width={32}
            height={32}
          />
        </div>
      </S.HeaderContainer>
    </main>
  );
};

export { HomePage };
