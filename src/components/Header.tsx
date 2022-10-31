import { Button, IgniteLogo, Text } from "../components"

export const Header = () => {
    return (
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
    )
}