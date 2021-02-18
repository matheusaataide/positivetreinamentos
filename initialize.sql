/* USUÁRIOS */
INSERT INTO `positive`.`users` (`username`, `name`, `email`, `password`, `created_at`, `updated_at`)
VALUES ('rafael', 'Rafael Barbosa', 'rafael@email.com', 'positive.rb', now(), now()),
	('patricia', 'Patrícia Carvalho', 'patricia@email.com', 'positive.pc', now(), now());
INSERT INTO `positive`.`graduations` (`content`, `created_at`, `updated_at`, `user_id`)
VALUES ('Esposo da Patrícia', now(), now(), 1),
	('Pai da Alícia e da Lavínia', now(), now(), 1),
    ('Administrador de Empresas com MBA em Gestão Comercial e Inteligência de Mercado', now(), now(), 1),
	('Practitioner em Programação Neurolinguística', now(), now(),1),
    ('Professional & Self Coach', now(), now(),1),
    ('Treinador Comportamental', now(), now(),1),
    ('Especialista em Inteligência Emocional (SBIE)', now(), now(), 1),
    ('MBA Executivo em Gestão Comercial & Inteligência de Mercado. (IPOG)', now(), now(), 1),
    ('Esposa do Rafael', now(), now(), 2),
	('Mãe da Alícia e da Lavínia', now(), now(), 2),
    ('Administradora de Empresas com MBA em Gestão Empresarial, Gestão de Projetos, Finanças Corporativas e Gestão de Pessoas com Coaching', now(), now(), 2),
	('Master Practitioner em Programação Neurolinguística (INEXH)', now(), now(),2),
    ('Consteladora Sistêmica Integrativa (IBC)', now(), now(),2),
    ('Treinadora Comportamental (IFT)', now(), now(),2),
    ('Master Coach (IBC) para Pais, Adolescentes e Escolar (Parent Coaching)', now(), now(), 2),
    ('Especialista em Inteligência Emocional (SBIE)', now(), now(), 2),
    ('Educadora para Pais, Professores, Escolas e Empresas em Disciplina Positiva pela PDA (USA)', now(), now(), 2),
    ('Consultora em Encorajamento (Lynn Lott)', now(), now(), 2);

/* EVENTOS */
INSERT INTO `positive`.`transformations` (`title`, `content`, `status`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`)
VALUES ('Treinamento Positive Family', '', true, now(), now(), 2, 2),
        ('Disciplina Positiva para Pais', '', true, now(), now(), 2, 2),
        ('Disciplina Positiva para Casais', '', true, now(), now(), 2, 2),
        ('Disciplina Positiva para Ambiente Escolar', '', true, now(), now(), 2, 2),
        ('Disciplina Positiva para Professores', '', true, now(), now(), 2, 2);
INSERT INTO `positive`.`courses` (`title`, `url`, `local`, `status`, `img`, `date`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`, `transformation_id`, `content`)
VALUES ('Workshop de Disciplina Positiva para Professores', '', 'Plataforma Zoom', true, 'disciplinapositiva-professores.jpg', now(), now(), now(), 2, 2, 5, '<p> <b style="text-transform: uppercase;">Workshop indicado para:</b> Professores, Coordenadores, Diretores de escola e pessoas que busquem conhecer a Disciplina Positiva para Professores. </p><p>Disciplina Positiva é uma abordagem desenvolvida pela <b>Dra. Jane Nelsen</b>, que se baseia em princípios não punitivos que ajudam as crianças, jovens e adultos a desenvolver cooperação, resolução de problemas, autodisciplina e responsabilidade. As ferramentas utilizadas são muito práticas e podem ser usadas no dia a dia em qualquer situação. Hoje já é aplicada com crianças, adolescentes, adultos, professores, escolas, empresas e está presente em mais de 60 países. </p><p> A Disciplina Positiva atua na aplicação do equilíbrio entre firmeza e gentileza, pois é percebido algumas dificuldades quando tendemos a ir mais para um lado ou outro. A Disciplina Positiva possui os seguintes critérios: </p><ul> <li>Respeito mútuo;</li><li>Desenvolve senso de aceitação e importância;</li><li>É efetiva a longo prazo;</li><li>Ensina habilidades sociais e de vida;</li><li>Nos incentiva a descobrir capacidades e poder pessoal.</li></ul> <p></p><p> Como podemos fazer para manter o aluno participativo e atento às aulas? Como contribuir com o desenvolvimento de habilidades sociais e de vida de crianças e jovens? Como conseguir cooperação da turma de forma que não seja autoritária ou permissiva? Como agir de maneira firme e respeitosa ao mesmo tempo? </p><p> Em nossos workshops oferecemos aos participantes oportunidades e ferramentas para melhor a comunicação com seus alunos, construir relacionamentos mais saudáveis, entender as crenças que influenciam o mau comportamento da criança e jovem, encorajando a atitudes e mudanças positiva, além do desenvolvimento de habilidades de autocontrole, responsabilidade, respeito às adversidades e habilidades para resolver problemas. Os participantes irão aprender como liderar reuniões de classes efetivas onde o foco na resolução de problemas direcionam ações que transformam o ambiente de sala de aula e escola. </p></div>'),
        ('Workshop de Disciplina Positiva para Professores', '', 'Plataforma Zoom', true, 'para-pais.png', now(), now(), now(), 2, 2, 2, '<p> <b style="text-transform: uppercase;">Workshop indicado para:</b> Pais, mães, avós, profissionais da educação e todas as pessoas que tenham interesse em conhecer e desenvolver uma comunicação e educação positiva. </p><p> Como podemos contribuir com o desenvolvimento de habilidades sociais e de vida de nossos filhos? Como agir de maneira firme e respeitosa ao mesmo tempo? </p><p> Em nossos workshops oferecemos aos participantes oportunidades e ferramentas para melhor a comunicação com seus filhos, construir relacionamentos mais saudáveis, entender as crenças que influenciam o mau comportamento da criança. </p><p>Disciplina Positiva é uma abordagem desenvolvida pela <b>Dra. Jane Nelsen</b>, que se baseia em princípios não punitivos que ajudam as crianças, jovens e adultos a desenvolver cooperação, resolução de problemas, autodisciplina e responsabilidade. As ferramentas utilizadas são muito práticas e podem ser usadas no dia a dia em qualquer situação. Hoje já é aplicada com crianças, adolescentes, adultos, professores, escolas, empresas e está presente em mais de 60 países. </p><p> A Disciplina Positiva atua na aplicação do equilíbrio entre firmeza e gentileza, pois é percebido algumas dificuldades quando tendemos a ir mais para um lado ou outro. A Disciplina Positiva possui os seguintes critérios: </p><ul> <li>Respeito mútuo;</li><li>Desenvolve senso de aceitação e importância;</li><li>É efetiva a longo prazo;</li><li>Ensina habilidades sociais e de vida;</li><li>Nos incentiva a descobrir capacidades e poder pessoal.</li></ul>');

/* POSTS */
INSERT INTO `positive`.`posts` (`title`, `content`, `status`, `img`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`)
VALUES ('Qual a medida certa entre tecnologia e educação?', '<p class="mt-3 text-justify">Existe um tempo de uso ideal para celulares e jogos, como definir isso?</p>
                        <p>Como é difícil controlar o uso das telas, seja com crianças, adolescentes e até mesmo conosco, não é mesmo?
                       </p><p>                
                        Segundo a Academia Americana de Pediatria, para crianças menores de 18 meses deve ser evitado o uso de telas, que sejam diferentes de bate-pai por vídeo ou chamadas por vídeo com parentes que moram longe, onde o objetivo é promover interação.
                       </p><p>
                        Já para as crianças de 2 a 5 anos, o uso deve ser limitado a uma hora por dia e com programas de qualidade, sempre com supervisão dos pais.
                       </p><p>
                        Para as crianças maiores de 6 anos é importante estabelecer limites para o tempo gasto com as mídias, para que seja preservado o tempo adequado de sono, atividade física e outros comportamentos essenciais à saúde, como por exemplo, refeições em família.
                       </p><p>
                        Que tal definir, junto com seu filho, o calendário de atividades dele da semana?
                        Dessa forma, vocês podem organizar as atividades que ele irá fazer, bem como, o tempo de cada atividade para que consiga manter o equilíbrio entre tela, atividades físicas, tempo de sono e tempo em família, por exemplo.
                       </p>', true, './img/posts/post1.png', now(), now(), 2, 2),
        ('Que tal repensar o cantinho do pensamento?', '<p class="mt-3 text-justify">Como é comum ouvirmos falar que pais e até mesmo professores utilizam o cantinho do pensamento para reflexão da criança que fez algo “errado”, não é verdade?
                       </p><p>
                        O que acontece é que quando uma criança é direcionada para o chamado Cantinho do Pensamento, ao invés de refletir sobre o que aconteceu e sobre o que poderia melhorar, ela começa a se culpar pelo que fez, pensar que é uma criança incapaz de fazer as coisas certas, que ninguém gosta de ficar com ela, especialmente quanto pratica algo considerado errado.
                        <br>Esse cantinho é tratado como um castigo, lá as crianças vão se sentir mal pelo que fizeram e não como um local propício para a criança buscar melhoria em seu comportamento futuro. Seu filho vai se sentir inseguro, incompreendido, vai afastar o vínculo que você tem com ele.
                   </p><p>
                        E qual seria a melhora alternativa para os episódios de mau comportamento?
                        <br>O ideal é criar um local, junto com seu filho, em um momento em que estejam todos bem, vocês darem o nome que mais gostarem, como: Cantinho da calma, da paz, do relaxamento.</p>', true, './img/posts/post3.jpeg', now(), now(), 2, 2),
        ('Por que o cantinho do pensamento não é a melhor opção?',
                '<p class="mt-3 text-justify">Como é comum ouvirmos falar que pais e até mesmo professores utilizam o cantinho do pensamento para reflexão da criança que fez algo “errado”, não é verdade?
                       </p><p>
                        O que acontece é que quando uma criança é direcionada para o chamado Cantinho do Pensamento, ao invés de refletir sobre o que aconteceu e sobre o que poderia melhorar, ela começa a se culpar pelo que fez, pensar que é uma criança incapaz de fazer as coisas certas, que ninguém gosta de ficar com ela, especialmente quanto pratica algo considerado errado.
                        <br>Esse cantinho é tratado como um castigo, lá as crianças vão se sentir mal pelo que fizeram e não como um local propício para a criança buscar melhoria em seu comportamento futuro. Seu filho vai se sentir inseguro, incompreendido, vai afastar o vínculo que você tem com ele.
                   </p><p>
                        E qual seria a melhora alternativa para os episódios de mau comportamento?
                        <br>O ideal é criar um local, junto com seu filho, em um momento em que estejam todos bem, vocês darem o nome que mais gostarem, como: Cantinho da calma, da paz, do relaxamento.</p>', true, './img/posts/post2.jpeg', now(), now(), 2, 2);


/* SEÇÕES*/
INSERT INTO `positive`.`sections` (`section_name`, `key`, `value`, `status`, `created_at`, `updated_at`, `updated_by_id`)
VALUES ('we-believe', 'img', './img/photos/rafael-e-patricia.jpg', true, now(), now(), 2),
	   ('we-believe', 'title', 'Desenvolvimento pessoal e familiar', true, now(), now(), 2),
	   ('we-believe', 'text', '<p>Nós acreditamos que os pais são os maiores pilares emocionais e maiores incentivadores na educação de seus filhos e quando essa relação não se desenvolve bem, é preciso intervir para que o equilíbrio volte a prevalecer na família. Algumas vezes os pais não conseguem esse resultado sozinhos e buscam meios para resolver conflitos, melhorar a comunicação e ter práticas parentais mais positivas.</p><p>As escolas, por sua vez, ao utilizar abordagens de Disciplina Positiva e Coaching em todos os níveis da instituição, direção, coordenação e professores, estarão trabalhando seu autodesenvolvimento e vivendo uma abordagem de respeito entre escola, alunos e pais. Dessa forma, melhorando as habilidades sociais, emocionais e pensamento positivo de seus alunos, colaboradores e responsáveis.</p>',true, now(), now(), 2),
       ('intro', 'img', './img/photos/familia-positive.jpg', true, now(), now(), 2),
	   ('intro', 'text', '<p class="p-large">Estamos completamente comprometidos em construir, junto com você, famílias mais estruturada e relacionamentos mais próximos entre pais, filhos e escola, criando ambientes mais 
								harmoniosos e encorajadores, e assim, uma sociedade melhor e mais positiva.
							</p>', true, now(), now(), 2),
	   ('intro', 'title', '<span class="turquoise">Conhecimento</span> e <span class="turquoise">transformação</span><br />para vida toda!',
       true, now(), now(), 2),
       ('our-story', 'text', '<p>A Positive Treinamentos surgiu com  ideias do casal Rafael e Patrícia, que,
                                     por possuírem seus maiores valores voltados para a Família, oferecem
                                     um trabalho de desenvolvimento pessoal com pais, casais, jovens e escolas.
                                </p>
                                <p>Sempre trabalhando na área empresarial, percebemos a necessidade que
                                     muitas pessoas possuem de melhorar o seu relacionamento familiar, 
                                     onde muitas vezes, por estarem em conflitos com família, 
                                     dificuldade de lidar com filhos, escola, profissionais muito bons
                                      e competentes não conseguiam ser produtivos e não desempenhavam 
                                      seus papéis como gostariam.
                                </p>
                                <p>Entendemos a necessidade de nos atualizarmos sempre no âmbito profissional e acreditamos que a família é a base para nossa vida e nosso relacionamento, com isso precisamos estar conectados, em harmonia e realizados no segmento familiar para estarmos mais preparados e termos sucessos nos negócios.</p>
                                <p>A escola é a segunda casa de nossos filhos e é imprescindível que ela seja um ambiente agradável, respeitoso e encorajador, além de ser responsável pela educação e produção de conhecimentos que levarão as crianças e jovens para a preparação profissional e para a vida.</p>
                            ',
       true, now(), now(), 2)
       