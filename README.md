UNIVERSITATEA DE STAT DIN MOLDOVA 

FACULTATEA „MATEMATICĂ ŞI INFORMATICĂ” 

DEPARTAMENTUL “INFORMATICĂ” 

  

 

Grajdian Cristian 

  

Lucrul individual 

 la disciplina „HTML, CSS” moldovaInfo 

 

 

 

 

 

 

 

Coordonator ştiinţific: N. Pleșca, profesoară 

Autorul: Grajdian Cristian 

  

 

 

 

 

 

Chişinău - 2024 

 

​​ 

​ 

​ 

​ 

​ 

​ 

​​ 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

Descrierea domeniului/problemei 

Site-ul, realizat ca exemplu în cadrul acestei lucrări, va avea un nivel de complexitate medie și va conține informații generale, care nu reflectă în mod obligatoriu opiniile autorilor. Accentul se va pune pe organizarea logică a conținutului, pe accesibilitatea acestuia pe diverse dispozitive și pe experiența utilizatorilor, indiferent de dimensiunea ecranului. 

Tema abordată de site-ul-exemplu va fi Republica Moldova, având ca scop informarea utilizatorilor despre această țară, oferind detalii interesante și relevante. Site-ul va prezenta informații despre populația Moldovei, suprafața și vecinii săi, dar și despre capitala Chișinău. De asemenea, vor fi incluse detalii despre tradiții, curiozități locale, aspecte istorice și alte subiecte care definesc unicitatea țării noastre. 

Astfel, se propune crearea unui site informativ, care să fie util atât pentru cetățenii moldoveni interesați să-și cunoască mai bine țara, cât și pentru utilizatorii din alte părți ale lumii. Scopul site-ului este de a promova Republica Moldova, de a evidenția bogăția culturală, tradițiile și frumusețea sa istorică, contribuind la o mai bună înțelegere și apreciere a identității naționale. 

 

Adunarea informaţiilor necesare generării conţinutului site-ului şi evidenţierea potenţialilor utilizatori ai site-ului 

Informațiile și imaginile utilizate în paginile site-ului vor fi preluate din mediul web. Potențialii utilizatori ai site-ului ar putea fi persoanele care sunt interesate de informații legate de țara noastră. Astfel, pentru preluarea imaginilor se va opta pentru site-urile care oferă imagini calitative gratuit. Pentru site-ul creat în această lucrare a fost aleasă combinația de culori, formată din galben care reflecta textura hartiei șifonate si vechi (ziar) cu negru pentru a reflecta un stil de pagina care sa semene cu un ziar. 

 

 

Structurarea fișierelor proiectului web. 

La realizarea acestui proiect am structurat fisierele in felul urmator: (vezi pe pagina urmatoare) 
Dat fiind faptul ca acest proiect a fost creat utilziand express ejs, structura lui este un pic mai diferita decat la un proiect vanilla, dar pentru a crea paginile html s-a utilizat un folder ./view unde home.ejs este pagina principala iar ce este in ./view/pagini sunt paginile din meniu. Pentru stiluri am utilizat un folder ./public/css, iar pentru poze ./public/imagini. Restu fisierelor din celelalte foldere sunt pentru a crea rutere si alte elemente pentru putea rula proiectul in express. 
PS: Aici nu avem un index.html sau main.html, dar el poate fi vazut ca si home.ejs. 
Pentru mai multe informatii aici 

 

Descrierea paginilor site-ului web 

Site-ul o sa fie format din pagina principala (home) si inca 5 pagini aditionale. 

Pagina principala o sa fie impartita in 3 parti care o sa se-si schimbe pozitia in functie de dimensiunea paginii. Schimbarile o sa fie facute in 3 moduri diferite pentru a satisaface experienta unui utilizator de pe orice dispozitiv. Site-ul este unul informativ deci o sa se bazeze doar pe imagini si text cu un design interesant: Pagina principala in toate dimensiunile sale o sa fie afisate in paginile urmatoare.  
Avand in vedere ca acest website nu este unul obisnuit si este facut intr-un stil de ziar sau gazeta. Am luat decizia de a include meniul in parte dreapta sau partea de jos in versiunea mobile deoarece acel meniu introduce informatii aditionale (alte informatii) si ar fi mai logic sa se afle in acea pozitie si nu sus cum este normal intr-un web site. De asemenea pentru a pastra autenticitatea site-ului footerul a fost introdus foarte subtil sub meniu pentru a nu deranja designul acestui site. Chiar daca elementele acestui site nu apar in modul standard care este acceptat de designerii UI/UX, nu uitati ca el a fost facut in acest mod intentionat pentru a adapta designul la cerintele lui, facandul in acest mod mai unic datorita designului straniu, dar logic. Meniul include 5 pagini cu informatii aditionale, pe fiecare pagina exista posibilitatea de a te intoarce inapoi printr-o sageata adaugata cu pozitie fixata in partea de sus in stanga, astfel un utilizator nu este rupt din ciclu site-ului si are posibiltatea sa sara de pe o pagina pe alta foarte usor. 
 

 

 

 

Senzitivitatea conținuturilor paginilor site-ului web 

Pentru toate paginile s-au utilizat toate meta-urile standard care o sa fie listate mai jos: 

<meta charset="UTF-8"> 

<meta http-equiv="X-UA-Compatible" content="IE=edge"> 

<meta name="viewport" content="width=device-width, initial-scale=1.0"> 

<meta > 

<title>Acasă</title> 

<meta name="description" content="Un site despre moldova" /> 

<meta name="keywords" content="moldiva, website, informatii" /> 

<meta name="author" content="Grajdian Cristian" /> 

 

 

Verificarea corectitudinii scrierii codurilor HTML 

Pentru a verifica dacă a fost scris corect codul HTML în cele patru documente web ale site-ului, se recomandă a fi utilizat un validator online, precum, de exemplu https://validator.w3.org/. 

 

 

Concluzii 

Avantajul pentru pentru un developer pentru a crea un asemenea site este pentru a te abate de la standardul care iti este impus si pentru a-ti utiliza creativitate si imaginatia asa cum iti place. Cat pentru utilizatori este pentru a se informa legat de tara in care traim. 

 

 

 

Referinţe în Internet:  

https://www.w3schools.com 

https://www.javascript.com/ 

https://www.codecademy.com/courses/web-beginner-en-HZA3b/0/1 

https://w3c.github.io/html/ 

https://www.intuit.ru/studies/courses/3734/976/lecture/27460 
