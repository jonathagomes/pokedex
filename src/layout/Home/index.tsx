import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import * as yup from "yup";
import { setCookie } from "nookies";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";

import "react-toastify/dist/ReactToastify.min.css";

type FormInput = {
  email: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email("É necessário informar um e-mail válido!")
    .required("O e-mail é obrigatório!"),
});

import * as S from "./styles";

const delay = (amount = 1500) =>
  new Promise((resolve) => setTimeout(resolve, amount));

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email }: FormInput) => {
    setIsLoading(true);
    try {
      setCookie(null, "riderize.pokedex.email", email, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });

      toast.success("Sucesso!");
    } catch (error) {
      toast.error("Error ao salvar email!");
      await delay(750);

      setIsLoading(false);
      return;
    }

    await delay();

    setIsLoading(false);
    router.push("/dashboard");
  };

  return (
    <>
      <S.HeaderContainer>
        <div>
          <Image
            src="/img/logo-pokedex.png"
            alt="Logo Pokedex"
            width={297}
            height={61}
          />
          <Image
            src="/img/settings.svg"
            alt="Settings"
            width={32}
            height={32}
          />
        </div>
      </S.HeaderContainer>
      <S.MainContainer>
        <div>
          <Image
            src="/img/pokeball.svg"
            alt="Pokebola"
            width={128}
            height={128}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Seu melhor e-mail"
              {...register("email")}
            />
            {errors.email ? <p>{errors.email.message}</p> : null}
            <button type="submit" disabled={isLoading}>
              {isLoading ? <BeatLoader /> : "Acessar"}
            </button>
          </form>
        </div>
      </S.MainContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ fontSize: "1.6rem" }}
      />
    </>
  );
};

export { HomePage };
