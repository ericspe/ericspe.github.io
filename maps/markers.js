var markers = [
{'id': 999654744, 'name': 'REGION HOVEDSTADEN', 'organizationUrl': 'http://www.regionh.dk', 'address': 'KONGENS VAENGE 2, 3400, HILLEROD, DK', 'longitude': 12.3488916, 'latitude': 55.9321242}
,
{'id': 997731137, 'name': 'SANOFI-AVENTIS DEUTSCHLAND GMBH', 'organizationUrl': 'http://www.sanofi.com', 'address': 'BRUNINGSTRASSE 50, 65929, FRANKFURT AM MAIN, DE', 'longitude': 8.5434644, 'latitude': 50.0975652}
,
{'id': 999836231, 'name': 'MEDIZINISCHE UNIVERSITAT GRAZ', 'organizationUrl': 'http://www.medunigraz.at', 'address': 'AUENBRUGGERPLATZ 2, 8036, GRAZ, AT', 'longitude': 15.46655572486964, 'latitude': 47.07971595}
,
{'id': 999976881, 'name': 'THE UNIVERSITY OF SHEFFIELD', 'organizationUrl': 'http://www.shef.ac.uk', 'address': 'FIRTH COURT WESTERN BANK, S10 2TN, SHEFFIELD, UK', 'longitude': -1.489232554692405, 'latitude': 53.3816644}
,
{'id': 999992110, 'name': 'STICHTING KATHOLIEKE UNIVERSITEIT', 'organizationUrl': 'http://www.radboudumc.nl', 'address': 'GEERT GROOTEPLEIN NOORD 9, 6525 EZ, NIJMEGEN, NL', 'longitude': 5.858974067009569, 'latitude': 51.8241275}
,
{'id': 999975523, 'name': 'UNIVERSITY OF DUNDEE', 'organizationUrl': 'http://www.dundee.ac.uk', 'address': 'Nethergate, DD1 4HN, DUNDEE, UK', 'longitude': -2.9758871, 'latitude': 56.4573119}
,
{'id': 999778419, 'name': 'EURICE EUROPEAN RESEARCH AND PROJECT OFFICE GMBH', 'organizationUrl': 'http://www.eurice.eu', 'address': 'HEINRICH-HERTZ-ALLEE 1, 66386, ST INGBERT, DE', 'longitude': 7.1060133, 'latitude': 49.2780808}
,
{'id': 951369987, 'name': 'MEDTRONIC INTERNATIONAL TRADING SARL', 'organizationUrl': 'http://', 'address': 'ROUTE DU MOLLIAU 31, 1131, TOLOCHENAZ, CH', 'longitude': 6.482786624007092, 'latitude': 46.50165725}
,
{'id': 999995602, 'name': 'UNIVERSITA DEGLI STUDI DI PADOVA', 'organizationUrl': 'http://www.unipd.it', 'address': 'VIA 8 FEBBRAIO 2, 35122, PADOVA, IT', 'longitude': 11.7923445, 'latitude': 45.3533055}
,
{'id': 999609348, 'name': 'CENTRE HOSPITALIER UNIVERSITAIRE MONTPELLIER', 'organizationUrl': 'http://www.chu-montpellier.fr', 'address': 'AVENUE DU DOYEN GASTON GIRAUD 191, 34000, MONTPELLIER, FR', 'longitude': 3.8515187, 'latitude': 43.6325399}
,
{'id': 999904616, 'name': 'SYDDANSK UNIVERSITET', 'organizationUrl': 'http://www.sdu.dk', 'address': 'CAMPUSVEJ 55, 5230, ODENSE M, DK', 'longitude': 10.428177, 'latitude': 55.368644}
,
{'id': 999940021, 'name': 'NOVO NORDISK A/S', 'organizationUrl': 'http://www.novonordisk.com', 'address': 'NOVO ALLE 1, 2880, BAGSVAERD, DK', 'longitude': 12.455185, 'latitude': 55.754555}
,
{'id': 964610487, 'name': 'FEDERATION INTERNATIONALE DU DIABETE', 'organizationUrl': 'http://www.id.org', 'address': 'CHAUSSEE DE LA HULPE 166, 1170, BRUXELLES, BE', 'longitude': 4.4044325, 'latitude': 50.796288}
,
{'id': 999974941, 'name': 'THE UNIVERSITY OF EDINBURGH', 'organizationUrl': 'http://www.ed.ac.uk', 'address': 'OLD COLLEGE, SOUTH BRIDGE, EH8 9YL, EDINBURGH, UK', 'longitude': -3.186517448519809, 'latitude': 55.94743165}
,
{'id': 999981052, 'name': "KING'S COLLEGE LONDON", 'organizationUrl': 'http://www.kcl.ac.uk', 'address': 'STRAND, WC2R 2LS, LONDON, UK', 'longitude': -0.1157884, 'latitude': 51.512416}
,
{'id': 999884828, 'name': 'KLINIKUM DER UNIVERSITAET ZU KOELN', 'organizationUrl': 'http://www.uk-koeln.de', 'address': 'Kerpener Strasse 62, 50937, KOELN, DE', 'longitude': 6.917061443465901, 'latitude': 50.92344825}
,
{'id': 999901318, 'name': 'LUNDS UNIVERSITET', 'organizationUrl': 'http://', 'address': 'Paradisgatan  5c, 22100, LUND, SE', 'longitude': 13.19458139966556, 'latitude': 55.70632395}
,
{'id': 999898214, 'name': 'UNIVERSIDAD DE ZARAGOZA', 'organizationUrl': 'http://www.unizar.es', 'address': 'CALLE PEDRO CERBUNA 12, 50009, ZARAGOZA, ES', 'longitude': -0.9605914, 'latitude': 41.559093}
,
{'id': 999992401, 'name': 'COMMISSARIAT A L ENERGIE ATOMIQUE ET AUX ENERGIES ALTERNATIVES', 'organizationUrl': 'http://www.cea.fr', 'address': 'RUE LEBLANC  25, 75015, PARIS 15, FR', 'longitude': 2.2737149, 'latitude': 48.8399972}
,
{'id': 998369300, 'name': 'EVOTEC INTERNATIONAL GMBH', 'organizationUrl': 'http://', 'address': 'ESSENER BOGEN 7, 22419, HAMBURG, DE', 'longitude': 9.9964952, 'latitude': 53.67694725}
,
{'id': 952786381, 'name': 'BIOASTER FONDATION DE COOPERATION SCIENTIFIQUE', 'organizationUrl': 'http://www.bioaster.org', 'address': '40 AVENUE TONY GARNIER, 69007, LYON, FR', 'longitude': 4.8248009, 'latitude': 45.7266874}
,
{'id': 999985029, 'name': 'UPPSALA UNIVERSITET', 'organizationUrl': 'http://www.uu.se', 'address': 'VON KRAEMERS ALLE 4, 751 05, UPPSALA, SE', 'longitude': 17.632906, 'latitude': 59.8517342}
,
{'id': 999481987, 'name': 'SERVICIO MADRILENO DE SALUD', 'organizationUrl': 'http://cort.as/10Yf', 'address': 'PLAZA CARLOS TRIAS BERTRAN  7, 28020, MADRID, ES', 'longitude': -3.6939437, 'latitude': 40.4520386}
,
{'id': 986454887, 'name': 'Department of Health', 'organizationUrl': 'http://www.dh.gov.uk', 'address': 'Quarry House, Quarry Hill, LS2 7UE, Leeds, UK', 'longitude': -1.5310907, 'latitude': 53.7982176}
,
{'id': 999979500, 'name': 'CONSIGLIO NAZIONALE DELLE RICERCHE', 'organizationUrl': 'http://www.cnr.it', 'address': 'PIAZZALE ALDO MORO 7, 185, ROMA, IT', 'longitude': 12.5125083, 'latitude': 41.9007644}
,
{'id': 969027285, 'name': 'IMABIOTECH SAS', 'organizationUrl': 'http://www.imabiotech.com', 'address': '152 RUE DU DOCTEUR YERSIN, 59120, LOOS, FR', 'longitude': 3.0275413, 'latitude': 50.6054411}
,
{'id': 999893752, 'name': 'UNIVERSITA DEGLI STUDI DI PAVIA', 'organizationUrl': 'http://www.unipv.it', 'address': 'STRADA NUOVA  65, 27100, PAVIA, IT', 'longitude': 8.8297719, 'latitude': 45.3090464}
,
{'id': 999567056, 'name': 'LATVIJAS ORGANISKAS SINTEZES INSTITUTS', 'organizationUrl': 'http://www.osi.lv', 'address': 'AIZKRAUKLES 21, 1006, RIGA, LV', 'longitude': 24.1915942335153, 'latitude': 56.9763294}
,
{'id': 900029245, 'name': 'BILL & MELINDA GATES FOUNDATION', 'organizationUrl': 'http://', 'address': '500 5th Ave N, 98102, SEATTLE, WASHINGTON, US', 'longitude': -122.3462039, 'latitude': 47.6232408}
,
{'id': 999498089, 'name': 'INSTITUT PASTEUR DE LILLE FONDATION', 'organizationUrl': 'http://www.pasteur-lille.fr', 'address': 'RUE DU PROFESSEUR CALMETTE 1, 59019, LILLE, FR', 'longitude': 3.073963797095657, 'latitude': 50.62804385}
,
{'id': 999521563, 'name': 'FORSCHUNGSZENTRUM BORSTEL', 'organizationUrl': 'http://www.fz-borstel.de', 'address': 'Parkallee 1-40, 23845, BORSTEL, DE', 'longitude': 10.195022, 'latitude': 53.8225883}
,
{'id': 999899572, 'name': 'UNIVERSIDAD CARLOS III DE MADRID', 'organizationUrl': 'http://www.uc3m.es', 'address': 'CALLE MADRID 126, 28903, GETAFE (MADRID), ES', 'longitude': -3.7270033, 'latitude': 40.3174842}
,
{'id': 906160809, 'name': 'SCIENSANO', 'organizationUrl': 'http://', 'address': 'JULIETTE WYTSMANSTRAAT 14, 1050, ELSENE, BE', 'longitude': 4.3817642, 'latitude': 50.82433}
,
{'id': 998398206, 'name': 'JANSSEN PHARMACEUTICA NV', 'organizationUrl': 'http://www.janssenpharmaceutica.be', 'address': 'TURNHOUTSEWEG 30, 2340, BEERSE, BE', 'longitude': 4.867664135810617, 'latitude': 51.3113239}
,
{'id': 997656350, 'name': 'STICHTING LYGATURE', 'organizationUrl': 'http://www.lygature.org/', 'address': 'JAARBEURSPLEIN 6, 3521 AL, UTRECHT, NL', 'longitude': 5.1068391, 'latitude': 52.0877804}
,
{'id': 989707782, 'name': 'SOFTWARE AG', 'organizationUrl': 'http://', 'address': 'UHLANDSTRASSE 12, 64297, DARMSTADT, DE', 'longitude': 8.637348069824132, 'latitude': 49.8144674}
,
{'id': 999984059, 'name': 'FRAUNHOFER GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V.', 'organizationUrl': 'http://www.fraunhofer.de', 'address': 'HANSASTRASSE 27C, 80686, MUNCHEN, DE', 'longitude': 11.52971255347459, 'latitude': 48.13233384999999}
,
{'id': 999754557, 'name': 'NOVARTIS PHARMA AG', 'organizationUrl': 'http://www.novartis.com', 'address': 'LICHTSTRASSE 35, 4056, BASEL, CH', 'longitude': 7.5794524, 'latitude': 47.5728315}
,
{'id': 972222853, 'name': 'TAKEDA DEVELOPMENT CENTRE EUROPE LTD', 'organizationUrl': 'http://www.takeda.com', 'address': 'ALDWYCH 61, WC2B 4AE, LONDON, UK', 'longitude': -0.1175934, 'latitude': 51.5131312}
,
{'id': 919322739, 'name': 'STICHTING VUMC', 'organizationUrl': 'http://www.vumc.nl', 'address': 'DE BOELELAAN 1117, 1081 HV, AMSTERDAM, NL', 'longitude': 4.859910738647415, 'latitude': 52.334632}
,
{'id': 999978530, 'name': 'KAROLINSKA INSTITUTET', 'organizationUrl': 'http://www.ki.se', 'address': 'Nobels Vag 5, 17177, STOCKHOLM, SE', 'longitude': 18.0280516, 'latitude': 59.3475495}
,
{'id': 949831276, 'name': 'AGENTSCHAP COLLEGE TER BEOORDELING VAN GENEESMIDDELEN', 'organizationUrl': 'http://', 'address': 'GRAADT VAN ROGGENWEG 500, 3531AH, UTRECHT, NL', 'longitude': 5.1001632, 'latitude': 52.086185}
,
{'id': 998068600, 'name': 'ALZHEIMER EUROPE', 'organizationUrl': 'http://www.alzheimer-europe.org', 'address': 'RUE DICKS 14, 1417, LUXEMBOURG, LU', 'longitude': 6.1305187, 'latitude': 49.6045964}
,
{'id': 905260552, 'name': 'ALTOIDA AG', 'organizationUrl': 'http://', 'address': 'HIRSCHENGRABEN 31, 6003, LUZERN, CH', 'longitude': 8.3020767, 'latitude': 47.0492847}
,
{'id': 999989976, 'name': 'MEDIZINISCHE UNIVERSITAET WIEN', 'organizationUrl': 'http://www.meduniwien.ac.at', 'address': 'SPITALGASSE 23, 1090, WIEN, AT', 'longitude': 16.35175707869826, 'latitude': 48.22046955}
,
{'id': 999997833, 'name': 'INSTITUT NATIONAL DE LA SANTE ET DE LA RECHERCHE MEDICALE', 'organizationUrl': 'http://www.inserm.fr', 'address': 'RUE DE TOLBIAC 101, 75654, PARIS, FR', 'longitude': 2.3652703, 'latitude': 48.8266111}
,
{'id': 999955541, 'name': 'INSERM TRANSFERT SA', 'organizationUrl': 'http://www.inserm-transfert.fr', 'address': 'RUE WATT 7, 75013, PARIS, FR', 'longitude': 2.3827661, 'latitude': 48.8281946}
,
{'id': 961534423, 'name': 'CLONIT SRL', 'organizationUrl': 'http://', 'address': 'Via Varese  20, 20121, MILANO, IT', 'longitude': 9.1844031, 'latitude': 45.4805576}
,
{'id': 999937402, 'name': 'STATENS SERUM INSTITUT', 'organizationUrl': 'http://www.ssi.dk', 'address': 'ARTILLERIVEJ 5, 2300, KOBENHAVN S, DK', 'longitude': 12.572721, 'latitude': 55.659355}
,
{'id': 984486466, 'name': 'CORIS BIOCONCEPT SPRL', 'organizationUrl': 'http://www.corisbio.com', 'address': 'RUE JEAN SONET 4A PARC SCIENTIFIQUE CREALYS LES ISNES, 5032, GEMBLOUX, BE', 'longitude': 4.7130543, 'latitude': 50.5045399}
,
{'id': 934722459, 'name': 'AJ INNUSCREEN GMBH', 'organizationUrl': 'http://', 'address': 'ROBERT ROSSLE STR 10, 13125, BERLIN, DE', 'longitude': 13.501880584969, 'latitude': 52.62443935}
,
{'id': 999991043, 'name': 'KOBENHAVNS UNIVERSITET', 'organizationUrl': 'http://www.ku.dk', 'address': 'NORREGADE 10, 1165, KOBENHAVN, DK', 'longitude': 12.571506, 'latitude': 55.68012}
,
{'id': 999542806, 'name': 'INSTITUT PASTEUR DE DAKAR', 'organizationUrl': 'http://', 'address': 'AVENUE PASTEUR 36, DAKAR, DAKAR, SN', 'longitude': -17.434093, 'latitude': 14.6543733}
,
{'id': 999876389, 'name': 'THE UNIVERSITY OF STIRLING', 'organizationUrl': 'http://www.stir.ac.uk', 'address': '., FK9 4LA, STIRLING, UK', 'longitude': -3.920524333333333, 'latitude': 56.14724343333334}
,
{'id': 955518483, 'name': "UNIVERSITE D'AIX MARSEILLE", 'organizationUrl': 'http://', 'address': 'Boulevard Charles Livon   58, 13284, Marseille, FR', 'longitude': 5.3633057, 'latitude': 43.2922326}
,
{'id': 949789954, 'name': 'FOLKHALSOMYNDIGHETEN', 'organizationUrl': 'http://folkhalsomyndigheten.se', 'address': 'NOBELS VAG 18, 171 82, SOLNA, SE', 'longitude': 18.0269365, 'latitude': 59.3480509}
,
{'id': 999903064, 'name': 'TURUN YLIOPISTO', 'organizationUrl': 'http://www.utu.fi', 'address': 'YLIOPISTONMAKI, 20014, Turku, FI', 'longitude': 22.2841185, 'latitude': 60.4556899}
,
{'id': 999885022, 'name': 'STOCKHOLMS UNIVERSITET', 'organizationUrl': 'http://www.su.se', 'address': 'UNIVERSITETSVAGEN 10, 10691, STOCKHOLM, SE', 'longitude': 18.0600201, 'latitude': 59.3639675}
,
{'id': 934831390, 'name': 'EMERGENCY LIFE SUPPORT FOR CIVILIAN WAR VICTIMS ONG ONLUS', 'organizationUrl': 'http://', 'address': 'VIA SANTA CROCE 19, 20122, MILANO, IT', 'longitude': 9.181942044940254, 'latitude': 45.45338155}
,
{'id': 999645432, 'name': 'ASSISTANCE PUBLIQUE HOPITAUX DE PARIS', 'organizationUrl': 'http://www.aphp.fr', 'address': '3 AVENUE VICTORIA, 75000, PARIS, FR', 'longitude': 2.3501779, 'latitude': 48.8569088}
,
{'id': 999978821, 'name': 'ISTITUTO SUPERIORE DI SANITA', 'organizationUrl': 'http://www.iss.it', 'address': 'Viale Regina Elena 299, 161, ROMA, IT', 'longitude': 12.5180652, 'latitude': 41.9041444}
,
{'id': 920058484, 'name': 'OLIGOVAX', 'organizationUrl': 'http://', 'address': '102 AVENUE DES CHAMPS-ELYSEES, 75008, PARIS, FR', 'longitude': 2.3023474, 'latitude': 48.8718353}
,
{'id': 999587232, 'name': 'CENTRE HOSPITALIER REGIONAL ET UNIVERSITAIRE DE LILLE', 'organizationUrl': 'http://www.chru-lille.fr/', 'address': 'AVENUE OSCAR LAMBRET  2, 59037, LILLE, FR', 'longitude': 3.0379315, 'latitude': 50.6111879}
,
{'id': 999600909, 'name': 'CENTRE HOSPITALIER UNIVERSITAIRE VAUDOIS', 'organizationUrl': 'http://www.chuv.ch', 'address': 'RUE DU BUGNON 21, 1011, LAUSANNE, CH', 'longitude': 6.640620278244347, 'latitude': 46.52495475000001}
,
{'id': 920029287, 'name': 'EXCELLGENE SA', 'organizationUrl': 'http://', 'address': "ROUTE DE L'ILE-AU-BOIS 1A, 1870, MONTHEY, CH", 'longitude': 6.9593335, 'latitude': 46.2550433}
,
{'id': 999468795, 'name': 'BERNHARD-NOCHT-INSTITUT FUER TROPENMEDIZIN', 'organizationUrl': 'http://www.bni.uni-hamburg.de', 'address': 'BERNHARD NOCHT STRASSE 74, 20359, HAMBURG, DE', 'longitude': 9.965600915355878, 'latitude': 53.54684175}
,
{'id': 991028049, 'name': 'HEINRICH-PETTE INSTITUT LEIBNIZ INSTITUT FUER EXPERIMENTELLE VIROLOGIE', 'organizationUrl': 'http://www.hpi-hamburg.de', 'address': 'MARTINISTRASSE 52, 20251, HAMBURG, DE', 'longitude': 9.9725421, 'latitude': 53.5915188}
,
{'id': 916365306, 'name': 'SEQIRUS UK LIMITED', 'organizationUrl': 'http://', 'address': 'POINT 29 MARKET STREET, SL6 8AA, MAIDENHEAD, UK', 'longitude': -0.7200478, 'latitude': 51.5234418}
,
{'id': 918152725, 'name': 'CONFEDERATION OF MENINGITIS ORGANISATIONS LTD', 'organizationUrl': 'http://', 'address': 'NEWMINSTER HOUSE BALDWIN STREET, BS1 1LT, BRISTOL, UK', 'longitude': -2.595037416715371, 'latitude': 51.45348654999999}
,
{'id': 999895789, 'name': 'UNIVERSITA DEGLI STUDI DI FIRENZE', 'organizationUrl': 'http://www.unifi.it', 'address': 'Piazza San Marco  4, 50121, Florence, IT', 'longitude': 11.25883048676172, 'latitude': 43.77784269999999}
,
{'id': 996697893, 'name': 'TERVEYDEN JA HYVINVOINNIN LAITOS', 'organizationUrl': 'http://www.thl.fi', 'address': 'MANNERHEIMINTIE  166, 271, HELSINKI, FI', 'longitude': 24.8988054, 'latitude': 60.2004638}
,
{'id': 999956026, 'name': 'SANOFI PASTEUR SA', 'organizationUrl': 'http://www.sanofipasteur.com', 'address': 'Avenue Pont Pasteur, 2, 69007, LYON, FR', 'longitude': 4.8220373, 'latitude': 45.7329647}
,
{'id': 952998908, 'name': 'P95 CVBA', 'organizationUrl': 'http://www.p-95.com', 'address': 'KONING LEOPOLD III - LAAN 1, 3001, LEUVEN, BE', 'longitude': 4.695255, 'latitude': 50.854913}
,
{'id': 999985223, 'name': 'UNIVERSITY OF SURREY', 'organizationUrl': 'http://www.surrey.ac.uk', 'address': 'Stag Hill, GU2 7XH, GUILDFORD, UK', 'longitude': -0.5897178, 'latitude': 51.2411634}
,
{'id': 999478883, 'name': 'FOLKEHELSEINSTITUTTET', 'organizationUrl': 'http://www.fhi.no', 'address': 'LOVISENBERGGATA 8, 456, OSLO, NO', 'longitude': 10.745259, 'latitude': 59.933949}
,
{'id': 923895416, 'name': 'STATENS LEGEMIDDELVERK', 'organizationUrl': 'http://', 'address': 'Grensesvingen 26, 213, OSLO, NO', 'longitude': 10.798903, 'latitude': 59.913179}
,
{'id': 999993468, 'name': 'IMPERIAL COLLEGE OF SCIENCE TECHNOLOGY AND MEDICINE', 'organizationUrl': 'http://www.imperial.ac.uk/', 'address': 'SOUTH KENSINGTON CAMPUS EXHIBITION ROAD, SW7 2AZ, LONDON, UK', 'longitude': -0.1740669, 'latitude': 51.4977312}
,
{'id': 937666409, 'name': 'UCB BIOPHARMA SRL', 'organizationUrl': 'http://www.ucb.com', 'address': 'ALLEE DE LA RECHERCHE 60, 1070, BRUXELLES, BE', 'longitude': 4.275721857227438, 'latitude': 50.8176796}
,
{'id': 999861063, 'name': 'LONDON SCHOOL OF ECONOMICS AND POLITICAL SCIENCE', 'organizationUrl': 'http://www.lse.ac.uk', 'address': 'Houghton Street 1, WC2A 2AE, LONDON, UK', 'longitude': -0.1166798, 'latitude': 51.5137471}
,
{'id': 952706065, 'name': "FEDERATION EUROPEENNE D'ASSOCIATIONS ET D'INDUSTRIES PHARMACEUTIQUES", 'organizationUrl': 'http://www.efpia.eu', 'address': 'RUE DU TRONE 108/1, 1050, BRUXELLES, BE', 'longitude': 4.3749873, 'latitude': 50.8329484}
,
{'id': 997517058, 'name': 'AMGEN', 'organizationUrl': 'http://', 'address': 'TELECOMLAAN 5-7, 1831, DIEGEM, BE', 'longitude': 4.4400638469754, 'latitude': 50.8825612}
,
{'id': 999601782, 'name': 'F. HOFFMANN-LA ROCHE AG', 'organizationUrl': 'http://www.roche.com', 'address': 'GRENZACHERSTRASSE  124, 4070, BASEL, CH', 'longitude': 7.6070506, 'latitude': 47.5583211}
,
{'id': 925157192, 'name': 'CELGENE MANAGEMENT SARL', 'organizationUrl': 'http://', 'address': 'ROUTE DE PERREUX 1, 2017, BOUDRY, CH', 'longitude': 6.8240797, 'latitude': 46.9441848}
,
{'id': 999965241, 'name': 'MERCK KOMMANDITGESELLSCHAFT AUF AKTIEN', 'organizationUrl': 'http://', 'address': 'FRANKFURTER STRASSE  250, 64293, DARMSTADT, DE', 'longitude': 8.65363585, 'latitude': 49.89542455}
,
{'id': 917629022, 'name': 'THE ASSOCIATION OF THE BRITISH PHARMACEUTICAL INDUSTRY', 'organizationUrl': 'http://', 'address': '105 VICTORIA STREET, SW1E 6QT, LONDON, UK', 'longitude': -0.1369422, 'latitude': 51.4970571}
,
{'id': 954335762, 'name': 'TANDVARDS-OCH LAKEMEDELSFORMANSVERKET', 'organizationUrl': 'http://www.tlv.se', 'address': 'FLEMINGGATAN 7, 10422, STOCKHOLM, SE', 'longitude': 18.0479638, 'latitude': 59.332327}
,
{'id': 998206922, 'name': 'BOEHRINGER INGELHEIM INTERNATIONALGMBH', 'organizationUrl': 'http://www.boehringer‐ingelheim.com', 'address': 'BINGER STRASSE, 55218, INGELHEIM, DE', 'longitude': 8.0525138, 'latitude': 49.9744562}
,
{'id': 984108263, 'name': 'EUROPEAN CANCER PATIENT COALITION', 'organizationUrl': 'http://www.ecpc-online.org', 'address': 'RUE MONTOYER 40, 1000, BRUXELLES, BE', 'longitude': 4.3715463, 'latitude': 50.8410264}
,
{'id': 999860675, 'name': 'SEMMELWEIS EGYETEM', 'organizationUrl': 'http://www.sote.hu', 'address': 'ULLOI UTCA 26, 1085, BUDAPEST, HU', 'longitude': 19.0682742, 'latitude': 47.4872023}
,
{'id': 998044059, 'name': 'INTERSYSTEMS GMBH', 'organizationUrl': 'http://', 'address': 'HILPERTSTRASSE  20 A, 64295, DARMSTADT, DE', 'longitude': 8.6310289, 'latitude': 49.8631989}
,
{'id': 918419281, 'name': 'BAYER AKTIENGESELLSCHAFT', 'organizationUrl': 'http://pharma.bayer.com', 'address': 'KAISER-WILHELM-ALLEE  1, 51373, LEVERKUSEN, DE', 'longitude': 6.982517352615529, 'latitude': 51.01351975}
,
{'id': 968927084, 'name': 'THE EUROPEAN MULTIPLE SCLEROSIS PLATFORM AISBL', 'organizationUrl': 'http://', 'address': 'RUE AUGUSTE LAMBIOTTE 144/8, 1030, BRUXELLES, BE', 'longitude': 4.3876015, 'latitude': 50.8571531}
,
{'id': 997658387, 'name': 'INSTITUT DE RECHERCHES INTERNATIONALES SERVIER IRIS', 'organizationUrl': 'http://www.servier.com', 'address': 'RUE CARNOT 50, 92284, COURBEVOIE, FR', 'longitude': 2.2462677, 'latitude': 48.8942326}
,
{'id': 963668229, 'name': 'VERBAND FORSCHENDER ARZNEIMITTELHERSTELLER EV', 'organizationUrl': 'http://www.vfa.de', 'address': 'HAUSVOGTEIPLATZ 13, 10117, Berlin, DE', 'longitude': 13.3972399, 'latitude': 52.512938}
,
{'id': 998137567, 'name': 'ECT OEKOTOXIKOLOGIE GMBH', 'organizationUrl': 'http://www.ect.de', 'address': 'BOTTGERSTRASSE 2-14, 65439, FLORSHEIM, DE', 'longitude': 8.4002554, 'latitude': 50.000951}
,
{'id': 999661146, 'name': 'ISTITUTO DI RICERCHE FARMACOLOGICHE MARIO NEGRI', 'organizationUrl': 'http://www.marionegri.it', 'address': 'VIA MARIO NEGRI 2, 20156, MILANO, IT', 'longitude': 9.1573985, 'latitude': 45.5003984}
,
{'id': 999941379, 'name': 'ASTRAZENECA AB', 'organizationUrl': 'http://www.astrazeneca.com', 'address': 'Vastra Maelarhamnen, 151 85, SODERTAELJE, SE', 'longitude': 17.625101, 'latitude': 59.2014869}
,
{'id': 996544827, 'name': 'LEUPHANA UNIVERSITAT LUNEBURG', 'organizationUrl': 'http://www.leuphana.de', 'address': 'SCHARNHORSTSTRASSE 1, 21335, LUNEBURG, DE', 'longitude': 10.4041184, 'latitude': 53.2277802}
,
{'id': 998124569, 'name': 'EIDGENOESSISCHE ANSTALT FUER WASSERVERSORGUNG ABWASSERREINIGUNG UND GEWAESSERSCHUTZ', 'organizationUrl': 'http://www.eawag.ch', 'address': 'UBERLANDSTRASSE 133, 8600, DUBENDORF, CH', 'longitude': 8.61021949306273, 'latitude': 47.40464385}
,
{'id': 999978336, 'name': 'UNIVERSITY OF YORK', 'organizationUrl': 'http://www.york.ac.uk', 'address': 'HESLINGTON, YO10 5DD, YORK NORTH YORKSHIRE, UK', 'longitude': -1.0466265, 'latitude': 53.9443862}
,
{'id': 999991431, 'name': 'RIJKSINSTITUUT VOOR VOLKSGEZONDHEID EN MILIEU', 'organizationUrl': 'http://www.rivm.nl', 'address': 'Antonie Van Leeuwenhoeklaan  9, 3721 MA, BILTHOVEN, NL', 'longitude': 5.1890782, 'latitude': 52.1185942}
,
{'id': 899849213, 'name': 'SIMOMICS LIMITED', 'organizationUrl': 'http://', 'address': 'BLAKE HOUSE 18 BLAKE STREET, YO1 8QG, YORK, UK', 'longitude': -1.084763470179057, 'latitude': 53.9607603}
,
{'id': 999981925, 'name': 'GOETEBORGS UNIVERSITET', 'organizationUrl': 'http://www.gu.se', 'address': 'VASAPARKEN, 405 30, GOETEBORG, SE', 'longitude': 11.97155571582168, 'latitude': 57.698404}
,
{'id': 997654895, 'name': 'THE EUROPEAN MEDICINES AGENCY', 'organizationUrl': 'http://www.ema.europa.eu/', 'address': 'DOMENICO SCARLATTILAAN 6, 1083 HS, AMSTERDAM, NL', 'longitude': 4.885974897058387, 'latitude': 52.33744085}
,
{'id': 999741171, 'name': 'ECOLOGIC INSTITUT gemeinnützige GmbH', 'organizationUrl': 'http://www.ecologic.eu', 'address': 'Pfalzburger Strasse  43-44, 10717, BERLIN, DE', 'longitude': 13.3214002, 'latitude': 52.4895509}
,
{'id': 994864011, 'name': 'BRISTOL-MYERS SQUIBB COMPANY CORP', 'organizationUrl': 'http://www.bms.com/landing/data/index.html', 'address': 'PARK AVENUE 345, 10154, NEW YORK, US', 'longitude': -73.972851, 'latitude': 40.7581203}
,
{'id': 999902870, 'name': 'UNIVERSITEIT ANTWERPEN', 'organizationUrl': 'http://www.ua.ac.be', 'address': 'PRINSSTRAAT 13, 2000, ANTWERPEN, BE', 'longitude': 4.4099103, 'latitude': 51.2223222}
,
{'id': 998331858, 'name': 'LUXEMBOURG INSTITUTE OF HEALTH', 'organizationUrl': 'http://https://www.lih.lu/', 'address': 'VAL FLEURI 84, 1526, LUXEMBOURG, LU', 'longitude': 6.1041525, 'latitude': 49.618122}
,
{'id': 999522145, 'name': 'THE TRUSTEES OF BOSTON UNIVERSITY', 'organizationUrl': 'http://', 'address': 'COMMONWEALTH AVENUE 881, 2215, BOSTON MA, US', 'longitude': -71.11525923223809, 'latitude': 42.35145145}
,
{'id': 999525637, 'name': 'FONDAZIONE PENTA - FOR THE TREATMENT AND CARE OF CHILDREN WITH HIV ANDRELATED DISEASES - ONLUS', 'organizationUrl': 'http://www.penta-id.org', 'address': 'CORSO STATI UNITI 4, 35127, PADOVA, IT', 'longitude': 11.92897673835043, 'latitude': 45.3931823}
,
{'id': 952947983, 'name': 'EUROPEAN SOCIETY CLINICAL MICROBIOLOGY INFECTIOUS DISEASES (EUROPAISCHE GESELLSCHAFT FUR KLINISCHE MIKROBIOLOGIE INFEKTIONSKRANKHEITEN)', 'organizationUrl': 'http://www.escmid.org', 'address': 'GERBERGASSE 14, 4001, BASEL, CH', 'longitude': 7.5880119, 'latitude': 47.5572743}
,
{'id': 928836208, 'name': 'GESUNDHEIT OSTERREICH GMBH', 'organizationUrl': 'http://', 'address': 'STUBENRING 6, 1010, WIEN, AT', 'longitude': 16.3821826, 'latitude': 48.2102591}
,
{'id': 999914801, 'name': 'ACADEMISCH ZIEKENHUIS GRONINGEN', 'organizationUrl': 'http://www.umcg.nl', 'address': 'HANZEPLEIN 1, 9713 GZ, GRONINGEN, NL', 'longitude': 6.574140252549991, 'latitude': 53.22310875}
,
{'id': 999471414, 'name': 'UNIVERSIDAD DE LA RIOJA', 'organizationUrl': 'http://www.unirioja.es', 'address': 'AVENIDA DE LA PAZ 93, 26006, LA RIOJA, ES', 'longitude': -2.4279128, 'latitude': 42.4631114}
,
{'id': 904895347, 'name': 'BIO-RAD', 'organizationUrl': 'http://', 'address': '3 BLV RAYMOND POINCARE, 92430, MARNES-LA-COQUETTE, FR', 'longitude': 2.171812, 'latitude': 48.8383887}
,
{'id': 999544164, 'name': 'ZORGONDERZOEK NEDERLAND ZON', 'organizationUrl': 'http://www.zonmw.nl/', 'address': 'Laan Van Nieuw Oost Indie  334, 2593CE, DEN HAAG, NL', 'longitude': 4.3444943, 'latitude': 52.0803656}
,
{'id': 967306214, 'name': 'THE HEALTH CORPORATION - RAMBAM', 'organizationUrl': 'http://www.rambam.org.il/home+page/', 'address': 'HAALIYA 8, 31096, HAIFA, IL', 'longitude': 34.9567762, 'latitude': 32.56963985}
,
{'id': 973654088, 'name': 'BIOMERIEUX SA', 'organizationUrl': 'http://www.biomerieux.com', 'address': "Chemin de l'Orme, 69280, Marcy l'Etoile, FR", 'longitude': 4.708721, 'latitude': 45.7803393}
,
{'id': 999427085, 'name': 'EUROPEAN RESPIRATORY SOCIETY', 'organizationUrl': 'http://www.ersnet.org', 'address': 'AVENUE SAINTE LUCE 4, 1003, LAUSANNE, CH', 'longitude': 6.6311917, 'latitude': 46.5179258}
,
{'id': 905277333, 'name': 'ALERE INTERNATIONAL LIMITED', 'organizationUrl': 'http://', 'address': 'PARKMORE EAST BUSINESS PARK BALLYBRIT, nan, GALWAY, IE', 'longitude': -9.003507305021964, 'latitude': 53.29861255}
,
{'id': 914153124, 'name': 'MODUS RESEARCH AND INNOVATION LIMITED', 'organizationUrl': 'http://', 'address': '7-11 MELVILLE STREET, EH3 7PE, EDINBURGH, UK', 'longitude': -3.2124033, 'latitude': 55.9504178}
,
{'id': 949434352, 'name': 'SPOMINCICA ALZHEIMER SLOVENIJA SLOVENSKO ZDRUZENJE ZA POMOC PRI DEMENCI', 'organizationUrl': 'http://', 'address': 'LUIZE PESJAKOVE 9, 1000, LJUBLJANA, SI', 'longitude': 14.5228285, 'latitude': 46.0625696}
,
{'id': 995206033, 'name': 'KITE INNOVATION (EUROPE) LIMITED', 'organizationUrl': 'http://www.kiteinnovation.com', 'address': '3M BUCKLEY INNOVATION CENTRE, HD1 3BD, HUDDERSFIELD, UK', 'longitude': -1.777108868338193, 'latitude': 53.6415}
,
{'id': 999882306, 'name': 'UNIVERZITETNI KLINICNI CENTER LJUBLJANA', 'organizationUrl': 'http://www.kclj.si/nuklearna', 'address': 'ZALOSKA CESTA 002, 1000, LJUBLJANA, SI', 'longitude': 14.5193957, 'latitude': 46.0522977}
,
{'id': 997642770, 'name': "EUROPEAN INSTITUTE OF WOMEN'S HEALTH COMPANY LIMITED BY GUARANTEE", 'organizationUrl': 'http://www.eurohealth.ie', 'address': 'PEARSE STREET 33, 2, DUBLIN, IE', 'longitude': -6.2528244, 'latitude': 53.3449401}
,
{'id': 999990849, 'name': 'ACADEMISCH ZIEKENHUIS LEIDEN', 'organizationUrl': 'http://www.lumc.nl', 'address': 'ALBINUSDREEF 2, 2333 ZA, LEIDEN, NL', 'longitude': 4.477314989716614, 'latitude': 52.16630895}
,
{'id': 996744356, 'name': 'EUROPESE FEDERATIE VAN FAMILIEVERENIGINGEN VAN PSYCHIATRISCH ZIEKE PERSONEN IVZW', 'organizationUrl': 'http://', 'address': 'DIESTSEVEST 100, 3000, LEUVEN, BE', 'longitude': 4.7106938, 'latitude': 50.8855645}
,
{'id': 999993953, 'name': 'ALMA MATER STUDIORUM - UNIVERSITA DI BOLOGNA', 'organizationUrl': 'http://www.unibo.it', 'address': 'VIA ZAMBONI 33, 40126, BOLOGNA, IT', 'longitude': 11.352995, 'latitude': 44.4971104}
,
{'id': 999989782, 'name': 'RIJKSUNIVERSITEIT GRONINGEN', 'organizationUrl': 'http://www.rug.nl', 'address': 'Broerstraat  5, 9712CP, GRONINGEN, NL', 'longitude': 6.5631006, 'latitude': 53.219246}
,
{'id': 999988424, 'name': 'ERASMUS UNIVERSITAIR MEDISCH CENTRUM ROTTERDAM', 'organizationUrl': 'http://www.erasmusmc.nl', 'address': 'DR MOLEWATERPLEIN 40, 3015  GD, ROTTERDAM, NL', 'longitude': 4.470005483877102, 'latitude': 51.91127625}
,
{'id': 968962489, 'name': 'P1VITAL LIMITED', 'organizationUrl': 'http://', 'address': 'MANOR HOUSE HOWBERY PARK, OX10 8BA, WALLINGFORD, UK', 'longitude': -1.111966225888538, 'latitude': 51.60586085}
,
{'id': 995658053, 'name': 'Concentris Research Management GmbH', 'organizationUrl': 'http://www.concentris.de', 'address': 'Ludwigstr.  4, D-82256, Fürstenfeldbruck, DE', 'longitude': 11.2517429, 'latitude': 48.1779968}
,
{'id': 952453477, 'name': 'BIOTRIAL', 'organizationUrl': 'http://', 'address': 'RUE JEAN-LOUIS BERTRAND 7 - 9, 35042, RENNES, FR', 'longitude': -1.6929885, 'latitude': 48.124166}
,
{'id': 907006552, 'name': 'KLINIKUM GARMISCH-PARTENKIRCHEN GMBH', 'organizationUrl': 'http://', 'address': 'AUENSTRASSE 6, 82467, GARMISCH PARTENKIRCHEN, DE', 'longitude': 11.12837870658878, 'latitude': 47.48331345}
,
{'id': 931802759, 'name': 'THE ROYAL NATIONAL ORTHOPAEDIC HOSPITAL NATIONAL HEALTH SERVICE TRUST', 'organizationUrl': 'http://', 'address': 'BROCKLEY HILL, HA7 4LP, STANMORE, UK', 'longitude': -0.3000027, 'latitude': 51.6281174}
,
{'id': 995688026, 'name': "THE BRIGHAM AND WOMEN'S HOSPITAL INC", 'organizationUrl': 'http://www.brighamandwomens.org', 'address': 'FRANCIS STREET 75, 2241, BOSTON MA, US', 'longitude': -71.1060436296658, 'latitude': 42.33568}
,
{'id': 999898020, 'name': 'UNIVERSITA DEGLI STUDI DI SIENA', 'organizationUrl': 'http://www.unisi.it', 'address': 'VIA BANCHI DI SOTTO 55, 53100, SIENA, IT', 'longitude': 11.3331018, 'latitude': 43.3190538}
,
{'id': 999844670, 'name': 'OULUN YLIOPISTO', 'organizationUrl': 'http://www.oulu.fi', 'address': 'PENTTI KAITERAN KATU 1, 90014, OULU, FI', 'longitude': 25.4641628, 'latitude': 65.059029}
,
{'id': 999994729, 'name': 'HELMHOLTZ ZENTRUM MUENCHEN DEUTSCHES FORSCHUNGSZENTRUM FUER GESUNDHEIT UND UMWELT GMBH', 'organizationUrl': 'http://www.helmholtz-muenchen.de', 'address': 'INGOLSTADTER LANDSTRASSE 1, 85764, NEUHERBERG, DE', 'longitude': 11.59049290423819, 'latitude': 48.22115909999999}
,
{'id': 999882209, 'name': 'UNIVERSITAET ULM', 'organizationUrl': 'http://www.uni-ulm.de', 'address': 'HELMHOLTZSTRASSE  16, 89081, ULM, DE', 'longitude': 9.962937715684372, 'latitude': 48.4251253}
,
{'id': 999986290, 'name': 'UNIVERSITE LIBRE DE BRUXELLES', 'organizationUrl': 'http://www.ulb.ac.be', 'address': 'AVENUE FRANKLIN ROOSEVELT 50, 1050, BRUXELLES, BE', 'longitude': 4.3798235, 'latitude': 50.8126596}
,
{'id': 999866786, 'name': "UNIVERSITA DEGLI STUDI GABRIELE D'ANNUNZIO DI CHIETI-PESCARA", 'organizationUrl': 'http://www.unich.it', 'address': 'Via dei Vestini 31, 66013, CHIETI, IT', 'longitude': 14.1450245, 'latitude': 42.3722715}
,
{'id': 999862712, 'name': 'UNIVERSITA DI PISA', 'organizationUrl': 'http://www.unipi.it', 'address': 'LUNGARNO PACINOTTI 43/44, 56126, PISA, IT', 'longitude': 10.7495727, 'latitude': 43.6929179}
,
{'id': 906446474, 'name': 'UNITED KINGDOM RESEARCH AND INNOVATION', 'organizationUrl': 'http://', 'address': 'POLARIS HOUSE NORTH STAR AVENUE, SN2 1FL, SWINDON, UK', 'longitude': -1.784127489985214, 'latitude': 51.56698885}
,
{'id': 999975814, 'name': 'UNIVERSITETET I OSLO', 'organizationUrl': 'http://www.uio.no', 'address': 'PROBLEMVEIEN 5-7, 313, OSLO, NO', 'longitude': 10.7203, 'latitude': 59.939594}
,
{'id': 997721534, 'name': 'HANNOVERSCHE KINDERHEILANSTALT', 'organizationUrl': 'http://', 'address': 'JANUSZ KORCZAK ALLEE 12, 30173, HANNOVER, DE', 'longitude': 9.7776821, 'latitude': 52.3602084}
,
{'id': 997511820, 'name': 'CENTRE HOSPITALIER DE LUXEMBOURG', 'organizationUrl': 'http://www.chl.lu', 'address': 'RUE NICOLAS ERNEST BARBLE 4, 1210, LUXEMBOURG, LU', 'longitude': 6.0983254, 'latitude': 49.6186998}
,
{'id': 999991334, 'name': 'KATHOLIEKE UNIVERSITEIT LEUVEN', 'organizationUrl': 'http://www.kuleuven.be', 'address': 'OUDE MARKT 13, 3000, LEUVEN, BE', 'longitude': 4.699407640208996, 'latitude': 50.8780592}
,
{'id': 999923240, 'name': 'UNIVERZA V LJUBLJANI', 'organizationUrl': 'http://www.uni-lj.si', 'address': 'KONGRESNI TRG  12, 1000, LJUBLJANA, SI', 'longitude': 14.50395534262418, 'latitude': 46.048982}
,
{'id': 999854467, 'name': 'UNIVERSITA VITA-SALUTE SAN RAFFAELE', 'organizationUrl': 'http://www.unihsr.it', 'address': 'VIA OLGETTINA 58, 20132, MILANO, IT', 'longitude': 9.267637, 'latitude': 45.5069165}
,
{'id': 999897729, 'name': 'TECHNISCHE UNIVERSITAET DRESDEN', 'organizationUrl': 'http://www.tu-dresden.de/', 'address': 'HELMHOLTZSTRASSE 10, 1069, DRESDEN, DE', 'longitude': 13.72377735847676, 'latitude': 51.02903415}
,
{'id': 916450860, 'name': 'UNIVERSITE CLERMONT AUVERGNE', 'organizationUrl': 'http://creation-uca.fr/', 'address': '49 BOULEVARD FRANCOIS MITTERRAND, 63000, CLERMONT-FERRAND, FR', 'longitude': 3.0896583, 'latitude': 45.7716625}
,
{'id': 924988800, 'name': 'FARMACEUTSKI FAKULTET UNIVERZITETAU BEOGRADU', 'organizationUrl': 'http://', 'address': 'VOJVODE STEPE 450, 52600, BELGRADE, RS', 'longitude': 20.49495056476472, 'latitude': 44.74726335}
,
{'id': 999866883, 'name': 'UNIVERSITAT WIEN', 'organizationUrl': 'http://www.univie.ac.at', 'address': 'UNIVERSITATSRING 1, 1010, WIEN, AT', 'longitude': 16.3606859941145, 'latitude': 48.2131284}
,
{'id': 999534270, 'name': 'INTE:LIGAND SOFTWARE-ENTWICKLUNGS-UND CONSULTING GMBH', 'organizationUrl': 'http://www.inteligand.com', 'address': 'CLEMENS MARIA HOFBAUER GASSE 6, 2344, MARIA ENZERSDORF, AT', 'longitude': 16.25901715047171, 'latitude': 48.099344}
,
{'id': 898914424, 'name': 'EXVASTAT LTD', 'organizationUrl': 'http://', 'address': '5 TENISON AVENUE, CB1 2DX, CAMBRIDGE, UK', 'longitude': 0.1342625528951388, 'latitude': 52.1963417}
,
{'id': 998732274, 'name': 'ACADEMISCH MEDISCH CENTRUM BIJ DE UNIVERSITEIT VAN AMSTERDAM', 'organizationUrl': 'http://www.amc.nl', 'address': 'MEIBERGDREEF 15, 1105AZ, AMSTERDAM, NL', 'longitude': 4.9601299, 'latitude': 52.294169}
,
{'id': 999867077, 'name': 'UNIVERSIDAD POMPEU FABRA', 'organizationUrl': 'http://www.upf.edu', 'address': 'PLACA DE LA MERCE, 10-12, 8002, BARCELONA, ES', 'longitude': 2.179371165394068, 'latitude': 41.379198}
,
{'id': 999988230, 'name': 'EUROPEAN MOLECULAR BIOLOGY LABORATORY', 'organizationUrl': 'http://www.embl.de', 'address': 'Meyerhofstrasse  1, 69117, HEIDELBERG, DE', 'longitude': 8.709621040772102, 'latitude': 49.3845214}
,
{'id': 999522533, 'name': 'CERTARA UK LIMITED', 'organizationUrl': 'http://www.certara.com', 'address': 'ONE LONDON WALL 6TH FLOOR, EC2Y 5EB, LONDON, UK', 'longitude': -0.0961851761375838, 'latitude': 51.5171674}
,
{'id': 998047066, 'name': 'MOLECULAR NETWORKS GMBH COMPUTERCHEMIE', 'organizationUrl': 'http://www.molecular-networks.com', 'address': 'NEUMEYERSTR 28-34, 90411, NURNBERG, DE', 'longitude': 11.1192905, 'latitude': 49.481136}
,
{'id': 918285906, 'name': 'PDS COMPUTER SOFTWARE LIMITED', 'organizationUrl': 'http://', 'address': '9 KNIGHTON GRANGE ROAD, LE2 2LF, LEICESTER, UK', 'longitude': -1.0954294, 'latitude': 52.6113202}
,
{'id': 999637187, 'name': 'FUNDACION PARA LA INVESTIGACION DEL HOSPITAL CLINICO DE LA COMUNITAT VALENCIANA, FUNDACION INCLIVA', 'organizationUrl': 'http://', 'address': 'AV MENENDEZ PELAYO 4, 46010, VALENCIA, ES', 'longitude': -0.3611333, 'latitude': 39.4794155}
,
{'id': 999997736, 'name': 'AARHUS UNIVERSITET', 'organizationUrl': 'http://www.au.dk', 'address': 'NORDRE RINGGADE 1, 8000, AARHUS C, DK', 'longitude': 10.199381, 'latitude': 56.171028}
,
{'id': 999853691, 'name': 'WESTFAELISCHE WILHELMS-UNIVERSITAET MUENSTER', 'organizationUrl': 'http://', 'address': 'SCHLOSSPLATZ  2, 48149, MUENSTER, DE', 'longitude': 7.599243326272159, 'latitude': 51.96734215}
,
{'id': 999451238, 'name': 'INSTITUTO DE BIOLOGIA MOLECULAR E CELULAR-IBMC', 'organizationUrl': 'http://www.ibmc.up.pt', 'address': 'RUA ALFREDO ALLEN 208, 4200 135, PORTO, PT', 'longitude': -8.6031184, 'latitude': 41.1758872}
,
{'id': 999483830, 'name': 'HELSINGIN JA UUDENMAAN SAIRAANHOITOPIIRIN KUNTAYHTYMÄ', 'organizationUrl': 'http://www.hus.fi', 'address': 'STENBACKINKATU 9, 29, HELSINKI, FI', 'longitude': 24.90997425610933, 'latitude': 60.18759185}
,
{'id': 991287815, 'name': 'CONSULTECH TECHNOLOGIEBERATUNG GMBH', 'organizationUrl': 'http://www.consultech.de', 'address': 'MORGENSTERNSTRASSE 24, 12207, BERLIN, DE', 'longitude': 13.32249745762114, 'latitude': 52.42699570000001}
,
{'id': 999987648, 'name': 'RUPRECHT-KARLS-UNIVERSITAET HEIDELBERG', 'organizationUrl': 'http://www.uni-heidelberg.de', 'address': 'SEMINARSTRASSE 2, 69117, HEIDELBERG, DE', 'longitude': 8.708121150018732, 'latitude': 49.40964}
,
{'id': 990413942, 'name': 'EUROPEAN SOCIETY OF ANAESTHESIOLOGY AND INTENSIVE CARE AISBL', 'organizationUrl': 'http://', 'address': 'RUE DES COMEDIENS 24, 1000, BRUXELLES, BE', 'longitude': 4.358859107893995, 'latitude': 50.8502783}
,
{'id': 998753226, 'name': 'CLINIQUES UNIVERSITAIRES SAINT-LUC', 'organizationUrl': 'http://www.saintluc.be', 'address': 'AVENUE HIPPOCRATE 10, 1200, BRUXELLES, BE', 'longitude': 4.455659900438511, 'latitude': 50.85179905}
,
{'id': 999839529, 'name': 'CHRISTIAN-ALBRECHTS-UNIVERSITAET  ZU KIEL', 'organizationUrl': 'http://www.uni-kiel.de', 'address': 'OLSHAUSENSTRASSE  40, 24118, KIEL, DE', 'longitude': 10.1248577, 'latitude': 54.3390593}
,
{'id': 912719367, 'name': 'EUROPEAN SOCIETY OF REGIONAL ANAESTHESIA AND PAIN THERAPY', 'organizationUrl': 'http://', 'address': 'RUE DAUBIN 7, 1203, GENEVE, CH', 'longitude': 6.129469552255947, 'latitude': 46.20639405}
,
{'id': 913577429, 'name': 'MRC SYSTEMS GMBH MEDIZINTECHNISCHE SYSTEME', 'organizationUrl': 'http://', 'address': 'HANS BUNTE STRASSE 10, 69123, HEIDELBERG, DE', 'longitude': 8.6467802, 'latitude': 49.4074924}
,
{'id': 984564454, 'name': "CHILDREN'S HOSPITAL CORPORATION", 'organizationUrl': 'http://www.childrenshospital.org/', 'address': 'LONGWOOD AVENUE 300, 2115, BOSTON, US', 'longitude': -71.10505184127022, 'latitude': 42.3366778}
,
{'id': 912856331, 'name': 'ENDOMETRIOSIS.ORG LTD', 'organizationUrl': 'http://', 'address': 'SOUTHGATE ROAD 89, N1 3JS, LONDON, UK', 'longitude': 0.04890759078125002, 'latitude': 51.55602045}
,
{'id': 968074454, 'name': 'GRUNENTHAL GMBH', 'organizationUrl': 'http://www.grunenthal.com', 'address': 'ZIEGLERSTRASSE 6, 52078, AACHEN, DE', 'longitude': 6.1507064749759, 'latitude': 50.7663544}
,
{'id': 937729071, 'name': 'EUROPEAN PAIN FEDERATION EFIC', 'organizationUrl': 'http://', 'address': 'GRENSSTRAAT 7/3, 1831, MACHELEN, BE', 'longitude': 4.4478949, 'latitude': 50.8831051}
,
{'id': 999847677, 'name': 'QUEEN MARY UNIVERSITY OF LONDON', 'organizationUrl': 'http://www.qmul.ac.uk', 'address': '327 MILE END ROAD, E1 4NS, LONDON, UK', 'longitude': -0.0462035, 'latitude': 51.5218636}
,
{'id': 999904034, 'name': 'AALBORG UNIVERSITET', 'organizationUrl': 'http://www.aau.dk', 'address': 'FREDRIK BAJERS VEJ 7K, 9220, AALBORG, DK', 'longitude': 9.984469, 'latitude': 57.01396}
,
{'id': 921109770, 'name': 'PELVIC PAIN SUPPORT NETWORK', 'organizationUrl': 'http://', 'address': '21 STOURPAINE RD, BH17 9AT, POOLE, UK', 'longitude': -1.9745902, 'latitude': 50.7536588}
,
{'id': 999987745, 'name': 'UNIVERSITA DEGLI STUDI DI ROMA LA SAPIENZA', 'organizationUrl': 'http://www.uniroma1.it', 'address': 'Piazzale Aldo Moro  5, 185, ROMA, IT', 'longitude': 12.5153388, 'latitude': 41.9013068}
,
{'id': 998511114, 'name': 'Universitätsklinikum Jena', 'organizationUrl': 'http://www.uniklinikum-jena.de', 'address': 'Bachstraße  18, 7743, Jena, DE', 'longitude': 11.57844022355285, 'latitude': 50.92971515000001}
,
{'id': 947141272, 'name': 'NV SAS INSTITUTE SA', 'organizationUrl': 'http://', 'address': 'HERTENBERGSTRAAT 6, 3080, TERVUREN, BE', 'longitude': 4.516078, 'latitude': 50.8212496}
,
{'id': 912680858, 'name': 'INTERNATIONAL CONSORTIUM FOR HEALTHOUTCOMES MEASUREMENT LTD', 'organizationUrl': 'http://', 'address': '1 EVERSHOLT STREET, NW1 2DN, LONDON, UK', 'longitude': -0.132269, 'latitude': 51.528009}
,
{'id': 999979306, 'name': 'WEIZMANN INSTITUTE OF SCIENCE', 'organizationUrl': 'http://www.weizmann.ac.il', 'address': 'HERZL STREET 234, 7610001, REHOVOT, IL', 'longitude': 34.8166465, 'latitude': 31.8834062}
,
{'id': 999790544, 'name': 'ORION OYJ', 'organizationUrl': 'http://www.orion.fi/en/', 'address': 'ORIONINTIE 1, 2200, ESPOO, FI', 'longitude': 24.7766489634773, 'latitude': 60.180084}
,
{'id': 919676595, 'name': 'VARIAN MEDICAL SYSTEM DEUTSCHLAND GMBH', 'organizationUrl': 'http://', 'address': 'ALSFELDER STRASSE 6, 64289, DARMSTADT, DE', 'longitude': 8.6532636, 'latitude': 49.8872682}
,
{'id': 902999288, 'name': 'TAMPEREEN KORKEAKOULUSAATIO SR', 'organizationUrl': 'http://', 'address': 'KALEVANTIE 4, 33100, TAMPERE, FI', 'longitude': 23.77920677767629, 'latitude': 61.49412325}
,
{'id': 994154068, 'name': 'ASTELLAS PHARMA EUROPE BV', 'organizationUrl': 'http://www.astellas.com', 'address': 'SYLVIUSWEG 84, 2333 BE, LEIDEN, NL', 'longitude': 4.4677965, 'latitude': 52.1677205}
,
{'id': 999857474, 'name': 'UNIVERSITAETSKLINIKUM HAMBURG-EPPENDORF', 'organizationUrl': 'http://www.uke.uni-hamburg.de', 'address': 'Martinistrasse  52, 20251, HAMBURG, DE', 'longitude': 9.9725421, 'latitude': 53.5915188}
,
{'id': 946588566, 'name': 'CANCER INTELLIGENCE LIMITED', 'organizationUrl': 'http://', 'address': '11 ALMA VALE RD, BS8 2HL, BRISTOL, UK', 'longitude': -2.614659030288722, 'latitude': 51.4622829}
,
{'id': 986208507, 'name': 'Stichting Hogeschool Utrecht', 'organizationUrl': 'http://www.hu.nl', 'address': 'PADUALAAN 99, 3584 CH, UTRECHT, NL', 'longitude': 5.1684392, 'latitude': 52.0840626}
,
{'id': 994014000, 'name': 'BOEHRINGER INGELHEIM VETMEDICA GMBH', 'organizationUrl': 'http://www.boehringer-ingelheim.com', 'address': 'BINGER STRASSE 173, 55218, INGELHEIM, DE', 'longitude': 8.0389388, 'latitude': 49.9724208}
,
{'id': 998217301, 'name': 'BUNDESINSTITUT FUR IMPFSTOFFE UND BIOMEDIZINISCHE ARZNEIMITTEL', 'organizationUrl': 'http://www.pei.de', 'address': 'PAUL-EHRLICH-STRASSE  51-59, 63225, LANGEN, DE', 'longitude': 8.648541675083768, 'latitude': 50.00627535}
,
{'id': 995444071, 'name': 'INTERVET INTERNATIONAL BV', 'organizationUrl': 'http://www.intervet.com/', 'address': 'WIM DE KORVERSTRAAT 35, 5831 AN, BOXMEER, NL', 'longitude': 5.9386412, 'latitude': 51.6429633}
,
{'id': 998254743, 'name': 'OSTERREICHISCHE AGENTUR FUR GESUNDHEIT UND ERNAHRUNGSSICHERHEIT GMBH', 'organizationUrl': 'http://www.ages.at', 'address': 'SPARGELFELDSTRASSE  191, 1220, WIEN, AT', 'longitude': 16.4839186, 'latitude': 48.2533378}
,
{'id': 998203042, 'name': 'MERIAL SAS', 'organizationUrl': 'http://www.merial.com', 'address': 'AVENUE TONY GARNIER  29, 69007, LYON, FR', 'longitude': 4.8391494, 'latitude': 45.7261735}
,
{'id': 905129214, 'name': 'PFIZER MANUFACTURING AUSTRIA GMBH', 'organizationUrl': 'http://', 'address': 'UFERSTRASSE 15, 2304, ORTH AN DER DONAU, AT', 'longitude': 16.70730966519252, 'latitude': 48.13685285}
,
{'id': 999992304, 'name': 'JRC -JOINT RESEARCH CENTRE- EUROPEAN COMMISSION', 'organizationUrl': 'http://www.jrc.ec.europa.eu', 'address': 'Rue de la Loi 200, 1049, BRUSSELS, BE', 'longitude': 4.383206, 'latitude': 50.8431406}
,
{'id': 951238552, 'name': 'SIVAS CUMHURIYET UNIVERSITESI', 'organizationUrl': 'http://', 'address': 'KAYSERI CADDESI, 58140, SIVAS, TR', 'longitude': 37.0156434, 'latitude': 39.736716}
,
{'id': 920678702, 'name': 'RD-BIOTECH', 'organizationUrl': 'http://', 'address': '3 RUE HENRI BAIGUE, 25000, BESANCON, FR', 'longitude': 6.0259601, 'latitude': 47.2521804}
,
{'id': 999454924, 'name': 'INSTITUT GUSTAVE ROUSSY', 'organizationUrl': 'http://www.igr.fr', 'address': 'Rue Camille Desmoulins  39, 94805, VILLEJUIF, FR', 'longitude': 2.350227026484196, 'latitude': 48.7963014}
,
{'id': 986308029, 'name': 'EXPERIMENTELLE PHARMAKOLOGIE UND ONKOLOGIE BERLIN-BUCH GMBH', 'organizationUrl': 'http://www.epo-berlin.com', 'address': 'ROBERT-ROESSLE-STRASSE 10, 13125, BERLIN, DE', 'longitude': 13.501880584969, 'latitude': 52.62443935}
,
{'id': 999990073, 'name': 'DEUTSCHES KREBSFORSCHUNGSZENTRUM HEIDELBERG', 'organizationUrl': 'http://www.dkfz.de', 'address': 'IM NEUENHEIMER FELD 280, 69120, HEIDELBERG, DE', 'longitude': 8.6723675803449, 'latitude': 49.414429}
,
{'id': 999563661, 'name': 'ALLEANZA CONTRO IL CANCRO', 'organizationUrl': 'http://www.alleanzacontroilcancro.it', 'address': 'VIA GIORGIO RIBOTTA 5, 144, ROMA, IT', 'longitude': 12.4587433, 'latitude': 41.8202225}
,
{'id': 999780068, 'name': 'PHARMAMAR, S.A.', 'organizationUrl': 'http://www.pharmamar.com', 'address': 'Avda. de los Reyes , Poligono Industrial La Mina 1, 28770, COLMENAR VIEJO (MADRID), ES', 'longitude': -3.7539461, 'latitude': 40.6572566}
,
{'id': 983790006, 'name': 'CHARLES RIVER DISCOVERY RESEARCH SERVICES GERMANY GMBH', 'organizationUrl': 'http://www.charlesriver.com', 'address': 'AM FLUGHAFEN 12-14, 79108, FREIBURG, DE', 'longitude': 7.835155567183907, 'latitude': 48.0237092}
,
{'id': 983656340, 'name': 'XENTECH SAS', 'organizationUrl': 'http://www.xentech.eu', 'address': 'rue Pierre Fontaine  4, 91000, Evry, FR', 'longitude': 2.452156, 'latitude': 48.6201265}
,
{'id': 998645362, 'name': 'ST. ANNA KINDERKREBSFORSCHUNG', 'organizationUrl': 'http://www.ccri.at/science', 'address': 'ZIMMERMANNPLATZ 10, 1090, WIEN, AT', 'longitude': 16.3441017, 'latitude': 48.2167586}
,
{'id': 999896759, 'name': 'INSTITUT CURIE', 'organizationUrl': 'http://www.curie.fr', 'address': "rue d'Ulm 26, 75231, PARIS, FR", 'longitude': 2.3452042, 'latitude': 48.8443364}
,
{'id': 999992692, 'name': 'CHARITE - UNIVERSITAETSMEDIZIN BERLIN', 'organizationUrl': 'http://www.charite.de', 'address': 'Chariteplatz 1, 10117, BERLIN, DE', 'longitude': 13.3745186, 'latitude': 52.526136}
,
{'id': 935256153, 'name': 'PRINSES MAXIMA CENTRUM VOOR KINDERONCOLOGIE BV', 'organizationUrl': 'http://www.prinsesmaximacentrum.nl', 'address': 'HEIDELBERGLAAN 25, 3584CS, UTRECHT, NL', 'longitude': 5.1833223, 'latitude': 52.0898838}
,
{'id': 999976396, 'name': 'UNIVERSITAT ZURICH', 'organizationUrl': 'http://', 'address': 'RAMISTRASSE 71, 8006, ZURICH, CH', 'longitude': 8.5490938, 'latitude': 47.3746371}
,
{'id': 952679584, 'name': 'INNOVATIVE THERAPIES FOR CHILDREN WITH CANCER ASSOCIATION', 'organizationUrl': 'http://', 'address': 'RUE EDOUARD VAILLANT 114, 94805, VILLEJUIF, FR', 'longitude': 2.349176667974052, 'latitude': 48.79527545000001}
,
{'id': 999460841, 'name': 'THE INSTITUTE OF CANCER RESEARCH: ROYAL CANCER HOSPITAL', 'organizationUrl': 'http://www.icr.ac.uk', 'address': 'OLD BROMPTON ROAD 123, SW7 3RP, LONDON, UK', 'longitude': -0.1814284846650456, 'latitude': 51.49082865}
,
{'id': 951246021, 'name': 'ABBVIE DEUTSCHLAND GMBH & CO KG', 'organizationUrl': 'http://www.abbvie.de/', 'address': 'MAINZER STR. 81, 65205, WIESBADEN, DE', 'longitude': 8.250318118768032, 'latitude': 50.06553515}
,
{'id': 999867465, 'name': 'UNIVERSITATSKLINIKUM BONN', 'organizationUrl': 'http://www.ukb.uni-bonn.de', 'address': 'VENUSBERG-CAMPUS 1, 53127, BONN, DE', 'longitude': 7.104641914215888, 'latitude': 50.700016}
,
{'id': 999991722, 'name': 'AGENCIA ESTATAL CONSEJO SUPERIOR DEINVESTIGACIONES CIENTIFICAS', 'organizationUrl': 'http://www.csic.es', 'address': 'CALLE SERRANO 117, 28006, MADRID, ES', 'longitude': -3.6838749, 'latitude': 40.447703}
,
{'id': 951261638, 'name': 'BIOGEN IDEC LIMITED', 'organizationUrl': 'http://www.biogen.com/', 'address': 'INNOVATION HOUSE 70 NORDEN ROAD, SL6 3AY, MAIDENHEAD, UK', 'longitude': -0.7428413212091391, 'latitude': 51.51290425000001}
,
{'id': 948646712, 'name': 'ECRIN EUROPEAN CLINICAL RESEARCH INFRASTRUCTURE NETWORK', 'organizationUrl': 'http://www.ecrin.org', 'address': '5 RUE WATT, 75013, PARIS, FR', 'longitude': 2.383257, 'latitude': 48.8284111}
,
{'id': 910575085, 'name': 'ASSOCIATION FRANCAISE GOUGEROT-SJOGREN', 'organizationUrl': 'http://', 'address': "11 RUE DE L'EVANGILE, 75018, PARIS, FR", 'longitude': 2.3613913, 'latitude': 48.891729}
,
{'id': 999643007, 'name': 'ETHNIKO KAI KAPODISTRIAKO PANEPISTIMIO ATHINON', 'organizationUrl': 'http://www.elke.uoa.gr', 'address': '6 CHRISTOU LADA STR, 10561, ATHINA, EL', 'longitude': 23.7322131, 'latitude': 37.9784332}
,
{'id': 999899281, 'name': 'UNIVERSITA DEGLI STUDI DI UDINE', 'organizationUrl': 'http://www.uniud.it', 'address': 'VIA PALLADIO  8, 33100, UDINE, IT', 'longitude': 13.232762, 'latitude': 46.0662531}
,
{'id': 999902676, 'name': 'UNIVERSITE DE BRETAGNE OCCIDENTALE', 'organizationUrl': 'http://www.univ-brest.fr/', 'address': 'RUE DES ARCHIVES 3, 29238, BREST, FR', 'longitude': -4.5071204, 'latitude': 48.3985381}
,
{'id': 999907526, 'name': 'THE UNIVERSITY OF BIRMINGHAM', 'organizationUrl': 'http://www.bham.ac.uk', 'address': 'Edgbaston, B15 2TT, BIRMINGHAM, UK', 'longitude': -1.92293629437215, 'latitude': 52.4601054}
,
{'id': 999985417, 'name': 'UNIVERSITY OF NEWCASTLE UPON TYNE', 'organizationUrl': 'http://www.ncl.ac.uk/', 'address': 'KINGS GATE, NE1 7RU, NEWCASTLE UPON TYNE, UK', 'longitude': -1.613657679809753, 'latitude': 54.9789969}
,
{'id': 997441592, 'name': 'HELSE STAVANGER HF', 'organizationUrl': 'http://', 'address': 'GERD RAGNA BLOCH THORSENS GATE 8, 4011, STAVANGER, NO', 'longitude': 5.7324792, 'latitude': 58.9522491}
,
{'id': 999477525, 'name': 'FUNDACIO CLINIC PER A LA RECERCA BIOMEDICA', 'organizationUrl': 'http://www.fundacioclinic.org', 'address': 'CARRER ROSSELLO 149, 8036, BARCELONA, ES', 'longitude': 1.8297238, 'latitude': 41.7321735}
,
{'id': 897691060, 'name': 'UNIVERSITE DE PARIS', 'organizationUrl': 'http://', 'address': '85 BD SAINT GERMAIN, 75006, PARIS, FR', 'longitude': 2.3402141, 'latitude': 48.8518367}
,
{'id': 999974456, 'name': 'UNIVERSITETET I BERGEN', 'organizationUrl': 'http://www.uib.no', 'address': 'MUSEPLASSEN 1, 5020, BERGEN, NO', 'longitude': 5.322711, 'latitude': 60.388117}
,
{'id': 999895013, 'name': 'TARTU ULIKOOL', 'organizationUrl': 'http://www.ut.ee', 'address': 'ULIKOOLI 18, 51005, TARTU, EE', 'longitude': 26.71938714818049, 'latitude': 58.38125225}
,
{'id': 964630469, 'name': 'SWISS CLINICAL TRIAL ORGANISATION', 'organizationUrl': 'http://www.scto.ch', 'address': 'EFFINGERSTRASSE 35, 3008, BERN, CH', 'longitude': 7.4316946, 'latitude': 46.945844}
,
{'id': 948301683, 'name': 'EUROPEAN CYSTIC FIBROSIS SOCIETY', 'organizationUrl': 'http://', 'address': 'KASTANIEPARKEN 7, 7470, KARUP, DK', 'longitude': 9.172085, 'latitude': 56.313424}
,
{'id': 999986096, 'name': 'UNIVERSITEIT GENT', 'organizationUrl': 'http://www.ugent.be', 'address': 'SINT PIETERSNIEUWSTRAAT 25, 9000, GENT, BE', 'longitude': 3.7272675, 'latitude': 51.0479866}
,
{'id': 999448037, 'name': 'ISTITUTO GIANNINA GASLINI', 'organizationUrl': 'http://www.gaslini.org', 'address': 'VIA GEROLAMO GASLINI  5, 16147, GENOVA, IT', 'longitude': 8.9883856, 'latitude': 44.3915258}
,
{'id': 965288323, 'name': 'EURORDIS - EUROPEAN ORGANISATION FOR RARE DISEASES ASSOCIATION', 'organizationUrl': 'http://www.eurordis.org', 'address': 'RUE DIDOT 96, 75014, Paris, FR', 'longitude': 2.3145182, 'latitude': 48.827419}
,
{'id': 993762091, 'name': 'Associação para Investigação e Desenvolvimento da Faculdade de Medicina', 'organizationUrl': 'http://', 'address': 'Av. Prof. Egas Moniz, 1649-028, Lisbon, PT', 'longitude': -9.1604117, 'latitude': 38.7501447}
,
{'id': 999841663, 'name': 'UNIVERSITA DEGLI STUDI DI CAGLIARI', 'organizationUrl': 'http://', 'address': 'VIA UNIVERSITA  40, 9124, CAGLIARI, IT', 'longitude': 9.1150052, 'latitude': 39.2175849}
,
{'id': 969261831, 'name': 'ARSENAL.IT - CENTRO VENETO RICERCAE INNOVAZIONE PER LA SANITA DIGITALE', 'organizationUrl': 'http://', 'address': 'VIALE GUGLIELMO OBERDAN 5, 31100, TREVISO TV, IT', 'longitude': 12.2347596, 'latitude': 45.6644591}
,
{'id': 999841081, 'name': 'UNIVERSITATSKLINIKUM HEIDELBERG', 'organizationUrl': 'http://www.klinikum.uni-heidelberg.de', 'address': 'IM NEUENHEIMER FELD 672, 69120, HEIDELBERG, DE', 'longitude': 8.667629675222951, 'latitude': 49.41991925000001}
,
{'id': 919500346, 'name': 'OKIDS GMBH', 'organizationUrl': 'http://', 'address': 'ZIMMERMANNPLATZ 10, 1090, WIEN, AT', 'longitude': 16.3441017, 'latitude': 48.2167586}
,
{'id': 998562427, 'name': 'ROBERT BOSCH GESELLSCHAFT FUR MEDIZINISCHE FORSCHUNG MBH', 'organizationUrl': 'http://www.ikp-stuttgart.de', 'address': 'AUERBACHSTRASSE 112, 70376, STUTTGART, DE', 'longitude': 9.185776352762453, 'latitude': 48.8151669}
,
{'id': 999923434, 'name': 'UNIVERZITA KARLOVA', 'organizationUrl': 'http://www.cuni.cz', 'address': 'OVOCNY TRH 560/5, 116 36, PRAHA 1, CZ', 'longitude': 14.4243055, 'latitude': 50.0864286}
,
{'id': 999516228, 'name': 'INSTYTUT POMNIK CENTRUM ZDROWIA DZIECKA', 'organizationUrl': 'http://www.czd.pl', 'address': 'Aleja Dzieci Polskich  20, 4730, WARSZAWA, PL', 'longitude': 21.18977073089599, 'latitude': 52.20515575}
,
{'id': 918199964, 'name': 'HELIOS DR. HORST SCHMIDT KLINIKEN WIESBADEN GMBH', 'organizationUrl': 'http://', 'address': 'LUDWIG ERHARD STRASSE 100, 65199, WIESBADEN, DE', 'longitude': 8.191835945394736, 'latitude': 50.0645774}
,
{'id': 914180769, 'name': 'GYERMEKGYOGYASZATI KLINIKAI VIZSGALOI HALOZAT', 'organizationUrl': 'http://', 'address': 'BOKOR UTCA 15-21, 1037, BUDAPEST, HU', 'longitude': 19.03813473333333, 'latitude': 47.53138486666667}
,
{'id': 999975620, 'name': 'UNIVERSITY COLLEGE LONDON', 'organizationUrl': 'http://', 'address': 'GOWER STREET, WC1E 6BT, LONDON, UK', 'longitude': -0.1342365, 'latitude': 51.5239619}
,
{'id': 929663521, 'name': 'ECNP RESEARCH AND SCHOLARSHIP STICHTING (DE ECNP RESEARCH AND SCHOLARSHIP FOUNDATION)', 'organizationUrl': 'http://', 'address': 'BOLOGNALAAN 28, 3584CJ, UTRECHT, NL', 'longitude': 5.1772053, 'latitude': 52.0845886}
,
{'id': 983562444, 'name': 'HELSE BERGEN HF*HAUKELAND UNIVERSITY HOSPITAL', 'organizationUrl': 'http://www.helse-bergen.no/', 'address': 'JONAS LIES VEI 65, 5021, BERGEN, NO', 'longitude': 5.354133, 'latitude': 60.37432}
,
{'id': 894464355, 'name': 'AZIENDA SANITARIA UNIVERSITARIA FRIULI CENTRALE', 'organizationUrl': 'http://', 'address': 'VIA POZZUOLO 330, 33100, UDINE, IT', 'longitude': 13.2200533, 'latitude': 46.036799}
,
{'id': 999801990, 'name': 'EMPIRICA GESELLSCHAFT FUR KOMMUNIKATIONS UND TECHNOLOGIEFORSCHUNG MBH', 'organizationUrl': 'http://', 'address': 'OXFORDSTRASSE 2, 53111, BONN, DE', 'longitude': 7.1009714, 'latitude': 50.7376171}
,
{'id': 999845446, 'name': 'THE PROVOST, FELLOWS, FOUNDATION SCHOLARS & THE OTHER MEMBERS OF BOARD OF THE COLLEGE OF THE HOLY & UNDIVIDED TRINITY OF QUEEN ELIZABETH NEAR DUBLIN', 'organizationUrl': 'http://www.tcd.ie', 'address': 'College Green, 2, DUBLIN, IE', 'longitude': -6.261470074285892, 'latitude': 53.34452035}
,
{'id': 974224448, 'name': 'HL7 INTERNATIONAL FONDATION', 'organizationUrl': 'http://', 'address': 'SQUARE DE MEEUS 38-40, 1000, BRUSSELS, BE', 'longitude': 4.3695069, 'latitude': 50.8405639}
,
{'id': 950932323, 'name': 'SPMS - SERVICOS PARTILHADOS DO MINISTERIO DA SAUDE EPE', 'organizationUrl': 'http://', 'address': 'AVENIDA DA REPUBLICA, 61, 1050 189, LISBOA, PT', 'longitude': -9.1467745, 'latitude': 38.7413509}
,
{'id': 913658909, 'name': 'THE SYNERGIST', 'organizationUrl': 'http://', 'address': 'AVENUE LOUISE 523, 1050, BRUXELLES, BE', 'longitude': 4.3717768, 'latitude': 50.8152705}
,
{'id': 907578852, 'name': 'ECHALLIANCE COMPANY LIMITED BY GUARANTEE', 'organizationUrl': 'http://', 'address': '13A BALLYHOY AVENUE RAHENY, DUBLIN 5, DUBLIN, IE', 'longitude': -6.1820364, 'latitude': 53.3758648}
,
{'id': 974308353, 'name': 'BETH ISRAEL DEACONESS MEDICAL CENTER, INC NON PROFIT CORPORATION', 'organizationUrl': 'http://', 'address': 'BROOKLINE AVENUE 330, 2105, BOSTON MA, US', 'longitude': -71.10492182209876, 'latitude': 42.3397554}
,
{'id': 936047673, 'name': 'TRIFORK PUBLIC AS', 'organizationUrl': 'http://', 'address': 'Europaplads 2, 1., 8000, AARHUS C, DK', 'longitude': 10.212518, 'latitude': 56.153869}
,
{'id': 906108429, 'name': 'NORSK E HELSE AS', 'organizationUrl': 'http://', 'address': 'KARL JOHANS GATE 5, 154, OSLO, NO', 'longitude': 10.7483817, 'latitude': 59.9114484}
,
{'id': 934716057, 'name': 'DATAWIZARD SRL', 'organizationUrl': 'http://', 'address': 'VIA SALARIA 719, 138, ROMA, IT', 'longitude': 12.5477478, 'latitude': 42.031902}
,
{'id': 965672346, 'name': 'AKERSHUS UNIVERSITETSSYKEHUS HF', 'organizationUrl': 'http://', 'address': 'SYKEHUSVEIEN 25, 1478, LORENSKOG, NO', 'longitude': 10.9942469, 'latitude': 59.9331715}
,
{'id': 895093303, 'name': 'MDSOL EUROPE LTD', 'organizationUrl': 'http://', 'address': '12 HAMMERSMITH GROVE, W6 7AP, LONDON, UK', 'longitude': -0.2258565, 'latitude': 51.49416}
,
{'id': 923112723, 'name': 'THE EUROPEAN INSTITUTE FOR INNOVATION THROUGH HEALTH DATA', 'organizationUrl': 'http://', 'address': 'OUDE MECHELSESTRAAT 165, 1853, STROMBEEK-BEVER, BE', 'longitude': 4.350047560393731, 'latitude': 50.91415895}
,
{'id': 968984411, 'name': 'BIOCOM', 'organizationUrl': 'http://www.biocom.de', 'address': 'LUTZOWSTRASSE 33-36, 10785, BERLIN, DE', 'longitude': 13.3654238, 'latitude': 52.5031297}
,
{'id': 949995400, 'name': 'ASCLEPIA OUTSOURCING SOLUTIONS BVBA', 'organizationUrl': 'http://www.asclepia.com', 'address': 'DAMVALLEISTRAAT 49, 9070, DESTELBERGEN, BE', 'longitude': 3.8030398, 'latitude': 51.0487168}
,
{'id': 999852236, 'name': 'LINKOPINGS UNIVERSITET', 'organizationUrl': 'http://', 'address': 'CAMPUS VALLA, 581 83, LINKOPING, SE', 'longitude': 15.5765096, 'latitude': 58.4004423}
,
{'id': 999897632, 'name': 'UNIVERSITAETSKLINIKUM AACHEN', 'organizationUrl': 'http://www.ukaachen.de', 'address': 'Pauwelsstrasse 30, 52074, AACHEN, DE', 'longitude': 6.044572716416758, 'latitude': 50.7769086}
,
{'id': 997297353, 'name': 'UNIVERSITAETSKLINIKUM WUERZBURG - KLINIKUM DER BAYERISCHEN JULIUS-MAXIMILIANS-UNIVERSITAT', 'organizationUrl': 'http://www.uk-wuerzburg.de', 'address': 'JOSEF-SCHNEIDER-STRASSE 2, 97080, WURZBURG, DE', 'longitude': 9.9538007, 'latitude': 49.8007685}
,
{'id': 918321408, 'name': 'EXALENZ BIOSCIENCE LTD', 'organizationUrl': 'http://', 'address': "4 HA'MAAYAN STR, 7177872, MODIIN, IL", 'longitude': 34.965689, 'latitude': 31.917283}
,
{'id': 951490461, 'name': 'INST CARDIOMETABOLISME NUTRITION ICAN', 'organizationUrl': 'http://www.ican-institute.org', 'address': "BOULEVARD DE L'HOPITAL 47-83, 75013, PARIS, FR", 'longitude': 2.364810992797805, 'latitude': 48.83565205}
,
{'id': 997903603, 'name': 'SOMALOGIC INC', 'organizationUrl': 'http://', 'address': 'WILDERNESS PLACE 2945, 80301, BOULDER COLORADO, US', 'longitude': -105.2486227446719, 'latitude': 40.02645063842473}
,
{'id': 999976493, 'name': 'UNIVERSITAET BERN', 'organizationUrl': 'http://www.unibe.ch', 'address': 'HOCHSCHULSTRASSE 6, 3012, BERN, CH', 'longitude': 7.4369747, 'latitude': 46.9500797}
,
{'id': 999861936, 'name': 'UNIVERSITA DEGLI STUDI DI TORINO', 'organizationUrl': 'http://www.unito.it', 'address': 'VIA GIUSEPPE VERDI 8, 10124, TORINO, IT', 'longitude': 7.6897242, 'latitude': 45.069379}
,
{'id': 999734284, 'name': 'UNIVERSITA DEGLI STUDI DI PALERMO', 'organizationUrl': 'http://www.unipa.it', 'address': 'PIAZZA MARINA 61, 90133, PALERMO, IT', 'longitude': 13.3686381967455, 'latitude': 38.11777515}
,
{'id': 996727866, 'name': 'UNIVERSITAIR ZIEKENHUIS ANTWERPEN', 'organizationUrl': 'http://www.uza.be', 'address': 'DRIE EIKENSTRAAT 655, 2650, EDEGEM, BE', 'longitude': 4.411052099538913, 'latitude': 51.15462585}
,
{'id': 999976978, 'name': 'THE UNIVERSITY OF NOTTINGHAM', 'organizationUrl': 'http://www.nottingham.ac.uk', 'address': 'University Park, NG7 2RD, NOTTINGHAM, UK', 'longitude': -1.200295692745743, 'latitude': 52.9387428}
,
{'id': 999995796, 'name': 'UNIVERSITA DEGLI STUDI DI MILANO', 'organizationUrl': 'http://www.unimi.it', 'address': 'Via Festa Del Perdono  7, 20122, MILANO, IT', 'longitude': 9.194659978280598, 'latitude': 45.4600626}
,
{'id': 937047258, 'name': 'EUROPEAN ASSOCIATION FOR THE STUDYOF THE LIVER', 'organizationUrl': 'http://', 'address': 'RUE DAUBIN 7, 1203, GENEVE, CH', 'longitude': 6.129469552255947, 'latitude': 46.20639405}
,
{'id': 915872643, 'name': 'INTERCEPT PHARMA EUROPE LTD', 'organizationUrl': 'http://', 'address': 'ONE, GLASS WHARF, BS2 0ZX, BRISTOL, UK', 'longitude': -2.613134233681572, 'latitude': 51.44168505}
,
{'id': 994850722, 'name': 'UNIVERSITAETSMEDIZIN DER JOHANNES GUTENBERG-UNIVERSITAET MAINZ', 'organizationUrl': 'http://www.um-mainz.de/', 'address': 'Langenbeckstrasse  1, 55131, Mainz, DE', 'longitude': 8.255682962054465, 'latitude': 49.99353474999999}
,
{'id': 999650088, 'name': 'OREBRO UNIVERSITY', 'organizationUrl': 'http://www.oru.se', 'address': 'FAKULTETSGATAN  1, 70182, OREBRO, SE', 'longitude': 15.2501624, 'latitude': 59.2551319}
,
{'id': 933962949, 'name': 'NORDIC BIOSCIENCE A/S', 'organizationUrl': 'http://', 'address': 'HERLEV HOVEDGADE 205-207, 2730, HERLEV, DK', 'longitude': 12.4409416, 'latitude': 55.7227323}
,
{'id': 998853621, 'name': 'SERVICIO ANDALUZ DE SALUD', 'organizationUrl': 'http://www.sas.junta-andalucia.es/principal/default.asp', 'address': 'AVENIDA DE LA CONSTITUCION 18, 41071, SEVILLA, ES', 'longitude': -5.759158, 'latitude': 37.9378384}
,
{'id': 993640065, 'name': 'Faculdade de Farmácia da Universidade de Lisboa', 'organizationUrl': 'http://', 'address': 'Av. Prof. Gama Pinto, 1649-003, Lisboa, PT', 'longitude': -9.1601002, 'latitude': 38.7533058}
,
{'id': 935349273, 'name': 'BIOXYDYN LIMITED', 'organizationUrl': 'http://', 'address': 'RUTHERFORD HOUSE, PENCROFT WAY, M15 6SZ, MANCHESTER, UK', 'longitude': -2.2394389, 'latitude': 53.4797366}
,
{'id': 999903840, 'name': 'THE UNIVERSITY OF MANCHESTER', 'organizationUrl': 'http://www.manchester.ac.uk', 'address': 'OXFORD ROAD, M13 9PL, MANCHESTER, UK', 'longitude': -2.234321, 'latitude': 53.4669225}
,
{'id': 999975426, 'name': 'UNIVERSITY OF LEEDS', 'organizationUrl': 'http://www.leeds.ac.uk', 'address': 'WOODHOUSE LANE, LS2 9JT, LEEDS, UK', 'longitude': -1.5544901, 'latitude': 53.8097175}
,
{'id': 997912333, 'name': 'Bayer Pharma AG', 'organizationUrl': 'http://www.bayerpharma.com', 'address': 'Muellerstrasse 178, 13353, Berlin, DE', 'longitude': 13.3686144, 'latitude': 52.5405427}
,
{'id': 919886600, 'name': 'TRULY LABS AB', 'organizationUrl': 'http://', 'address': 'MEDICON VILLAGE, 223 81, LUND, SE', 'longitude': 13.2179207, 'latitude': 55.7115222}
,
{'id': 999592858, 'name': 'GE HEALTHCARE LIMITED', 'organizationUrl': 'http://', 'address': 'AMERSHAM PLACE, HP7 9NA, LITTLE CHALFONT, UK', 'longitude': -0.5644177, 'latitude': 51.6678341}
,
{'id': 929738793, 'name': 'BRUKER BIOSPIN MRI GMBH', 'organizationUrl': 'http://', 'address': 'RUDOLF-PLANK-STRASSE 23, 76275, ETTLINGEN, DE', 'longitude': 8.366461622529734, 'latitude': 48.9413937}
,
{'id': 999980373, 'name': 'CHALMERS TEKNISKA HOEGSKOLA AB', 'organizationUrl': 'http://www.chalmers.se', 'address': '-, 41296, GOETEBORG, SE', 'longitude': 11.95797301012625, 'latitude': 57.69853815991465}
,
{'id': 974626416, 'name': 'DEUTSCHES ZENTRUM FUR NEURODEGENERATIVE ERKRANKUNGEN EV', 'organizationUrl': 'http://www.dzne.de', 'address': 'SIGMUND FREUD STRASSE 27, 53127, BONN, DE', 'longitude': 7.1000084, 'latitude': 50.7042211}
,
{'id': 983240210, 'name': 'INSTITUT DU CERVEAU ET DE LA MOELLE EPINIERE', 'organizationUrl': 'http://icm-institute.org/', 'address': "BOULEVARD DE L'HOPITAL 47, 75013, PARIS, FR", 'longitude': 2.364292817571354, 'latitude': 48.83540395}
,
{'id': 999913249, 'name': 'H. LUNDBECK AS', 'organizationUrl': 'http://www.lundbeck.com', 'address': 'OTTILIAVEJ 7-9, 2500, VALBY, DK', 'longitude': 12.5160932, 'latitude': 55.6592666}
,
{'id': 984284124, 'name': 'GENEXPLAIN GMBH', 'organizationUrl': 'http://www.genexplain.com', 'address': 'AM EXER 19 B, 38302, WOLFENBUTTEL, DE', 'longitude': 10.559339, 'latitude': 52.1779953}
,
{'id': 999867368, 'name': 'ROYAL COLLEGE OF SURGEONS IN IRELAND', 'organizationUrl': 'http://www.rcsi.ie', 'address': "Saint Stephen's Green 123, 2, DUBLIN, IE", 'longitude': -6.262939062374113, 'latitude': 53.33917155}
,
{'id': 999878620, 'name': 'UNIVERSITE DU LUXEMBOURG', 'organizationUrl': 'http://wwwen.uni.lu', 'address': "2 AVENUE DE L'UNIVERSITE, 4365, ESCH-SUR-ALZETTE, LU", 'longitude': 5.949164, 'latitude': 49.5044535}
,
{'id': 999853400, 'name': 'HERIOT-WATT UNIVERSITY', 'organizationUrl': 'http://www.hw.ac.uk', 'address': 'Riccarton, EH14 4AS, EDINBURGH, UK', 'longitude': -3.323447514558347, 'latitude': 55.91029585}
,
{'id': 927696652, 'name': 'MEDICINES AND HEALTHCARE PRODUCTS REGULATORY AGENCY', 'organizationUrl': 'http://', 'address': '10 South Colonnade, Canary Wharf, E14 4PU, LONDON, UK', 'longitude': -0.02177362516131851, 'latitude': 51.50450455}
,
{'id': 906787623, 'name': 'THE INTERNATIONAL COUNCIL FOR HARMONISATION OF TECHNICAL REQUIREMENTS FOR PHARMACEUTICALS FOR HUMAN USE', 'organizationUrl': 'http://', 'address': 'Route de Pré-Bois 20, 1215, GENEVE, CH', 'longitude': 6.1063602, 'latitude': 46.2290226}
,
{'id': 907057768, 'name': 'LAEGEMIDDELSTYRELSEN', 'organizationUrl': 'http://', 'address': 'AXEL HEIDES GADE 1, 2300, KOBENHAVN S, DK', 'longitude': 12.569961, 'latitude': 55.661384}
,
{'id': 919995628, 'name': 'CSL BEHRING GMBH', 'organizationUrl': 'http://', 'address': 'EMIL VON BEHRING STRASSE 76, 35041, MARBURG, DE', 'longitude': 8.7483742, 'latitude': 50.8205185}
,
{'id': 997827555, 'name': 'Stiftelsen WHO Collaborating Centre for International Drug Monitoring', 'organizationUrl': 'http://www.who-umc.org', 'address': 'Bredgrand 7, S-75140, UPPSALA, SE', 'longitude': 17.6433773, 'latitude': 59.8587137}
,
{'id': 905259679, 'name': 'INTERNATIONAL HEALTH TERMINOLOGY STANDARDS DEVELOPMENT ORGANISATION', 'organizationUrl': 'http://', 'address': 'ONE KINGDOM STREET, W2 6BD, LONDON, UK', 'longitude': -0.1817026550842624, 'latitude': 51.51899589999999}
,
{'id': 950797493, 'name': 'TAKEDA PHARMACEUTICALS INTERNATIONAL AG', 'organizationUrl': 'http://www.takeda.com', 'address': 'THURGAUERSTRASSE 130, 8152, GLATTPARK, CH', 'longitude': 8.5596797, 'latitude': 47.4233874}
,
{'id': 904282210, 'name': 'DYNAMIC42 GMBH', 'organizationUrl': 'http://', 'address': 'WINZERLAER STR 2, 7745, JENA, DE', 'longitude': 11.57025558020943, 'latitude': 50.90995775}
,
{'id': 899494484, 'name': 'BLUEBIRD BIO INC.', 'organizationUrl': 'http://', 'address': '60 BINNEY STREET, 2142, CAMBRIDGE MA, US', 'longitude': -71.07920985416666, 'latitude': 42.36526675}
,
{'id': 999878426, 'name': 'MEDIZINISCHE HOCHSCHULE HANNOVER', 'organizationUrl': 'http://www.mh-hannover.de', 'address': 'Carl-Neuberg-Strasse  1, 30625, HANNOVER, DE', 'longitude': 9.804349751361295, 'latitude': 52.38359095}
,
{'id': 999854564, 'name': 'UNIVERSITAET LEIPZIG', 'organizationUrl': 'http://www.uni-Ieipzig.de', 'address': 'RITTERSTRASSE  26, 4109, LEIPZIG, DE', 'longitude': 12.38027793291597, 'latitude': 51.3411859}
,
{'id': 911008869, 'name': 'T-CURX GMBH', 'organizationUrl': 'http://', 'address': 'FRIEDRICH-BERGIUS-RING 15, 97076, WURZBURG, DE', 'longitude': 9.9985424, 'latitude': 49.8042501}
,
{'id': 999855437, 'name': 'MEDIZINISCHE UNIVERSITAT INNSBRUCK', 'organizationUrl': 'http://www.i-med.ac.at', 'address': 'CHRISTOPH PROBST PLATZ 1, 6020, INNSBRUCK, AT', 'longitude': 11.38462935065851, 'latitude': 47.2628185}
,
{'id': 997723086, 'name': 'BIOSCI CONSULTING BVBA', 'organizationUrl': 'http://biosciconsulting.com', 'address': 'WEG NAAR GENEUTH 95, 3631, MAASMECHELEN, BE', 'longitude': 5.734109501927414, 'latitude': 50.95511185}
,
{'id': 999991916, 'name': 'EBERHARD KARLS UNIVERSITAET TUEBINGEN', 'organizationUrl': 'http://www.uni-tuebingen.de', 'address': 'GESCHWISTER-SCHOLL-PLATZ, 72074, TUEBINGEN, DE', 'longitude': 9.059721732699312, 'latitude': 48.52441205}
,
{'id': 999962622, 'name': 'INSTITUT DE RECHERCHES SERVIER', 'organizationUrl': 'http://www.servier.fr', 'address': '3 Rue de la Republique, 92150, SURESNES, FR', 'longitude': 2.222584, 'latitude': 48.8631006}
,
{'id': 999856116, 'name': 'HEINRICH-HEINE-UNIVERSITAET DUESSELDORF', 'organizationUrl': 'http://www.uni-duesseldorf.de', 'address': 'UNIVERSITAETSSTRASSE 1, 40225, DUSSELDORF, DE', 'longitude': 6.7948539, 'latitude': 51.1884273}
,
{'id': 999584128, 'name': 'AIT AUSTRIAN INSTITUTE OF TECHNOLOGY GMBH', 'organizationUrl': 'http://www.ait.ac.at/', 'address': 'GIEFINGGASSE 4, 1210, WIEN, AT', 'longitude': 16.42719372729318, 'latitude': 48.2690574}
,
{'id': 972556339, 'name': 'DEN SELVEJENDE INSTITUTION DANSK BORNEASTMA CENTER', 'organizationUrl': 'http://', 'address': 'LEDREBORG ALLE 34, 2820, GENTOFTE, DK', 'longitude': 12.54421, 'latitude': 55.740812}
,
{'id': 999977463, 'name': 'TECHNISCHE UNIVERSITAET MUENCHEN', 'organizationUrl': 'http://www.tu-muenchen.de', 'address': 'Arcisstrasse  21, 80333, MUENCHEN, DE', 'longitude': 11.56775314178376, 'latitude': 48.14955455}
,
{'id': 999912667, 'name': 'LONDON SCHOOL OF HYGIENE AND TROPICAL MEDICINE ROYAL CHARTER', 'organizationUrl': 'http://www.lshtm.ac.uk/', 'address': 'KEPPEL STREET, WC1E 7HT, LONDON, UK', 'longitude': -0.130198, 'latitude': 51.5204239}
,
{'id': 952087787, 'name': 'LEO PHARMA AS', 'organizationUrl': 'http://', 'address': 'INDUSTRIPARKEN 55, 2750, BALLERUP, DK', 'longitude': 12.393723, 'latitude': 55.726768}
,
{'id': 999875710, 'name': 'KLINIKUM RECHTS DER ISAR DER TECHNISCHEN UNIVERSITAT MUNCHEN', 'organizationUrl': 'http://www.med.tu.muenchen.de', 'address': 'ISMANINGER STRASSE 22, 81675, MUENCHEN, DE', 'longitude': 11.6008687, 'latitude': 48.1362476}
,
{'id': 999974262, 'name': 'UNIVERSITY OF BRISTOL', 'organizationUrl': 'http://www.bristol.ac.uk', 'address': 'BEACON HOUSE QUEENS ROAD, BS8 1QU, BRISTOL, UK', 'longitude': -2.608117552871224, 'latitude': 51.4578375}
,
{'id': 998872439, 'name': 'HAHN-SCHICKARD-GESELLSCHAFT FUER ANGEWANDTE FORSCHUNG E.v.', 'organizationUrl': 'http://www.hsg-imit.de', 'address': 'WILHELM-SCHICKARD-STRASSE 10, 78052, Villingen, DE', 'longitude': 8.4903962, 'latitude': 48.064312}
,
{'id': 938197193, 'name': 'GNA BIOSOLUTIONS GMBH', 'organizationUrl': 'http://', 'address': 'Am Klopferspitz 19, 82152, Martinsried, DE', 'longitude': 11.4602482, 'latitude': 48.107602}
,
{'id': 999842924, 'name': 'UNIVERSITY OF BATH', 'organizationUrl': 'http://www.bath.ac.uk/', 'address': 'CLAVERTON DOWN, BA2 7AY, BATH, UK', 'longitude': -2.3276287, 'latitude': 51.3686485}
,
{'id': 999907914, 'name': 'UNIVERSITAT BASEL', 'organizationUrl': 'http://www.unibas.ch', 'address': 'PETERSPLATZ 1, 4051, BASEL, CH', 'longitude': 7.582858345566262, 'latitude': 47.55823375}
,
{'id': 955318178, 'name': 'Q-BIOLOGICALS NV', 'organizationUrl': 'http://www.q-biologicals.com', 'address': 'TECHNOLOGIEPARK 4, 9052, GENT, BE', 'longitude': 3.709943, 'latitude': 51.0100995}
,
{'id': 999975329, 'name': 'UNIVERSITY OF SOUTHAMPTON', 'organizationUrl': 'http://www.southampton.ac.uk', 'address': 'Highfield, SO17 1BJ, SOUTHAMPTON, UK', 'longitude': -1.39643021294856, 'latitude': 50.92996995}
,
{'id': 999463460, 'name': 'MIKROBIOLOGICKY USTAV AV CR V.V.I', 'organizationUrl': 'http://www.biomed.cas.cz/mbu', 'address': 'VIDENSKA 1083, 142 00, PRAHA 4, CZ', 'longitude': 14.4658267, 'latitude': 50.0171939}
,
{'id': 999846610, 'name': 'UNIVERSIDAD DE SALAMANCA', 'organizationUrl': 'http://www.usal.es', 'address': 'CALLE PATIO DE ESCUELAS 1, 37008, SALAMANCA, ES', 'longitude': -5.667593061936921, 'latitude': 40.9615887}
,
{'id': 988316026, 'name': '"INSTITUTO TUMORI ""GIOVANNI PAOLO II"""', 'organizationUrl': 'http://www.oncologico.bari.it', 'address': 'VIA ORAZIO FLACCO 65, 70126, BARI, IT', 'longitude': 16.7675768, 'latitude': 40.8905851}
,
{'id': 922258444, 'name': 'MINDBYTES', 'organizationUrl': 'http://', 'address': 'SCHOONDREEF 7, 2330, MERKSPLAS, BE', 'longitude': 4.885975318462416, 'latitude': 51.34882285}
,
{'id': 954843557, 'name': "CENTRE FEDERAL D'EXPERTISE DES SOINS DE SANTE", 'organizationUrl': 'http://', 'address': 'BOULEVARD DU JARDIN BOTANIQUE 55, 1000, BRUXELLES, BE', 'longitude': 4.365079334400793, 'latitude': 50.85260625}
,
{'id': 999969703, 'name': 'ISTITUTO EUROPEO DI ONCOLOGIA SRL', 'organizationUrl': 'http://www.ieo.it', 'address': 'Via Filodrammatici 10, 20121, MILANO, IT', 'longitude': 9.1880102, 'latitude': 45.4676507}
,
{'id': 927359189, 'name': 'AbbVie Ltd', 'organizationUrl': 'http://', 'address': 'Vanwall Road, SL6 4XE, Maidenhead, UK', 'longitude': -0.7472869, 'latitude': 51.5119411}
,
{'id': 999812466, 'name': 'ACTELION PHARMACEUTICALS LTD', 'organizationUrl': 'http://', 'address': 'GEWERBESTRASSE 16, 4123, ALLSCHWIL, CH', 'longitude': 7.544479, 'latitude': 47.5576761}
,
{'id': 950126835, 'name': 'AMGEN LIMITED', 'organizationUrl': 'http://', 'address': 'Cambridge Science Park - Milton Road 240, CB4 0WD, CAMBRIDGE, UK', 'longitude': 0.1430459283723487, 'latitude': 52.23561235}
,
{'id': 999866495, 'name': 'UNIVERSITATSKLINIKUM ERLANGEN', 'organizationUrl': 'http://www.uk-erlangen.de', 'address': 'MAXIMILIANSPLATZ 2, 91054, ERLANGEN, DE', 'longitude': 11.01044055, 'latitude': 49.60085085}
,
{'id': 940741115, 'name': "INTERNATIONAL ALLIANCE OF PATIENT'ORGANIZATIONS", 'organizationUrl': 'http://www.iapo.org.uk', 'address': '49-51 EAST ROAD, N1 6AH, LONDON, UK', 'longitude': -0.08795894061099155, 'latitude': 51.5283957}
,
{'id': 917706040, 'name': 'STEINBEISSER PROJECT MANAGEMENT UG (HAFTUNGSBESCHRANKT)', 'organizationUrl': 'http://', 'address': 'PRINZREGENTENSTRASSE 100, 81677, MUNCHEN, DE', 'longitude': 11.6096132, 'latitude': 48.1384644}
,
{'id': 922250005, 'name': 'MUSCULAR DYSTROPHY GROUP OF GREAT BRITAIN AND NORTHERN IRELAND', 'organizationUrl': 'http://', 'address': '61A GREAT SUFFOLK STREET, SE1 0BU, LONDON, UK', 'longitude': -0.0997458, 'latitude': 51.5014425}
,
{'id': 999981537, 'name': 'JOANNEUM RESEARCH FORSCHUNGSGESELLSCHAFT MBH', 'organizationUrl': 'http://www.joanneum.at', 'address': 'LEONHARDSTRASSE 59, 8010, GRAZ, AT', 'longitude': 15.455243588844, 'latitude': 47.07424325}
,
{'id': 932462747, 'name': 'HUMANITAS UNIVERSITY', 'organizationUrl': 'http://', 'address': 'VIA RITA LEVI MONTALCINI SNC, 20090, PIEVE EMANUELE, IT', 'longitude': 9.172648269891955, 'latitude': 45.36880290000001}
,
{'id': 999978433, 'name': 'LUDWIG-MAXIMILIANS-UNIVERSITAET MUENCHEN', 'organizationUrl': 'http://www.uni-muenchen.de', 'address': 'GESCHWISTER SCHOLL PLATZ  1, 80539, MUENCHEN, DE', 'longitude': 11.57983564833766, 'latitude': 48.15047575}
,
{'id': 999884731, 'name': 'SCUOLA SUPERIORE DI STUDI UNIVERSITARI E DI PERFEZIONAMENTO S ANNA', 'organizationUrl': 'http://www.sssup.it', 'address': 'PIAZZA MARTIRI DELLA LIBERTA 33, 56127, PISA, IT', 'longitude': 10.4040653, 'latitude': 43.7204003}
,
{'id': 926739941, 'name': "EUROPEAN FEDERATION OF CROHN'S AND ULCERATIVE COLITIS ASSOCIATIONS", 'organizationUrl': 'http://', 'address': 'RUE DES CHARTREUX 33, 1000, BRUXELLES, BE', 'longitude': 4.345375964847715, 'latitude': 50.8488045}
,
{'id': 999651931, 'name': 'VIB VZW', 'organizationUrl': 'http://www.vib.be', 'address': 'RIJVISSCHESTRAAT 120, 9052, ZWIJNAARDE - GENT, BE', 'longitude': 3.6940284, 'latitude': 51.0179757}
,
{'id': 999643880, 'name': 'AARHUS UNIVERSITETSHOSPITAL', 'organizationUrl': 'http://www.en.auh.dk/', 'address': 'PALLE JUUL-JENSENS BOULEVARD 99, 8200, AARHUS, DK', 'longitude': 10.172115, 'latitude': 56.191909}
,
{'id': 997491644, 'name': 'EUROPEAN FEDERATION OF ASTHMA &ALLERGY ASSOCIATIONS IDEELL FORENING', 'organizationUrl': 'http://www.efanet.org', 'address': 'rue du Congrès  35, 1000, Brussels, BE', 'longitude': 4.3667305, 'latitude': 50.8492477}
,
{'id': 955212448, 'name': 'LIPOTYPE', 'organizationUrl': 'http://', 'address': 'TATZBERG  47, 1307, DRESDEN, DE', 'longitude': 13.7751858, 'latitude': 51.0562442}
,
{'id': 968164082, 'name': 'GEORGE WASHINGTON UNIVERSITY CORPORATION', 'organizationUrl': 'http://www.gwu.edu', 'address': 'EYE STREET NW 2121, 20052, WASHINGTON DC, US', 'longitude': -77.034472, 'latitude': 38.9013349}
,
{'id': 915910473, 'name': 'THIRD-I', 'organizationUrl': 'http://', 'address': 'SQUARE AMBIORIX 10, 1000, BRUSSELS, BE', 'longitude': 4.3838285, 'latitude': 50.8478449}
,
{'id': 988292067, 'name': 'METABOLON GMBH', 'organizationUrl': 'http://www.metabolomicdiscoveries.com', 'address': 'ZEPPELINSTRASSE 3, 85399, HALLBERGMOOS, DE', 'longitude': 11.73691473310671, 'latitude': 48.33033045000001}
,
{'id': 941506445, 'name': 'EATRIS ERIC', 'organizationUrl': 'http://www.eatris.eu', 'address': 'DE BOELELAAN 1118, 1081 HZ, AMSTERDAM, NL', 'longitude': 4.859345233442722, 'latitude': 52.33581245000001}
,
{'id': 913176043, 'name': 'DOCUMENTAL OU', 'organizationUrl': 'http://', 'address': 'AIA 5B 5, 10111, TALLINN, EE', 'longitude': 24.7508705, 'latitude': 59.4393924}
,
{'id': 941678329, 'name': 'ALLERGAN LIMITED', 'organizationUrl': 'http://', 'address': '1ST FLOOR MARLOW INTERNATIONAL THE PARKWAY, nan, MARLOW, UK', 'longitude': -0.7577837026413309, 'latitude': 51.57884985}
,
{'id': 900899529, 'name': 'OTSUKA NOVEL PRODUCTS GMBH', 'organizationUrl': 'http://', 'address': 'ERIKA MANN STRASSE 21, 80636, MUNCHEN, DE', 'longitude': 11.5434995, 'latitude': 48.1428413}
,
{'id': 999748834, 'name': 'SCIPROM SARL', 'organizationUrl': 'http://www.sciprom.ch', 'address': 'RUE DU CENTRE 70, 1025, SAINT SULPICE, CH', 'longitude': 6.5576737, 'latitude': 46.5101064}
,
{'id': 951542259, 'name': 'AZIENDA OSPEDALIERA CITTA DELLA SALUTE E DELLA SCIENZA DI TORINO', 'organizationUrl': 'http://www.cittadellasalute.to.it', 'address': 'CORSO BRAMANTE 88 90, 10126, TORINO, IT', 'longitude': 7.6728764, 'latitude': 45.0424255}
,
{'id': 911351958, 'name': 'IMPRENSA NACIONAL - CASA DA MOEDA, S. A.', 'organizationUrl': 'http://', 'address': 'AV. ANTÓNIO JOSÉ DE ALMEIDA, 1000-042, LISBOA, PT', 'longitude': -9.1419577, 'latitude': 38.7377865}
,
{'id': 999561430, 'name': 'NATIONAL RESEARCH AND DEVELOPMENT INSTITUTE FOR CRYOGENICS AND ISOTOPIC TECHNOLOGIES ICSI RM VALCEA', 'organizationUrl': 'http://', 'address': 'Strada Uzinei  4, 240050, RAMNICU VALCEA, RO', 'longitude': 24.2783366, 'latitude': 45.0505448}
,
{'id': 941353379, 'name': 'ARTEEVO TECHNOLOGIES LTD', 'organizationUrl': 'http://', 'address': '12 BEIT HORON ST, 6900109, TEL AVIV, IL', 'longitude': 34.813499, 'latitude': 32.114734}
,
{'id': 913001928, 'name': 'SCIENCE EXCHANGE, INC.', 'organizationUrl': 'http://', 'address': '203 FOREST AVE, 94301, PALO ALTO, US', 'longitude': -122.1603415150349, 'latitude': 37.44333785}
,
{'id': 919215942, 'name': 'PAASP GMBH', 'organizationUrl': 'http://', 'address': 'AM AUKOPF 14-1, 69118, HEIDELBERG, DE', 'longitude': 8.753111518103605, 'latitude': 49.41476135}
,
{'id': 999995408, 'name': 'FRIEDRICH-ALEXANDER-UNIVERSITAET ERLANGEN-NUERNBERG', 'organizationUrl': 'http://www.uni-erlangen.de', 'address': 'SCHLOSSPLATZ 4, 91054, ERLANGEN, DE', 'longitude': 11.00452823122757, 'latitude': 49.5978721}
,
{'id': 908208673, 'name': 'PENUMOLOGISCHES FORSCHUNGSINSTITUTAN DER LUNGENCLINIC GROSSHANSDORF GMBH', 'organizationUrl': 'http://', 'address': 'WOHRENDAMM 80, 22927, GROSSHANSDORF, DE', 'longitude': 10.28109192233365, 'latitude': 53.66047545}
,
{'id': 997919705, 'name': 'THE FOUNDATION FOR MEDICAL RESEARCH INFRASTRUCTURAL DEVELOPMENT AND HEALTH SERVICES NEXT TO THE MEDICAL CENTER TEL AVIV', 'organizationUrl': 'http://www.tasmc.org.il', 'address': 'WEIZMANN STREET 6, 64239, Tel Aviv, IL', 'longitude': 34.7886849, 'latitude': 32.0797592}
,
{'id': 999859705, 'name': 'UNIVERSITY OF NORTHUMBRIA AT NEWCASTLE', 'organizationUrl': 'http://www.northumbria.ac.uk', 'address': 'SUTHERLAND BUILDING COLLEGE STREET, NE1 8ST, NEWCASTLE UPON TYNE, UK', 'longitude': -1.608883110513279, 'latitude': 54.97686515}
,
{'id': 999465594, 'name': 'UNIVERSITA DEGLI STUDI DI SASSARI', 'organizationUrl': 'http://www.uniss.it', 'address': 'PIAZZA UNIVERSITA 21, 7100, SASSARI, IT', 'longitude': 8.5599051, 'latitude': 40.7249988}
,
{'id': 968762475, 'name': 'MCROBERTS BV', 'organizationUrl': 'http://www.mcroberts.nl', 'address': 'RAAMWEG 43, 2596HN, S GRAVENHAGE, NL', 'longitude': 4.3088292, 'latitude': 52.0947563}
,
{'id': 999977851, 'name': 'NORGES TEKNISK-NATURVITENSKAPELIGE UNIVERSITET NTNU', 'organizationUrl': 'http://www.ntnu.no', 'address': 'HOGSKOLERINGEN 1, 7491, TRONDHEIM, NO', 'longitude': 10.402356, 'latitude': 63.419132}
,
{'id': 999495858, 'name': 'VARSINAIS-SUOMEN SAIRAANHOITOPIIRIN KUNTAYHTYMA', 'organizationUrl': 'http://www.tykd.fin/en', 'address': 'KIINAMYLLYNKATU 4-8, 20520, TURKU, FI', 'longitude': 22.290889913242, 'latitude': 60.45315425}
,
{'id': 918481458, 'name': 'NOVAVAX INC', 'organizationUrl': 'http://', 'address': '20 FIRSTFIELD ROAD, 20878, GAITHERSBURG, US', 'longitude': -77.22516855085661, 'latitude': 39.1372968}
,
{'id': 951904457, 'name': 'BIOSISTEMIKA, RAZISKAVE IN RAZVOJ DOO', 'organizationUrl': 'http://www.biosistemika.com', 'address': 'KOPRSKA ULICA 98, 1000, LJUBLJANA, SI', 'longitude': 14.4824664, 'latitude': 46.0334429}
,
{'id': 951869343, 'name': 'APEIRON BIOLOGICS AG', 'organizationUrl': 'http://', 'address': 'CAMPUS-VIENNA-BIOCENTER 5, 1030, WIEN, AT', 'longitude': 16.4020452, 'latitude': 48.1881047}
,
{'id': 999681225, 'name': 'VIRONOVA AB', 'organizationUrl': 'http://www.vironova.com', 'address': 'GAVLEGATAN 22, 113 30, STOCKHOLM, SE', 'longitude': 18.0350343, 'latitude': 59.3461941}
,
{'id': 896048753, 'name': 'JLP HEALTH GMBH', 'organizationUrl': 'http://', 'address': 'HIMMELHOFGASSE 62, 1130, WIEN, AT', 'longitude': 16.25649266128585, 'latitude': 48.193798}
,
{'id': 999840111, 'name': 'JUSTUS-LIEBIG-UNIVERSITAET GIESSEN', 'organizationUrl': 'http://www.uni-giessen.de', 'address': 'LUDWIGSTRASSE 23, 35390, GIESSEN, DE', 'longitude': 8.677386490984166, 'latitude': 50.5802662}
,
{'id': 999844864, 'name': 'UNIVERSITA DEGLI STUDI DI ROMA TOR VERGATA', 'organizationUrl': 'http://www.uniroma2.it', 'address': 'VIA CRACOVIA 50, 133, ROMA, IT', 'longitude': 12.62934616528856, 'latitude': 41.85253715}
,
{'id': 923133869, 'name': 'GPOH GEMEINNUTZIGE GMBH', 'organizationUrl': 'http://', 'address': 'CHAUSSEESTRASSE 128-129, 10115, BERLIN, DE', 'longitude': 13.3860465, 'latitude': 52.5279121}
,
{'id': 930535939, 'name': 'EUROPEAN RESEARCH INITIATIVE ON CLL EV', 'organizationUrl': 'http://', 'address': 'JOSEPH STELZMANN STRASSE 9, 50931, KOLN, DE', 'longitude': 6.918598249077828, 'latitude': 50.9265303}
,
{'id': 952792395, 'name': 'MEDISAPIENS OY', 'organizationUrl': 'http://', 'address': 'MIKONKATU 17 C, 100, HELSINKI, FI', 'longitude': 24.9450685, 'latitude': 60.1716068}
,
{'id': 998135433, 'name': 'BARTS AND THE LONDON NHS TRUST', 'organizationUrl': 'http://', 'address': 'PRESCOT STREET  9, E1 8PR, LONDON, UK', 'longitude': -0.07018280795454548, 'latitude': 51.51141115}
,
{'id': 941614406, 'name': 'STIFTUNG ELN FOUNDATION', 'organizationUrl': 'http://', 'address': 'PETTENKOFERSTRASSE 22, 68169, MANNHEIM, DE', 'longitude': 8.471762797573435, 'latitude': 49.50381905}
,
{'id': 999978724, 'name': 'JOHANN WOLFGANG GOETHE-UNIVERSITATFRANKFURT AM MAIN', 'organizationUrl': 'http://www.uni-frankfurt.de', 'address': 'THEODOR W ADORNO PLATZ 1, 60323, FRANKFURT AM MAIN, DE', 'longitude': 8.668955210733918, 'latitude': 50.1277717}
,
{'id': 945511478, 'name': 'MENARINI RICERCHE SPA', 'organizationUrl': 'http://', 'address': 'VIA TITO SPERI 10, 71, POMEZIA, IT', 'longitude': 12.4869394, 'latitude': 41.6710129}
,
{'id': 974284491, 'name': 'LEUKANET EV', 'organizationUrl': 'http://', 'address': 'AM ROTHENANGER 1 B, 85521, RIEMERLING, DE', 'longitude': 11.67321067911616, 'latitude': 48.06030174999999}
,
{'id': 998293931, 'name': 'BUNDESINSTITUT FUR ARZNEIMITTEL UND MEDIZINPRODUKTE', 'organizationUrl': 'http://www.bfarm.de', 'address': 'KURT GEORG KIESINGER ALLEE 3, 53175, BONN, DE', 'longitude': 7.135959129061401, 'latitude': 50.70626725}
,
{'id': 923788910, 'name': 'FONDAZIONE ITALIANA SINDROMI MIELODISPLASTICHE ETS', 'organizationUrl': 'http://', 'address': 'VIA MARCONI 36, 40122, BOLOGNA, IT', 'longitude': 11.3385627, 'latitude': 44.5007158}
,
{'id': 986212290, 'name': 'MLL MUNCHNER LEUKAMIELABOR GMBH', 'organizationUrl': 'http://www.mll-online.com', 'address': 'MAX LEBSCHE PLATZ 31, 81377, MUNCHEN, DE', 'longitude': 11.4737575, 'latitude': 48.1080825}
,
{'id': 949486732, 'name': 'UNIVERSITE DE CORSE PASCAL PAOLI', 'organizationUrl': 'http://', 'address': 'AVENUE JEAN NICOLI 7, 20250, CORTE, FR', 'longitude': 9.1561007, 'latitude': 42.3062903}
,
{'id': 913858341, 'name': 'LIGUE NATIONALE CONTRE LE CANCER', 'organizationUrl': 'http://', 'address': '14 RUE CORVISART, 75013, PARIS, FR', 'longitude': 2.3464916, 'latitude': 48.8334955}
,
{'id': 998171032, 'name': 'CENTRE DE LUTTE CONTRE LE CANCER LEON BERARD', 'organizationUrl': 'http://www.lyon.fnclcc.fr', 'address': 'RUE LAENNEC 28, 69373, LYON, FR', 'longitude': 4.886011, 'latitude': 45.7368968}
,
{'id': 917202513, 'name': 'OWKIN FRANCE', 'organizationUrl': 'http://', 'address': '12 RUE MARTEL, 75010, PARIS, FR', 'longitude': 2.3532817, 'latitude': 48.8743335}
,
{'id': 997886240, 'name': 'DE DUVE INSTITUTE AISBL', 'organizationUrl': 'http://www.deduveinstitute.be', 'address': 'AVENUE HIPPOCRATE 75/50, 1200, BRUXELLES, BE', 'longitude': 4.4455574, 'latitude': 50.855446}
,
{'id': 998071704, 'name': 'INSTITUT DE RECHERCHE PIERRE FABRESAS', 'organizationUrl': 'http://www.pierre-fabre.com', 'address': 'PLACE ABEL GANCE 45, 92100, BOULOGNE BILLANCOURT, FR', 'longitude': 2.257637, 'latitude': 48.833618}
,
{'id': 991172094, 'name': 'INSTITUT JULES BORDET', 'organizationUrl': 'http://www.bordet.be', 'address': 'RUE HEGER BORDET 1, 1000, BRUXELLES, BE', 'longitude': 4.3471582, 'latitude': 50.833921}
,
{'id': 999902094, 'name': 'VRIJE UNIVERSITEIT BRUSSEL', 'organizationUrl': 'http://www.vub.ac.be', 'address': 'PLEINLAAN 2, 1050, BRUSSEL, BE', 'longitude': 4.395532308975499, 'latitude': 50.8225751}
,
{'id': 999990946, 'name': 'KUNGLIGA TEKNISKA HOEGSKOLAN', 'organizationUrl': 'http://www.kth.se', 'address': 'BRINELLVAGEN 8, 100 44, STOCKHOLM, SE', 'longitude': 18.0707826, 'latitude': 59.3498183}
,
{'id': 999983962, 'name': 'RHEINISCH-WESTFAELISCHE TECHNISCHE HOCHSCHULE AACHEN', 'organizationUrl': 'http://www.rwth-aachen.de', 'address': 'TEMPLERGRABEN 55, 52062, AACHEN, DE', 'longitude': 6.077794265131825, 'latitude': 50.7777954}
,
{'id': 912829365, 'name': 'SVANHOLM.COM APS', 'organizationUrl': 'http://', 'address': 'MARIENBERGVEJ 132, 1, 4760, VORDINGBORG, DK', 'longitude': 11.892536, 'latitude': 54.997612}
,
{'id': 905972435, 'name': 'RENTSCHLER BIOPHARMA SE', 'organizationUrl': 'http://', 'address': 'ERWIN-RENTSCHLER-STRASSE 21, 88471, LAUPHEIM, DE', 'longitude': 9.875466037252568, 'latitude': 48.23595835}
,
{'id': 940459136, 'name': 'M2P-LABS GMBH', 'organizationUrl': 'http://', 'address': 'ARNOLD-SOMMERFELD-RING 2, 52499, BAESWEILER, DE', 'longitude': 6.172770891186555, 'latitude': 50.91828925}
,
{'id': 990884004, 'name': 'UNIVERSITE DE MONS', 'organizationUrl': 'http://www.umons.ac.be', 'address': 'PLACE DU PARC 20, 7000, MONS, BE', 'longitude': 3.9529148, 'latitude': 50.4573775}
,
{'id': 915908921, 'name': 'SYNTHON BIOPHARMACEUTICALS BV', 'organizationUrl': 'http://', 'address': 'MICROWEG 22, 6503 GN, NIJMEGEN, NL', 'longitude': 5.8061243, 'latitude': 51.8394177}
,
{'id': 998535752, 'name': 'PRESENS PRECISION SENSING GMBH', 'organizationUrl': 'http://www.presens.de', 'address': 'AM BIOPARK 11, 93053, Regensburg, DE', 'longitude': 12.0988003, 'latitude': 48.9963739}
,
{'id': 912803563, 'name': 'IPRATECH SA', 'organizationUrl': 'http://', 'address': "RUE DE L'EPARGNE 56, 7000, MONS, BE", 'longitude': 3.956991814008416, 'latitude': 50.4472664}
,
{'id': 912742259, 'name': 'PAIA BIOTECH GMBH', 'organizationUrl': 'http://', 'address': 'GOTTFRIED-HAGEN-STRASSE 60-62, 51105, KOLN, DE', 'longitude': 7.0020932181772, 'latitude': 50.93256435}
,
{'id': 999901900, 'name': 'UNIVERSITAET HOHENHEIM', 'organizationUrl': 'http://www.uni-hohenheim.de', 'address': 'SCHLOSS HOHENHEIM, 70599, STUTTGART, DE', 'longitude': 9.2136676, 'latitude': 48.713425}
,
{'id': 994900095, 'name': 'MICROBIOTEC SRL', 'organizationUrl': 'http://', 'address': 'VIA DELLE VIGNE 12, 53035, MONTERIGGIONI, IT', 'longitude': 11.2871449, 'latitude': 43.3470408}
,
{'id': 999974650, 'name': 'UNIVERSITE DE GENEVE', 'organizationUrl': 'http://www.unige.ch', 'address': 'RUE DU GENERAL DUFOUR 24, 1211, GENEVE, CH', 'longitude': 6.1426293, 'latitude': 46.1997835}
,
{'id': 983202283, 'name': 'EIDGENOSSISCHES DEPARTEMENT FUR VERTEIDIGUNG, BEVOLKERUNGSSCHUTZ UND SPORT', 'organizationUrl': 'http://www.vbs.admin.ch/internet/vbs/en/home/departement.html/', 'address': 'BUNDESHAUS OST, CH-3003, BERN, CH', 'longitude': 7.44547626844644, 'latitude': 46.94655330000001}
,
{'id': 986293479, 'name': 'Centre de Recherches Medicales de Lambaréné', 'organizationUrl': 'http://www.cermel.org', 'address': 'nan, 118, Lambaréné, GA', 'longitude': 10.2215963, 'latitude': -0.695844}
,
{'id': 999844379, 'name': 'UNIVERSIDADE DE SAO PAULO', 'organizationUrl': 'http://www.usp.br', 'address': 'RUA DA REITORIA 109 BUTANTA, 05508 900, SAO PAULO SP, BR', 'longitude': -46.7250922, 'latitude': -23.5584528}
,
{'id': 994512095, 'name': "FUNDACIO INSTITUT UNIVERSITARI PERA LA RECERCA A L'ATENCIO PRIMARIA DE SALUT JORDI GOL I GURINA", 'organizationUrl': 'http://www.idiapjordigol.com', 'address': 'GRAN VIA DE LES CORTS CATALANES 587, 8007, BARCELONA, ES', 'longitude': 2.1656594, 'latitude': 41.387783400000004}
,
{'id': 998841205, 'name': 'CHU HOPITAUX DE BORDEAUX', 'organizationUrl': 'http://', 'address': 'RUE DUBERNAT  12, 33404, TALENCE, FR', 'longitude': -0.6021550087101983, 'latitude': 44.8129816}
,
{'id': 895404382, 'name': 'NUVISAN ICB GMBH', 'organizationUrl': 'http://', 'address': 'MULLERSTRASSE 178, 13353, BERLIN, DE', 'longitude': 13.3686144, 'latitude': 52.5405427}
,
{'id': 938466368, 'name': 'EXSCIENTIA LIMITED', 'organizationUrl': 'http://', 'address': 'LEVEL 3, DUNDEE ONE RIVER COURT, 5, DD1 3JT, DUNDEE, UK', 'longitude': -2.962030673056562, 'latitude': 56.45981235}
,
{'id': 999464430, 'name': 'STIFTUNG TIERAERZTLICHE HOCHSCHULE HANNOVER', 'organizationUrl': 'http://www.tiho-hannover.de', 'address': 'BUNTEWEG 2, 30559, HANNOVER, DE', 'longitude': 9.7980618, 'latitude': 52.3545175}
,
{'id': 999905101, 'name': 'UNIVERSITAET HAMBURG', 'organizationUrl': 'http://', 'address': 'MITTELWEG 177, 20148, HAMBURG, DE', 'longitude': 9.994978875267606, 'latitude': 53.5641091}
,
{'id': 999470347, 'name': 'HELMHOLTZ-ZENTRUM FUR INFEKTIONSFORSCHUNG GMBH', 'organizationUrl': 'http://www.helmholtz-hzi.de', 'address': 'INHOFFENSTRASSE 7, 38124, BRAUNSCHWEIG, DE', 'longitude': 10.53246453590352, 'latitude': 52.21109269999999}
,
{'id': 990186089, 'name': 'EIDGENOESSISCHES DEPARTEMENT DES INNERN', 'organizationUrl': 'http://www.edi.admin.ch/index.html?lang=de', 'address': 'Inselgasse  1, 3003, BERN, CH', 'longitude': 7.4458826, 'latitude': 46.9471581}
,
{'id': 895935651, 'name': 'AI-BIOPHARMA', 'organizationUrl': 'http://', 'address': '104 RUE DE LA GALERA, 34090, MONTPELLIER, FR', 'longitude': 3.8370139, 'latitude': 43.6372591}
,
{'id': 924592070, 'name': 'AICURIS ANTI-INFECTIVE CURES GMBH', 'organizationUrl': 'http://www.aicuris.com', 'address': 'FRIEDRICH EBERT STRASSE 475, 42117, WUPPERTAL, DE', 'longitude': 7.103952297171285, 'latitude': 51.2438141}
,
{'id': 999857765, 'name': 'UNIVERSITAET zu LUEBECK', 'organizationUrl': 'http://www.uni-luebeck.de/', 'address': 'RATZEBURGER ALLEE 160, 23562, LUBECK, DE', 'longitude': 10.7018074, 'latitude': 53.8338823}
,
{'id': 999642716, 'name': 'UNIWERSYTET JAGIELLONSKI', 'organizationUrl': 'http://', 'address': 'Ul. Golebia  24, 31007, KRAKOW, PL', 'longitude': 19.933235139716, 'latitude': 50.06086415}
,
{'id': 999881724, 'name': 'THE UNIVERSITY OF QUEENSLAND', 'organizationUrl': 'http://www.uq.edu.au', 'address': 'ST LUCIA, 4072, BRISBANE, AU', 'longitude': 153.0081642, 'latitude': -27.4987362}
,
{'id': 952759512, 'name': 'APITOPE INTERNATIONAL NV', 'organizationUrl': 'http://www.apitope.com', 'address': 'AGORALAAN A BIS, 3590, DIEPENBEEK, BE', 'longitude': 5.393119125069003, 'latitude': 50.92981315}
,
{'id': 989201927, 'name': 'Deutsches Rheuma-Forschungszentrum Berlin', 'organizationUrl': 'http://www.drfz.de', 'address': 'Chariteplatz  1, 10117, Berlin, DE', 'longitude': 13.3745186, 'latitude': 52.526136}
,
{'id': 999460550, 'name': 'FONDAZIONE PER L ISTITUTO DI RICERCA IN BIOMEDICINA', 'organizationUrl': 'http://www.irb.usi.ch', 'address': 'VIA VINCENZO VELA 6, 6500, BELLINZONA, CH', 'longitude': 9.0226887, 'latitude': 46.1947255}
,
{'id': 999974165, 'name': 'UNIVERSITY OF GLASGOW', 'organizationUrl': 'http://www.gla.ac.uk', 'address': 'UNIVERSITY AVENUE, G12 8QQ, GLASGOW, UK', 'longitude': -4.2907592, 'latitude': 55.8726875}
,
{'id': 910640172, 'name': 'NEUWAY PHARMA GMBH', 'organizationUrl': 'http://', 'address': 'LUDWIG-ERHARD-ALLEE 2, 53175, BONN, DE', 'longitude': 7.150529401069255, 'latitude': 50.7041019}
,
{'id': 999923337, 'name': 'THE OPEN UNIVERSITY', 'organizationUrl': 'http://www.open.ac.uk', 'address': 'WALTON HALL, MK7 6AA, MILTON KEYNES, UK', 'longitude': -0.7107932576521444, 'latitude': 52.02477025}
,
{'id': 960940395, 'name': 'PHARMACOIDEA FEJLESZTO ES SZOLGALTATO KFT', 'organizationUrl': 'http://www.pharmacoidea.eu', 'address': 'DERKOVITS FASOR 7-11, 6726, SZEGED, HU', 'longitude': 20.16604972190553, 'latitude': 46.24358225}
,
{'id': 999840887, 'name': 'UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA', 'organizationUrl': 'http://www.unimore.it', 'address': 'VIA UNIVERSITA 4, 41121, MODENA, IT', 'longitude': 10.92817547909191, 'latitude': 44.64505385}
,
{'id': 921822526, 'name': 'PLURIBUS ONE SRL', 'organizationUrl': 'http://', 'address': 'VIA VINCENZO BELLINI 9, 9128, CAGLIARI, IT', 'longitude': 9.1271708, 'latitude': 39.2220537}
,
{'id': 932760440, 'name': 'TEKNOLOGIAN TUTKIMUSKESKUS VTT OY', 'organizationUrl': 'http://www.vtt.fi', 'address': 'TEKNIIKANTIE 21, 2150, ESPOO, FI', 'longitude': 24.81316808883703, 'latitude': 60.18640205}
,
{'id': 999845349, 'name': 'UNIVERSITATSKLINIKUM SCHLESWIG-HOLSTEIN', 'organizationUrl': 'http://www.uni-kiel.de', 'address': 'Ratzeburger Allee 160, 23562, Lübeck, DE', 'longitude': 10.7018074, 'latitude': 53.8338823}
,
{'id': 949843595, 'name': 'GEORGE-HUNTINGTON-INSTITUT GMBH', 'organizationUrl': 'http://www.george-huntington-institut.de', 'address': 'JOHANN KRANE WEG 27, 48149, MUNSTER, DE', 'longitude': 7.597119375, 'latitude': 51.97518985}
,
{'id': 999849326, 'name': 'INSTITUT MINES-TELECOM', 'organizationUrl': 'http://www.institut-telecom.fr', 'address': '19 PLACE MARGUERITE PEREY, 91120, PALAISEAU, FR', 'longitude': 2.199889303772567, 'latitude': 48.7129116}
,
{'id': 999813339, 'name': 'INSTITUTO DE MEDICINA MOLECULAR JOAO LOBO ANTUNES', 'organizationUrl': 'http://www.imm.ul.pt', 'address': 'AVENIDA PROF EGAS MONIZ, 1649 028, LISBOA, PT', 'longitude': -9.1604117, 'latitude': 38.7501447}
,
{'id': 924908872, 'name': 'DREEM', 'organizationUrl': 'http://', 'address': '7-11 BOULEVARD HAUSSMANN, 75009, PARIS, FR', 'longitude': 2.3358001, 'latitude': 48.8725965}
,
{'id': 999893946, 'name': 'UNIVERSITA DEGLI STUDI DI BRESCIA', 'organizationUrl': 'http://www.unibs.it', 'address': 'PIAZZA MERCATO 15, 25121, BRESCIA, IT', 'longitude': 10.10826572226634, 'latitude': 45.50905145}
,
{'id': 998796003, 'name': 'NATURWISSENSCHAFTLICHES UND MEDIZINISCHES INSTITUT AN DER UNIVERSITAET TUEBINGEN', 'organizationUrl': 'http://www.nmi.de', 'address': 'MARKWIESENSTRASSE 55, 72770, REUTLINGEN, DE', 'longitude': 9.1601331, 'latitude': 48.4931174}
,
{'id': 994637807, 'name': 'LIFE AND BRAIN GMBH', 'organizationUrl': 'http://www.lifeandbrain.com', 'address': 'VENUSBERG-CAMPUS 1, 53127, BONN, DE', 'longitude': 7.104641914215888, 'latitude': 50.700016}
,
{'id': 998516352, 'name': 'AXXAM SPA', 'organizationUrl': 'http://www.axxam.com', 'address': 'VIA MEUCCI 3, 20091, BRESSO MILANO, IT', 'longitude': 9.189314, 'latitude': 45.5311643}
,
{'id': 905715870, 'name': 'KUBERMATIC GMBH', 'organizationUrl': 'http://', 'address': 'FUHLSBUTTLER STRASSE 405, 22309, HAMBURG, DE', 'longitude': 10.0399527, 'latitude': 53.6033804}
,
{'id': 903792360, 'name': 'AMGEN RESEARCH (MUNICH) GMBH', 'organizationUrl': 'http://', 'address': 'STAFFELSEESTR. 2, 81477, MUNCHEN, DE', 'longitude': 11.506495, 'latitude': 48.0919562}
,
{'id': 999904228, 'name': 'BUDAPESTI MUSZAKI ES GAZDASAGTUDOMANYI EGYETEM', 'organizationUrl': 'http://www.bme.hu', 'address': 'MUEGYETEM RAKPART 3, 1111, BUDAPEST, HU', 'longitude': 19.0557303, 'latitude': 47.481673}
,
{'id': 935293207, 'name': 'NVIDIA SWITZERLAND AG', 'organizationUrl': 'http://', 'address': 'TECHNOPARKSTRASSE 1, 8005, ZURICH, CH', 'longitude': 8.5154921, 'latitude': 47.3896403}
,
{'id': 905612662, 'name': 'IKTOS', 'organizationUrl': 'http://', 'address': '65  RUE BLOMET, 75017, PARIS, FR', 'longitude': 2.3038604, 'latitude': 48.841973}
,
{'id': 910802162, 'name': 'ODYSSEUS DATA SERVICES SRO', 'organizationUrl': 'http://', 'address': 'NA HAVRANCE 1508/14, MODRANY, 143 00, PRAHA, CZ', 'longitude': 14.4105229, 'latitude': 50.003622}
,
{'id': 999865331, 'name': 'UNIVERSIDADE DE AVEIRO', 'organizationUrl': 'http://www.ua.pt', 'address': 'CAMPUS UNIVERSITÁRIO DE SANTIAGO, 3810-193, AVEIRO, PT', 'longitude': -8.659580501629677, 'latitude': 40.6348171}
,
{'id': 998620433, 'name': 'EUROPEAN AIDS TREATMENT GROUP EV', 'organizationUrl': 'http://www.eatg.org', 'address': 'METTMANNER STRASSE 24-26, 40233, DUSSELDORF, DE', 'longitude': 6.8053096, 'latitude': 51.2226307}
,
{'id': 916903268, 'name': 'LIFE MOLECULAR IMAGING LTD', 'organizationUrl': 'http://', 'address': 'ICENI CENTRE, WARWICK TECHNOLOGY PARK, CV34 6DA, WARWICK, UK', 'longitude': -1.5636717092235, 'latitude': 52.27368005}
,
{'id': 907364967, 'name': 'NORGES PARKINSONFORBUND', 'organizationUrl': 'http://', 'address': 'KARL JOHANS GATE 7, 154, OSLO, NO', 'longitude': 10.7483817, 'latitude': 59.9114484}
,
{'id': 999833903, 'name': 'BIRKBECK COLLEGE - UNIVERSITY OF LONDON', 'organizationUrl': 'http://www.bbk.ac.uk', 'address': 'MALET STREET, WC1E 7HX, LONDON, UK', 'longitude': -0.1311473, 'latitude': 51.5222369}
,
{'id': 910577025, 'name': 'AUTISTICA', 'organizationUrl': 'http://', 'address': "ST SAVIOUR'S HOUSE 39-41 UNION STREET, SE1 1SD, LONDON, UK", 'longitude': -0.09367507192816624, 'latitude': 51.5036074}
,
{'id': 999792484, 'name': 'ARTTIC', 'organizationUrl': 'http://www.arttic.eu', 'address': 'RUE DU DESSOUS DES BERGES 58A, 75013, PARIS, FR', 'longitude': 2.372315, 'latitude': 48.8291493}
,
{'id': 998281709, 'name': 'DEMCON ADVANCED MECHATRONICS ENSCHEDE B.V.', 'organizationUrl': 'http://www.demcon.nl', 'address': 'INSTITUTENWEG 25, 7521 PH, ENSCHEDE, NL', 'longitude': 6.8441763, 'latitude': 52.2378102}
,
{'id': 998105266, 'name': 'Fondazione Stella Maris', 'organizationUrl': 'http://www.inpe.unipi.it', 'address': 'Viale del Tirreno  331, 56118, Pisa, IT', 'longitude': 10.2889848, 'latitude': 43.6439691}
,
{'id': 968740262, 'name': 'AUTISME-EUROPE AISBL', 'organizationUrl': 'http://', 'address': 'RUE MONTOYER 39, 1000, BRUXELLES, BE', 'longitude': 4.3702683, 'latitude': 50.8410473}
,
{'id': 999773666, 'name': 'STARLAB BARCELONA SL', 'organizationUrl': 'http://www.starlab.es', 'address': 'AVENIDA TIBIDABO 47 BIS, 8035, BARCELONA, ES', 'longitude': 2.1371569, 'latitude': 41.4096598}
,
{'id': 999492657, 'name': 'UNIVERSITAETSMEDIZIN GOETTINGEN - GEORG-AUGUST-UNIVERSITAET GOETTINGEN - STIFTUNG OEFFENTLICHEN RECHTS', 'organizationUrl': 'http://', 'address': 'Robert-Koch-Strasse  40, 37075, GOETTINGEN, DE', 'longitude': 9.9450538, 'latitude': 51.5499344}
,
{'id': 999862033, 'name': 'SWANSEA UNIVERSITY', 'organizationUrl': 'http://www.swan.ac.uk', 'address': 'SINGLETON PARK, SA2 8PP, SWANSEA, UK', 'longitude': -3.981075580211383, 'latitude': 51.6130052}
,
{'id': 999639224, 'name': 'AGENZIA REGIONALE DI SANITA', 'organizationUrl': 'http://www.ars.toscana.it', 'address': 'VIA PIETRO DAZZI 1, 50141, FIRENZE, IT', 'longitude': 11.2437471, 'latitude': 43.8132652}
,
{'id': 946597878, 'name': 'BIOBANKS AND BIOMOLECULAR RESOURCES RESEARCH INFRASTRUCTURE CONSORTIUM (BBMRI-ERIC)', 'organizationUrl': 'http://www.bbmri-eric.eu', 'address': 'NEUE STIFTINGTALSTRASSE 2/B/6, 8010, GRAZ, AT', 'longitude': 15.4685698, 'latitude': 47.0792711}
,
{'id': 907545678, 'name': 'BIONOTUS', 'organizationUrl': 'http://', 'address': 'DORPSTRAAT 61A, 9140, TEMSE, BE', 'longitude': 4.1374752, 'latitude': 51.1143914}
,
{'id': 907614451, 'name': 'STICHTING ENTIS (EUROPEAN NETWORK TERATOLOGY INFORMATION SERVICES) FOUNDATION', 'organizationUrl': 'http://', 'address': 'GOUDSBLOEMVALLEI 7, 5237MH, HERTOGENBOSCH, NL', 'longitude': 5.2932006, 'latitude': 51.7221724}
,
{'id': 999873479, 'name': "ST GEORGE'S HOSPITAL MEDICAL SCHOOL", 'organizationUrl': 'http://www.sgul.ac.uk/', 'address': 'CRANMER TERRACE, SW17 0RE, LONDON, UK', 'longitude': -0.1758476, 'latitude': 51.4278608}
,
{'id': 999522921, 'name': 'REGION STOCKHOLM', 'organizationUrl': 'http://www.sll.se', 'address': 'HANTVERKARGATAN 45, 104 22, STOCKHOLM, SE', 'longitude': 18.0433242, 'latitude': 59.328982}
,
{'id': 999600521, 'name': 'THE NEWCASTLE UPON TYNE HOSPITALS NHS FOUNDATION TRUST', 'organizationUrl': 'http://', 'address': 'FREEMAN HOSPITAL, HIGH HEATON, NE7 7DN, NEWCASTLE-UPON-TYNE, UK', 'longitude': -1.593795894002825, 'latitude': 55.00231715}
,
{'id': 999885313, 'name': 'UNIVERSITY OF ULSTER', 'organizationUrl': 'http://www.ulster.ac.uk', 'address': 'CROMORE ROAD, BT52 1SA, COLERAINE, UK', 'longitude': -6.6708377, 'latitude': 55.1534471}
,
{'id': 999577144, 'name': 'STICHTING IMEC NEDERLAND', 'organizationUrl': 'http://www.holstcentre.com', 'address': 'HIGH TECH CAMPUS 31, 5656 AE, EINDHOVEN, NL', 'longitude': 5.4563296, 'latitude': 51.4134573}
,
{'id': 999595380, 'name': "UNIVERSITA' DEGLI STUDI DI BERGAMO", 'organizationUrl': 'http://www.unibg.it', 'address': 'VIA SALVECCHIO 19, 24129, BERGAMO, IT', 'longitude': 9.6604288, 'latitude': 45.7044022}
,
{'id': 999627778, 'name': 'NORTHWESTERN UNIVERSITY', 'organizationUrl': 'http://www.northwestern.edu', 'address': 'Clark Street 633, 60208, EVANSTON, ILLINOIS, US', 'longitude': -87.6772897, 'latitude': 42.0492302}
,
{'id': 999615168, 'name': 'PROVINCIA LOMBARDO VENETA - ORDINEOSPEDALIERO DI SAN GIOVANNI DI DIO- FATEBENEFRATELLI', 'organizationUrl': 'http://www.irccs-fatebenefratelli.it/sito/pagine/fatebenefratelli.php', 'address': 'VIA PILASTRONI 4, 25125, BRESCIA, IT', 'longitude': 10.2019178, 'latitude': 45.5207372}
,
{'id': 923036384, 'name': 'MSD CZECH REPUBLIC SRO', 'organizationUrl': 'http://', 'address': 'SVORNOSTI 3321/2, 15000, PRAHA, CZ', 'longitude': 14.4099198, 'latitude': 50.0670106}
,
{'id': 999753005, 'name': 'GABO:MI GESELLSCHAFT FUR ABLAUFORGANISATION:MILLIARIUM MBH & CO KG', 'organizationUrl': 'http://www.gabo-mi.com', 'address': 'OSKAR VON MILLER RING 29, 80333, MUENCHEN, DE', 'longitude': 11.5761391, 'latitude': 48.1459612}
,
{'id': 951446229, 'name': 'INTEL CORPORATION (UK) LIMITED', 'organizationUrl': 'http://', 'address': 'PIPERS WAY, SN3 1RJ, SWINDON, UK', 'longitude': -1.7707843, 'latitude': 51.5451669}
,
{'id': 999598678, 'name': 'UNIVERSITAET AUGSBURG', 'organizationUrl': 'http://www.uni-augsburg.de', 'address': 'UNIVERSITAETSSTRASSE 2, 86159, AUGSBURG, DE', 'longitude': 10.8989066, 'latitude': 48.3342011}
,
{'id': 999881918, 'name': 'UNIVERSITAETSKLINIKUM FREIBURG', 'organizationUrl': 'http://', 'address': 'HUGSTETTER STRASSE  49, 79106, FREIBURG, DE', 'longitude': 7.841216901119097, 'latitude': 48.0044311}
,
{'id': 999878523, 'name': 'UNIVERSITAT PASSAU', 'organizationUrl': 'http://www.uni-passau.de', 'address': 'INNSTRASSE 41, 94032, PASSAU, DE', 'longitude': 13.44960811457786, 'latitude': 48.5663933}
,
{'id': 995316031, 'name': 'FONDATION DE COOPERATION SCIENTIFIQUE VOIR ET ENTENDRE', 'organizationUrl': 'http://www.inserm.fr', 'address': '17 RUE MOREAU, 75012, PARIS, FR', 'longitude': 2.3727933, 'latitude': 48.8501672}
,
{'id': 915992050, 'name': 'CARL ZEISS MEDITEC AG', 'organizationUrl': 'http://', 'address': 'GOSCHWITZER STRASSE 51-52, 7745, JENA, DE', 'longitude': 11.5949535, 'latitude': 50.8976656}
,
{'id': 999842730, 'name': 'CITY UNIVERSITY OF LONDON', 'organizationUrl': 'http://www.city.ac.uk', 'address': 'NORTHAMPTON SQUARE, EC1V 0HB, LONDON, UK', 'longitude': -0.1018042, 'latitude': 51.5274657}
,
{'id': 997486115, 'name': 'MOORFIELDS EYE HOSPITAL NHS FOUNDATION TRUST', 'organizationUrl': 'http://', 'address': 'City Road  162, EC1V 2PD, LONDON, UK', 'longitude': -0.09014415888816582, 'latitude': 51.52727394999999}
,
{'id': 997297450, 'name': 'STRUCTURAL GENOMICS CONSORTIUM LBG', 'organizationUrl': 'http://', 'address': 'EUSTON ROAD 215, NW1 2BE, LONDON, UK', 'longitude': -0.1348863702569768, 'latitude': 51.5255433}
,
{'id': 999979015, 'name': 'EIDGENOESSISCHE TECHNISCHE HOCHSCHULE ZUERICH', 'organizationUrl': 'http://https://www.ethz.ch/de.html', 'address': 'Raemistrasse  101, 8092, ZUERICH, CH', 'longitude': 8.5481666, 'latitude': 47.3764545}
,
{'id': 999845252, 'name': 'THE GOVERNING COUNCIL OF THE UNIVERSITY OF TORONTO', 'organizationUrl': 'http://www.utoronto.ca/', 'address': 'KINGS COLLEGE CIRCLE 27, M5S 1A1, TORONTO, CA', 'longitude': -79.39591980951508, 'latitude': 43.6607225}
,
{'id': 997951133, 'name': 'CHEMOTHERAPEUTISCHES FORSCHUNGSINSTITUT GEORG-SPEYER-HAUS STIFTUNG', 'organizationUrl': 'http://www.georg-speyer-haus.de', 'address': 'PAUL EHRLICH STRASSE 42-44, 60596, FRANKFURT, DE', 'longitude': 8.6694808, 'latitude': 50.0983893}
,
{'id': 938028219, 'name': 'TAMIRNA GMBH', 'organizationUrl': 'http://', 'address': 'LEBERSTRASSE 20/8, 1110, WIEN, AT', 'longitude': 16.4123753, 'latitude': 48.1675418}
,
{'id': 927206996, 'name': 'METAHEPS GMBH', 'organizationUrl': 'http://', 'address': 'AM KLOPFERSPITZ 19, 82152, PLANEGG, DE', 'longitude': 11.4602482, 'latitude': 48.107602}
,
{'id': 952793462, 'name': 'ABX CRO ADVANCED PHARMACEUTICAL SERVICES FORSCHUNGSGESELLSCHAFT MBH', 'organizationUrl': 'http://www.abx-cro.com', 'address': 'BLASEWITZER STR 78-80, 1307, DRESDEN, DE', 'longitude': 13.7733058, 'latitude': 51.0524306}
,
{'id': 909774544, 'name': 'SIGNATOPE GMBH', 'organizationUrl': 'http://', 'address': 'MARKWIESENSTR. 55, 72770, REUTLINGEN, DE', 'longitude': 9.1601331, 'latitude': 48.4931174}
,
{'id': 999821390, 'name': 'LANDSPITALI UNIVERSITY HOSPITAL', 'organizationUrl': 'http://www.landspitali.is', 'address': 'Eiriksgata 5, 101, REYKJAVIK, IS', 'longitude': -21.92620085549181, 'latitude': 64.14068865}
,
{'id': 951158236, 'name': 'MLM MEDICAL LABS GMBH', 'organizationUrl': 'http://', 'address': 'DOHRWEG 63, 41066, MONCHENGLADBACH, DE', 'longitude': 6.4751135, 'latitude': 51.2118817}
,
{'id': 999874934, 'name': 'UNIVERSITEIT HASSELT', 'organizationUrl': 'http://www.uhasselt.be', 'address': 'MARTELARENLAAN 42, 3500, HASSELT, BE', 'longitude': 5.342814511984995, 'latitude': 50.93422455}
,
{'id': 999848938, 'name': 'PHILIPPS UNIVERSITAET MARBURG', 'organizationUrl': 'http://www.uni-marburg.de', 'address': 'BIEGENSTRASSE 10, 35037, MARBURG, DE', 'longitude': 8.7739281, 'latitude': 50.8102362}
,
{'id': 986084250, 'name': 'GENOS DOO ZA VJESTACENJE I ANALIZU', 'organizationUrl': 'http://www.genos.hr', 'address': 'VATROGASNA 112, 31000, OSIJEK, HR', 'longitude': 18.6991723, 'latitude': 45.5495969}
,
{'id': 905628085, 'name': 'SOCIETE DE PNEUMOLOGIE DE LANGUE FRANCAISE', 'organizationUrl': 'http://', 'address': '66 BOULEVARD SAINT MICHEL, 75006, PARIS 6, FR', 'longitude': 2.3386599, 'latitude': 48.8437678}
,
{'id': 986091428, 'name': 'ALACRIS THERANOSTICS GMBH', 'organizationUrl': 'http://www.alacris.de', 'address': 'MAX PLANCK STRASSE 3, 12489, BERLIN, DE', 'longitude': 13.5361125, 'latitude': 52.4287916}
,
{'id': 999485964, 'name': "FONDAZIONE IRCCS CA' GRANDA - OSPEDALE MAGGIORE POLICLINICO", 'organizationUrl': 'http://www.policlinico.mi.it', 'address': 'VIA FRANCESCO SFORZA 28, 20122, MILANO, IT', 'longitude': 9.1948123, 'latitude': 45.4590053}
,
{'id': 999905392, 'name': 'UNIVERSITA DEGLI STUDI DEL PIEMONTE ORIENTALE AMEDEO AVOGADRO', 'organizationUrl': 'http://www.unipmn.it', 'address': 'DUOMO 6, 13100, VERCELLI, IT', 'longitude': 8.4243767, 'latitude': 45.327602}
,
{'id': 937282677, 'name': 'OWLSTONE MEDICAL LIMITED', 'organizationUrl': 'http://', 'address': '183 CAMBRIDGE SCIENCE PARK, MILTON ROAD, CB4 0GA, CAMBRIDGE, UK', 'longitude': 0.1479367805555948, 'latitude': 52.23429565}
,
{'id': 905601022, 'name': 'SIP SERVICE S.R.L.', 'organizationUrl': 'http://', 'address': 'VIA SAN GREGORIO 12, 20124, MILANO, IT', 'longitude': 9.2064522, 'latitude': 45.4784832}
,
{'id': 999891327, 'name': 'AZIENDA OSPEDALE UNIVERSITA PADOVA', 'organizationUrl': 'http://www.sanita.padova.it', 'address': 'VIA NICOLO GIUSTINIANI 1, 35128, PADOVA, IT', 'longitude': 11.8891297, 'latitude': 45.4019497}
,
{'id': 999976687, 'name': 'UNIVERSITA DEGLI STUDI DI GENOVA', 'organizationUrl': 'http://www.unige.it', 'address': 'VIA BALBI 5, 16126, GENOVA, IT', 'longitude': 8.9266209, 'latitude': 44.4148535}
,
{'id': 999990267, 'name': 'MAX-PLANCK-GESELLSCHAFT ZUR FORDERUNG DER WISSENSCHAFTEN EV', 'organizationUrl': 'http://', 'address': 'HOFGARTENSTRASSE 8, 80539, MUENCHEN, DE', 'longitude': 11.5822929, 'latitude': 48.1411687}
,
{'id': 999985514, 'name': 'UNIVERSITY OF LEICESTER', 'organizationUrl': 'http://www.le.ac.uk', 'address': 'UNIVERSITY ROAD, LE1 7RH, LEICESTER, UK', 'longitude': -1.1250181, 'latitude': 52.6230926}
,
{'id': 997429079, 'name': 'EUROPEAN LUNG FOUNDATION', 'organizationUrl': 'http://www.european-lung-foundation.org', 'address': 'GLOSSOP ROAD 442, S10 2PX, SHEFFIELD, UK', 'longitude': -1.492765, 'latitude': 53.3773947}
,
{'id': 913794321, 'name': 'VIFOR (INTERNATIONAL) AG', 'organizationUrl': 'http://', 'address': 'RECHENSTRASSE 37, 9014, ST GALLEN, CH', 'longitude': 9.336865091972097, 'latitude': 47.41853115}
,
{'id': 999555125, 'name': 'BIONEER A/S', 'organizationUrl': 'http://www.bioneer.dk', 'address': 'KOGLE ALLE 2, 2970, HOERSHOLM, DK', 'longitude': 12.49639, 'latitude': 55.869304}
,
{'id': 917107162, 'name': 'ONCORADIOMICS', 'organizationUrl': 'http://', 'address': 'CLOS CHANMURLY 13, 4000, LIEGE, BE', 'longitude': 5.5629213, 'latitude': 50.6197934}
,
{'id': 900185415, 'name': 'THE MEDICAL CLOUD COMPANY', 'organizationUrl': 'http://', 'address': 'CLOS CHANMURLY 13, 4000, LIEGE, BE', 'longitude': 5.5629213, 'latitude': 50.6197934}
,
{'id': 999495276, 'name': 'CENTRE HOSPITALIER UNIVERSITAIRE DE LIEGE', 'organizationUrl': 'http://www.chuliege.be', 'address': 'Sart Tilman B35, 4000, LIEGE, BE', 'longitude': 5.5709363, 'latitude': 50.5911652}
,
{'id': 954530344, 'name': 'STICHTING VU', 'organizationUrl': 'http://www.vu.nl', 'address': 'DE BOELELAAN 1105, 1081 HV, AMSTERDAM, NL', 'longitude': 4.866900549871122, 'latitude': 52.33418005}
,
{'id': 949829530, 'name': 'AGENZIA ITALIANA DEL FARMACO', 'organizationUrl': 'http://', 'address': 'VIA DEL TRITONE 181, 187, ROMA, IT', 'longitude': 12.4813056, 'latitude': 41.901742}
,
{'id': 998462032, 'name': 'INSTITUTO ARAGONES DE  CIENCIAS DE LA SALUD', 'organizationUrl': 'http://www.iacs.aragon.es', 'address': 'AVENIDA SAN JUAN BOSCO  13, 50009, ZARAGOZA, ES', 'longitude': -0.9048983, 'latitude': 41.6435398}
,
{'id': 998096827, 'name': 'MASSACHUSETTS INSTITUTE OF TECHNOLOGY', 'organizationUrl': 'http://', 'address': 'MASSACHUSETTS AVENUE 77, 2139, CAMBRIDGE, US', 'longitude': -71.09308333242714, 'latitude': 42.3592962}
,
{'id': 998928893, 'name': 'FORUM EUROPEEN DES PATIENTS (FPE)', 'organizationUrl': 'http://www.eu-patient.eu/', 'address': 'RUE DICKS 14, 1417, LUXEMBOURG, LU', 'longitude': 6.1305187, 'latitude': 49.6045964}
,
{'id': 998873700, 'name': 'SUNDHEDSSTYRELSEN', 'organizationUrl': 'http://', 'address': 'ISLANDS BRYGGE 67, 2300, KOBENHAVN, DK', 'longitude': 12.570763, 'latitude': 55.662093}
,
{'id': 952415259, 'name': 'LYSOGENE', 'organizationUrl': 'http://', 'address': '18-20 RUE JACQUES DULUD, 92200, NEUILLY SUR SEINE, FR', 'longitude': 2.2668934, 'latitude': 48.880814}
,
{'id': 953198437, 'name': 'ASTELLAS PHARMA EUROPE LTD', 'organizationUrl': 'http://www.astellas.eu', 'address': '2000 HILLSWOOD DRIVE, KT16 0RS, CHERTSEY, UK', 'longitude': -0.5306822707295713, 'latitude': 51.3711753}
,
{'id': 912937132, 'name': 'SHIRE INTERNATIONAL GMBH', 'organizationUrl': 'http://', 'address': 'ZAHLERWEG 10, 6300, ZUG, CH', 'longitude': 8.5132861, 'latitude': 47.1767091}
,
{'id': 999889775, 'name': 'UNIVERSITE JEAN MONNET SAINT-ETIENNE', 'organizationUrl': 'http://www.portail.univ-st-etienne.fr', 'address': 'RUE TREFILERIE 10, 42023, SAINT ETIENNE, FR', 'longitude': 4.392412095296661, 'latitude': 45.42630625}
,
{'id': 952715183, 'name': 'SYREON KUTATO INTEZET KORLATOLT FELELOSSEGU TARSASAG', 'organizationUrl': 'http://www.syreon.eu', 'address': 'MEXIKOI UT 65/A, 1142, BUDAPEST, HU', 'longitude': 19.0881915, 'latitude': 47.5213521}
,
{'id': 999869114, 'name': 'UNIVERSITAET INNSBRUCK', 'organizationUrl': 'http://www.uibk.ac.at', 'address': 'INNRAIN 52, 6020, INNSBRUCK, AT', 'longitude': 11.38418912126038, 'latitude': 47.2630635}
,
{'id': 910847170, 'name': 'MIHAJLOVIC JOVAN', 'organizationUrl': 'http://', 'address': 'OMLADINSKIH RADNIH AKCIJA 54, 21000, NOVI SAD, RS', 'longitude': 19.8301612, 'latitude': 45.2955623}
,
{'id': 949131227, 'name': 'NACIONALNI LABORATORIJ ZA ZDRAVJE, OKOLJE IN HRANO', 'organizationUrl': 'http://', 'address': 'PRVOMAJSKA ULICA 1, 2000, MARIBOR, SI', 'longitude': 15.66546798060756, 'latitude': 46.5346773}
,
{'id': 893358361, 'name': 'LABORMEDIZINOSCHES ZENTRUM DR RISCHOSTSCHWEIZ AG', 'organizationUrl': 'http://', 'address': 'LAGERSTRASSE 30, 9470, BUCHS, CH', 'longitude': 9.4816038, 'latitude': 47.1657367}
,
{'id': 894731008, 'name': 'ROCHE DIAGNOSTICS NEDERLAND BV', 'organizationUrl': 'http://', 'address': 'TRANSISTORSTRAAT 41, 1322CK, ALMERE, NL', 'longitude': 5.1780962, 'latitude': 52.3451511}
,
{'id': 998508010, 'name': 'Stichting Sanquin Bloedvoorziening', 'organizationUrl': 'http://', 'address': 'Plesmanlaan   125, 1006 AN, Amsterdam, NL', 'longitude': 4.8232523, 'latitude': 52.3508321}
,
{'id': 894823061, 'name': 'AVA AG', 'organizationUrl': 'http://', 'address': 'GUTSTRASSE 73, 8055, ZURICH, CH', 'longitude': 8.50720938077323, 'latitude': 47.3710526}
,
{'id': 937497629, 'name': 'STICHTING NETHERLANDS HEART INSTITUTE', 'organizationUrl': 'http://', 'address': 'MOREELSEPARK 1, 3511EP, UTRECHT, NL', 'longitude': 5.1138219, 'latitude': 52.0886832}
,
{'id': 935473045, 'name': 'OPALE', 'organizationUrl': 'http://', 'address': '24 RUE DU CHAROLAIS, 75012, PARIS, FR', 'longitude': 2.3868819, 'latitude': 48.8402942}
,
{'id': 913632234, 'name': 'METABRAIN RESEARCH', 'organizationUrl': 'http://', 'address': '19 AVENUE DU PROFESSEUR CADIOT, 94700, MAISONS-ALFORT, FR', 'longitude': 2.432892, 'latitude': 48.804266}
,
{'id': 999469765, 'name': 'HOSPICES CIVILS DE LYON', 'organizationUrl': 'http://www.chu-lyon.fr', 'address': 'QUAI DES CELESTINS 3, 69002, LYON, FR', 'longitude': 4.8314688, 'latitude': 45.7608912}
,
{'id': 999903743, 'name': 'UNIVERSITY OF HULL', 'organizationUrl': 'http://www.hull.ac.uk', 'address': 'COTTINGHAM ROAD, HU6 7RX, HULL, UK', 'longitude': -0.3682701, 'latitude': 53.7691719}
,
{'id': 999840596, 'name': 'UNIVERSITA DEGLI STUDI DI BARI ALDO MORO', 'organizationUrl': 'http://www.uniba.it', 'address': 'PIAZZA UMBERTO I 1, 70121, BARI, IT', 'longitude': 16.8683261, 'latitude': 41.1205535}
,
{'id': 949735440, 'name': 'UNIVERSITE DE BORDEAUX', 'organizationUrl': 'http://www.nouvelle-univ-bordeaux.fr', 'address': 'PLACE PEY BERLAND 35, 33000, BORDEAUX, FR', 'longitude': -0.5780207, 'latitude': 44.8371333}
,
{'id': 953352473, 'name': 'MITOLOGICS', 'organizationUrl': 'http://', 'address': 'AVENUE GASTON ROUSSEL 102, 93230, ROMAINVILLE, FR', 'longitude': 2.4321, 'latitude': 48.894318}
,
{'id': 909875521, 'name': 'SORBONNE UNIVERSITE', 'organizationUrl': 'http://', 'address': "21 RUE DE L'ECOLE DE MEDECINE, 75006, PARIS, FR", 'longitude': 2.3403301, 'latitude': 48.8511944}
,
{'id': 949832149, 'name': 'VITAL TRANSFORMATION', 'organizationUrl': 'http://', 'address': 'LEOPOLD III LAAN 107, 1970, WEZEMBEEK OPPEM, BE', 'longitude': 4.5035019, 'latitude': 50.8431544}
,
{'id': 968032453, 'name': 'EUROPEAN HEART NETWORK AISBL', 'organizationUrl': 'http://', 'address': 'RUE MONTOYER 31, 1000, BRUXELLES, BE', 'longitude': 4.3699242, 'latitude': 50.8410849}
,
{'id': 999489456, 'name': 'FH JOANNEUM GESELLSCHAFT MBH', 'organizationUrl': 'http://www.fh-joanneum.at', 'address': 'ALTE POSTSTRASSE 149, 8020, GRAZ, AT', 'longitude': 15.40985069400878, 'latitude': 47.0692082}
,
{'id': 899208528, 'name': 'IQVIA RDS FRANCE', 'organizationUrl': 'http://', 'address': '151-161 BOULEVARD VICTOR HUGO, 93400, SAINT-OUEN, FR', 'longitude': 2.3338566, 'latitude': 48.9118849}
,
{'id': 903885286, 'name': 'COVANCE CLINICAL AND PERIAPPROVAL SERVICES', 'organizationUrl': 'http://', 'address': 'AVENUE MARCEL THIRY 77, 1200, WOLUWE-SAINT-LAMBERT, BE', 'longitude': 4.4344661, 'latitude': 50.8563893}
,
{'id': 968584383, 'name': 'EDELRIS SAS', 'organizationUrl': 'http://www.edelris.com', 'address': 'AVENUE LACASSAGNE 115, 69003, LYON, FR', 'longitude': 4.8761296, 'latitude': 45.7496834}
,
{'id': 958742472, 'name': 'TAROS CHEMICALS GMBH & CO KG', 'organizationUrl': 'http://www.taros.de', 'address': 'Emil-Figge-Str.  76A, 44227, Dortmund, DE', 'longitude': 7.4254776, 'latitude': 51.4949315}
,
{'id': 998770686, 'name': 'FORSCHUNGSGESELLSCHAFT FUR ARBEITSPHYSIOLOGIE UND ARBEITSSCHUTZ E.V.', 'organizationUrl': 'http://www.ifado.de', 'address': 'ARDEYSTRASSE 67, 44139, DORTMUND, DE', 'longitude': 7.457532281671948, 'latitude': 51.4899483}
,
{'id': 952763101, 'name': 'OCELLO BV', 'organizationUrl': 'http://www.ocello.nl', 'address': 'J.H OORTWEG 21, 2333 CH, LEIDEN, NL', 'longitude': 4.465042154502681, 'latitude': 52.16904135}
,
{'id': 999574913, 'name': 'INSTITUT CATALA DE LA SALUT', 'organizationUrl': 'http://www.gencat.cat/ics/germanstrias/', 'address': 'GRAN VIA DE LES CORTS CATALANES 587, 8007, BARCELONA, ES', 'longitude': 2.1656594, 'latitude': 41.387783400000004}
,
{'id': 899889565, 'name': 'TRIAL NATION', 'organizationUrl': 'http://', 'address': 'NORREGADE 7B, 1165, COPENHAGEN, DK', 'longitude': 12.571545, 'latitude': 55.678789}
,
{'id': 951146887, 'name': 'ALTONA DIAGNOSTICS GMBH', 'organizationUrl': 'http://', 'address': 'MORKENSTRASSE 12, 22767, HAMBURG, DE', 'longitude': 9.946760819620259, 'latitude': 53.5496665}
,
{'id': 966006220, 'name': 'BUNDESMINISTERIUM DER VERTEIDIGUNG', 'organizationUrl': 'http://www.bmvg.de/portal/a/bmvg', 'address': 'FONTAINENGRABEN 150, 53123, BONN, DE', 'longitude': 7.04633396031234, 'latitude': 50.70518294999999}
,
{'id': 934798022, 'name': 'VIBALOGICS GMBH', 'organizationUrl': 'http://', 'address': 'ZEPPELINSTRASSE 2, 27472, CUXHAVEN, DE', 'longitude': 8.7096833, 'latitude': 53.8444624}
,
{'id': 934890851, 'name': 'BAVARIAN NORDIC AS', 'organizationUrl': 'http://', 'address': 'HEJRESKOVVEJ 10 A, 3490, KVISTGARD, DK', 'longitude': 12.5042695, 'latitude': 55.9984506}
,
{'id': 954804369, 'name': 'BIOVERSYS AG', 'organizationUrl': 'http://www.bioversys.com', 'address': '4057, BASEL, CH', 'longitude': 7.59255342818287, 'latitude': 47.57150073518932}
,
{'id': 989536092, 'name': 'GLAXOSMITHKLINE INVESTIGACION Y DESARROLLO SL', 'organizationUrl': 'http://www.gsk.es/html/investigacion/espana.html', 'address': '28760, TRES CANTOS, ES', 'longitude': -3.7065333, 'latitude': 40.6065826}
,
{'id': 929340511, 'name': 'THE LEONA M. AND HARRY B. HELMSLEY CHARITABLE TRUST', 'organizationUrl': 'http://', 'address': '10169, NEW YORK, US', 'longitude': -74.0060152, 'latitude': 40.7127281}
,
{'id': 999977172, 'name': 'THE CHANCELLOR MASTERS AND SCHOLARSOF THE UNIVERSITY OF CAMBRIDGE', 'organizationUrl': 'http://www.cam.ac.uk', 'address': 'CB2 1TN, CAMBRIDGE, UK', 'longitude': 0.1169207280338299, 'latitude': 52.20533332324164}
,
{'id': 999841469, 'name': 'UNIVERSITE DE LAUSANNE', 'organizationUrl': 'http://www.unil.ch', 'address': '1015, LAUSANNE, CH', 'longitude': 6.6327025, 'latitude': 46.5218269}
,
{'id': 911413068, 'name': 'UNITIO INC', 'organizationUrl': 'http://', 'address': '2111, BOSTON, US', 'longitude': -71.0582912, 'latitude': 42.3602534}
,
{'id': 999629815, 'name': 'SIB INSTITUT SUISSE DE BIOINFORMATIQUE', 'organizationUrl': 'http://www.isb-sib.ch', 'address': '1206, GENEVE, CH', 'longitude': 6.155342111909919, 'latitude': 46.19138640629323}
,
{'id': 929772549, 'name': 'JDRF INTERNATIONAL', 'organizationUrl': 'http://', 'address': '10004, NEW YORK, US', 'longitude': -74.0060152, 'latitude': 40.7127281}
,
{'id': 908088393, 'name': 'ABBOTT DIABETES CARE', 'organizationUrl': 'http://', 'address': '94502, ALAMEDA, US', 'longitude': -122.2415272111914, 'latitude': 37.73514327961825}
,
{'id': 997585928, 'name': 'Eli Lilly and Company Limited', 'organizationUrl': 'http://www.lilly.com', 'address': 'RG24 9NL, Basingstoke, UK', 'longitude': -1.104951184874253, 'latitude': 51.27872468542451}
,
{'id': 911619290, 'name': 'QPS NETHERLANDS BV', 'organizationUrl': 'http://', 'address': '9713 GZ, GRONINGEN, NL', 'longitude': 6.57379488443088, 'latitude': 53.22323474388242}
,
{'id': 988947981, 'name': 'GLOBAL ALLIANCE FOR TB DRUG DEVELOPMENT NON PROFIT ORGANISATION', 'organizationUrl': 'http://www.tballiance.org/home/home.php', 'address': '10005, NEW YORK, US', 'longitude': -74.0060152, 'latitude': 40.7127281}
,
{'id': 999973971, 'name': 'ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE', 'organizationUrl': 'http://www.epfl.ch', 'address': '1015, LAUSANNE, CH', 'longitude': 6.6327025, 'latitude': 46.5218269}
,
{'id': 984454262, 'name': 'NATIONAL INSTITUTE FOR HEALTH AND CARE EXCELLENCE', 'organizationUrl': 'http://www.nice.org.uk', 'address': 'M1 4BT, MANCHESTER, UK', 'longitude': -2.239002681300843, 'latitude': 53.48034600728644}
,
{'id': 948790660, 'name': 'GRITSYSTEMS AS', 'organizationUrl': 'http://www.gritsystems.dk', 'address': '2500, VALBY, DK', 'longitude': 12.5169523, 'latitude': 55.6618019}
,
{'id': 948309346, 'name': 'FONDATION INNOVATIVE MEDICINES FOR TUBERCULOSIS (IM4TB)', 'organizationUrl': 'http://www.iM4TB.org', 'address': '1015, LAUSANNE, CH', 'longitude': 6.6327025, 'latitude': 46.5218269}
,
{'id': 905390144, 'name': 'CRITICAL PATH INSTITUTE, LIMITED', 'organizationUrl': 'http://', 'address': '2, DUBLIN, IE', 'longitude': -6.250272166523041, 'latitude': 53.3384766616736}
,
{'id': 985726320, 'name': 'SYNAPSE RESEARCH MANAGEMENT PARTNERS SL', 'organizationUrl': 'http://www.synapse-managers.com', 'address': '28006, MADRID, ES', 'longitude': -3.680543994151057, 'latitude': 40.43383810193768}
,
{'id': 998802502, 'name': 'ETHNIKO KENTRO EREVNAS KAI TECHNOLOGIKIS ANAPTYXIS', 'organizationUrl': 'http://www.certh.gr', 'address': '57001, THERMI THESSALONIKI, EL', 'longitude': 23.0235997, 'latitude': 40.5478788}
,
{'id': 952704707, 'name': 'THE HYVE BV', 'organizationUrl': 'http://www.thehyve.nl', 'address': '3511 MJ, UTRECHT, NL', 'longitude': 5.4281886, 'latitude': 52.1375721}
,
{'id': 999984350, 'name': 'THE CHANCELLOR, MASTERS AND SCHOLARS OF THE UNIVERSITY OF OXFORD', 'organizationUrl': 'http://www.ox.ac.uk', 'address': 'OX1 2JD, OXFORD, UK', 'longitude': -1.261936139328635, 'latitude': 51.75822707709688}
,
{'id': 994467960, 'name': 'CENTRE HOSPITALIER REGIONAL UNIVERSITAIRE DE TOURS', 'organizationUrl': 'http://www.chu-tours.fr', 'address': '37044, TOURS , FR', 'longitude': 0.6889268, 'latitude': 47.3900474}
,
{'id': 963664446, 'name': 'CENTRE HOSPITALIER UNIVERSITAIRE DE POITIERS', 'organizationUrl': 'http://', 'address': '86021, POITIERS , FR', 'longitude': 0.3863800979533307, 'latitude': 46.55730375809067}
,
{'id': 999994535, 'name': 'HELSINGIN YLIOPISTO', 'organizationUrl': 'http://www.helsinki.fi', 'address': '14, HELSINGIN YLIOPISTO, FI', 'longitude': 24.94915046116435, 'latitude': 60.1710393}
,
{'id': 999471317, 'name': 'ISTITUTO NAZIONALE PER LE MALATTIE INFETTIVE LAZZARO SPALLANZANI-ISTITUTO DI RICOVERO E CURA A CARATTERE SCIENTIFICO', 'organizationUrl': 'http://www.inmi.it', 'address': '149, ROMA, IT', 'longitude': 12.42065499455952, 'latitude': 41.8852398}
,
{'id': 999845058, 'name': "UNIVERSITE D'ABOMEY-CALAVI", 'organizationUrl': 'http://www.bj.refer.org', 'address': '1, ABOMEY CALAVI, BJ', 'longitude': 2.354245, 'latitude': 6.4538637}
,
{'id': 992656000, 'name': 'IFAKARA HEALTH INSTITUTE TRUST', 'organizationUrl': 'http://www.ihi.or.tz/', 'address': 'nan, DAR ES SALAAM, TZ', 'longitude': 39.2803583, 'latitude': -6.8160837}
,
{'id': 999902579, 'name': 'UNIVERSITE LYON 1 CLAUDE BERNARD', 'organizationUrl': 'http://www.univ-Iyon1.fr', 'address': '69622, VILLEURBANNE , FR', 'longitude': 4.886899, 'latitude': 45.7733124}
,
{'id': 934774936, 'name': "ASSOCIATION INTERNATIONALE DE STANDARDISATION BIOLOGIQUE POUR L'EUROPE(IABS-EU)", 'organizationUrl': 'http://', 'address': '69393, LYON, FR', 'longitude': 5.0544418, 'latitude': 45.6670302}
,
{'id': 994851886, 'name': 'GLAXOSMITHKLINE BIOLOGICALS SA', 'organizationUrl': 'http://www.gskbio.com', 'address': '1330, RIXENSART, BE', 'longitude': 4.531542467004424, 'latitude': 50.70466313328711}
,
{'id': 951714046, 'name': 'FUNDACION PARA EL FOMENTO DE LA INVESTIGACION SANITARIA Y BIOMEDICA DE LA COMUNITAT VALENCIANA', 'organizationUrl': 'http://', 'address': '46010, VALENCIA, ES', 'longitude': -0.3710051484668017, 'latitude': 39.483589}
,
{'id': 999513803, 'name': 'INSTITUT DE RECHERCHE POUR LE DEVELOPPEMENT', 'organizationUrl': 'http://www.ird.fr', 'address': '13572, MARSEILLE, FR', 'longitude': 5.3699525, 'latitude': 43.2961743}
,
{'id': 998837810, 'name': 'OSPEDALE PEDIATRICO BAMBINO GESU', 'organizationUrl': 'http://www.ospedalebambinogesu.it', 'address': '165, ROMA, IT', 'longitude': 12.44253453228385, 'latitude': 41.71617105}
,
{'id': 917617285, 'name': 'HEALTH IQ LIMITED', 'organizationUrl': 'http://', 'address': 'E1 1DU, LONDON, UK', 'longitude': -0.06841697959665254, 'latitude': 51.51683914495508}
,
{'id': 984108457, 'name': 'TMF - TECHNOLOGIE UND METHODENPLATTFORM FUR DIE VERNETZTE MEDIZINISCHE FORSCHUNG EV', 'organizationUrl': 'http://www.tmf-ev.de', 'address': '10117, BERLIN, DE', 'longitude': 13.38771355882717, 'latitude': 52.5176643}
,
{'id': 983930462, 'name': 'MERCK SHARP & DOHME CORP', 'organizationUrl': 'http://www.merck.com', 'address': '8889, WHITEHOUSE STATION NJ, US', 'longitude': -74.7704409, 'latitude': 40.61538}
,
{'id': 999838850, 'name': 'UNIVERSITA COMMERCIALE LUIGI BOCCONI', 'organizationUrl': 'http://www.unibocconi.it', 'address': '20136, MILANO, IT', 'longitude': 9.18428135729374, 'latitude': 45.44914359625363}
,
{'id': 920403319, 'name': 'IHE, INSTITUTET FOR HALSO- OCH SJUKVARDSEKONOMI AKTIEBOLAG', 'organizationUrl': 'http://', 'address': '220 02, LUND, SE', 'longitude': 13.19861830412503, 'latitude': 55.70284885}
,
{'id': 999980567, 'name': 'THE UNIVERSITY OF LIVERPOOL', 'organizationUrl': 'http://www.liverpool.ac.uk', 'address': 'L69 7ZX, LIVERPOOL, UK', 'longitude': -2.966619748200937, 'latitude': 53.40577908463349}
,
{'id': 998198095, 'name': 'SANOFI-AVENTIS RECHERCHE & DEVELOPPEMENT', 'organizationUrl': 'http://www.sanofi-aventis.com', 'address': '91380, Chilly Mazarin, FR', 'longitude': 2.308562754754026, 'latitude': 48.70472756639654}
,
{'id': 958736458, 'name': 'ASOCIACION NACIONAL EMPRESARIAL DE LA INDUSTRIA FARMACEUTICA', 'organizationUrl': 'http://www.farmaindustria.es', 'address': '28006, MADRID, ES', 'longitude': -3.680543994151057, 'latitude': 40.43383810193768}
,
{'id': 999864555, 'name': 'THE UNIVERSITY OF EXETER', 'organizationUrl': 'http://www.ex.ac.uk', 'address': 'EX4 4QJ, EXETER, UK', 'longitude': -3.53514050748353, 'latitude': 50.73525870923829}
,
{'id': 896104237, 'name': 'TEAM - IT RESEARCH SL', 'organizationUrl': 'http://', 'address': '8007, BARCELONA, ES', 'longitude': 2.1638884, 'latitude': 41.3925904}
,
{'id': 941660093, 'name': 'BERRY CONSULTANTS LLP', 'organizationUrl': 'http://www.berryconsultants.com', 'address': 'OX14 5EG, ABINGDON, UK', 'longitude': -1.281852814711739, 'latitude': 51.66976738948151}
,
{'id': 999838074, 'name': 'UNIVERSITA DEGLI STUDI DI VERONA', 'organizationUrl': 'http://www.univr.it', 'address': '37129, VERONA, IT', 'longitude': 11.00562221319086, 'latitude': 45.44234292888024}
,
{'id': 999679964, 'name': 'FOUNDATION FOR INNOVATIVE NEW DIAGNOSTICS', 'organizationUrl': 'http://www.finddiagnostics.org/', 'address': '1202, GENEVE, CH', 'longitude': 6.14472051626424, 'latitude': 46.21647247616185}
,
{'id': 904934147, 'name': 'BD SWITZERLAND SARL', 'organizationUrl': 'http://', 'address': '1262, EYSINS, CH', 'longitude': 6.2066049871675, 'latitude': 46.38178312175021}
,
{'id': 910543754, 'name': 'ACCELERATE DIAGNOSTICS SL', 'organizationUrl': 'http://', 'address': '8860, CASTELLDEFELS, ES', 'longitude': 1.9824173, 'latitude': 41.2861022}
,
{'id': 999905974, 'name': 'THE WELLCOME TRUST LIMITED', 'organizationUrl': 'http://www.wellcome.ac.uk', 'address': 'NW1 2BE, LONDON, UK', 'longitude': -0.1344234174348964, 'latitude': 51.5257328575218}
,
{'id': 997512402, 'name': 'GMV SOLUCIONES GLOBALES INTERNET SAU', 'organizationUrl': 'http://', 'address': '28760, TRES CANTOS MADRID, ES', 'longitude': -3.7065333, 'latitude': 40.6065826}
,
{'id': 924716230, 'name': 'ASDM CONSULTING', 'organizationUrl': 'http://', 'address': '1160, AUDERGHEM, BE', 'longitude': 4.423902641353908, 'latitude': 50.8151264797253}
,
{'id': 949035488, 'name': 'FUNDACIO ACE', 'organizationUrl': 'http://', 'address': '8014, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 999541642, 'name': "FUNDACIO HOSPITAL UNIVERSITARI VALL D'HEBRON - INSTITUT DE RECERCA", 'organizationUrl': 'http://www.vhir.org/', 'address': '8035, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 952674443, 'name': 'SBGNEURO LTD', 'organizationUrl': 'http://', 'address': 'OX9 3WT, THAME, UK', 'longitude': -0.9736518668174202, 'latitude': 51.74623566516234}
,
{'id': 929609007, 'name': 'STICHTING BURO ECNP', 'organizationUrl': 'http://', 'address': '3584 CJ, UTRECHT, NL', 'longitude': 5.1446975, 'latitude': 52.0788128}
,
{'id': 997154957, 'name': 'CONSORCIO CENTRO DE INVESTIGACION BIOMEDICA EN RED M.P.', 'organizationUrl': 'http://www.ciberisciii.es', 'address': '28029, MADRID, ES', 'longitude': -3.702782044398877, 'latitude': 40.47428764417358}
,
{'id': 952915682, 'name': 'IMCYSE SA', 'organizationUrl': 'http://', 'address': '4000, SART TILMAN, BE', 'longitude': 5.5709363, 'latitude': 50.5911652}
,
{'id': 991104000, 'name': 'OSLO UNIVERSITETSSYKEHUS HF', 'organizationUrl': 'http://www.oslo-universitetssykehus.no', 'address': '450, OSLO, NO', 'longitude': 10.7580967, 'latitude': 59.8877169}
,
{'id': 998399952, 'name': 'SLASKI UNIWERSYTET MEDYCZNY W KATOWICACH', 'organizationUrl': 'http://www.sum.edu.pl', 'address': '40 055, KATOWICE, PL', 'longitude': 19.0091246, 'latitude': 50.2517635}
,
{'id': 958884383, 'name': 'UNIVERCELL BIOSOLUTIONS SAS', 'organizationUrl': 'http://www.univercell-biosolutions.com', 'address': '31000, TOULOUSE, FR', 'longitude': 1.441120302486351, 'latitude': 43.61010856953307}
,
{'id': 985410100, 'name': 'A. PERSIDIS & SIA OE', 'organizationUrl': 'http://www.biovista.com', 'address': '167 77, ATHINA, EL', 'longitude': 23.7283052, 'latitude': 37.9839412}
,
{'id': 905568915, 'name': 'FUJIFILM CELLULAR DYNAMICS INC', 'organizationUrl': 'http://', 'address': '53711, MADISON WI, US', 'longitude': -89.46974435589411, 'latitude': 43.05300835}
,
{'id': 945187886, 'name': 'ALCEDIAG', 'organizationUrl': 'http://', 'address': '13790, PEYNIER, FR', 'longitude': 5.6403316, 'latitude': 43.4471537}
,
{'id': 998484245, 'name': 'ICETA INSTITUTO DE CIENCIAS, TECNOLOGIAS E AGROAMBIENTE DA UNIVERSIDADE DO PORTO', 'organizationUrl': 'http://', 'address': '4051 401, PORTO, PT', 'longitude': -8.5792302, 'latitude': 41.1989599}
,
{'id': 951044649, 'name': 'ABBVIE INC', 'organizationUrl': 'http://www.abbvie.com', 'address': '60064, NORTH CHICAGO IL, US', 'longitude': -87.8411818, 'latitude': 42.325578}
,
{'id': 916600143, 'name': 'CLARIVATE ANALYTICS (UK) LIMITED', 'organizationUrl': 'http://', 'address': 'EC1N 8JS, LONDON, UK', 'longitude': -0.1085887611828894, 'latitude': 51.51989628709736}
,
{'id': 957780426, 'name': 'IPSEN INNOVATION SAS', 'organizationUrl': 'http://www.ipsen.com/fr', 'address': '91940, LES ULIS, FR', 'longitude': 2.17705858945898, 'latitude': 48.6798170384012}
,
{'id': 998079949, 'name': 'LIVERPOOL JOHN MOORES UNIVERSITY', 'organizationUrl': 'http://www.ljmu.ac.uk', 'address': 'L3 5UX, LIVERPOOL, UK', 'longitude': -2.973067235535667, 'latitude': 53.40366472925137}
,
{'id': 905699962, 'name': 'EISAI CO LTD', 'organizationUrl': 'http://', 'address': '112 88, BUNKYO KU TOKYO, JP', 'longitude': 139.744732, 'latitude': 35.71881}
,
{'id': 999585680, 'name': 'FUNDACIO INSTITUT MAR D INVESTIGACIONS MEDIQUES IMIM', 'organizationUrl': 'http://www.imim.es', 'address': '8003, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 951849361, 'name': 'OPTIBRIUM LIMITED', 'organizationUrl': 'http://www.optibrium.com', 'address': 'CB25 9PB, Cambridge, UK', 'longitude': 0.139153737368744, 'latitude': 52.19758465}
,
{'id': 997701455, 'name': 'LHASA LIMITED', 'organizationUrl': 'http://www.lhasalimited.org', 'address': 'LS11 5PS, LEEDS, UK', 'longitude': -1.549932214951703, 'latitude': 53.79279194958773}
,
{'id': 999864458, 'name': 'MICHIGAN STATE UNIVERSITY', 'organizationUrl': 'http://', 'address': '48824, EAST LANSING, MICHIGAN, US', 'longitude': -84.4852469, 'latitude': 42.7355416}
,
{'id': 913939724, 'name': 'PROMPTLY - SOFTWARE SOLUTIONS FOR HEALTH MEASURES, LDA', 'organizationUrl': 'http://', 'address': '4785 509, TROFA, PT', 'longitude': -8.5585061, 'latitude': 41.3363471}
,
{'id': 972436156, 'name': 'ACTUAL ANALYTICS LTD', 'organizationUrl': 'http://www.actualanalytics.com', 'address': 'EH8 9LE, EDINBURGH, UK', 'longitude': -3.1863476, 'latitude': 55.9444407}
,
{'id': 999980664, 'name': 'UNIVERSITE CATHOLIQUE DE LOUVAIN', 'organizationUrl': 'http://www.uclouvain.be', 'address': '1348, LOUVAIN LA NEUVE, BE', 'longitude': 4.613790587187648, 'latitude': 50.6741689}
,
{'id': 997696023, 'name': 'NEUROSCIENCE TECHNOLOGIES SLP', 'organizationUrl': 'http://www.nsc-tec.com', 'address': '8028, Barcelona, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 999641746, 'name': 'UNIVERSIDAD DE NAVARRA', 'organizationUrl': 'http://www.unav.es', 'address': '31080, PAMPLONA, ES', 'longitude': -1.6442556, 'latitude': 42.8184538}
,
{'id': 997595240, 'name': 'ESTEVE PHARMACEUTICALS, SA', 'organizationUrl': 'http://www.asteve.com', 'address': '8038, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 999929448, 'name': 'THE UNIVERSITY COURT OF THE UNIVERSITY OF ABERDEEN', 'organizationUrl': 'http://www.abdn.ac.uk', 'address': 'AB24 3FX, ABERDEEN, UK', 'longitude': -2.101318378150688, 'latitude': 57.16415399698334}
,
{'id': 951345349, 'name': 'TTOPSTART BV', 'organizationUrl': 'http://', 'address': '3584 BL, UTRECHT, NL', 'longitude': 5.1446975, 'latitude': 52.0788128}
,
{'id': 999524861, 'name': 'EUROPEAN ORGANISATION FOR RESEARCH AND TREATMENT OF CANCER AISBL', 'organizationUrl': 'http://www.eortc.be', 'address': '1200, Brussels, BE', 'longitude': 4.430286174720849, 'latitude': 50.84690055171932}
,
{'id': 940777781, 'name': 'EUROPEAN ALLIANCE FOR PERSONALISED MEDICINE ASBL', 'organizationUrl': 'http://', 'address': '1050, BRUXELLES, BE', 'longitude': 4.372714314802465, 'latitude': 50.82583095776042}
,
{'id': 949829918, 'name': 'PINSENT MASONS LLP', 'organizationUrl': 'http://www.pinsentmasons.com', 'address': 'EC2A 4ES, LONDON, UK', 'longitude': -0.08302675900813901, 'latitude': 51.52073110880964}
,
{'id': 991543701, 'name': 'EUROPEAN VACCINE INITIATIVE EWIV', 'organizationUrl': 'http://www.euvaccine.eu/', 'address': '69115, HEIDELBERG, DE', 'longitude': 8.694724, 'latitude': 49.4093582}
,
{'id': 942696829, 'name': 'ZOETIS BELGIUM SA', 'organizationUrl': 'http://', 'address': '1348, LOUVAIN LA NEUVE, BE', 'longitude': 4.613790587187648, 'latitude': 50.6741689}
,
{'id': 999985805, 'name': 'UNIVERSITEIT UTRECHT', 'organizationUrl': 'http://www.uu.nl', 'address': '3584 CS, UTRECHT, NL', 'longitude': 5.1396376, 'latitude': 52.091134}
,
{'id': 952691321, 'name': 'CEPHEID EUROPE', 'organizationUrl': 'http://', 'address': '81470, MAURENS-SCOPONT, FR', 'longitude': 1.814628, 'latitude': 43.5957127}
,
{'id': 999565601, 'name': 'FUNDACIO SANT JOAN DE DEU', 'organizationUrl': 'http://www.fsjd.org', 'address': '8950, Esplugues de Llobregat, ES', 'longitude': 2.0899722, 'latitude': 41.3776796}
,
{'id': 940939189, 'name': 'CAEBI BIOINFORMATICA SOCIEDAD LIMITADA', 'organizationUrl': 'http://', 'address': '41013, SEVILLA, ES', 'longitude': -5.971603369148785, 'latitude': 37.36485782948915}
,
{'id': 956098252, 'name': 'MIMETAS BV', 'organizationUrl': 'http://www.mimetas.com', 'address': '2333CH, Leiden, NL', 'longitude': 4.464624972727274, 'latitude': 52.16822794545454}
,
{'id': 952016977, 'name': 'DC BIOSCEINCES  LTD', 'organizationUrl': 'http://', 'address': 'DD1 5JJ, DUNDEE, UK', 'longitude': -2.990231702864942, 'latitude': 56.4581220617703}
,
{'id': 910327444, 'name': 'INNOVATION ACTA S.R.L.', 'organizationUrl': 'http://', 'address': '196, ROMA, IT', 'longitude': 12.42065499455952, 'latitude': 41.8852398}
,
{'id': 951206930, 'name': 'HOPITAUX UNIVERSITAIRES DE STRASBOURG', 'organizationUrl': 'http://', 'address': '67091, STRASBOURG , FR', 'longitude': 7.767266396151124, 'latitude': 48.58900661267569}
,
{'id': 998619463, 'name': 'FUNDACION PUBLICA ANDALUZA PROGRESO Y SALUD', 'organizationUrl': 'http://www.juntadeandalucia.es/fundacionprogresoysalud', 'address': '41092, SEVILLA, ES', 'longitude': -6.006968322838564, 'latitude': 37.40385725732884}
,
{'id': 999895692, 'name': 'ARISTOTELIO PANEPISTIMIO THESSALONIKIS', 'organizationUrl': 'http://www.auth.gr', 'address': '54636, THESSALONIKI, EL', 'longitude': 22.95862192996653, 'latitude': 40.62859928271261}
,
{'id': 974720409, 'name': 'SERVIZO GALEGO DE SAUDE', 'organizationUrl': 'http://www.sergas.es', 'address': '15703, Santiago de Compostela, ES', 'longitude': -8.5458608, 'latitude': 42.8804219}
,
{'id': 962478330, 'name': 'FONDAZIONE PER LA RICERCA FARMACOLOGICA GIANNI BENZI ONLUS', 'organizationUrl': 'http://www.benzifoundation.org', 'address': '70010, VALENZANO BARI, IT', 'longitude': 16.885086, 'latitude': 41.045333}
,
{'id': 902375190, 'name': 'RETE ITALIANA PER LE SPERIMENTAZIONI CLINICHE IN PEDIATRIA', 'organizationUrl': 'http://', 'address': '165, ROME, IT', 'longitude': 12.44253453228385, 'latitude': 41.71617105}
,
{'id': 997950066, 'name': 'SIOP EUROPE ASBL', 'organizationUrl': 'http://www.siope.eu', 'address': '1200, BRUXELLES, BE', 'longitude': 4.430286174720849, 'latitude': 50.84690055171932}
,
{'id': 920961166, 'name': 'HIMSS EUROPE GMBH', 'organizationUrl': 'http://', 'address': '10557, BERLIN, DE', 'longitude': 13.36373421950196, 'latitude': 52.52615165}
,
{'id': 999563952, 'name': 'AGENCIA ESPANOLA DE MEDICAMENTOS Y PRODUCTOS SANITARIOS', 'organizationUrl': 'http://www.aemps.gob.es/', 'address': '28022, MADRID, ES', 'longitude': -3.597388639978614, 'latitude': 40.43995245007478}
,
{'id': 893304914, 'name': 'FORUM DES PATIENTS EUROPEENS', 'organizationUrl': 'http://', 'address': 'BRUSSELS, 1040, BE', 'longitude': 4.351697, 'latitude': 50.8465573}
,
{'id': 909422822, 'name': 'FRISQ HOLDING AB', 'organizationUrl': 'http://', 'address': '111 44, STOCKHOLM, SE', 'longitude': 18.071429275, 'latitude': 59.33457221249999}
,
{'id': 895588876, 'name': 'MYLAN IRE HEALTHCARE LIMITED', 'organizationUrl': 'http://', 'address': '13, DUBLIN, IE', 'longitude': -6.149703095243567, 'latitude': 53.40286389713622}
,
{'id': 919399660, 'name': 'GUARDTIME OU', 'organizationUrl': 'http://', 'address': '11316, TALLINN, EE', 'longitude': 24.72116337834245, 'latitude': 59.40472508400223}
,
{'id': 896345088, 'name': 'DATAPHARM LIMITED', 'organizationUrl': 'http://', 'address': 'KT22 7TW, LEATHERHEAD SURREY, UK', 'longitude': -0.3370991685613807, 'latitude': 51.29977035797369}
,
{'id': 949857563, 'name': 'OPEN EVIDENCE', 'organizationUrl': 'http://', 'address': '8035, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 895780451, 'name': 'MINDVIEW SYMVOULOI EPIXEIRISEON KAIEREVNAS ETAIREIA PERIORISMENIS EFTHYNIS', 'organizationUrl': 'http://', 'address': '11524, ATHINA, EL', 'longitude': 23.7283052, 'latitude': 37.9839412}
,
{'id': 999974844, 'name': 'UNIVERSIDAD POLITECNICA DE MADRID', 'organizationUrl': 'http://www.upm.es', 'address': '28040, MADRID, ES', 'longitude': -3.724038397809811, 'latitude': 40.45130925514027}
,
{'id': 999915771, 'name': 'UNIVERSITA CATTOLICA DEL SACRO CUORE', 'organizationUrl': 'http://www.unicattolica.it', 'address': '20123, MILANO, IT', 'longitude': 9.174384494989257, 'latitude': 45.4596433}
,
{'id': 991888051, 'name': 'UNIVERSITETSSYKEHUSET NORD-NORGE HF', 'organizationUrl': 'http://www.unn.no', 'address': '9019, TROMSO, NO', 'longitude': 18.99209014887916, 'latitude': 69.68494314970864}
,
{'id': 904447692, 'name': 'BEAM ALLIANCE', 'organizationUrl': 'http://', 'address': '75011, PARIS, FR', 'longitude': 2.382258361848357, 'latitude': 48.85680415}
,
{'id': 972942011, 'name': 'ONE WAY LIVER SL', 'organizationUrl': 'http://', 'address': '48160, DERIO BIZKAIA, ES', 'longitude': -2.883021072185334, 'latitude': 43.29083667311782}
,
{'id': 999674532, 'name': 'GENFIT', 'organizationUrl': 'http://www.genfit.com', 'address': '59120, LOOS, FR', 'longitude': 3.013332061168624, 'latitude': 50.61417562799113}
,
{'id': 999811011, 'name': "UNIVERSITE D'ANGERS", 'organizationUrl': 'http://www.univ-angers.fr', 'address': '49035, ANGERS , FR', 'longitude': -0.5600952, 'latitude': 47.4757343}
,
{'id': 999689373, 'name': 'IXSCIENT LIMITED', 'organizationUrl': 'http://www.ixscient.com', 'address': 'TW1 4JX, TWICKENHAM MIDDLESEX, UK', 'longitude': -0.3257923, 'latitude': 51.475644}
,
{'id': 998817731, 'name': 'ASOCIACION CENTRO DE INVESTIGACION COOPERATIVA EN BIOCIENCIAS', 'organizationUrl': 'http://www.cicbiogune.es', 'address': '48160, DERIO VIZCAYA, ES', 'longitude': -2.883021072185334, 'latitude': 43.29083667311782}
,
{'id': 999888320, 'name': 'FACULDADE DE MEDICINA DA UNIVERSIDADE DE LISBOA', 'organizationUrl': 'http://', 'address': '1649-028, LISBOA, PT', 'longitude': -9.1604033, 'latitude': 38.7504777}
,
{'id': 918357395, 'name': 'ANTAROS MEDICAL AB', 'organizationUrl': 'http://', 'address': '431 83, MOLNDAL, SE', 'longitude': 12.0153085, 'latitude': 57.6564918}
,
{'id': 934968839, 'name': 'PERSPECTUM LTD', 'organizationUrl': 'http://', 'address': 'OX4 2LL, OXFORD, UK', 'longitude': -1.206925978461596, 'latitude': 51.72903310846608}
,
{'id': 916100496, 'name': 'ELLEGAARD GOTTINGEN MINIPIGS AS', 'organizationUrl': 'http://', 'address': '4261, DALMOSE, DK', 'longitude': 11.416817, 'latitude': 55.2954669}
,
{'id': 999839820, 'name': 'UNIVERSITE DIJON BOURGOGNE', 'organizationUrl': 'http://www.u-bourgogne.fr', 'address': '21078, DIJON , FR', 'longitude': 5.069117820211516, 'latitude': 47.31516330251531}
,
{'id': 953675095, 'name': "PARKINSON'S DISEASE SOCIETY OF THEUNITED KINGDOM LBG", 'organizationUrl': 'http://', 'address': 'SW1V 1EJ, LONDON, UK', 'longitude': -0.1414995407014775, 'latitude': 51.49480319918239}
,
{'id': 949888118, 'name': 'OPEN PHACTS FOUNDATION LBG', 'organizationUrl': 'http://www.openphactsfoundation.org', 'address': 'CB4 0WF, CAMBRIDGE, UK', 'longitude': 0.1405905697485725, 'latitude': 52.23573313295523}
,
{'id': 999851169, 'name': 'UNIVERSITE PAUL SABATIER TOULOUSE III', 'organizationUrl': 'http://www.ups-tlse.fr', 'address': '31062, TOULOUSE , FR', 'longitude': 1.46871530291132, 'latitude': 43.56409720492533}
,
{'id': 999655520, 'name': 'BARCELONA SUPERCOMPUTING CENTER - CENTRO NACIONAL DE SUPERCOMPUTACION', 'organizationUrl': 'http://www.bsc.es', 'address': '8034, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 920738745, 'name': 'INFORMATION TECHNOLOGY FOR TRANSLATIONAL MEDICINE (ITTM) SA', 'organizationUrl': 'http://', 'address': '4362, Esch-sur-Alzette, LU', 'longitude': 5.9850306, 'latitude': 49.4959628}
,
{'id': 999531457, 'name': 'CENTRE MURAZ', 'organizationUrl': 'http://membres.lycos.fr/centremuraz', 'address': 'nan, BOBO-DIOULASSO, BF', 'longitude': -4.2957591, 'latitude': 11.1757783}
,
{'id': 998983795, 'name': 'CENTRE HOSPITALIER REGIONAL UNIVERSITAIRE NANCY', 'organizationUrl': 'http://www.chu-nancy.fr', 'address': '54035, NANCY , FR', 'longitude': 6.1834097, 'latitude': 48.6937223}
,
{'id': 895352681, 'name': 'T1D EXCHANGE INC', 'organizationUrl': 'http://', 'address': '2111, BOSTON, US', 'longitude': -71.0582912, 'latitude': 42.3602534}
,
{'id': 999974359, 'name': 'UNIVERSITY COLLEGE DUBLIN, NATIONAL UNIVERSITY OF IRELAND, DUBLIN', 'organizationUrl': 'http://www.ucd.ie', 'address': '4, DUBLIN, IE', 'longitude': -6.230489228014642, 'latitude': 53.33024370287974}
,
{'id': 997946477, 'name': "FUNDACIO INSTITUT D'INVESTIGACIO BIOMEDICA DE GIRONA DOCTOR JOSEP TRUETA", 'organizationUrl': 'http://www.idibgi.org', 'address': '17190, GIRONA, ES', 'longitude': 2.789947653205019, 'latitude': 41.97321008442604}
,
{'id': 897837530, 'name': 'OBESITY ACTION COALITION INC', 'organizationUrl': 'http://', 'address': '33614, TAMPA FL, US', 'longitude': -82.458444, 'latitude': 27.9477595}
,
{'id': 901444960, 'name': 'SPRINGWORKS THERAPEUTICS INC', 'organizationUrl': 'http://', 'address': '6902, STAMFORD CT, US', 'longitude': -80.9308626, 'latitude': 35.5698636}
,
{'id': 906262271, 'name': 'EUROSCAN INTERNATIONAL NETWORK EV', 'organizationUrl': 'http://', 'address': '50676, KOLN, DE', 'longitude': 6.950304117293822, 'latitude': 50.93166618205868}
,
{'id': 901215555, 'name': "CHILDREN'S TUMOR FOUNDATION", 'organizationUrl': 'http://', 'address': '10005, NEW YORK, US', 'longitude': -74.0060152, 'latitude': 40.7127281}
,
{'id': 999697812, 'name': 'CUSTODIX NV', 'organizationUrl': 'http://www.custodix.com', 'address': '9830, SINT-MARTENS-LATEM, BE', 'longitude': 3.630628236234406, 'latitude': 51.0134563}
,
{'id': 999769495, 'name': 'ROMSOFT SRL', 'organizationUrl': 'http://www.rms.ro', 'address': '700391, IASI, RO', 'longitude': 27.61550469209762, 'latitude': 47.1529352597813}
,
{'id': 952891432, 'name': 'TECHNOVATIVE SOLUTIONS LTD', 'organizationUrl': 'http://', 'address': 'M15 6JJ, MANCHESTER, UK', 'longitude': -2.2380798, 'latitude': 53.4630602}
,
{'id': 999955347, 'name': 'EUROPEAN FORUM FOR GOOD CLINICAL PRACTICE', 'organizationUrl': 'http://www.efgcp.eu', 'address': '1050, BRUSSELS, BE', 'longitude': 4.372714314802465, 'latitude': 50.82583095776042}
,
{'id': 907543544, 'name': 'HOSPITAL DO ESPIRITO SANTO DE EVORA EPE', 'organizationUrl': 'http://', 'address': '7000 811, EVORA, PT', 'longitude': -7.9020229, 'latitude': 38.5682475}
,
{'id': 967282449, 'name': 'ONORACH LTD', 'organizationUrl': 'http://www.onorach.com', 'address': 'DD2 1TY, DUNDEE, UK', 'longitude': -3.052302664127456, 'latitude': 56.46175319464482}
,
{'id': 999659109, 'name': 'DIMOKRITIO PANEPISTIMIO THRAKIS', 'organizationUrl': 'http://www.duth.gr', 'address': '69100, KOMOTINI, EL', 'longitude': 25.4041307, 'latitude': 41.117833}
,
{'id': 999742335, 'name': 'PDM E FC PROJECTO DESENVOLVIMENTO MANUTENCAO FORMACAO E CONSULTADORIALDA', 'organizationUrl': 'http://www.pdmfc.com', 'address': '1300 066, LISBOA, PT', 'longitude': -9.1365919, 'latitude': 38.7077507}
,
{'id': 998817925, 'name': 'EKON MODELING SOFWARE SYSTEMS LTD*EKON', 'organizationUrl': 'http://', 'address': "7175812, Modi'in-Maccabim-Re'ut, IL", 'longitude': 34.98923113342092, 'latitude': 31.89527805}
,
{'id': 972040493, 'name': 'PORSOLT SAS', 'organizationUrl': 'http://', 'address': '53940, LE GENEST SAINT-ISLE, FR', 'longitude': -0.8867728, 'latitude': 48.0989921}
,
{'id': 999719346, 'name': 'SYNAPTOLOGICS BV', 'organizationUrl': 'http://www.synaptologics.com', 'address': '1008 BA, AMSTERDAM, NL', 'longitude': 4.892514790930079, 'latitude': 52.37324315}
,
{'id': 931760370, 'name': 'ICON CLINICAL RESEARCH LIMITED', 'organizationUrl': 'http://', 'address': '18, DUBLIN, IE', 'longitude': -6.1845428, 'latitude': 53.2519793}
,
{'id': 951414122, 'name': 'FUNDACION PRIVADA INSTITUTO DE SALUD GLOBAL BARCELONA', 'organizationUrl': 'http://www.isglobal.org', 'address': '8036, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 905175871, 'name': 'ERESEARCH TECHNOLOGY INC', 'organizationUrl': 'http://', 'address': '19103, PHILADELPHIA, US', 'longitude': -75.17190081400054, 'latitude': 39.9569311}
,
{'id': 991486083, 'name': 'PRIMADIAG SAS', 'organizationUrl': 'http://www.primadiag.com', 'address': '93230, ROMAINVILLE, FR', 'longitude': 2.434546862228249, 'latitude': 48.88755003715408}
,
{'id': 952585106, 'name': 'AGENCIA PUBLICA EMPRESARIAL SANITARIA COSTA DEL SOL', 'organizationUrl': 'http://', 'address': '29603, MARBELLA MALAGA, ES', 'longitude': -4.871139211896168, 'latitude': 36.51343274202382}
,
{'id': 927539609, 'name': 'GENEFIRST LIMITED', 'organizationUrl': 'http://', 'address': 'OX14 3DB, ABINGDON, UK', 'longitude': -1.2656178, 'latitude': 51.6845882}
,
{'id': 934759222, 'name': 'WORLD VISION OF IRELAND LBG', 'organizationUrl': 'http://', 'address': 'D06, Dublin, IE', 'longitude': -6.2602732, 'latitude': 53.3497645}
,
{'id': 934832166, 'name': 'GRAMEEN FOUNDATION USA', 'organizationUrl': 'http://', 'address': '20005, WASHINGTON, US', 'longitude': -77.03075451209843, 'latitude': 38.90364021017545}
,
{'id': 999755818, 'name': 'STATENS VETERINAERMEDICINSKA ANSTALT', 'organizationUrl': 'http://www.sva.se/', 'address': '75189, UPPSALA, SE', 'longitude': 17.6387436, 'latitude': 59.8586126}
,
{'id': 999528450, 'name': 'FUNDACIO INSTITUT DE BIOENGINYERIA DE CATALUNYA', 'organizationUrl': 'http://www.ibecbarcelona.eu', 'address': '8028, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 940156593, 'name': 'STEMCELL TECHNOLOGIES UK LTD', 'organizationUrl': 'http://', 'address': 'CB25 9TL, CAMBRIDGE, UK', 'longitude': 0.1724204085902723, 'latitude': 52.29066067673646}
,
{'id': 999919263, 'name': 'INSTITUT FUER MOLEKULARE BIOTECHNOLOGIE GMBH', 'organizationUrl': 'http://www.imba.oeaw.ac.at', 'address': '1030, WIEN, AT', 'longitude': 16.39319930777815, 'latitude': 48.19877792706465}
,
{'id': 995163935, 'name': "FUNDACIO PRIVADA INSTITUT D'INVESTIGACIO ONCOLOGICA DE VALL-HEBRON (VHIO)", 'organizationUrl': 'http://www.vhio.net', 'address': '8035, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 987932003, 'name': 'EUROPEAN SOCIETY FOR BLOOD AND MARROW TRANSPLANTATION', 'organizationUrl': 'http://www.ebmt.org', 'address': '2333 AA, LEIDEN, NL', 'longitude': 4.4616314, 'latitude': 52.1615068}
,
{'id': 999981343, 'name': 'GENOME RESEARCH LIMITED', 'organizationUrl': 'http://www.sanger.ac.uk', 'address': 'NW1 2BE, LONDON, UK', 'longitude': -0.1344234174348964, 'latitude': 51.5257328575218}
,
{'id': 923028430, 'name': 'GROUP FOR RESEARCH ON ADULT ACUTE LYMPHOBLASTIC LEUKEMIA', 'organizationUrl': 'http://', 'address': '69495, PIERRE BENITE, FR', 'longitude': 4.8241323, 'latitude': 45.7028321}
,
{'id': 995991539, 'name': 'FUNDACION PARA LA INVESTIGACION DEL HOSPITAL UNIVERSITARIO LA FE DE LA COMUNIDAD VALENCIANA', 'organizationUrl': 'http://www.iislafe.es', 'address': '46026, VALENCIA, ES', 'longitude': -0.3788148375073808, 'latitude': 39.44695091980131}
,
{'id': 935297572, 'name': 'EUROPEAN HEMATOLOGY ASSOCIATION', 'organizationUrl': 'http://', 'address': '2514 AA, DEN HAAG, NL', 'longitude': 4.3212421, 'latitude': 52.1016772}
,
{'id': 951404713, 'name': 'FUNDACION INSTITUTO DE ESTUDIOS DE CIENCIAS DE LA SALUD DE CASTILLA Y LEON', 'organizationUrl': 'http://', 'address': '42002, SORIA, ES', 'longitude': -2.464409851434009, 'latitude': 41.76449767674252}
,
{'id': 954542081, 'name': 'GROUPE FRANCOPHONE DES MYELODYSPLASIES', 'organizationUrl': 'http://', 'address': '75010, PARIS, FR', 'longitude': 2.348786897761125, 'latitude': 48.87368995}
,
{'id': 916002526, 'name': 'THE LYMPHOMA STUDY ASSOCIATION', 'organizationUrl': 'http://', 'address': '69310, PIERRE BENITE, FR', 'longitude': 4.835499106485973, 'latitude': 45.70391043995149}
,
{'id': 951078308, 'name': 'FUNDACIO INSTITUT DE RECERCA CONTRA LA LEUCEMIA JOSEP CARRERAS', 'organizationUrl': 'http://www.carrerasresearch.org', 'address': '8021, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 895299913, 'name': 'B G RESEARCH LTD', 'organizationUrl': 'http://', 'address': 'PE28 0NJ, KIMBOLTON, UK', 'longitude': -0.3788310977325602, 'latitude': 52.31232622043838}
,
{'id': 894788917, 'name': 'BIOGENE LTD', 'organizationUrl': 'http://', 'address': 'PE28 0NJ, CAMBRIDGESHIRE, UK', 'longitude': -0.3788310977325602, 'latitude': 52.31232622043838}
,
{'id': 999544455, 'name': 'FUNDACIO CENTRE DE REGULACIO GENOMICA', 'organizationUrl': 'http://www.crg.es', 'address': '8003, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 903583907, 'name': 'IMAGINAB, INC', 'organizationUrl': 'http://', 'address': '90301, INGLEWOOD CA, US', 'longitude': -118.353132, 'latitude': 33.9562003}
,
{'id': 899667241, 'name': 'LAWRENCIUM LEGAL BV', 'organizationUrl': 'http://', 'address': '1016 XX, AMSTERDAM, NL', 'longitude': 4.8978708, 'latitude': 52.3761892}
,
{'id': 925833670, 'name': 'IPRASENSE', 'organizationUrl': 'http://', 'address': '34830, CLAPIERS, FR', 'longitude': 3.8868606, 'latitude': 43.6567216}
,
{'id': 972921932, 'name': 'SCLAVO VACCINES ASSOCIATION', 'organizationUrl': 'http://www.sclavo.org/home', 'address': '53100, SIENA, IT', 'longitude': 11.3298900563671, 'latitude': 43.32009165831612}
,
{'id': 953733780, 'name': 'IXICO TECHNOLOGIES LIMITED', 'organizationUrl': 'http://www.ixico.com', 'address': 'EC1A 9PN, LONDON, UK', 'longitude': -0.09891117223219756, 'latitude': 51.5197282570243}
,
{'id': 983381733, 'name': 'AC IMMUNE SA', 'organizationUrl': 'http://www.acimmune.com', 'address': '1015, Lausanne, CH', 'longitude': 6.6327025, 'latitude': 46.5218269}
,
{'id': 931461416, 'name': 'ENYO PHARMA', 'organizationUrl': 'http://', 'address': '69007, LYON, FR', 'longitude': 4.8410602399415, 'latitude': 45.74442338000443}
,
{'id': 895296130, 'name': 'GLOBAL HEALTH DRUG DISCOVERY INSTITUTE', 'organizationUrl': 'http://', 'address': '100192, BEIJING, CN', 'longitude': 116.3552357991645, 'latitude': 40.02978395411796}
,
{'id': 899073795, 'name': 'SCIFEON APS', 'organizationUrl': 'http://', 'address': '2860, SOBORG, DK', 'longitude': 12.5088728, 'latitude': 55.736468}
,
{'id': 994229922, 'name': 'EUROVACC FOUNDATION', 'organizationUrl': 'http://www.eurovacc.org', 'address': '1003, LAUSANNE, CH', 'longitude': 6.631826994085769, 'latitude': 46.52074440358454}
,
{'id': 916176738, 'name': 'ANOCCA AB', 'organizationUrl': 'http://', 'address': '151 36, SODERTALJE, SE', 'longitude': 17.6271663, 'latitude': 59.1964289}
,
{'id': 953055750, 'name': 'ARTEMIS BIO-SUPPORT B.V.', 'organizationUrl': 'http://www.artemisonehealth.com', 'address': '2629 JD, DELFT, NL', 'longitude': 4.3626167, 'latitude': 52.0100395}
,
{'id': 915056194, 'name': 'FCIENCIAS.ID - ASSOCIACAO PARA A INVESTIGACAO E DESENVOLVIMENTO DE CIENCIAS', 'organizationUrl': 'http://www.fciencias-id.pt', 'address': '1749 016, LISBON, PT', 'longitude': -9.156534756976047, 'latitude': 38.75621882113094}
,
{'id': 990012071, 'name': 'CAMBRIDGE COGNITION LIMITED', 'organizationUrl': 'http://www.cambridgecognition.com', 'address': 'CB25 9TU, CAMBRIDGE, UK', 'longitude': 0.1716221649454555, 'latitude': 52.1957628}
,
{'id': 959764464, 'name': 'ASOCIACION PARKINSON MADRID', 'organizationUrl': 'http://', 'address': '28014, MADRID, ES', 'longitude': -3.693790747121414, 'latitude': 40.41356929121909}
,
{'id': 999809071, 'name': 'UNIVERSITY OF LIMERICK', 'organizationUrl': 'http://www.ul.ie', 'address': '-, LIMERICK, IE', 'longitude': -8.6301239, 'latitude': 52.661252}
,
{'id': 959554362, 'name': 'LIXOFT SAS', 'organizationUrl': 'http://www.lixoft.com', 'address': '92160, ANTONY, FR', 'longitude': 2.301036646067096, 'latitude': 48.74962777836231}
,
{'id': 998637893, 'name': 'INSTYTUT PSYCHIATRII I NEUROLOGII', 'organizationUrl': 'http://www.ipin.edu.pl', 'address': '02 957, WARSZAWA, PL', 'longitude': 21.06540919530328, 'latitude': 52.17313653552433}
,
{'id': 904654108, 'name': 'MEDIBIOSENSE LTD', 'organizationUrl': 'http://', 'address': 'DN9 2PG, DONCASTER, UK', 'longitude': -1.102867205667193, 'latitude': 53.4848231}
,
{'id': 999861354, 'name': 'UNIVERSIDAD AUTONOMA DE MADRID', 'organizationUrl': 'http://www.uam.es', 'address': '28049, MADRID, ES', 'longitude': -3.699239905800929, 'latitude': 40.52100102749301}
,
{'id': 911062219, 'name': 'BYTEFLIES', 'organizationUrl': 'http://', 'address': '2600, ANTWERPEN, BE', 'longitude': 4.431697593724653, 'latitude': 51.1918525}
,
{'id': 985620493, 'name': 'EMORY UNIVERSITY NON PROFIT CORP', 'organizationUrl': 'http://www.osp.emory.edu', 'address': '30322, Atlanta, US', 'longitude': -84.3902644, 'latitude': 33.7489924}
,
{'id': 934731286, 'name': 'BIOPROTECTION SYSTEMS CORPORATION', 'organizationUrl': 'http://', 'address': '50010, AMES, US', 'longitude': -93.61713837910041, 'latitude': 42.03229521906892}
,
{'id': 905770675, 'name': 'SUBSTRA', 'organizationUrl': 'http://', 'address': '44000, NANTES, FR', 'longitude': -1.54639078022873, 'latitude': 47.2123847}
,
{'id': 996642506, 'name': "IRISH PLATFORM FOR PATIENTS' ORGANISATIONS SCIENCE AND INDUSTRY LIMITED BY GUARANTEE", 'organizationUrl': 'http://www.ipposi.ie', 'address': '6, DUBLIN, IE', 'longitude': -6.136550569954185, 'latitude': 53.37679365}
,
{'id': 947481451, 'name': 'FUNDACIO BARCELONABETA BRAIN RESEARCH CENTER', 'organizationUrl': 'http://www.fpmaragall.org', 'address': '8005, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 999894819, 'name': 'CENTRE HOSPITALIER UNIVERSITAIRE DE TOULOUSE', 'organizationUrl': 'http://www.chu-toulouse.fr', 'address': '31052, TOULOUSE , FR', 'longitude': 1.4442469, 'latitude': 43.6044622}
,
{'id': 907536172, 'name': 'THE SIMONS FOUNDATION, INC', 'organizationUrl': 'http://', 'address': '10010, NEW YORK, US', 'longitude': -74.0060152, 'latitude': 40.7127281}
,
{'id': 913059449, 'name': 'FUNDAZIOA POLICLINICA GIPUZKOA FUNDACION', 'organizationUrl': 'http://', 'address': '20014, SAN SEBASTIAN, ES', 'longitude': -6.3854604, 'latitude': 41.3231835}
,
{'id': 963202435, 'name': 'AUTISM SPEAKS INC. NON PROFIT CORPORATION', 'organizationUrl': 'http://www.autismspeaks.org', 'address': '8540, Princeton NJ, US', 'longitude': -74.6592958, 'latitude': 40.3492744}
,
{'id': 999889969, 'name': 'ZENTRALINSTITUT FUER SEELISCHE GESUNDHEIT', 'organizationUrl': 'http://www.zi-mannheim.de', 'address': '68159, MANNHEIM, DE', 'longitude': 8.46131103140067, 'latitude': 49.49153760307059}
,
{'id': 999877359, 'name': 'STELLENBOSCH UNIVERSITY', 'organizationUrl': 'http://', 'address': '7600, STELLENBOSCH, ZA', 'longitude': 18.84345046314552, 'latitude': -33.95573729866608}
,
{'id': 999889290, 'name': 'UNIVERSITY OF KWAZULU-NATAL', 'organizationUrl': 'http://www.ukzn.ac.za', 'address': '3630, WESTVILLE, ZA', 'longitude': 30.9386111, 'latitude': -29.8244444}
,
{'id': 940967707, 'name': 'ELEVATE BV', 'organizationUrl': 'http://', 'address': '3584 CS, UTRECHT, NL', 'longitude': 5.1396376, 'latitude': 52.091134}
,
{'id': 999839626, 'name': 'UNIVERSITA DEGLI STUDI DI FERRARA', 'organizationUrl': 'http://www.unife.it', 'address': '44121, FERRARA, IT', 'longitude': 11.62260015479381, 'latitude': 44.83340761159495}
,
{'id': 974394489, 'name': 'EISAI LIMITED', 'organizationUrl': 'http://', 'address': 'AL10 9SN, HATFIELD, UK', 'longitude': -0.2414521246093725, 'latitude': 51.76729040170375}
,
{'id': 999458125, 'name': 'AIBILI ASSOCIACAO PARA INVESTIGACAO BIOMEDICA E INNOVACAO EM LUZ E IMAGEM', 'organizationUrl': 'http://www.aibili.pt', 'address': '3000 548, COIMBRA, PT', 'longitude': -8.416068204010388, 'latitude': 40.21957967015089}
,
{'id': 999573264, 'name': 'THE UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL', 'organizationUrl': 'http://www.unc.edu', 'address': '27599, CHAPEL HILL, US', 'longitude': -71.46278800628568, 'latitude': 42.2932057}
,
{'id': 894177138, 'name': 'ZEBIAI THERAPEUTICS INC', 'organizationUrl': 'http://', 'address': '19801, WILMINGTON, US', 'longitude': -75.5488807830912, 'latitude': 39.73818800302399}
,
{'id': 999898311, 'name': 'UNIVERSIDAD DE MALAGA', 'organizationUrl': 'http://www.uma.es', 'address': '29016, MALAGA, ES', 'longitude': -4.401871881997221, 'latitude': 36.72427438889671}
,
{'id': 998869432, 'name': "FUNDACIO PRIVADA INSTITUT DE RECERCA DE L'HOSPITAL DE LA SANTA CREU I SANT PAU", 'organizationUrl': 'http://www.santpau.cat', 'address': '8025, BARCELONA, ES', 'longitude': 2.17612675, 'latitude': 41.40829465}
,
{'id': 999874061, 'name': 'UNIVERSITA DEGLI STUDI DI CATANIA', 'organizationUrl': 'http://www.unict.it', 'address': '95131, CATANIA, IT', 'longitude': 15.09147673921824, 'latitude': 37.50778869245997}
,
{'id': 940585139, 'name': 'LUPUS EUROPE', 'organizationUrl': 'http://', 'address': 'RM1 3NH, ROMFORD ESSEX, UK', 'longitude': 0.1200563, 'latitude': 51.6144545}
,
{'id': 999992013, 'name': "THE QUEEN'S UNIVERSITY OF BELFAST", 'organizationUrl': 'http://www.qub.ac.uk', 'address': 'BT7 1NN, BELFAST, UK', 'longitude': -5.9303817, 'latitude': 54.6000747}
,
{'id': 999620018, 'name': "CONSORCI INSTITUT D'INVESTIGACIONS BIOMEDIQUES AUGUST PI I SUNYER", 'organizationUrl': 'http://www.idibaps.org/en_index.html', 'address': '8036, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 998778543, 'name': 'AZIENDA OSPEDALIERO-UNIVERSITARIA ANNA MEYER', 'organizationUrl': 'http://www.meyer.it', 'address': '50139, FIRENZE, IT', 'longitude': 11.25945681803691, 'latitude': 43.80021094164831}
,
{'id': 950305218, 'name': 'ATRYS HEALTH, SA', 'organizationUrl': 'http://', 'address': '28001, MADRID, ES', 'longitude': -3.687277666664973, 'latitude': 40.4271819}
,
{'id': 999878717, 'name': 'UNIVERSYTET MEDYCZNY W LODZI.', 'organizationUrl': 'http://www.umed.lodz.pl', 'address': '90419, LODZ, PL', 'longitude': 19.9730857, 'latitude': 51.470379}
,
{'id': 999530293, 'name': 'CEMM - FORSCHUNGSZENTRUM FUER MOLEKULARE MEDIZIN GMBH', 'organizationUrl': 'http://www.oeaw.ac.at/', 'address': '1090, WIEN, AT', 'longitude': 16.35114856839968, 'latitude': 48.2299123}
,
{'id': 999846028, 'name': 'UNIVERSITA DEGLI STUDI DI PARMA', 'organizationUrl': 'http://www.unipr.it', 'address': '43100, PARMA, IT', 'longitude': 10.32749393342959, 'latitude': 44.8419830014269}
,
{'id': 895312620, 'name': 'TOPMD PRECISION MEDICINE LTD', 'organizationUrl': 'http://', 'address': 'SO45 3PN, SOUTHAMPTON, UK', 'longitude': -1.3944361, 'latitude': 50.8870044}
,
{'id': 958794270, 'name': 'CDISC EUROPE FOUNDATION FONDATION', 'organizationUrl': 'http://www.cdisc.org', 'address': '1060, BRUXELLES, BE', 'longitude': 4.336761158059709, 'latitude': 50.832067}
,
{'id': 919323321, 'name': 'THIRONA BV', 'organizationUrl': 'http://', 'address': '6525EC, NIJMEGEN, NL', 'longitude': 5.870225474509803, 'latitude': 51.82332773921569}
,
{'id': 910622033, 'name': 'ALEXION SERVICES EUROPE SPRL', 'organizationUrl': 'http://', 'address': '1000, BRUSSELS, BE', 'longitude': 4.369609359830152, 'latitude': 50.84603525}
,
{'id': 958496383, 'name': 'HAUTE AUTORITE DE SANTE', 'organizationUrl': 'http://www.has-sante.fr/portail/jcms/j_5/accueil', 'address': '93218, SAINT DENIS LA PLAINE , FR', 'longitude': 2.358586, 'latitude': 48.9106442}
,
{'id': 997663431, 'name': 'DA VOLTERRA SAS', 'organizationUrl': 'http://www.davolterra.com', 'address': '75011, PARIS, FR', 'longitude': 2.382258361848357, 'latitude': 48.85680415}
,
{'id': 988243858, 'name': 'JULIUS CLINICAL RESEARCH BV', 'organizationUrl': 'http://www.juliusclinical.com', 'address': '3703 CD, ZEIST, NL', 'longitude': 5.2588481, 'latitude': 52.1042753}
,
{'id': 896257012, 'name': 'VIVE - DET NATIONALE FORSKNINGS- OG ANALYSECENTER FOR VELFAERD', 'organizationUrl': 'http://', 'address': '1052, COPENHAGEN, DK', 'longitude': 12.59014834482758, 'latitude': 55.67886513793103}
,
{'id': 999886477, 'name': 'KLINIKUM DER UNIVERSITAET REGENSBURG', 'organizationUrl': 'http://www-cgi.uni-regensburg.de/Klinik/Klinikum/', 'address': '93053, REGENSBURG, DE', 'longitude': 12.0974869, 'latitude': 49.0195333}
,
{'id': 999890745, 'name': 'UNIVERSITE DE KINSHASA', 'organizationUrl': 'http://', 'address': 'nan, KINSHASA, CD', 'longitude': 15.3125974, 'latitude': -4.3217055}
,
{'id': 903459068, 'name': 'COALITION FOR EPIDEMIC PREPAREDNESS INNOVATION', 'organizationUrl': 'http://', 'address': '473, OSLO, NO', 'longitude': 10.7389701, 'latitude': 59.9133301}
,
{'id': 924110271, 'name': 'UNIVERSITY OF SIERRA LEONE', 'organizationUrl': 'http://', 'address': 'nan, FREETOWN, SL', 'longitude': -13.26795, 'latitude': 8.479004}
,
{'id': 999622443, 'name': 'IDRYMA IATROVIOLOGIKON EREUNON AKADEMIAS ATHINON', 'organizationUrl': 'http://www.bioacademy.gr', 'address': '115 27, ATHINA, EL', 'longitude': 23.7283052, 'latitude': 37.9839412}
,
{'id': 998010303, 'name': 'NORTH BRISTOL NATIONAL HEALTH SERVICE TRUST', 'organizationUrl': 'http://www.nbt.nhs.uk', 'address': 'BS10 5NB, BRISTOL, UK', 'longitude': -2.592266020244783, 'latitude': 51.49659293420721}
,
{'id': 928901586, 'name': 'NOSOPHARM', 'organizationUrl': 'http://www.nosopharm.com', 'address': '69486, LYON , FR', 'longitude': 4.8320114, 'latitude': 45.7578137}
,
{'id': 997435384, 'name': 'L.A SANTE, EPIDEMIOLOGIE, EVALUATION ET RECHERCHE L.A.S.E.R.', 'organizationUrl': 'http://www.alpha-epi.com', 'address': '75015, PARIS, FR', 'longitude': 2.294916262777169, 'latitude': 48.8384348}
,
{'id': 922889720, 'name': 'INTERNATIONAL CONSORTIUM FOR HEALTHOUTCOMES MEASUREMENT INC.', 'organizationUrl': 'http://', 'address': '2215, CAMBRIDGE MA, US', 'longitude': -122.701034884141, 'latitude': 45.5268458}
,
{'id': 999948751, 'name': 'FEDERATION INTERNATIONALE DU DIABETE REGION EUROPE AISBL', 'organizationUrl': 'http://www.idf-europe.org', 'address': '1170, BRUXELLES, BE', 'longitude': 4.412311168014645, 'latitude': 50.80221213686807}
,
{'id': 905784934, 'name': 'MEDICAL RESEARCH NETWORK LIMITED', 'organizationUrl': 'http://', 'address': 'MK8 0ES, MILTON KEYNES, UK', 'longitude': -0.7990926101898297, 'latitude': 52.02816875457576}
,
{'id': 930321860, 'name': 'STICHTING UNITED PARENT PROJECTS MUSCULAR DYSTROPHY', 'organizationUrl': 'http://', 'address': '3905 GG, VEENENDAAL, NL', 'longitude': 5.5597167, 'latitude': 52.0120783}
,
{'id': 905812967, 'name': 'ECLINICALHEALTH LTD', 'organizationUrl': 'http://', 'address': 'FK9 4NF, STIRLING, UK', 'longitude': -3.920687971807579, 'latitude': 56.14341360524561}
,
{'id': 934958751, 'name': 'MERCALEADS BV', 'organizationUrl': 'http://', 'address': '6546 BB, NIJMEGEN, NL', 'longitude': 5.8685217, 'latitude': 51.8454504}
,
{'id': 998638669, 'name': 'SYNCOM BV', 'organizationUrl': 'http://www.syncom.nl', 'address': '9747 AT, GRONINGEN, NL', 'longitude': 6.5630346, 'latitude': 53.2147867}
,
{'id': 973958377, 'name': 'SYGNATURE DISCOVERY LIMITED', 'organizationUrl': 'http://www.sygnaturediscovery.com', 'address': 'NG1 1GF, NOTTINGHAM, UK', 'longitude': -1.137197393919386, 'latitude': 52.95085064639205}
,
{'id': 996517279, 'name': 'Medicines for Malaria Venture', 'organizationUrl': 'http://www.mmv.org', 'address': '1215, GENEVE, CH', 'longitude': 6.1070476, 'latitude': 46.23004591999999}
,
{'id': 950448196, 'name': 'BIOASCENT DISCOVERY LIMITED', 'organizationUrl': 'http://', 'address': 'ML1 5UH, NEWHOUSE, UK', 'longitude': -3.0261849, 'latitude': 53.803091}
,
{'id': 934958654, 'name': 'MERCATORIAL BV', 'organizationUrl': 'http://', 'address': '6546 BB, NIJMEGEN, NL', 'longitude': 5.8685217, 'latitude': 51.8454504}
,
{'id': 937584444, 'name': 'STICHTING INTEGRAAL KANKERCENTRUM NEDERLAND', 'organizationUrl': 'http://', 'address': '3511 DT, UTRECHT, NL', 'longitude': 5.1207805, 'latitude': 52.0891869}
,
{'id': 998248341, 'name': 'ALERE TECHNOLOGIES GMBH', 'organizationUrl': 'http://', 'address': '7749, JENA, DE', 'longitude': 11.5879359, 'latitude': 50.9281717}
,
{'id': 997988478, 'name': 'MICROLIQUID SL', 'organizationUrl': 'http://www.microliquid.com', 'address': '20500, ARRASATE MONDRAGON, ES', 'longitude': -2.4900779, 'latitude': 43.0656783}
,
{'id': 999993080, 'name': 'INSTITUT PASTEUR', 'organizationUrl': 'http://www.pasteur.fr', 'address': '75724, PARIS , FR', 'longitude': 2.3081273, 'latitude': 48.8413376}
,
{'id': 999939633, 'name': 'GLAXOSMITHKLINE RESEARCH AND DEVELOPMENT LTD.', 'organizationUrl': 'http://www.gsk.com', 'address': 'TW89GS, BRENTFORD, UK', 'longitude': -0.3188577, 'latitude': 51.4880993}
,
{'id': 938818575, 'name': 'VAXEAL RESEARCH', 'organizationUrl': 'http://', 'address': '91058, EVRY, FR', 'longitude': 2.424263, 'latitude': 48.6299166}
,
{'id': 999997930, 'name': 'CENTRE NATIONAL DE LA RECHERCHE SCIENTIFIQUE CNRS', 'organizationUrl': 'http://www.cnrs.fr', 'address': '75794, PARIS, FR', 'longitude': 2.1239177, 'latitude': 48.8476037}
,
{'id': 938040344, 'name': 'ABBOTT BIOLOGICALS BV', 'organizationUrl': 'http://', 'address': '1381 CP, WEESP, NL', 'longitude': 4.8034594, 'latitude': 52.3017854}
,
{'id': 998133396, 'name': 'PFIZER LIMITED', 'organizationUrl': 'http://www.pfizer.co.uk', 'address': 'CT13 9NJ, SANDWICH, UK', 'longitude': 1.3392873, 'latitude': 51.2884203}
,
{'id': 999915189, 'name': 'UNIVERSITAIR MEDISCH CENTRUM UTRECHT', 'organizationUrl': 'http://www.umcutrecht.nl', 'address': '3584 CX, UTRECHT, NL', 'longitude': 5.1777244, 'latitude': 52.0865679}
,
{'id': 952351336, 'name': 'DRUG TARGET ID BV', 'organizationUrl': 'http://', 'address': '6525 EC, NIJMEGEN, NL', 'longitude': 5.8664075, 'latitude': 51.8252782}
,
{'id': 999979694, 'name': 'CARDIFF UNIVERSITY', 'organizationUrl': 'http://www.cardiff.ac.uk', 'address': 'CF24 ODE, CARDIFF, UK', 'longitude': -3.2068072, 'latitude': 51.4935537}
,
{'id': 991207984, 'name': 'ITA-SUOMEN YLIOPISTO', 'organizationUrl': 'http://www.uef.fi', 'address': '70211, KUOPIO, FI', 'longitude': 27.6324831, 'latitude': 62.8940949}
,
{'id': 950590301, 'name': 'K.A.B.S. LABORATORIES INC. - KABS', 'organizationUrl': 'http://', 'address': 'J3Y 9G2, ST-HUBERT, CA', 'longitude': -73.433503, 'latitude': 45.5172507}
,
{'id': 894006030, 'name': 'ORION SANTE SARL', 'organizationUrl': 'http://', 'address': '92357, LE PLESISS ROBINSON, FR', 'longitude': 2.2371367, 'latitude': 48.7747561}
,
{'id': 999974553, 'name': 'UNIVERSITEIT LEIDEN', 'organizationUrl': 'http://www.universiteitleiden.nl', 'address': '2311 EZ, LEIDEN, NL', 'longitude': 4.4817142, 'latitude': 52.1576525}
,
{'id': 923869808, 'name': 'TEVA PHARMACEUTICAL INDUSTRIES LIMITED', 'organizationUrl': 'http://', 'address': '49131, PETACH TIVKA, IL', 'longitude': 34.8649816, 'latitude': 32.0971294}
,
{'id': 952692291, 'name': 'STICHTING INTERNATIONAL PAINFUL BLADDER FOUNDATION', 'organizationUrl': 'http://', 'address': '1411 HW, NAARDEN, NL', 'longitude': 5.1618595, 'latitude': 52.2842658}
,
{'id': 999975717, 'name': 'UNIVERSITY COLLEGE CORK -  NATIONAL UNIVERSITY OF IRELAND, CORK', 'organizationUrl': 'http://www.ucc.ie', 'address': 'T12 YN60, Cork, IE', 'longitude': -8.4942592, 'latitude': 51.8934893}
,
{'id': 911706493, 'name': 'STICHTING EUROPEAN UROLOGICAL FOUNDATION', 'organizationUrl': 'http://', 'address': '6842 CV, ARNHEM, NL', 'longitude': 5.8678502, 'latitude': 51.9546625}
,
{'id': 911618223, 'name': 'ASSOCIATION EISBM', 'organizationUrl': 'http://', 'address': '69390, VOURLES, FR', 'longitude': 4.770257, 'latitude': 45.6624141}
,
{'id': 983734328, 'name': 'COVANCE LABORATORIES LTD', 'organizationUrl': 'http://www.covance.com', 'address': 'HG3 IPY, HARROGATE, UK', 'longitude': 1.5672258, 'latitude': 53.978061}
,
{'id': 998530320, 'name': 'STICHTING BIOMEDICAL PRIMATE RESEARCH CENTER', 'organizationUrl': 'http://www.bprc.nl', 'address': '2288 GJ, RIJSWIJK ZH, NL', 'longitude': 4.3397087, 'latitude': 52.0285241}
,
{'id': 998886601, 'name': 'MINISTERIE VAN VOLKSGEZONDHEID, WELZIJN EN SPORT', 'organizationUrl': 'http://', 'address': '2500 EJ, DEN HAAG, NL', 'longitude': 4.3185562, 'latitude': 52.0800752}
,
{'id': 998268614, 'name': 'PINTAIL LTD', 'organizationUrl': 'http://www.pintail.eu', 'address': 'A94 K542, Blackrock, IE', 'longitude': -6.1706203, 'latitude': 53.2846204}
,
{'id': 999975911, 'name': 'UNIVERSITEIT MAASTRICHT', 'organizationUrl': 'http://www.maastrichtuniversity.nl', 'address': '6200 MD, MAASTRICHT, NL', 'longitude': 5.6873294, 'latitude': 50.8469612}
,
{'id': 997739382, 'name': 'STICHTING LAREB', 'organizationUrl': 'http://www.lareb.nl', 'address': '5237 MH, S HERTOGENBOSCH, NL', 'longitude': 5.2927928, 'latitude': 51.72217}
,
{'id': 999900833, 'name': 'UNIVERSITEIT TWENTE', 'organizationUrl': 'http://www.utwente.nl', 'address': '7522 NB, ENSCHEDE, NL', 'longitude': 6.848404, 'latitude': 52.238742}
,
{'id': 999953795, 'name': 'TRANSGENE SA', 'organizationUrl': 'http://www.transgene.fr', 'address': '67405, ILLKIRCH-GRAFFENSTADEN, FR', 'longitude': 7.7406273, 'latitude': 48.5242738}
,
{'id': 998813075, 'name': 'MENDELOVA UNIVERZITA V BRNE', 'organizationUrl': 'http://www.mendelu.cz', 'address': '613 00, BRNO SEVER, CZ', 'longitude': 16.6139561, 'latitude': 49.2099347}
,
{'id': 963020463, 'name': 'JANSSEN VACCINES & PREVENTION BV', 'organizationUrl': 'http://www.crucell.com', 'address': '2333 CN, LEIDEN, NL', 'longitude': 4.4660393, 'latitude': 52.1659603}
,
{'id': 999839335, 'name': 'ERASMUS UNIVERSITEIT ROTTERDAM', 'organizationUrl': 'http://www.eur.nl', 'address': '3062 PA, ROTTERDAM, NL', 'longitude': 4.5237844, 'latitude': 51.9165489}
,
{'id': 926682905, 'name': 'ATTUROS LIMITED', 'organizationUrl': 'http://', 'address': 'V94 W5TV, LIMERICK CLARE, IE', 'longitude': -8.3701114, 'latitude': 52.9464365}
,
{'id': 909662024, 'name': 'THE EUROPEAN ASSOCIATION FOR THE STUDY OF OBESITY - IRELAND COMPANY LIMITED BY GUARANTEE', 'organizationUrl': 'http://', 'address': 'D02 N820, DUBLIN, IE', 'longitude': -6.2570879, 'latitude': 53.3413281}
,
{'id': 998559711, 'name': 'NOLDUS INFORMATION TECHNOLOGY BV', 'organizationUrl': 'http://www.noldus.com', 'address': '6709 PA, WAGENINGEN, NL', 'longitude': 5.646791, 'latitude': 51.9743498}
,
{'id': 935435700, 'name': 'PSYCHOGENICS INC', 'organizationUrl': 'http://', 'address': 'NY10591, TARRYTOWN, US', 'longitude': -73.9424389, 'latitude': 40.8395131}
,
{'id': 905108650, 'name': 'PHARMALEX BELGIUM', 'organizationUrl': 'http://', 'address': '1435, MONT SAING GUIBERT, BE', 'longitude': 4.6251096, 'latitude': 50.6576608}
,
{'id': 999880657, 'name': 'Masarykova univerzita', 'organizationUrl': 'http://www.muni.cz', 'address': '60177, BRNO STRED, CZ', 'longitude': 6.5924801, 'latitude': 49.192106}
,
{'id': 910676935, 'name': 'KANTISTO BV', 'organizationUrl': 'http://', 'address': '3742 MV, BAARN, NL', 'longitude': 5.3050822, 'latitude': 52.2123395}
,
{'id': 987731989, 'name': 'MICRONIT MICROTECHNOLOGIES BV', 'organizationUrl': 'http://www.micronit.com', 'address': '7521 PV, ENSCHEDE, NL', 'longitude': 6.8397982, 'latitude': 52.2405145}
,
{'id': 916324760, 'name': 'STICHTING MLC FOUNDATION', 'organizationUrl': 'http://', 'address': '2513 AL, DEN HAAG, NL', 'longitude': 4.3081457, 'latitude': 52.0776821}
,
{'id': 997826391, 'name': 'UNIVERSIDADE DE COIMBRA', 'organizationUrl': 'http://www.uc.pt', 'address': '3001 451, COIMBRA, PT', 'longitude': -8.486314, 'latitude': 40.2288699}
,
{'id': 907137211, 'name': 'ORCION BV', 'organizationUrl': 'http://', 'address': '5721 HW, ASTEN, NL', 'longitude': 5.7552308, 'latitude': 51.3963384}
,
{'id': 999555513, 'name': 'Ontario Institute for Cancer Research', 'organizationUrl': 'http://', 'address': 'M5G 0 A3, TORONTO, ONTARIO, CA', 'longitude': -79.4094923, 'latitude': 43.6728146}
,
{'id': 998475612, 'name': 'DIAMOND LIGHT SOURCE LIMITED', 'organizationUrl': 'http://www.diamond.ac.uk', 'address': '0X11 0DE, DIDCOT, UK', 'longitude': -1.3131027, 'latitude': 51.5743653}
,
{'id': 998826946, 'name': 'ROYAL INSTITUTION FOR THE ADVANCEMENT OF LEARNING MCGILL UNIVERSITY', 'organizationUrl': 'http://www.mcgill.ca', 'address': 'H3A0G4, MONTREAL, CA', 'longitude': -73.5778053, 'latitude': 45.5062088}
,
{'id': 912845952, 'name': 'HEALTH TECHNOLOGY ASSESSMENT INTERNATIONAL SOCIETY', 'organizationUrl': 'http://', 'address': 'T5J 3N4, EDMONTON, CA', 'longitude': -113.5016439, 'latitude': 53.5406433}
,
{'id': 954738118, 'name': 'ZORGINSTITUUT NEDERLAND', 'organizationUrl': 'http://www.zorginstituutnederland.nl', 'address': '1112XH, DIEMEN, NL', 'longitude': 4.958822, 'latitude': 52.3297785}
,
{'id': 999843603, 'name': 'UNIVERSITY OF MICHIGAN THE REGENTS OF THE UNIVERSITY OF MICHIGAN', 'organizationUrl': 'http://www.umich.edu', 'address': '46109 1274, ANN ARBOR, US', 'longitude': -83.7449519, 'latitude': 42.2758778}
,
{'id': 909385283, 'name': 'FFUND BV', 'organizationUrl': 'http://', 'address': '1083 HN, AMSTERDAM, NL', 'longitude': 4.8828024, 'latitude': 52.336465}
,
{'id': 998868947, 'name': 'SOCIETE EUROPEENNE DE CARDIOLOGIE', 'organizationUrl': 'http://www.escardio.org', 'address': '6903, BIOT SOPHIA ANTIPOLIS, FR', 'longitude': 7.0861896, 'latitude': 43.6154179}
,
{'id': 951757987, 'name': 'PIVOT PARK SCREENING CENTRE BV', 'organizationUrl': 'http://www.lifesciencespark.nl', 'address': '5349 AB, OSS, NL', 'longitude': 5.5347428, 'latitude': 51.7611847}
,
{'id': 895530385, 'name': 'SPARK THERAPEUTICS, INC', 'organizationUrl': 'http://', 'address': '19808, WILMINGTON, US', 'longitude': -75.546589, 'latitude': 39.7459468}
,
{'id': 897569422, 'name': 'THE ROSALIND FRANKLIN INSTITUTE', 'organizationUrl': 'http://', 'address': 'OX11 0FA, DIDCOT, UK', 'longitude': -1.243977841587141, 'latitude': 51.6121773}
,
{'id': 898072464, 'name': 'DIGITAL PATHOLOGY ASSOCIATION INC', 'organizationUrl': 'http://', 'address': '46032, CARMEL, US', 'longitude': -86.15753500805413, 'latitude': 39.9691527333084}
,
{'id': 898118539, 'name': 'PHIT BV', 'organizationUrl': 'http://', 'address': '3528 BL, UTRECHT, NL', 'longitude': 5.1446975, 'latitude': 52.0788128}
,
{'id': 904837826, 'name': 'HISTOINDEX PTE LTD', 'organizationUrl': 'http://', 'address': '139955, SINGAPORE, SG', 'longitude': 103.7853594, 'latitude': 1.2979578}
,
{'id': 906053721, 'name': 'RESOUNDANT, INC.', 'organizationUrl': 'http://', 'address': '55902, ROCHESTER, US', 'longitude': -92.4892074511769, 'latitude': 43.99554531771938}
,
{'id': 908927928, 'name': 'CYTOMINE', 'organizationUrl': 'http://', 'address': '4102, SERAING, BE', 'longitude': 5.547719114253059, 'latitude': 50.58526049870824}
,
{'id': 912236016, 'name': 'DECIPHEX LIMITED', 'organizationUrl': 'http://', 'address': 'nan, MORNINGTON MEATH, IE', 'longitude': -6.2825549, 'latitude': 53.7213844}
,
{'id': 951218473, 'name': 'ASPHALION SL', 'organizationUrl': 'http://www.asphalion.com', 'address': '8014, BARCELONA, ES', 'longitude': 2.1774322, 'latitude': 41.3828939}
,
{'id': 972926491, 'name': 'IMS INFORMATION SOLUTIONS MEDICAL RESEARCH LIMITED', 'organizationUrl': 'http://www.epic-uk.org', 'address': 'NI 9JY, LONDON, UK', 'longitude': -0.1196935, 'latitude': 51.5309271}
,
{'id': 986083377, 'name': 'THE LEEDS TEACHING HOSPITALS NATIONAL HEALTH SERVICE TRUST', 'organizationUrl': 'http://www.leedsteachinghospitals.com', 'address': 'LS9 7TF, LEEDS, UK', 'longitude': -1.521480325, 'latitude': 53.8069351}
,
{'id': 995440094, 'name': 'OSTERGOTLANDS LANS LANDSTING', 'organizationUrl': 'http://www.lio.se', 'address': '581 91, LINKOPING, SE', 'longitude': 15.6245252, 'latitude': 58.4098135}
,
{'id': 998047260, 'name': 'RESEARCH TRIANGLE INSTITUTE', 'organizationUrl': 'http://www.rti-hs.org', 'address': '27709, RESEARCH TRIANGLE PARK, US', 'longitude': -78.87482418022022, 'latitude': 35.90569775}
,
{'id': 998200617, 'name': 'CENTRO DE NEUROCIENCIAS E BIOLOGIACELULAR ASSOCIACAO', 'organizationUrl': 'http://www.cnbc.pt', 'address': '3004 517, COIMBRA, PT', 'longitude': -8.4261304, 'latitude': 40.209542}
,
{'id': 998217883, 'name': 'ASSOCIATION GENETHON', 'organizationUrl': 'http://www.genethon.fr', 'address': '91002, EVRY, FR', 'longitude': 3.25604, 'latitude': 48.26406}
,
{'id': 999953892, 'name': 'INSTITUT NATIONAL DU CANCER GIP', 'organizationUrl': 'http://www.e-cancer.fr', 'address': '92513, BOULOGNE BILLANCOURT, FR', 'longitude': 2.2347472, 'latitude': 48.8370075}
,
{'id': 999976784, 'name': 'THE UNIVERSITY OF WARWICK', 'organizationUrl': 'http://www.warwick.ac.uk', 'address': 'CV4 8UW, COVENTRY, UK', 'longitude': -1.564787345973448, 'latitude': 52.38557586542571}
,
{'id': 999984738, 'name': 'STICHTING HET NEDERLANDS KANKER INSTITUUT-ANTONI VAN LEEUWENHOEK ZIEKENHUIS', 'organizationUrl': 'http://www.nki.nl', 'address': '1066 CX, AMSTERDAM, NL', 'longitude': 4.8236381, 'latitude': 52.3494659}
,
{'id': 893979743, 'name': 'ARTTIC INNOVATION GMBH', 'organizationUrl': 'http://', 'address': 'OSKAR-VON-MILLER-RING 29, 80333, MUNCHEN, DE', 'longitude': 11.5761391, 'latitude': 48.1459612}
,
{'id': 897602402, 'name': 'MILTENYI BIOTEC BV & CO KG', 'organizationUrl': 'http://', 'address': 'FRIEDRICH EBERT STRASSE 68, 51429, BERGISCH GLADBACH, DE', 'longitude': 7.182146894061027, 'latitude': 50.9606755}
,
{'id': 904723463, 'name': 'THE ECANCER GLOBAL FOUNDATION', 'organizationUrl': 'http://', 'address': '13 KING SQUARE AVENUE, BS2 8HU, BRISTOL, UK', 'longitude': -2.5914418, 'latitude': 51.4609584}
,
{'id': 904734521, 'name': 'ECHOSENS', 'organizationUrl': 'http://', 'address': 'RUE FERRUS 6, 75014, PARIS, FR', 'longitude': 2.3406347, 'latitude': 48.8312363}
,
{'id': 906315039, 'name': 'AZIENDA OSPEDALIERA PER L EMERGENZA CANNIZZARO', 'organizationUrl': 'http://', 'address': 'VIA MESSINA 829, 95126, CATANIA, IT', 'longitude': 15.1205158, 'latitude': 37.5410119}
,
{'id': 914536953, 'name': 'SYNVACCINE LTD', 'organizationUrl': 'http://', 'address': 'HABARZEL ST 27, 6971039, TEL AVIV, IL', 'longitude': 34.8418442, 'latitude': 32.1105688}
,
{'id': 928692939, 'name': 'SECTRA AB', 'organizationUrl': 'http://', 'address': 'TEKNIKRINGEN 20, 58330, LINKOPING, SE', 'longitude': 15.55710725092528, 'latitude': 58.39351689999999}
,
{'id': 932996053, 'name': 'EUROPEAN SOCIETY OF PATHOLOGY', 'organizationUrl': 'http://', 'address': 'RUE BARA 6, 1070, BRUXELLES, BE', 'longitude': 4.335679635990466, 'latitude': 50.83867055}
,
{'id': 961488348, 'name': 'TAKIS SRL', 'organizationUrl': 'http://', 'address': 'VIA DI CASTEL ROMANO 100, 128, ROMA, IT', 'longitude': 12.4477827, 'latitude': 41.7138451}
,
{'id': 968944447, 'name': 'GENOSAFE SAS', 'organizationUrl': 'http://www.genosafe.com', 'address': "RUE DE L'INTERNATIONALE 1, 91000, EVRY, FR", 'longitude': 2.449784, 'latitude': 48.619986}
,
{'id': 991228063, 'name': 'TIME.LEX', 'organizationUrl': 'http://', 'address': 'JOSEPH STEVENSSTRAAT 7, 1000, BRUSSEL, BE', 'longitude': 4.3524748, 'latitude': 50.8413225}
,
{'id': 994543620, 'name': 'GILEAD SCIENCES INC', 'organizationUrl': 'http://www.gilead.com', 'address': 'LAKESIDE DRIVE 333, 94404, FOSTER CITY CA, US', 'longitude': -122.283238, 'latitude': 37.568163}
,
{'id': 998904449, 'name': 'LONZA AG', 'organizationUrl': 'http://www.lonza.com', 'address': 'Muenchensteinerstrasse  38, 4002, BASEL, CH', 'longitude': 7.5980808, 'latitude': 47.5459375}
,
{'id': 999479659, 'name': 'HAUTE ECOLE SPECIALISEE DE SUISSE OCCIDENTALE', 'organizationUrl': 'http://www.hes-so.ch', 'address': 'Route de Moutier 14, 2800, DELEMONT, CH', 'longitude': 7.352019, 'latitude': 47.3624356}
,
{'id': 999548917, 'name': 'DIN DEUTSCHES INSTITUT FUER NORMUNG E.V.', 'organizationUrl': 'http://www.din.de', 'address': 'BURGGRAFENSTRASSE 6, 10787, BERLIN, DE', 'longitude': 13.34445619265711, 'latitude': 52.5055253}
,
{'id': 999556677, 'name': 'GBG FORSCHUNGS GMBH', 'organizationUrl': 'http://www.germanbreastgroup.de', 'address': 'MARTIN BEHAIM STRASSE 12, 63263, NEU-ISENBURG, DE', 'longitude': 8.7135797, 'latitude': 50.0480895}
,
{'id': 999645820, 'name': 'CSC-TIETEEN TIETOTEKNIIKAN KESKUS OY', 'organizationUrl': 'http://www.csc.fi', 'address': 'KEILARANTA 14, 2101, ESPOO, FI', 'longitude': 24.8335868, 'latitude': 60.1786163}
,
{'id': 999789865, 'name': 'INSTITUTO DE BIOLOGIA EXPERIMENTAL E TECNOLOGICA', 'organizationUrl': 'http://www.ibet.pt', 'address': 'AVENIDA DA REPUBLICA QUINTA DO MARQUES, 2781-901, OEIRAS, PT', 'longitude': -9.3228332, 'latitude': 38.6947154}
,
{'id': 999977269, 'name': 'TECHNISCHE UNIVERSITEIT EINDHOVEN', 'organizationUrl': 'http://www.tue.nl/en', 'address': 'GROENE LOPER 3, 5612 AE, EINDHOVEN, NL', 'longitude': 5.488453, 'latitude': 51.4467473}
,
{'id': 985920320, 'name': 'CONSORCIO MAR PARC DE SALUT DE BARCELONA', 'organizationUrl': 'http://www.imim.es', 'address': 'PASEO MARITIM 25-29, 8003, BARCELONA, ES', 'longitude': 2.194125054405758, 'latitude': 41.3837721}
,
{'id': 994946073, 'name': 'EUROPEAN SOCIETY FOR MEDICAL ONCOLOGY', 'organizationUrl': 'http://www.esmo.org', 'address': 'VIA GINEVRA 4, 6900, LUGANO, CH', 'longitude': 8.951770412445955, 'latitude': 46.0083579}
,
{'id': 912942273, 'name': 'KLINICKI BOLNICKI CENTAR RIJEKA', 'organizationUrl': 'http://', 'address': 'KRESIMIROVA 42, 51000, RIJEKA, HR', 'longitude': 14.42751079082253, 'latitude': 45.33235089999999}
,
{'id': 959986400, 'name': 'STIFTUNG FUR QUALITAT UND WIRTSCHAFTLICHKEIT IM GESUNDHEITSWESEN', 'organizationUrl': 'http://', 'address': 'GUTENBERGSTRASSE 13, 10587, BERLIN, DE', 'longitude': 13.3287026, 'latitude': 52.5166991}
,
{'id': 935347818, 'name': 'MYELOMA PATIENTS EUROPE AISBL', 'organizationUrl': 'http://', 'address': 'AVENUE LOUISE 143 4, 1050, BRUXELLES, BE', 'longitude': 4.3678681, 'latitude': 50.8233282}
,
{'id': 905282377, 'name': 'MODUS OUTCOMES SAS', 'organizationUrl': 'http://', 'address': '61 COURS DE LA LIBERTE, 69003, LYON, FR', 'longitude': 4.8428665, 'latitude': 45.7573659}
,
{'id': 998267741, 'name': 'JOHNS HOPKINS UNIVERSITY', 'organizationUrl': 'http://www.hopkinsmedicine.org', 'address': 'NORTH CHARLES STREET  3400, 21218, BALTIMORE, US', 'longitude': -76.62186802236883, 'latitude': 39.33020225}
,
{'id': 899249656, 'name': 'NATIONAL CANCER CENTER', 'organizationUrl': 'http://', 'address': '5-1-1 TSUKIJI CHUO-KU, 104 0045, TOKYO, JP', 'longitude': 139.7725918, 'latitude': 35.6680848}
,
{'id': 997151562, 'name': "Queen's University at Kingston", 'organizationUrl': 'http://www.queensu.ca', 'address': 'University Avenue 99, K7L 3N6, Kingston, CA', 'longitude': -76.4955812, 'latitude': 44.2278671}
,
{'id': 901286753, 'name': 'ESD - EVALUATION SOFTWARE DEVELOPMENT GMBH', 'organizationUrl': 'http://', 'address': 'VALIERGASSE 62, 6020, INNSBRUCK, AT', 'longitude': 11.4400117, 'latitude': 47.2655378}
,
{'id': 999871539, 'name': 'MARTIN-LUTHER-UNIVERSITAET HALLE-WITTENBERG', 'organizationUrl': 'http://www.uni-halle.de', 'address': 'UNIVERSITAETSPLATZ 10, 6108, HALLE (Saale), DE', 'longitude': 11.9684435, 'latitude': 51.4867452}
,
{'id': 898295952, 'name': 'ADELPHI VALUES LTD', 'organizationUrl': 'http://', 'address': 'SE1 0SW, LONDON, UK', 'longitude': -0.09998185028147046, 'latitude': 51.50592904465453}
,
{'id': 966802493, 'name': 'FUNDACION PUBLICA MIGUEL SERVET', 'organizationUrl': 'http://', 'address': '31008, PAMPLONA, ES', 'longitude': -1.664726135767088, 'latitude': 42.80790910577748}
,
{'id': 998403929, 'name': 'THE UNIVERSITY OF SYDNEY', 'organizationUrl': 'http://www.usyd.edu.au/', 'address': '2006, SYDNEY, AU', 'longitude': 151.1901726422851, 'latitude': -33.88807802717989}
,
{'id': 894170445, 'name': 'THE CRITICAL PATH INSTITUTE (C-PATH) NON PROFIT CORPORATION', 'organizationUrl': 'http://', 'address': '85718, TUCSON AZ, US', 'longitude': -110.9667086, 'latitude': 32.2231264}
,
{'id': 911181432, 'name': 'UNIVERSITY HEALTH NETWORK', 'organizationUrl': 'http://', 'address': 'M5G2C4, TORONTO, CA', 'longitude': -79.3886083, 'latitude': 43.6588833}
,
{'id': 948864283, 'name': 'AGENCIJA ZA LIJEKOVE I MEDICINSKE PROIZVODE', 'organizationUrl': 'http://www.halmed.hr', 'address': 'KSAVERSKA CESTA 4, 10 000, ZAGREB, HR', 'longitude': 15.9788321, 'latitude': 45.8288684}
,
{'id': 891878141, 'name': 'UNIVERSITE CLERMONT AUVERGNE', 'organizationUrl': 'http://', 'address': '49 BD FRANCOIS MITTERRAND, 63000, CLERMONT FERRAND, FR', 'longitude': 3.089657, 'latitude': 45.7716611}
,
{'id': 891425539, 'name': 'LUPUS EUROPE', 'organizationUrl': 'http://', 'address': "RUE D'EGMONT 11, 1000, BRUSSELS, BE", 'longitude': 4.3655356, 'latitude': 50.8389849}
];