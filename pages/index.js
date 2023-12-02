
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Stravel - Effective Travel Safe 🚀"
                description="Discover Stravel, the effortless way to plan your trips with the power of Stravel."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Облегченный поиск мероприятий 
                                и туров
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                Узнавайте обо всех мероприятиях в городе раньше всех, 
                                легко и просто
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Планируйте поездку и постройте свой маршрут!
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                 Бронируйте туры. Найдите отель. Посетите одну из достопримечательностей
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/iphone4.png"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                        Ваша Безопасность - Наш Приоритет!
                                        </CardHeader>
                                        <p>
                                        Для обеспечения безопасной и весёлой атмосферы 
                                        во время вашего путешествия, мы предоставляем 
                                        вам полную информацию о посещаемой местности
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/iphone5.png"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                           Нет Интернета? Не Беспокойтесь!
                                        </CardHeader>
                                        <p>
                                        Во время экстренных ситуаций вы сможете 
                                        воспользоваться функцией вызова помощи - SOS-кнопки. 
                                        Она поможет вам связаться с экстренными службами 
                                        в offline-режиме.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}

                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            
                        
                            
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Остались еще какие-то вопросы?{" "}
                                <br></br>
                                <br></br>Не волнуйтесь! Мы собрали подборку часто задаваемых вопросов и ответили на них!
                                
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
