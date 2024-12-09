import { useRef } from "react";
import { Card, Col, Form, Input, Row, Typography, Collapse } from "antd";
import { Button } from "../../components/Button";
import * as S from "./styles"
import Banner from "../../assets/images/integrationBanner.png";
import FormContact from "../../assets/images/formContact.png";
import {
  ApiOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function Home() {
  const solutionsRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  

  return (
    <S.Container>
      <S.Header>
        <S.Logo>NexusApi</S.Logo>
        <S.Menu>
          <S.MenuItem onClick={() => scrollToSection(solutionsRef)}>Soluções</S.MenuItem>
          <S.MenuItem onClick={() => scrollToSection(contactRef)}>Contato</S.MenuItem>
          <S.MenuItem onClick={() => scrollToSection(faqRef)}>Faq</S.MenuItem>
          <S.MenuItem onClick={() => scrollToSection(aboutRef)}>Sobre</S.MenuItem>
        </S.Menu>
        <S.ContainerButton>
          <Button
            type="secondary"
            width="120px"
          >
            Cadastre-se
          </Button>
          <Button
            width="120px"
          >
            Login
          </Button>
        </S.ContainerButton>
      </S.Header>
      <S.Content>
        <S.Divider />
        <S.Banner>
          <S.TextBanner>
            <Typography.Title level={1}>
              A solução definitiva para integrar e escalar o seu negócio
            </Typography.Title>
            <Typography.Text style={{ color: "var(--purple-primary)" }}>
            Simplifique seus processos, conecte sistemas de forma automática e acelere seus resultados.
            Elimine barreiras tecnológicas e potencialize a eficiência do seu negócio. Descubra uma
            solução inteligente, flexível e projetada para impulsionar o seu sucesso.
            </Typography.Text>
            <S.ContainerButtonBanner>
              <Button
                width="200px"
                onClick={() => scrollToSection(contactRef)}
              >
                Fale com um especialista
              </Button>
              <Button
                type="secondary"
                width="200px"
              >
                Solicite uma demo
              </Button>
            </S.ContainerButtonBanner>
          </S.TextBanner>
          <img src={Banner} className="bannerImg" />
        </S.Banner>
        <S.BoxInfo ref={solutionsRef}>
          <Typography.Title level={2} style={{ color: "#2D2B75" }}>
            Nossas Soluções
          </Typography.Title>
          <Typography.Text>
            Transformamos integrações complexas em soluções ágeis e escaláveis.
          </Typography.Text>
          <S.BoxCards>
            <Card>
              <S.ContainerBox>
                <ApiOutlined />
                <Typography.Title level={4}>
                  Developer Experience
                </Typography.Title>
                <Typography.Text>
                  Suporte personalizado aos consumidores de suas APIs.
                </Typography.Text>
              </S.ContainerBox>
            </Card>
            <Card>
              <S.ContainerBox>
                <AppstoreAddOutlined />
                <Typography.Title level={4}>
                  Conexão Simplificada com Múltiplos Sistemas
                </Typography.Title>
                <Typography.Text>
                  Integre facilmente seu e-commerce com marketplaces, ERPs, CRMs, sistemas de
                  logística e outros serviços essenciais.
                </Typography.Text>
              </S.ContainerBox>
            </Card>
            <Card>
              <S.ContainerBox>
                <SettingOutlined />
                <Typography.Title level={4}>
                  Flexibilidade e Escalabilidade
                </Typography.Title>
                <Typography.Text>
                  Adapte-se facilmente ao crescimento do seu negócio, integrando novos
                  serviços ou ampliando os fluxos existentes.
                </Typography.Text>
              </S.ContainerBox>
            </Card>
          </S.BoxCards>
        </S.BoxInfo>
        <S.ContainerForm ref={contactRef}>
          <img src={FormContact} className="bannerImg" />
          <S.FormWrapper>
            <Form layout="vertical">
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    name="nome"
                    rules={[{ required: true, message: "Por favor, insira seu nome" }]}
                  >
                    <Input placeholder="Nome" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="sobrenome"
                    rules={[{ required: true, message: "Por favor, insira seu sobrenome" }]}
                  >
                    <Input placeholder="Sobrenome" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Por favor, insira seu e-mail" },
                      { type: "email", message: "Insira um e-mail válido" },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="telefone"
                    rules={[{ required: true, message: "Por favor, insira seu telefone" }]}
                  >
                    <Input placeholder="Telefone" maxLength={15} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="nome_empresa"
                    rules={[{ required: true, message: "Por favor, insira o nome da empresa" }]}
                  >
                    <Input placeholder="Nome da empresa" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="cnpj"
                    rules={[{ required: true, message: "Por favor, insira o CNPJ" }]}
                  >
                    <Input placeholder="CNPJ" maxLength={18} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="mensagem">
                    <Input.TextArea
                      rows={4}
                      placeholder="Escreva sua mensagem ou perguntas aqui"
                      className="antTextArea"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <S.ButtonForm>
                  <Button width="180px" htmlType="submit">
                    Enviar
                  </Button>
                </S.ButtonForm>
              </Form.Item>
            </Form>
          </S.FormWrapper>
        </S.ContainerForm>
        <S.Faq ref={faqRef}>
          <S.ContainerLeft>
            <Typography.Title level={1}>
              Dúvidas frequentes
            </Typography.Title>
            <Typography.Text>
              Encontre aqui as respostas para as dúvidas mais comuns sobre nossos serviços.
            </Typography.Text>
            <S.BoxButton>
              <Button
                width="180px"
                onClick={() => scrollToSection(contactRef)}
              >
                Contate nossa equipe
              </Button>
            </S.BoxButton>
          </S.ContainerLeft>
          <S.ContainerRight>
            <Collapse
              size="large"
              className="antdCollapse"
              bordered={false}
              items={[{
                key: '1',
                label: 'Como a plataforma funciona?',
                children: <p>
                  Nossa plataforma serve como um gateway de integração, conectando seu
                  e-commerce a diversos sistemas, como marketplaces, ERPs, CRMs e outros
                  serviços essenciais. Automatizamos os fluxos de dados, reduzindo a
                  complexidade técnica e otimizando processos operacionais.
                </p>
              }]}
            />
            <Collapse
              size="large"
              className="antdCollapse"
              bordered={false}
              items={[{
                key: '1',
                label: 'Preciso de conhecimento técnico para usar a solução?',
                children: <p>
                  Não! Nossa plataforma foi projetada para ser simples e intuitiva.
                  Mesmo sem experiência técnica, você pode realizar integrações de
                  forma fácil. Para os desenvolvedores, oferecemos suporte técnico
                  e documentação detalhada.
                </p>
              }]}
            />
            <Collapse
              size="large"
              className="antdCollapse"
              bordered={false}
              items={[{
                key: '1',
                label: 'Quais sistemas posso integrar?',
                children: <p>
                  É possível integrar uma ampla variedade de sistemas, como marketplaces,
                  ERPs, CRMs, plataformas de logística, sistemas de pagamento e outros
                  serviços essenciais para o seu e-commerce.
                </p>
              }]}
            />
            <Collapse
              size="large"
              className="antdCollapse"
              bordered={false}
              items={[{
                key: '1',
                label: 'Como funciona o suporte técnico?',
                children: <p>
                  Oferecemos suporte personalizado para ajudar você em todas as etapas,
                  desde a configuração inicial até a resolução de problemas durante
                  o uso. Nossa equipe está sempre disponível para garantir sua tranquilidade.
                </p>
              }]}
            />
            <Collapse
              size="large"
              className="antdCollapse"
              bordered={false}
              items={[{
                key: '1',
                label: 'A plataforma suporta crescimento do meu negócio?',
                children: <p>
                  Sim! Nossa solução é altamente escalável, permitindo
                  adicionar novos sistemas e expandir os fluxos existentes
                  conforme as necessidades do seu negócio evoluem.
                </p>
              }]}
            />
          </S.ContainerRight>
        </S.Faq>
      </S.Content>
      <S.Footer ref={aboutRef}>
        <S.Newsletter>
          <S.BoxNewsletter>
            <Typography.Title level={4} color="var(--white)">
            Assine nossa newsletter
            </Typography.Title>
            <Typography.Text>
              Facilidade para conferir as últimas informações sobre integrações, APIs e Microsserviços
            </Typography.Text>
          </S.BoxNewsletter>
          <Form layout="vertical">
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  name="nome"
                  label="Nome"
                  rules={[{ required: true, message: "Por favor, insira seu nome" }]}
                >
                  <Input className="antdInput" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    { required: true, message: "Por favor, insira seu e-mail" },
                    { type: "email", message: "Insira um e-mail válido" },
                  ]}
                >
                  <Input className="antdInput" />
                </Form.Item>
              </Col>  
            </Row>
            <Form.Item>
              <S.ButtonForm>
                <Button width="120px" htmlType="submit">
                  Enviar
                </Button>
              </S.ButtonForm>
            </Form.Item>
          </Form>
        </S.Newsletter>
        <S.DividerFooter />
        <S.BoxFooter>
          <S.BoxFooterLeft>
            <S.BoxFooterItem>
              <Typography.Title level={4}>Serviços</Typography.Title>
              <Link to="/">
                <Typography.Text>Expert Services</Typography.Text>
              </Link>
              <Link to="/">
                <Typography.Text>Developer Experience</Typography.Text>
              </Link>
              <Link to="/">
                <Typography.Text>Customer Success</Typography.Text>
              </Link>
            </S.BoxFooterItem>
            <S.BoxFooterItem>
              <Typography.Title level={4}>NexusApi</Typography.Title>
              <Link to="/">
                <Typography.Text>Sobre nós</Typography.Text>
              </Link>
              <Link to="/">
                <Typography.Text>Política de privacidade</Typography.Text>
              </Link>
            </S.BoxFooterItem>
            <S.BoxFooterItem>
              <Typography.Title level={4}>Sou cliente</Typography.Title>
              <Link to="/">
                <Typography.Text>Login</Typography.Text>
              </Link>
              <Link to="/">
                <Typography.Text>Registre-se</Typography.Text>
              </Link>
              <Link to="/">
                <Typography.Text>Faq</Typography.Text>
              </Link>
            </S.BoxFooterItem>
          </S.BoxFooterLeft>
          <S.BoxFooterRight>
            <S.SocialMedia>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramOutlined /></a>
            </S.SocialMedia>
            <Typography.Text>
              Tv. São José, 455 - Navegantes, Porto Alegre - RS, 90240-200
            </Typography.Text>
          </S.BoxFooterRight>
        </S.BoxFooter>
      </S.Footer>
    </S.Container>
  );
};