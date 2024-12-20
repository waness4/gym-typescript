import ActionButton from "../../shared/ActionButton";
import HText from "../../shared/HText";
import { BenefitType, SelectedPage } from "../../shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Instalações de Última Geração",
    description:
      "Desfrute de um ambiente equipado com tecnologia de ponta, pensado para oferecer conforto, eficiência e segurança em cada treino."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Centenas de Aulas Diversificadas",
    description:
      "Explore uma ampla variedade de aulas que atendem a todos os níveis e objetivos, desde yoga relaxante até treinos intensos de alta performance."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Treinadores Especializados e Profissionais",
    description:
      "Conte com o suporte de especialistas dedicados, prontos para guiá-lo em sua jornada de fitness e garantir resultados consistentes."
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MAIS DO QUE APENAS UMA ACADEMIA.</HText>
          <p className="my-5 text-sm">
            Oferecemos equipamentos de fitness de classe mundial, treinadores especializados
            e aulas para ajudá-lo a alcançar seus objetivos de fitness com facilidade.
            Dedicamos um cuidado genuíno a cada um de nossos membros.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILHÕES DE MEMBROS SATISFEITOS ALCANÇANDO{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Na nossa academia, cada membro é parte de uma comunidade comprometida com a saúde e o bem-estar.
                Oferecemos um espaço acolhedor e motivador para que você se sinta inspirado a atingir seus objetivos.
                Desde o momento em que você entra, nosso time está disponível para oferecer suporte e encorajamento.
              </p>
              <p className="mb-5">
                Nossos treinos são projetados para desafiar e empoderar você, independente do seu nível de experiência.
                Seja para perder peso, ganhar massa muscular ou simplesmente melhorar a qualidade de vida, você encontrará
                as ferramentas e o suporte necessários para alcançar resultados reais.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Junte-se a nós
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;