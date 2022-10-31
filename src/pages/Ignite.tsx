import { ArrowDown, ChatText, DesktopTower, RocketLaunch, ShieldCheck, UsersThree } from "phosphor-react"
import { Button, IgniteLogo, Text, Header } from "../components"

export const Ignite = () => {
  const videoURL = "https://youtu.be/N817rUkStGc"

  return (
    <div className="bg-[#111114] h-full w-full">
        <div className=""> 
            <Header />

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

                    
                </div>

                <ArrowDown size={24} weight="bold" className="text-[#00875f] mt-16" />
            </section>

            <section className="flex mx-24 pt-[60px] pb-[80px] gap-10 items-center">
                <div className="flex flex-col gap-20 w-[42%]">
                    <Text className="text-2xl font-black text-white">
                        Assista ao vídeo e descubra como o Ignite vai transformar sua carreira como dev
                    </Text>

                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <RocketLaunch size={40} className="text-[#00875f] mb-3" />
                            <Text className="text-sm font-black">
                                Desafios práticos com aplicações reais
                            </Text>
                        </div>

                        <div>
                            <UsersThree size={40} className="text-[#00875f] mb-3" />
                            <Text className="text-sm font-black">
                                Comunidade exclusiva de alunos e alunas
                            </Text>
                        </div>

                        <div>
                            <DesktopTower size={40} className="text-[#00875f] mb-3" />
                            <Text className="text-sm font-black">
                                Plataforma completa que une todo ecossistema
                            </Text>
                        </div>

                        <div>
                            <ChatText size={40} className="text-[#00875f] mb-3" />
                            <Text className="text-sm font-black">
                                Fórum exclusivo para dúvidas técnicas
                            </Text>
                        </div>
                    </div>
                </div>

                <div className="w-[58%]">
                    <video 
                        src={videoURL}
                        poster="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/6324a390134c6e45bd87ce97_Thumb-video-vsl.jpg"
                        className="rounded-t-md"
                    >

                    </video>
                    <div className="text-center bg-[#202024] py-4 rounded-b-md text-[#fba94c]">
                        ⚠️  Antes de continuar assista o vídeo até o final
                    </div>
                </div>
            </section>

            <section className="flex items-center mx-24 gap-2 pt-16 pb-20">
                <div className="flex flex-col w-1/2">
                    <Text className="uppercase font-bold text-xs text-[#00b37e] mb-4">
                        O Ignite é pra mim?
                    </Text>

                    <Text className="text-2xl font-black text-white">
                        Programa de especialização e desenvolvimento
                    </Text>

                    <div className="flex flex-col pt-6 pb-8 gap-6">
                        <Text className="text-[#a8a8b3] text-sm">
                            Se você tem uma base sólida em programação, o Ignite vai te ajudar a dominar tecnologias alinhadas com o que o mercado precisa e te aproximar das melhores oportunidades da sua carreira.
                        </Text>
    
                        <Text className="text-[#a8a8b3] text-sm">
                            Através de uma metodologia prática, baseada nos pilares do foco, prática e grupo, você vai se preparar para os desafios do mundo real, além de desenvolver habilidades comportamentais para se destacar no mercado.
                        </Text>
                    </div>

                    <Button className="text-xs bg-[#00875f] text-white uppercase hover:bg-[#015F43] transition-colors w-fit px-6 py-4">
                        Garantir minha vaga
                    </Button>
                </div>

                <div className="w-1/2">
                    <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/62d027bcf19f9ebc3dbcd162_programmer-ignite.png" alt="Programador imagem" />
                </div>
            </section>

            <section>
                <div className="flex flex-col items-center gap-6">
                    <IgniteLogo />

                    <Text className="text-2xl font-black text-white">
                        O que você vai aprender
                    </Text>

                    <Text className="text-center text-sm text-[#a8a8b3] max-w-[607px]">
                        Como assinante do Ignite, você vai ter acesso imediato e ilimitado a todas as trilhas pra escolher a tecnologia mais alinhada com seu objetivo para se especializar.
                    </Text>
                </div>

                <div className="flex items-center justify-evenly">
                    <Text asChild className="text-2xl font-black text-white p-4">
                        <a href="">
                            ReactJS
                        </a>
                    </Text>

                    <Text asChild className="text-2xl font-black text-white p-4">
                        <a href="">
                            React Native
                        </a>
                    </Text>
                        
                    <Text asChild className="text-2xl font-black text-white p-4">
                        <a href="">
                            Node.JS
                        </a>
                    </Text>

                    <Text asChild className="text-2xl font-black text-white p-4">
                        <a href="">
                            Ignite Higher
                        </a>
                    </Text>
                </div>
            </section>
        </div>
    </div>
  )
}