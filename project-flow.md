# Projekto eiga

## Bendrinis projekto aptarimas:

- Frontend projektas su pavyzdiniais duomenimis, kuriuos imsime iš susikurtų JSON failų asinchroniško JavaScript’o būdu (fetch(), async, await).
- Bendravimas Github’e atliekamas anglų kalba, Discord’e lietuvių.
- Kada darom susitikimus darbams aptarti? Reikia nuspręsti bendrai visiems. Siūlau daryti rytinius stand-up’us, kaip siūlė Rimantas, kiekvieną rytą pasisakyti savo užduoties statusą, tokiu principu:
    - Ką dariau vakar?
    - Ką darysiu šiandien?
    - Ar kilo kokių kliūčių?

## Užduoties atlikimas:

- ### Nuo ko pradėti:
    - Perskaičius atliekamą užduotį visuomet iš anksto pasiteirauti dėl kylančių klausimų. Užduotis bus galima detaliau papildyti.
    - Prieš darbą nusikopijuoti repozitoriją `git clone <adresas>` komanda terminale arba per vscode source control’ą.
    - Susikurti feature-branch’ą ir savą užduotį atlikinėti ten.
    - Prieš darbą nepamiršti susirašyti dependencies `npm i` komanda terminale.
    - Pasileisti dead-server’į su `npm run dev` komanda.
- ### Bendros darbo taisyklės:
    - Atlikinėti užduotyje nurodytas užduotis.
    - Savo kodą būtinai rašyti jam tinkamoje vietoje (komponentus nurodytame jam skirtame css komponentų faile; sekcijas po tinkamu komentaru home.css faile; struktūrą taip pat po tinkamu komentaru html faile).
    - Naudojamas nuotraukas susirašyti pačiam ir įsikelti į tinkamą img folderyje esančią sekciją.
    - Rašyti tinkamas klases komponentams, kurios bus nurodytos užduotyje.
    - Komponentų neperrašinėti, nebent tam bus svari priežastis. Dėl tokių klausimų visuomet kreiptis į komandą. Norint unikaliai keisti komponento stilių, tą daryti su nauja klase.
    - Padarytų komponentų struktūrą laikysime html-templates.html faile. Juos naudojant viskas, ką reiks padaryti, tai copy/paste struktūrą ir uždėti tinkamą klasę.
    - Responsive dizainas turi būti atliekamas pagal nutylėjimą, užduotyje nurodytuose lūžio taškuose.
- ### Ką daryti, jei tavo darbo metu buvo atnaujintas develop branch’as:
    - Susinchronizuoti savo feature-branch’ą su atnaujintu develop branch’u. Tą galima padaryti iš savo feature-branch’o su `git merge origin` komanda terminale (berods :D, reikės pasitikslinti dėl šito).
    - Jei kyla git konfliktai, juos reikia spręsti. Reikia pasitikslinti kokiu principu tai darysime.
    - Jei sugriūna savasis dizainas po atnaujinimų, prisiimame kaltę sau ir keičiame savo kodą, kad veiktų.
- ### Ką daryti prieš darant Pull Request’ą?
    - Kritiškai peržiūrime savo kodą:
        - Ar nėra perteklinių HTML tagų?
        - Ar galima kur struktūroje naudoti tinkamesnį semantinį tagą?
        - Patikrinti kaip atrodo responsyvus dizainas skirtinguose ekrano dydžiuose.
        - Ar selektoriai yra rašomi tvarkingai struktūros eiliškumo tvarka?
        - Ar atlikau visas užduotis?
    - Dar kartą susinchronizuoti savo branch’ą su develop branch’u.
    - Jei nekyla jokių konfliktų, daryti Pull Request’ą.

## Kodo peržiūra Pull Request’o metu:

- Nedarome skubotų patvirtinimų.
- Atsisiųsti pas save Pull Request’ą lokaliai.
- Persijungiame branch’ą į Pull Request’o branch’ą.
- Pasileisti `npm i` komandą dependecies surašymui.
- Pasileisti `npm run dev` komandą ir tikrinti rezultatus.
    - Peržiūrėti responsive design.
    - Patikrinti, ar console švari, jei rašomas JS.
    - Sužiūrėti ar yra tvarkingai parašytas HTML, CSS, JS kodas.
    - Sužiūrėti ar visos užduotys yra atliktos (patikrinti issues).
    - Jei randamos klaidos, rašyti komentarą prie specifiškų kodo eilučių Github -> Files Changed skiltyje.
    - Jei randama kritinių klaidų, tuomet spausti Request Changes.
    - Daryti Approve tik kuomet iš tiesų nerandama jokių klaidų po atidžios analizės.
- Siūlau daryti merge bendru nutarimu esant 3 patvirtinimams, problemoms išvengti, nes esame naujokai.
- Po merge, žmogus, dirbęs su dabar jau nereikalingu feature-branch’u turi jį ištrinti.

## Rezultato viešinimas master Branch’e:

- Siūlau daryti master atnaujimus bendru nutarimu, kuomet bus susikaupę pakankamai atnaujinimų juos sukelti klientui matyti.