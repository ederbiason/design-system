import { Button, IgniteLogo, Text } from "../components"

export const Ignite = () => {
  return (
    <div className="bg-[#111114] h-screen w-screen px-6 ">
        <div className="">
            <header className="bg-[#111114] py-4">
                <div className="flex items-center gap-32">
                    <IgniteLogo />

                    <div className="flex gap-10">
                        <Text asChild>
                            <a href="">
                                Sobre o Ignite
                            </a>
                        </Text>
                        <Text asChild>
                            <a href="">
                                Trilhas
                            </a>
                        </Text>
                        <Text asChild>
                            <a href="">
                                Projetos
                            </a>
                        </Text>
                        <Text asChild>
                            <a href="">
                                Depoimentos
                            </a>
                        </Text>
                        <Text asChild>
                            <a href="">
                               Dúvidas
                            </a>
                        </Text>
                    </div>

                    <div className="flex">
                        <Button className="uppercase py-3 px-6">
                            Entrar
                        </Button> 

                        <Button className="uppercase py-3 px-6">
                            Assinar agora
                        </Button> 
                    </div>
                </div>
            </header>
        </div>
    </div>
  )
}