document.addEventListener('DOMContentLoaded', function() {

      let params = extract()
      let len = Object.keys(params).length

      data = {
        "Computação": {
          "Projeto Final de Ciência dos Dados": {
            "conhecimentos": {
              "Conhecimentos Computacionais": ["Programação em Python", "Biblioteca Pandas"],
              "Conhecimentos Matemáticos": ["Estatística", "Cálculo de probabilidades"]
            },
            "habilidades": ["Análise de dados", "Desenvolvimento da biblioteca Pandas"],
            "objetivo": "O projeto consiste em criar um programa que analisa dados autonomamente, gerar um classificador Naive-Bayes que recebe um grupo de tweets e retorna eles devidamente classificados.",
            "semestre": "2"
          },
          "Projeto Final de Co-Design de Aplicativos": {
            "conhecimentos": {
              "Conhecimentos Computacionais": ["JavaScript", "HTML", "CSS"]
            },
            "habilidades": ["Gerar designs acessíveis", "Designs centrados"],
            "objetivo": "O projeto consiste no desenvolvimento de um aplicativo centrado no usuário.",
            "semestre": "2"
          },
          "Projeto Final de Design de Software": {
            "conhecimentos": {
              "Conhecimentos Computacionais": ["Programação em Python"],
              "Conhecimentos Físicos e Matemáticos": ["Operadores básicos", "Operadores lógicos"]
            },
            "habilidades": ["Desenvolvimento da biblioteca PyGame", "Desenvolvimento da biblioteca Tkinter", "Desenvolvimento da biblioteca Flask", "Introdução à orientação de objetos"],
            "objetivo": "O projeto consiste em desenvolver um jogo ou projeto a parte (por exemplo, um site ou programa), desde que envolva alguma forma de programação em Python.",
            "semestre": "1"
          }
        },
        "Design e Produção": {
          "Girafa do Job Rotation": {
            "conhecimentos": {
              "Conhecimentos Computacionais": ["Fusion 360", "Operação das Maquinas do FabLab"],
              "Conhecimentos Físicos e Matemáticos": ["Desenho Técnico"]
            },
            "habilidades": ["Prototipagem", "Técnicas de Fabricação Digital (CAM)", "Desenho Assistido por Computador (CAD)"],
            "objetivo": "Esse projeto consiste em fazer uma Girafa de Madeira a partir de varios processos de fabricação no FabLab, conhecendo assim os maquinários disponíveis para o uso durante a graduação.",
            "semestre": "1"
          },
          "Melhoria para carroças de catadores": {
            "conhecimentos": {
              "Conhecimentos Computacionais": ["Fusion 360", "Operação das Maquinas do FabLab"],
              "Conhecimentos Físicos e Matemáticos": ["Desenho Técnico"]
            },
            "habilidades": ["Design Centrado no Usuário", "Fundamentos de Design para Engenharia", "Desenho Técnico não Instrumentado"],
            "objetivo": "O projeto consiste em propor alterações para carroças baseando-se nas opinões dos carroceiros, das quais algumas foram implementadas em três carroças selecionadas.",
            "semestre": "1"
          }
        },
        "Eletrônica": {
          "Estação Metereológica": {
            "conhecimentos": {
              "Conhecimentos Auxiliares": ["Operação das Maquinas do FabLab"],
              "Conhecimentos Computacionais": ["Programação em C"]
            },
            "habilidades": ["Técnicas de Fabricação Digital (CAM)", "Desenho Assistido por Computador (CAD)"],
            "objetivo": "O projeto consiste em montar uma estação metereológica. O aluno deve construí-la a partir do zero, construindo tanto a placa utilizada como o sistema com seus sensores.",
            "semestre": "1"
          },
          "Projeto Final de Acionamentos Elétricos": {
            "conhecimentos": {
              "Conhecimentos Computacionais": ["Python", "CircuitLab"],
              "Conhecimentos Eletrônicos": ["Conhecimentos sobre componentes eletrônicos como resistores e Analog"],
              "Conhecimentos Físicos e Matemáticos": ["Cálculo aprofundado de eletrônica (potência elétrica, corrente)"]
            },
            "habilidades": ["Cálculo eletrônico", "Montar modelos eletrônicos fisicamente"],
            "objetivo": "O projeto consiste em criar um sistema eletrônico e montá-lo fisicamente. O projeto deve possuir como objetivo algo que pode ser aplicado na prática.",
            "semestre": "2"
          },
          "Projeto Final de Modelagem e Controle": {
            "conhecimentos": {
              "Conhecimentos Auxiliares": ["Desenho Técnico"],
              "Conhecimentos Computacionais": ["Arduino", "Operação das Máquinas do FabLab"]
            },
            "habilidades": ["Prototipagem", "Técnicas de Fabricação Digital (CAM)", "Fundamentos de Design para Engenharia"],
            "objetivo": "O projeto consiste em construir o seu robô auto-equilibrante.",
            "semestre": "4"
          }
        },
        "Inovação": {
          "Cases de Grandes Desafios de Engenharia": {
            "conhecimentos": {
              "Conhecimentos Computacionais": ["Word", "Powerpoint"]
            },
            "habilidades": ["Realizar textos melhormente estruturados e formais", "Apresentação em grupo", "Leituras de textos que auxiliam o aluno a desenvolver pensamento crítico."],
            "objetivo": "Os cases dessa matéria possuem o objetivo de 'abrir' as cabeças dos estudantes, fazer com que pensem de um novo jeito e se acostumem a tentar pensar em todos os pontos de vista em relação a assuntos diversos.",
            "semestre": "1"
          },
          "Inovação incremental para empresa existente": {
            "conhecimentos": {
              "Conhecimentos Computacionais": ["Word", "Powerpoint"],
              "Conhecimentos Físicos e Matemáticos": ["Empreendorismo"]
            },
            "habilidades": ["Brainstorming"],
            "objetivo": "O projeto consiste em analisar um produto de uma empresa existente e a partir dele desenvolver um produto incrementado e desenvolvido.",
            "semestre": "4"
          },
          "Modelo de negócio para startup nova": {
            "conhecimentos": {
              "Conhecimentos Computacionais": ["Google", "Word", "Excel"]
            },
            "habilidades": ["Possuir um pensamento aberto", "Saber realizar pesquisas sobre o seu produto e serviço"],
            "objetivo": "O projeto dessa materia consiste em criar e desenvolver um modelo de negócio para uma startup nova, como exemplo o aluno deve criar um modelo pensando quem seria seu cliente, como está fazendo seu negócio e quanto esta gastanto e lucrando.",
            "semestre": "4"
          }
        },
        "Matemática": {
          "Projeto Final de Matemática Multivariada": {
            "conhecimentos": {
              "Conhecimentos Computacionais": ["Geogebra"],
              "Conhecimentos Físicos e Matemáticos": ["Técnicas de derivação", "Técnicas de integração"]
            },
            "habilidades": ["Explicar o estudo e o tema de forma clara e precisa para as pessoas"],
            "objetivo": "O projeto consiste em estudar um tema e apresentá-lo para as pessoas.",
            "semestre": "3"
          },
          "Projeto Final de Matemática da Variação": {
            "conhecimentos": {
              "Conhecimentos Computacionais": ["Geogebra"],
              "Conhecimentos Matemáticos": ["Técnicas de derivação", "Técnicas de integração", "Equações Diferenciais"]
            },
            "habilidades": ["Explicar temas de forma clara e precisa"],
            "objetivo": "O projeto consiste em elaborar um tema não abordado em sala de modo a apresentá-lo em uma aula.",
            "semestre": "2"
          },
          "Projeto Final de Modelagem e Simulação": {
            "conhecimentos": {
              "Conhecimentos Computacionais": ["Python", "Jupyter Notebook", "Matplotlib", "SciPy", "NumPy"],
              "Conhecimentos Físicos e Matemáticos": ["Segunda Lei de Newton", "Energia Potencial/Cinética", "Derivada", "Derivada de Segunda Ordem"]
            },
            "habilidades": ["Elaboração de um Diagrama de Corpo Livre", "Análise do comportamento de um corpo físico em três eixos", "Elaboração de gráfico tridimensional", "Animações em Python", "Aprofundamento em bibliotecas do Python"],
            "objetivo": "O projeto consiste em elaborar uma pergunta sobre a modelagem de um corpo livre e, com base nessa pergunta, elaborar um estudo aprofundado e uma conclusão para a pergunta.",
            "semestre": "1"
          }
        },
        "Materiais": {
          "Projeto Final de Desconstruindo a Matéria": {
            "conhecimentos": {
              "Conhecimentos Físicos": ["Diagrama de forças"],
              "Conhecimentos Químicos": ["Estruturas cristalinas", "Tensão de cisalhamento", "Materiais cerâmicos, metálicos e poliméricos."]
            },
            "habilidades": ["Teste de resistência", "Cálculo da tensão"],
            "objetivo": "O projeto consiste em um estudo de materiais, de modo a determinar o material mais adequado para, por exemplo, uma construção ou produto.",
            "semestre": "3"
          }
        }
      }

      if (len) {
        mat = data[params['category']][params['course']]
        replace('body', {
          'name': params['course'],
          'semestre': mat['semestre'],
          'objetivo': mat['objetivo'],

          'conhecimentos': mat['conhecimentos'],
          'habilidades': mat['habilidades'],
          'category': data
        })
        replace('head', {
          'name': params['course']
        })
      } else {

        replace('body', {
          'category': data
        })
        replace('head', {
          'name': "INSPER"
        })

      }}
    )
