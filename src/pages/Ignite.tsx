import { Button, IgniteLogo, Text } from "../components"

export const Ignite = () => {
  return (
    <div className="bg-[#111114] h-screen w-screen px-6 ">
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
                        <Button className="uppercase py-3 px-6 w-fit">
                            Entrar
                        </Button> 

                        <Button className="uppercase py-3 px-6 w-fit">
                            Assinar agora
                        </Button> 
                    </div>
                </div>
            </header>

            <section className="flex flex-row">
                <div className="flex flex-col gap-5">
                    <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/63247c81fa1684714b234ce9_Techs-ignite.svg" alt="" />

                    <Text className="text-2xl font-black">
                        Evolua sua carreia com React, Node e React Native
                    </Text>

                    <Text size="md">
                        Especialize-se através de um método eficiente, uma grade curricular alinhada com o mercado e as atitudes que vão te destacar como profissional.
                    </Text>

                    <Button className="uppercase w-fit mt-3">
                        Dúvidas? Fale com a gente
                    </Button>
                </div>

                <div className="">
                    <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/62cf2169c26ae192998bb774_alunos-e-alunas-ignite.png" alt="" />

                    <Text className="font-black text-lg">
                        Junte-se a +33 mil devs no bootcamp de especialização mais completo e atualizado do mercado
                    </Text>
                </div>
            </section>
    </div>
  )
}