import { ArrowDown, ShieldCheck } from "phosphor-react"
import { Button, IgniteLogo, Text } from "../components"

export const Ignite = () => {
  return (
    <div className="bg-[#111114] h-screen w-screen">
        <div className=""> 
            <header className="bg-[#111114] py-4 flex justify-center">
                <div className="flex items-center gap-32">
                    <IgniteLogo className="cursor-pointer" />

                    <div className="flex gap-10">
                        <Text asChild className="hover:text-white transition-colors">
                            <a href="">
                                Sobre o Ignite
                            </a>
                        </Text>
                        <Text asChild className="hover:text-white transition-colors">
                            <a href="">
                                Trilhas
                            </a>
                        </Text>
                        <Text asChild className="hover:text-white transition-colors">
                            <a href="">
                                Projetos
                            </a>
                        </Text>
                        <Text asChild className="hover:text-white transition-colors">
                            <a href="">
                                Depoimentos
                            </a>
                        </Text>
                        <Text asChild className="hover:text-white transition-colors">
                            <a href="">
                               Dúvidas
                            </a>
                        </Text>
                    </div>

                    <div className="flex">
                        <Button className="uppercase py-3 px-6 w-fit text-[#00b37e] bg-transparent hover:bg-transparent hover:text-opacity-60">
                            Entrar
                        </Button> 

                        <Button className="uppercase py-3 px-6 w-fit bg-transparent text-white border-[1px] border-[#00875f] hover:bg-[#00875f] transition-colors">
                            Assinar agora
                        </Button> 
                    </div>
                </div>
            </header>

            <section className="flex flex-col flex-1 bg-gradient-to-b from-[hsla(0,0%,100%,0)] to-[#00291d] pt-[60px] pb-[80px] h-auto items-center">
                <div className="flex flex-row items-center">
                    <div className="flex flex-col gap-5 w-[694px]">
                        <img className="w-[266px]" src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/63247c81fa1684714b234ce9_Techs-ignite.svg" alt="" />
                        <Text className="text-2xl font-black">
                            Evolua sua carreia com <br/> React, Node e React Native
                        </Text>
                        <Text size="md">
                            Especialize-se através de um método eficiente, uma grade curricular alinhada <br/> com o mercado e as atitudes que vão te destacar como profissional.
                        </Text>
                        <Button className="uppercase w-fit mt-3 bg-transparent text-white border-[1px] border-[#00875f] hover:bg-[#00875f] transition-colors">
                            Dúvidas? Fale com a gente
                        </Button>
                    </div>
                    <div className="w-[445px] flex flex-col items-center gap-2 bg-[#111114] border-[1px] border-[#29292e] rounded-md p-8">
                        <img className="w-36" src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/62cf2169c26ae192998bb774_alunos-e-alunas-ignite.png" alt="" />
                        <Text className="font-black text-lg text-center mt-1 mb-3 text-white">
                            Junte-se a <span className="text-[#00b37e]">+33 mil devs</span> no bootcamp de especialização mais completo e atualizado do mercado
                        </Text>
                        <Text>
                            Assinatura anual por apenas
                        </Text>
                        <Text className="text-white text-xl">
                            R$ <span className="font-black text-2xl">147,90</span>/mês
                        </Text>
                        <Text>
                            Ou R$ 1.774,80 à vista
                        </Text>
                        <Button className="bg-[#00875f] text-white uppercase hover:bg-[#015F43] transition-colors mt-5">
                            Garantir minha vaga
                        </Button>
                        <Text className="flex items-center gap-2 mt-2">
                            <ShieldCheck size={24} className="text-[#00875f]" />
                            100% seguro. Acesso imediato.
                        </Text>
                    </div>

                    
                </div><ArrowDown size={24} weight="bold" className="text-[#00875f] mt-16" />
            </section>
        </div>
    </div>
  )
}