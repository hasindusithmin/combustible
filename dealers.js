

const dealers = [
    {
        name: "A & A Enter Pricess",
        location: "Kalpitiya Road, Norochchola ,",
        contact: "032 226 8573, 077 383 8639"
    },
    {
        name: "A B A JABBAR",
        location: "MAIN STRRT, SAINTHAMARUTHU. ,Sainthamaruthu ,Sri Lanka",
        contact: "672229459 "
    },
    {
        name: "A B I Servo Shop",
        location: "No 32, Kandasamy Kovil Road, Vavuniya ,",
        contact: "077 042 9339"
    },
    {
        name: "A G A Oil Mart",
        location: "2nd Lane, Kajugaswatta, Meetiyagoda ,",
        contact: "077 736 8957 / 071 535 3561"
    },
    {
        name: "A H M HUSSAIN HADJIAR SONS",
        location: "MATARA RD, WELIGAMA. ,Weligama ,Sri Lanka",
        contact: "412250915"
    },
    {
        name: "A H WIMALATUNGA & SON (PVT) LTD.",
        location: "MONARAGALA RD, WELLAWAYA ,Wellawaya ,Sri Lanka",
        contact: "552274807"
    },
    {
        name: "A IN ONE-3 OIL SHOP",
        location: "NO.15/11/B, BATEWELA, RANALA ,",
        contact: "0115 682047, 0716 198211"
    },
    {
        name: "A J S JAYAKODY",
        location: "NATTANDIYA RD, DANKOTUWA. ,Dankotuwa ,Sri Lanka",
        contact: "312259620"
    },
    {
        name: "A M D N ARTHANAYAKE",
        location: "No. 179, PANNALA ROAD, KULIYAPITIYA. ,Kuliyapitiya ,Sri Lanka",
        contact: "372283930"
    },
    {
        name: "A M G Servo Shop",
        location: "Makura, Kotiyakumbura ,",
        contact: "035 228 9674, 077 614 6243"
    },
    {
        name: "A MADAWAN",
        location: "NUWARA ELIYA ROAD, TWALANTANNE. ,Twalantanne ,Sri Lanka",
        contact: "522259878"
    },
    {
        name: "A R MOTORS",
        location: "96 JUNCTION, MULLIPOTHANA ,",
        contact: "026 2246466, 0774 429161"
    },
    {
        name: "A S M OIL MART",
        location: "OPPOSITE OF PASYALA ROAD, MEERIGAMA ,",
        contact: "033 2270786, 0712 078718"
    },
    {
        name: "A V HINNIAPPUHAMI & CO",
        location: "98 ,NUWARA ELIYA ROAD ,Talawakale ,Sri Lanka",
        contact: "522258383"
    },
    {
        name: "A W DAVITH APPUHAMY & SONS",
        location: "No. 124 ,KOTUGODELLA VEEDIYA, KANDY ,Kandy ,Sri Lanka",
        contact: "812204564"
    },
    {
        name: "A W RANASINGHE",
        location: "No. 42, HAVELOCK ROAD ,COLOMBO 05 ,COLOMBO 05 ,Colombo ,Sri Lanka",
        contact: "112584088"
    },
    {
        name: "A W SERVICE & TYRE CENTER",
        location: "2ND LANE, MANNAR ROAD, PUTTALAM ,",
        contact: "0726 072909"
    },
    {
        name: "A Z M HASSIM",
        location: "MAIN STREET, AKKARAIPATTU. ,Akkaraipattu ,Sri Lanka",
        contact: "0672277238"
    },
    {
        name: "A.B Oil Mart (Paduwasnuwara)",
        location: "Kotampitiya, Hettipola ,",
        contact: "072 859 0805"
    },
    {
        name: "Abeysingha Oil Mart",
        location: "No 118, Weerakatiya Road, Vigamuwa, Ranna ,",
        contact: "047 222 6154"
    },
    {
        name: "Adampan Hardware",
        location: "Main Street, Adampan, Mannar ,",
        contact: "077 580 2185"
    },
    {
        name: "Adnoc Oil Mart",
        location: "No 439, Jumma Mesjen Road, Maligawatta ,",
        contact: "075 741 4563"
    },
    {
        name: "AGNSK ALKEGAMA",
        location: "LANKA IOC FILLING STATION, AGNSK ALKEGAMA FILLING STATION, MEDIRIGAMA ,Sri lanka",
        contact: ""
    },
    {
        name: "AJM FARRY (AJ FUEL MART)",
        location: "439, MATHUGAMA ROAD, DARGA TOWN ,Sri Lanka",
        contact: "342291950"
    },
    {
        name: "AKP OIL SHOP",
        location: "130, NEW MOSQUE ROAD, AKKARAIPATTU-2 ,",
        contact: "0776 283183"
    },
    {
        name: "ALIGHT FILLING STATION",
        location: "No.50 ,Chilaw Road ,Kochchikade ,Sri Lanka",
        contact: "312274746"
    },
    {
        name: "ALL ISLAND PETROCHEMICAL",
        location: "URUTHIRA AGENCY ,No.305/2, Jalthara, Rannala or No. 42-3/5, De Crester Place Colombo-04 ,Colombo-04 ,",
        contact: "0777 855081"
    },
    {
        name: "ALWIS AND SONS",
        location: "MEELIYADDA, KANADENIYAWALA ,",
        contact: "066 3665184, 0719 348429"
    },
    {
        name: "Amarasooriya Oil Mart",
        location: "No 1560, Pullayar Junction, Deyasenpura, Polonnaruwa ,",
        contact: "027 327 1255, 072 371 0919"
    },
    {
        name: "Amasha Motor Traders",
        location: "No 86, Main Street, Buttala ,",
        contact: "055 227 3621, 071 656 5035"
    },
    {
        name: "Amasha Oil Mart",
        location: "No 05, Nooriya Road, Daraniyagala ,",
        contact: "036 224 9217, 072 463 2714"
    },
    {
        name: "AMBALANGODA MPCS LTD",
        location: "New Galle Road, Ambalangoda ,Ambalangoda ,Sri Lanka",
        contact: "913097850"
    },
    {
        name: "Amila Motors",
        location: "Puttlam Road, Anamaduwa ,",
        contact: "077 717 0770"
    },
    {
        name: "AMILA MOTORS",
        location: "NO.147, NUWARAELIYA ROAD, PITAKANDA COLONY, PARADEKA, GAMPOLA ,",
        contact: "0775 407600"
    },
    {
        name: "AMUNUTHUDUWA OIL MART",
        location: "NO.71/B GIRIHAGAMA, KUMBUREGAMA ,",
        contact: "0766 498723"
    },
    {
        name: "ANSAR OIL SHOP",
        location: "21, AL-HAQUE SPORT CLUB ROAD, VALACHENAI-05 ,",
        contact: "0777 141614"
    },
    {
        name: "Anura Oil Mart & Service",
        location: "No 51, Rakwana Road, Deniyaya ,",
        contact: "071 225 4651"
    },
    {
        name: "AQEEL MOTORS",
        location: "731, MAIN STREET, ODDAMAVADI-01 ,",
        contact: "065 2258454, 0779 915841"
    },
    {
        name: "ARALIYA FILLING STATION",
        location: "PUTTALM RD, CHILAW, MARAWILA. ,Marawila ,Sri Lanka",
        contact: "032 - 4928104"
    },
    {
        name: "ARANCO MKTG HOUSE PVT LTD",
        location: "NO.127, VELUWANARAMA ROAD, WELLAWATTE, COL-06 ,",
        contact: "0112 365803, 0777 845395"
    },
    {
        name: "AROSHINI INDUNIL PERERA",
        location: "NIMALA,EDMON MAWATHA, AMBALANWATHTHA, GALLE ,Sri Lanka",
        contact: "912226576"
    },
    {
        name: "Arunan and Son's",
        location: "Parikarikandal, Murungan, Mannar ,",
        contact: "023 323 0635, 077 321 5900"
    },
    {
        name: "ASIGIRI MPCS LTD",
        location: "MATALE ROAD ,Yatawatta ,Sri Lanka",
        contact: "665671579"
    },
    {
        name: "Asiri Electronic",
        location: "37 MP, Kurunagala Road, Ambepussa, Warakapola ,",
        contact: "035 226 8741, 077 798 4583"
    },
    {
        name: "Asthikan Oil Shop",
        location: "Kaataspaththiri, Pesalai, Mannar ,",
        contact: "077 756 8000"
    },
    {
        name: "ATTANAGALLA MPCS LTD",
        location: "NEGOMBO RD, NITTAMBUWA. ,Nittambuwa ,Sri Lanka",
        contact: "334933961"
    },
    {
        name: "ATTANAGALLA MPCS LTD",
        location: "NEGOMBO RD, NITTAMBUWA. ,Urapola ,Sri Lanka",
        contact: "334933961"
    },
    {
        name: "AUTO FIX LUBRICANT CANTRE",
        location: "NO.306A, MATALE ROAD, KATOGASTOTA ,",
        contact: "0711 916963"
    },
    {
        name: "AUTO MAX SERVICE",
        location: "NO.628/02, 9 AELA ROAD, ANURADHAPURA ,",
        contact: "0716 889661"
    },
    {
        name: "AVISHKA MOTOR LUBRICANT CENTER",
        location: "446, GALLE ROAD, MORATUWA ,",
        contact: "0710 483229"
    },
    {
        name: "B D P GUNASEKERA & SONS",
        location: "No. 53, RATHNAPURA RD, HORANA. ,Horana ,Sri Lanka",
        contact: "034-2261312"
    },
    {
        name: "B P MORAWAKA & SONS LTD",
        location: "PO BOX. 01 ,KOTTAWA. ,Pannipitiya ,Sri Lanka",
        contact: "114883430"
    },
    {
        name: "B V De P RODRIGO",
        location: "PAMUNUGAMA, BOPITIYA ,Bopitiya ,Sri Lanka",
        contact: "0112-5844881"
    },
    {
        name: "Bagya Motora",
        location: "No 04, Ambagaha Junction, Dharga Town ,",
        contact: "034 569 5923, 078 508 1201"
    },
    {
        name: "Bajaj Motora & Oil Mart",
        location: "No 2 A, Main Street, Maruthamunai, Ampara ,",
        contact: "077 628 2975"
    },
    {
        name: "Bala Vinayakar Motors",
        location: "No 08, Stanley Road, Jaffna ,",
        contact: "021 222 5376, 077 935 2378"
    },
    {
        name: "BALANGODA MPCS LTD",
        location: "Balagahamulla ,Balangoda ,Sri Lanka",
        contact: "045- 5670744"
    },
    {
        name: "BATTICALOA STORES OIL MART",
        location: "NO. 118, BATTOCALOA STORES, MAIN STREET, KINNIYA ,",
        contact: "026 2236212, 0776 064590"
    },
    {
        name: "BERALAPANATHARA MPCS Ltd",
        location: "BERALAPANATHARA MPCS Ltd ,Urubokka ,Sri Lanka",
        contact: "417213883 "
    },
    {
        name: "BINGIRIYA MPCS LTD",
        location: "KURUNAGALA RD, BINGIRIYA. ,Bingiriya ,Sri Lanka",
        contact: "322245281"
    },
    {
        name: "Bintenna MPCS",
        location: "Mahaoya ,",
        contact: "063 567 7200 / 063 567 7202"
    },
    {
        name: "Bokkawala Servo Shop",
        location: "No 172/3, Narangasthenna, Bokkawela, Paranthahawa ,",
        contact: "071 684 8498"
    },
    {
        name: "BRIAN DINUSHA",
        location: "Delgashandiya ,Katana ,Sri Lanka",
        contact: "312240500"
    },
    {
        name: "BRIGHT OIL SHOP",
        location: "5TH MILE POST JUNCTION, ERUKKALAMPIDDY ,",
        contact: "0713 030800 / 0767 910530"
    },
    {
        name: "Buwaneka Oil Shop",
        location: "No 15/25, Onegama, polonnaruwa ,",
        contact: "077 474 2342"
    },
    {
        name: "C & A Oil Centre",
        location: "No 20/11, Pananwala, Delgoda ,",
        contact: "011 240 3388, 077 797 4916"
    },
    {
        name: "C & A Oil Centre",
        location: "No 20/11, Pananwala, Delgoda ,",
        contact: "011 240 3388, 077 797 4916"
    },
    {
        name: "C & C Oil Mart",
        location: "Puttlam Road, Maspotha ,",
        contact: "037 223 9833"
    },
    {
        name: "C J ABEYRATNE",
        location: "KANDY RD, KADAWATHA. ,Kadawatha ,Sri Lanka",
        contact: "0115631089"
    },
    {
        name: "C N R OIL CENTER",
        location: "MAHAMANKADAWALA, ELAYAPATHTHUWA, ANURADHAPURA ,",
        contact: "0768 854105"
    },
    {
        name: "CADILLAC FILLING STATION (PVT) LTD.",
        location: "GUNAWARDANE RD, PALLIMULLA, MATARA. ,Matara ,Sri Lanka",
        contact: "412222675"
    },
    {
        name: "CHAMARA SANDARUWAN RANAWEERA",
        location: "100 MILE POST, GAGEYAYA JUNCTION, A18 EMBILIPITIYA RD ,EBILIPITIYA ,Sri Lanka",
        contact: "24"
    },
    {
        name: "CHAMI & BROTHERS",
        location: "NO.68, OPPOSITE CLOCK TOWER, MEDAWACHCHIYA, ANURADHAPURA ,",
        contact: "025 2245007, 0772 647514"
    },
    {
        name: "CHANDANA SERVICE CENTER",
        location: "WELLANKULAMA, KOTTUKACHCHIYA ,",
        contact: "0713 702382"
    },
    {
        name: "CHANDANA SERVO SHOP",
        location: "CHANDANA MOTORS, WARIYAPOLA ROAD, GONAGAMA ,",
        contact: "0771 441542"
    },
    {
        name: "Chandira Tyre Service",
        location: "Akurassa Road, Hittatiya, Matara ,",
        contact: "071 449 2080, 077 575 0136"
    },
    {
        name: "Chandresena Motors",
        location: "No 27/20, Walauwatta, Mawathagama ,",
        contact: "037 229 9898"
    },
    {
        name: "CHANDRIKA SERVO SHOP",
        location: "WENDESIWATTA, ANAMADUWA ,",
        contact: "0772 900897"
    },
    {
        name: "CHATHANA STORES",
        location: "KATAPOLA, GANEGODA ,",
        contact: "091 2290754, 0723 541566"
    },
    {
        name: "Colombo inner comprising of Colombo 1 to Colombo 15, Peliyagoda, Kiribathgoda & Kadawatha",
        location: "Mineral Springs (Pvt) Ltd, No.291, Dr. Dannister De Silva Mw, Colombo-09 ,Colombo ,",
        contact: "011-4617526, 011-4970069, 071-4057122, 0714713552"
    },
    {
        name: "COLOMBO SOUTH CENTRAL COOPERATIVE L",
        location: "No.562, GEORGE R DE SILVA MW, COLOMBO 13 ,Kotahena ,Sri Lanka",
        contact: "0112-326773"
    },
    {
        name: "COLOMBO SOUTH MPCS LTD",
        location: "No.502, SIRIMAVO BANDARANAYAKE, MAWATHA. ,Sri Lanka",
        contact: "0112-441253"
    },
    {
        name: "COLONNE SARATH",
        location: "No. 252, GALLE RD, RATMALANA. ,Ratmalana ,Sri Lanka",
        contact: "0112716408"
    },
    {
        name: "CPRM ENTERPRISES",
        location: "557 F/1, SM ROAD, MARUTHAMUNAI ,",
        contact: "672220436, 0772 373683"
    },
    {
        name: "CRIS HARIS GASLINE PARK",
        location: "A9 ,Jaffna Road ,Omanthai ,Sri Lanka",
        contact: "071-4962904"
    },
    {
        name: "D & D Oil Mart",
        location: "No 520, Enderamulla, Wattala ,",
        contact: "011 491 4753, 071 424 9544"
    },
    {
        name: "D & D Oil Mart",
        location: "No 520, Enderamulla, Wattala ,",
        contact: "011 491 4753, 071 424 9544"
    },
    {
        name: "D CHRISTIE ARRAWALA & SONS",
        location: "No.125 ,Kadawala ,Katana ,Sri Lanka",
        contact: "312241840"
    },
    {
        name: "D H DAYARATNA GUNAWARDANA",
        location: "Tangalle Road ,Kottegoda ,Kottegoda ,Sri Lanka",
        contact: "412259610"
    },
    {
        name: "D H J JAYAKODY BROTHERS",
        location: "No. 27, COLOMBO ROAD, AVISSAWELA. ,Avissawela ,Sri Lanka",
        contact: "036-2222413"
    },
    {
        name: "D I A JAYASINGHE",
        location: "HIGH LEVEL ROAD, GODAGAMA ,Godagama ,Sri Lanka",
        contact: "0112-855235"
    },
    {
        name: "D N T OIL MART",
        location: "57/1, JAYAWARDENAPURA ROAD, MAHARAGAMA, PAMUNUWA ,",
        contact: "0711 263272"
    },
    {
        name: "D W FERNANDO AND SONS PVT. LTD.",
        location: "Galle Road ,Aluthgama ,Sri Lanka",
        contact: "342275065"
    },
    {
        name: "D.A. Dammika",
        location: "TRINCOMALEE RD, PALWEHERA, DAMBULLA ,Sri Lanka",
        contact: "662052777"
    },
    {
        name: "DAMBAGALLA OIL MART",
        location: "NO.59, MORALANDA, NAEROOLA, DAMBAGALLA, MONARAGALA ,",
        contact: "0774 113760 / 0714 946223"
    },
    {
        name: "Dananjaya Distributors",
        location: "No 40, Nishshanka Garden, Upcat, Sammale, Nuwara Eliya ,",
        contact: "051 561 3727, 072 992 1656"
    },
    {
        name: "Dankotuwa Oil Mart",
        location: "No 63/A, Negombo Road, Dankotuwa ,",
        contact: "031 225 8555"
    },
    {
        name: "DAYANANDA OIL MART",
        location: "3/3, RUPPA JUNCTION, THAMBUTHTHEGAMA ,",
        contact: " 0788 419492"
    },
    {
        name: "Dedunu Motors & Oil Mart (Lalithya Oil Mart)",
        location: "Queen Junction, Thambutthegama ,",
        contact: "025 228 1144, 072 838 0000"
    },
    {
        name: "Deen Oil Shop (MR)",
        location: "Thalaimannar ,",
        contact: "071 836 3620 / 071 677 2626"
    },
    {
        name: "Deepa Motors",
        location: "Deepa Motors, Tissamaharama ,",
        contact: "047 223 9866, 077 794 2211"
    },
    {
        name: "DERANA OIL MART",
        location: "A E/13/21 RANPOKUNAGAMA, NITTAMBUWA ,",
        contact: "0770655591 / 0770882844"
    },
    {
        name: "DERINIYAGALA PANAWELA MPCS LTD",
        location: "MAIN ROAD, ,DERANIYAGALA. ,Deraniyagala ,Sri Lanka",
        contact: "036-2249123"
    },
    {
        name: "DHANUSHKA ENGG. PVT LTD",
        location: "No. 34/1, KOLLONNAWA ROAD ,GOTHATUWA. ,Sri Lanka",
        contact: "112410855"
    },
    {
        name: "Dhissanayake Oil Mart",
        location: "Bulanawewa, Dewahuwa (Galewela) ,",
        contact: " 077 662 8596"
    },
    {
        name: "DIANA SERVO SHOP",
        location: "NAVAKKADU, MAMPURIYA ,",
        contact: "0777 311144"
    },
    {
        name: "Dilan Lube Centre",
        location: "No 103, Kurunegala Road, Galgamuwa ,",
        contact: "071 415 2515"
    },
    {
        name: "DIMUTHU OIL CENTER",
        location: "264/3, IHALA HANWELLA, HANWELLA ,",
        contact: "0777 826940"
    },
    {
        name: "Dissanayake Oil Mart",
        location: "Rajanganaya Road, Thambuttegama ,",
        contact: "025 227 6576, 071 472 3292"
    },
    {
        name: "District of Ampara",
        location: "S S City Center Pvt. Ltd ,NO.335, POTTUVIL ROAD, TOWN DIVISION-05, AKKARAIPATTU ,AKKARAIPATTU ,",
        contact: "067-3672315, 067-2277419, 777664869"
    },
    {
        name: "District of Anuradhapura",
        location: "Amila Construction & Suppliers ,\"Udani\" Rathnayaka Mw, Airport Site, Anuradhapura ",
        contact: "025-2226638, 077-2535841, 0773961661"
    },
    {
        name: "District of Badulla",
        location: "Mediwatte Distributors ,Kapukotuwa, Welimadagama, Welimada ,Welimada ,",
        contact: "0755-012939, 0722-462777"
    },
    {
        name: "District of Galle",
        location: "M/s Samaranayake & Samaranayake (Pvt) Ltd ,No. 14D, Aluthgama Road, Elpitiya ,Galle ,",
        contact: "077-7310712, 0773668426"
    },
    {
        name: "District of Gampaha",
        location: "RAJAPAKSHA DISTRIBUTORS ,229/56/B,Kimbulgoda ,,YAKKALA ,",
        contact: "033 3128165, 0777 237860"
    },
    {
        name: "District of Gampaha",
        location: "M B S Perera & Sons ,21, Carmel Rd, Hendala, Wattala ,Gampaha ,",
        contact: "0711101123, 0714015303"
    },
    {
        name: "District of Jaffna",
        location: "Nathan Hardware, ,No. 123, Stanly Road, Jaffna ,Jaffna ,",
        contact: "021-2229166, 077-5545899"
    },
    {
        name: "District of Kalutara",
        location: "Samaranayake & Samaranayake (Pvt) Ltd, 22/5 Badhuwatta, Agalawatta ,Kalutara ,",
        contact: "034-2248090, 077-7310712, 0773668426"
    },
    {
        name: "District of Kegalle",
        location: "Mediwatte Distributors ,No.23A, Weligodapola, Hatharaliyadda ,Hatharaliyadda ,",
        contact: "0812-464004, 0755-012939, 0722-462777"
    },
    {
        name: "District of Kurunegala",
        location: "Rathkarawwa Servo Lube Distributors ,Rathkarawwa D.C. & Oil Mills, Rathkarawwa Mills, Maspotha ,Kurunegala ,",
        contact: "037-5625559, 077-7797699"
    },
    {
        name: "District of Matale",
        location: "Wayamba Distributors ,548 Yatigalpotha, Galewela ,Galewela ,",
        contact: "0777 964136"
    },
    {
        name: "District of Polonnaruwa",
        location: "Amila Construction & Suppliers ,Palugaha Wanguwa, Dambulla Road, Habarana ,Polonnaruwa ,",
        contact: "066-2270123, 077-2535841, 0773961661"
    },
    {
        name: "District of Puttalam",
        location: "Risiki Servo Lube Distributors ,Pellandeniya, Maspotha, Kurunegala ,Kurunegala ,",
        contact: "037-2237366 , 037-4698884, 0777-663032"
    },
    {
        name: "District of Ratnapura",
        location: "NEW CITY TIMBER SERVO DISTRIBUTORS ,No.101, Good Shed Road, Ratnapura ,Ratnapura ,",
        contact: "045-2225835, 0777-144132, 0716-891216"
    },
    {
        name: "District of Trincomalee",
        location: "HAMEED TRANSPORT ,No. 447, Dockyard Road, ,Trincomalee ,",
        contact: "026 2225731, 0718 175933"
    },
    {
        name: "Districts of Kandy, Matale",
        location: "Macaw Service Station ,Macaw Service Station, 327, Waragashinna, Akurana ,Kandy ,",
        contact: "081-2300853, 077-3862740"
    },
    {
        name: "Districts of Kilinochchi, Mullaitivu, Mannar, Vavuniya",
        location: "S.K.K.Distributor ,202, Soosai Pillar Kulam, Vavuniya ,Vavuniya ,",
        contact: "024-2222555, 077-7488222"
    },
    {
        name: "DIVULAPITIYA MPCS LTD",
        location: "No.45 ,Colombo Road ,Divulapitiya ,Sri Lanka",
        contact: "312248246"
    },
    {
        name: "DON DIAS DAMINDA JAYAMAL",
        location: "No. 54, BADULLA ROAD, BADULLA. ,Badulla ,Sri Lanka",
        contact: "552222289"
    },
    {
        name: "DON SOMAPALA COMPANY PVT LTD",
        location: "818 ,Kandy Rd ,Kelaniya ,Sri Lanka",
        contact: "0112-915269"
    },
    {
        name: "DON SUMINDARA ABEYSINGHE",
        location: "144, WELEKADE, KALALGODA,PANNIPITIYA, (BORELLA ROAD) ,Sri Lanka",
        contact: ""
    },
    {
        name: "DR.S.KETHESWARAM PILLAI ",
        location: "LANKA IOC FILLING STATION BANDARAWELA ROAD, BANDARAWELA. ,Sri Lanka",
        contact: "552055628"
    },
    {
        name: "E G P A RUPASINGHE ",
        location: "AMILA HOTEL , MIRISGONIYAWA, A9 ROAD, DAMBULLA. ,Sri Lanka",
        contact: ""
    },
    {
        name: "E P B DE SOYSA & SONS (PVT) LTD",
        location: "No. 564, NEGOMBO RD, MAHABAGE ,Mahabage ,Sri Lanka",
        contact: "0112-956058"
    },
    {
        name: "EHELIYAGODA MPCS LTD",
        location: "Rathnapura Road ,Eheliyagoda ,Sri Lanka",
        contact: "036-2258298"
    },
    {
        name: "ELAYAPATHTHUWA OIL MART",
        location: "MAHAMANKADAWALA, ELAYAPATHTHUWA, ANURADHAPURA ,",
        contact: "0716 28827"
    },
    {
        name: "Elite Marketing Service",
        location: "Malkampitty Road, Sammanthurai ,",
        contact: "067 226 1417, 077 185 3573"
    },
    {
        name: "ERANGA ENTERPRISES PVT LTD",
        location: "YUDAGANAWA JUNCTION, BUTTALA. ,Buttala ,Sri Lanka",
        contact: "552270145"
    },
    {
        name: "FELIX PEREIRA AND SONS",
        location: "No. 75, ,ALEXANDER PLACE, ,Colombo ,Sri Lanka",
        contact: "0112695606"
    },
    {
        name: "G K SAMIE & SONS",
        location: "No. 02 , MAIN STREET, HATTON. ,Hatton ,Sri Lanka",
        contact: "512223541"
    },
    {
        name: "G M G Oil Shop",
        location: "No 229, Eluthoor Juntion, Mannar ,",
        contact: "023 222 3216, 077 697 3654 / 077 716 3199"
    },
    {
        name: "GALGAMUVA MPCS LTD",
        location: "KURUNEGALA ROAD, GALGAMUVA. ,Galgamuwa ,Sri Lanka",
        contact: "037-2253116"
    },
    {
        name: "Gallage Enterprises",
        location: "Makkanigoda, Pasyala ,",
        contact: "081 221 8066, 077 442 3898 / 077 730 3306"
    },
    {
        name: "Gamma Oil Shop",
        location: "Front of Bank of Ceylon, Mahiyangana Road, Bibila. ,",
        contact: "072 375 0633 / 072 473 1772"
    },
    {
        name: "GAMPOLA MPCS LTD",
        location: "No. 182 ,NUWARA ELIYA ROAD, GAMPOLA. ,Gampola ,Sri Lanka",
        contact: "813888663"
    },
    {
        name: "Ganga Lubricants",
        location: "Negambo Road, Halpahe, Giriula ,",
        contact: "037 228 8716, 077 758 3388"
    },
    {
        name: "Ganga Motors",
        location: "No 77 A, Padiyathalawa Road, Mahiyanganaya ,",
        contact: "077 784 2816"
    },
    {
        name: "GEM STAR MOTOR SERVICE",
        location: "NO.181, YAKALLA ROAD, KEKIRAWA ,",
        contact: "0721 427654"
    },
    {
        name: "Gesandu Motors",
        location: "No 451/1, Galle Road, Wadduwa ,",
        contact: "038 229 6129, 077 7643 021 / 077 786 9595"
    },
    {
        name: "Gulf Oil Mart (Rajarata)",
        location: "Horowpathana Road, Galenbidunuwawe ,",
        contact: "077 228 5011"
    },
    {
        name: "H D AUTO SUPPLIER",
        location: "H D AUTO SUPPLIER, INDRASIRI, AIWELA, BIBILA ,",
        contact: "055 3552846 / 2267583, 0773 422329"
    },
    {
        name: "H D CHARLIS APPUHAMY & SONS",
        location: "RAGALA ROAD ,Rikilagaskada ,Sri Lanka",
        contact: "812365200"
    },
    {
        name: "H D WEERAKOON",
        location: "IOC FILLING STATION ,Madampe ,Sri Lanka",
        contact: "322247068"
    },
    {
        name: "H K S RANASINGHE",
        location: "NO.762 GALLE ROAD ,COLOMBO 04 ,Colombo ,Sri Lanka",
        contact: "112589488"
    },
    {
        name: "H N Servo Shop",
        location: "Kubeyangoda, Matale ,",
        contact: "066 222 3018, 071 144 1567"
    },
    {
        name: "H P B S GODIGAMUWA",
        location: "Godigamuwa ,Badalgama ,Godigamuwa ,Sri Lanka",
        contact: "314906828"
    },
    {
        name: "H R STORES",
        location: "NO.64, INDURUWALA, MILLEWA ,",
        contact: "0777 628149"
    },
    {
        name: "H.M.B Hearth",
        location: "MEEWELLAWA AUTO CARE PVT LTD,NO 117,KURUNEGALA RD ,Sri Lanka",
        contact: "372267927"
    },
    {
        name: "H.N.W.Priyangani De Silva",
        location: "Galle Road, Beruwala ,Beruwala ,Sri Lanka",
        contact: "342278040"
    },
    {
        name: "HADJI SHL ABDUL CADER & SONS",
        location: "MATALE ROAD ,Akurenna ,Sri Lanka",
        contact: "814474395"
    },
    {
        name: "HALI ELA MPCS LTD",
        location: "BADULLA ROAD, HALI ELA. ,Hali ela ,Sri Lanka",
        contact: "552294921"
    },
    {
        name: "HAMEED TRANSPORT",
        location: "NO.333 KANDY ROAD TRINCOMALEE ,",
        contact: "026 2226615, 0718 175933"
    },
    {
        name: "Hani Motors and Fittings",
        location: "BATTICALOA ROAD, PERIYAPALAM, MUTUR-02 ,",
        contact: "0779 535112"
    },
    {
        name: "HARSHA D WEERAKOON",
        location: "OLD TOWN, MADAMPE. ,Madampe ,Sri Lanka",
        contact: "322247614"
    },
    {
        name: "Hasiru Enterprises",
        location: "No 1526/14, Katukurunda Malabr Road, Kottawa, Pannipitiya ,",
        contact: "011 318 4617"
    },
    {
        name: "Hassan Lube Mart",
        location: "Galle Road, Kaluthara ,",
        contact: "034 222 2244, 077 794 7054"
    },
    {
        name: "Hatharaliyadda Oil Mart",
        location: "No 23/A, Weligodapola, Hatharaliyadda ,",
        contact: "072 246 2777 / 075 501 2939"
    },
    {
        name: "Hayan Oil Center",
        location: "Main Street, Varipapathanchenai, Ampara ,",
        contact: "063 222 2949, 072 744 5214 / 075 717 7993"
    },
    {
        name: "Hero Marketing Co. ",
        location: "No 98/5, Kohilawatta, Wellampitiya ,",
        contact: "011 241 9143, 077 388 5252"
    },
    {
        name: "HEWAGAM KORALE EAST MPCS LTD",
        location: "Pahathgama ,Hanwella ,Sri Lanka",
        contact: "112859951"
    },
    {
        name: "HUNNASGIRIYA AGENCIES",
        location: "MAHIYANKANAYA ROAD ,Hunnasgiriya ,Sri Lanka",
        contact: "812402518"
    },
    {
        name: "I M S H Oil Mart",
        location: "Kadayamandi, Madurankuli, Puttlam ,",
        contact: "072 320 0941"
    },
    {
        name: "I R M Enterprises",
        location: "No 22, Makubura Road, Imaduwa ,",
        contact: "077 569 9653, 077 569 9653"
    },
    {
        name: "Ifraj Motors",
        location: "Telecom Road, Kattankudu 01 ,",
        contact: "077 220 3469"
    },
    {
        name: "INDIKA FILLING STATION",
        location: "No 577, AIR PORT RD, ANURADHAPURA ,Anuradhapura ,Sri Lanka",
        contact: "252220444"
    },
    {
        name: "Indika Servo Shop",
        location: "132/D, Ballapana, Divulapitiya ,",
        contact: "031 292 0720, 077 176 7355 / 077 968 7389"
    },
    {
        name: "Industrial Lube Distributor",
        location: "Mihira Lanka Pvt Ltd ,No.114A, Thissa Mawatha, Bangalawatta, Kottawa, ,Pannipitiya ,",
        contact: "0112 910390, 0710 259166"
    },
    {
        name: "Insath Traders",
        location: "No 141, Galle Road, Henamulla, Panadura ,",
        contact: "038 229 7011, 071 427 7350"
    },
    {
        name: "Islamic Service Society ",
        location: "BATTICALA ROAD, KINNIYA, TRINCOMALEE ,Sri Lanka",
        contact: "262236456"
    },
    {
        name: "Ismail Stores",
        location: "Mr. I L M Rubaith ,No.537/A, New Kalmunai Road, Manchanthoduwai, Batticaloa ,Batticaloa ,",
        contact: "065-2246626, 777786982"
    },
    {
        name: "ISURI MOTORS (PVT) LTD",
        location: "TRINCOMALEE RD, SIGIRIYA JUNCTION, ENAMALUWA ,Sri Lanka",
        contact: "662054706 "
    },
    {
        name: "J H S ENTERPRISES PVT LTD",
        location: "No. 94, SIR JAMES PEIRIS MW ,COLOMBO 02 ,Slave Island ,Sri Lanka",
        contact: "114737579"
    },
    {
        name: "J J S PINIDIYA",
        location: "ANAGARIKA DHARMAPALA MW, MATARA. ,Matara ,Sri Lanka",
        contact: "412225750"
    },
    {
        name: "J J T MOTORS",
        location: "PARANTHAN ROAD, PUTHUKKUDIYIRUPPU ,",
        contact: " 0778 832249"
    },
    {
        name: "J WANIGASEKARA",
        location: "MATARA RD, AKURESSA. ,Akuressa ,Sri Lanka",
        contact: "412283371"
    },
    {
        name: "JANA OIL SHOP",
        location: "MAIN STREET, PUTHUKUDIYIRUPPU ,",
        contact: "0774 626730"
    },
    {
        name: "Jayabima Oil Mart",
        location: "No 397, Puttlam Road, Nochchiyagama ,",
        contact: "025 225 7970, 077 307 4416"
    },
    {
        name: "JAYAWARDENA SERVO SHOP",
        location: "BIHALPOLA, NAKKAWATTA ,",
        contact: "0724 500342"
    },
    {
        name: "JAYODHA HARDWARE & OIL MART",
        location: "ENNARUWAGAMA, WEWAGAMA ,",
        contact: "0776 031091"
    },
    {
        name: "JEEWANTHA MOTORS",
        location: "WARIYAPOLA ROAD, HIRIPITIYA ,",
        contact: "0727 481608"
    },
    {
        name: "JOE PERERA AND SONS",
        location: "No. 01, COLOMBO RD, KOCHCHIKADE ,Kochchikade ,Sri Lanka",
        contact: "312273429"
    },
    {
        name: "K G M Clean City",
        location: "No 107, Main Road, Dehiwela ,",
        contact: "011 273 8733, 072 277 4940"
    },
    {
        name: "K H JAYASINGHE",
        location: "KULIYAPITIYA RD, NATTANDIYA. ,Nattandiya ,Sri Lanka",
        contact: "322255775"
    },
    {
        name: "K S JAYASINGHE",
        location: "KANDY ROAD ,Mahiyangana ,Sri Lanka",
        contact: "552257279"
    },
    {
        name: "K W SUSIRIPALA ASSOCIATES",
        location: "No.116 ,Kandy Road ,Kurunegala ,Sri Lanka",
        contact: "372222312"
    },
    {
        name: "KAHATAGASDIGILIYA MPCS LTD",
        location: "TRICOMALEE RD, Kahatagasdighe ,Kahatagasdigiliya ,Sri Lanka",
        contact: "255624211"
    },
    {
        name: "KALAWANA MPCS LTD",
        location: "Kalawana ,Kalawana ,Sri Lanka",
        contact: "454928158"
    },
    {
        name: "KALUTARA MPCS LTD",
        location: "No. 326 GALLE ROAD, KALUTARA SOUTH, KALUTARA ,Kaluthara ,Sri Lanka",
        contact: "034-2221537"
    },
    {
        name: "Kandurata oil Mart",
        location: "70/A, 7th Mile Post, Akurana ,",
        contact: "077 634 8120"
    },
    {
        name: "KANDURATA OIL MART",
        location: "72/B, KANDY ROAD, WARAKAMURA ,",
        contact: "0776 060202"
    },
    {
        name: "Kannan Oil Shop",
        location: "Kannan Multy Center, Kilinochchi ,",
        contact: "021 791 2734, 077 283 5735"
    },
    {
        name: "KARAINAGAR MPCS LTD",
        location: "VALANTHALAI JUNCTION, KARAINAGAR ,Kareinagar ,Sri Lanka",
        contact: "0213212886"
    },
    {
        name: "Karunarathana Stores",
        location: "Puttalam Road, Maspotha ,",
        contact: "071 201 2518"
    },
    {
        name: "Kasun Motors",
        location: "Kaikawala, Maho ,",
        contact: "037 227 5507"
    },
    {
        name: "KATANA MPCS LTD",
        location: "No.437/439 ,Negambo Road ,Seeduwa ,Sri Lanka",
        contact: "112253930"
    },
    {
        name: "Katheejah Trading Enterprises",
        location: "No 483, Main Street, Marathamunai ,",
        contact: "067 222 5527, 077 150 6260"
    },
    {
        name: "KATHIR OIL SHOP",
        location: "A9 ROAD, PALAI ,",
        contact: "0774 798651"
    },
    {
        name: "KATUPOTHA SERVO SHOP",
        location: "NO.42, WARIYAPOLA ROAD, KATUPOTHA ,",
        contact: "0722 800040"
    },
    {
        name: "Keerthi Brothers",
        location: "Kandy Road, Uhana ,",
        contact: "077 180 0381"
    },
    {
        name: "Keerthi Brothers",
        location: "D S Sananayaka Road, Ampara ,",
        contact: "077 180 0381"
    },
    {
        name: "KEERTHI FUEL MART",
        location: "5th MILE POST, CHINABE, TRINCOMALEE ,Sri Lanka",
        contact: "026-5677775"
    },
    {
        name: "Keerthi oil Shop",
        location: "Near Hospital, New Town, Pathaviya ,",
        contact: "072 868 1505"
    },
    {
        name: "Keerthi Oil Shop",
        location: "New Town, Padaviya ,",
        contact: "072 868 1505"
    },
    {
        name: "KEGALLE MPCS LTD",
        location: "No. 96, KEGALLE ROAD, KEGALLE ,Kegalle ,Sri Lanka",
        contact: "0352222557"
    },
    {
        name: "KEHELELLA MPCS Ltd",
        location: "KEHELELLA MPCS , BADALGAMA ,Kehellela ,Sri Lanka",
        contact: "312269203"
    },
    {
        name: "KK KONES FILLING STATION",
        location: "Mannar Road ,Vavuniya ,Vavuniya ,Sri Lanka",
        contact: "0776032113"
    },
    {
        name: "Kodithuwakku Motor Traders",
        location: "Halambagaswela Road, Tissamaharama ,",
        contact: "047 223 9830, 077 748 1784"
    },
    {
        name: "KOLONNAWA MPCS LTD.",
        location: "No. 253, AWISSAWELLA ROAD ,WELLAMPITIYA. ,Sri Lanka",
        contact: "114413337"
    },
    {
        name: "Kongaha Gedara Oil Shop",
        location: "Kongaha Gedara, Kuliyapitiya, Kurunegala ,",
        contact: "077 943 1450"
    },
    {
        name: "KOTAPOLA MPCS LTD",
        location: "DENIYAYA RD, MORAWAKA. ,Morawaka ,Sri Lanka",
        contact: "412282267"
    },
    {
        name: "KOTTAWA LANKA FILLING STATION",
        location: "No. 41,HIGHLEVEL ROAD ,KOTTAWA ,Kottawa ,Sri Lanka",
        contact: "0112 850221"
    },
    {
        name: "Krismi Oil Mart",
        location: "Puttlam Road, Nikawaratiya ,",
        contact: "037 226 0089, 077 749 9377"
    },
    {
        name: "Kumara Stores",
        location: "Kobeigane, Kurunegala ,",
        contact: "077 940 2753"
    },
    {
        name: "Kusumsiri Motors",
        location: "No 29, Main Street, Badalkumbura ,",
        contact: "055 573 7499, 077 338 9741"
    },
    {
        name: "L K R Distributors",
        location: "Ranwala, Kegalle ,",
        contact: "077 8832 776"
    },
    {
        name: "L P P PATHIRATNE",
        location: "No. 69, COLOMBO RD, MINUWANGODA. ,Minuwangoda ,Sri Lanka",
        contact: "114589982"
    },
    {
        name: "L R MOTOR & TRYE CENTER",
        location: "4/38, NEGOMBO ROAD, MEERIGAMA ,",
        contact: "033 2273853, 0719 112520"
    },
    {
        name: "L S S MOTORS",
        location: "MAHINDAPURA, SERUNUWARA ,",
        contact: "026 2251415, 0777 398910"
    },
    {
        name: "LAKESIDE SERVO SHOP",
        location: "155/3, DAMBULLA ROAD, KURUNEGALA ,",
        contact: "0779 453144"
    },
    {
        name: "LAKMAL OIL MART",
        location: "17TH MILE POST, ALUTHGAMA, UPPER PULIYAN KULAMA ,",
        contact: "0777 977541"
    },
    {
        name: "Laksara Oil Mart",
        location: "No 06, Nawa Welanda Sankeeranaya, Hingurakgoda ,",
        contact: "027 224 5147, 077 184 9918"
    },
    {
        name: "Lakshantha Industries",
        location: "No 39/22 A, Godagama Road, Athurugiriya ,",
        contact: "011 487 9461"
    },
    {
        name: "LAKSHIKA MOTORS",
        location: "2/196M, MANKADAWALA, SALIYAPURA ,",
        contact: "0718 025333"
    },
    {
        name: "LALITH AUTO MART",
        location: "NO.159, FIRST LANE, ALUTHMALKADUWAWA, KURUNEGALA ,",
        contact: "0714 513050"
    },
    {
        name: "LALITH AUTO SERVICE CENTRE",
        location: "WALWELLA RD, GALLE. ,Galle ,Sri Lanka",
        contact: "912222672"
    },
    {
        name: "Lanka Oil Center",
        location: "No 71/5B, New Kandy Road, Mawanella ,",
        contact: "035 224 6064, 071 492 7249"
    },
    {
        name: "LANKA SERVICE MART (PVT) LTD",
        location: "NO. 650, MARADANA 2ND DIVISION ,MARADANA ROAD ,Mardana ,Sri Lanka",
        contact: "112691616"
    },
    {
        name: "LEANFIRM ASSOCIATES",
        location: "107 ,Negombo RD ,Peliyagoda ,Sri Lanka",
        contact: "0114-820932"
    },
    {
        name: "LIYANAGE ASSOCIATES",
        location: "No. 491, GALLE RD, RATMALANA. ,Ratmalana ,Sri Lanka",
        contact: "112625769"
    },
    {
        name: "LOJITHA OIL MART",
        location: "NO.41/11, STAFFORD ROAD, PAMANKADA, COLOMBO-06 ,",
        contact: "072 8220410"
    },
    {
        name: "Lucky Oil Mart",
        location: "Madagalla Road, Rabe, MaEliya ,",
        contact: "072 958 9561"
    },
    {
        name: "M A I P KUMARA MANASINGHE",
        location: "NO 457/2, NEW KANDY ROAD, NADUNGAHAHENA, WELIWERIYA ,Sri Lanaka",
        contact: "777070017"
    },
    {
        name: "M A M ABDUL HASSEN & SONS",
        location: "No. 108, KANDY RD, WARAKAPOLA ,Kandy Rd ,Warakapola ,Sri Lanka",
        contact: "0352267265"
    },
    {
        name: "M G SAMSON AND SONS",
        location: "No. 94, DS SENANAYAKE MW , ,COLOMBO 08 ,Borella ,Sri Lanka",
        contact: "011 5345042"
    },
    {
        name: "M M Noohu Marikar",
        location: "2 ,RAGALA ROAD ,Kandapola ,Sri Lanka",
        contact: "522229572"
    },
    {
        name: "M P BORALUGODA",
        location: "No70/14 Main Street ,Athurugiriya ,Sri Lanka",
        contact: "0114-440738"
    },
    {
        name: "M S Oil Mart",
        location: "No 266/B, Gatamanua Road, Beliatta ,",
        contact: "071 904 8007"
    },
    {
        name: "M.C.Wanniarchchi",
        location: "RAJAPAKSHA AUTO SERVICE, WELANGAHAWELA,PADALANGALA ,Sri Lanka",
        contact: "475705920 "
    },
    {
        name: "M.L.M. FILLING STATION",
        location: "TRINCOMALEE ,KINNYA ROAD ,Chinabay ,Sri Lanka",
        contact: "0262233011"
    },
    {
        name: "MADAWALA ENTERPRISES",
        location: "No. 370, HIGHLEVEL ROAD ,PANNIPITIYA. ,Pannipitiya ,Sri Lanka",
        contact: "114340652"
    },
    {
        name: "Madura Oil Mart",
        location: "Ganewatta, Nikadalupotha, Kurunegala ,",
        contact: "037 226 7795, 072 458 6771"
    },
    {
        name: "Madura Oil Mart",
        location: "Ganewatta, Nikadalupotha, Kurunegala ,",
        contact: "037 226 7795, 072 458 6771"
    },
    {
        name: "MAHAMALAGE BERNARD SURANGA FERNANDO",
        location: "NO 13A, TALAHENA RD, NEGAMBO ,Sri Lanka",
        contact: "0530-1100"
    },
    {
        name: "MAHARAGAMA MPCS LTD",
        location: "No. 79, HIGHLEVEL ROAD ,MAHARAGAMA. ,Maharagama ,Sri Lanka",
        contact: "112850194"
    },
    {
        name: "MAIN STREET ,KADURUWELA, POLONNARUWA",
        location: "Polonnaruwa ,Sri Lanka",
        contact: "027 -2222013"
    },
    {
        name: "MAL ENTERPRISES",
        location: "No. 459, AVISSWELLA ROAD, MULLERIYAWA NoRTH, MULLE... ,Mulleriyawa ,Sri Lanka",
        contact: "112578217"
    },
    {
        name: "MAL LANKA TRADING",
        location: "KURUPPUMULLA, PANADURA ,",
        contact: "038 2245116, 076 3601666"
    },
    {
        name: "Malinda Servo Shop",
        location: "340/2, Avissawella Road, Kotikawatta ,",
        contact: "072 797 4742 / 078 797 4742"
    },
    {
        name: "Mallawa Oil Mart",
        location: "Dabulla Road, Ibbagamuwa ,",
        contact: "077 938 4486"
    },
    {
        name: "Mallika Oil Mart",
        location: "No 75, Badulla Road, Haliela ,",
        contact: "055 229 4210, 077 377 6400/072 777 6400"
    },
    {
        name: "Mango Tree Lankaioc Filling Station",
        location: "ARUGAM BAY ROAD, POTTUVIL 15 ,Sri Lanka",
        contact: "632248495"
    },
    {
        name: "MANNAR MPCS",
        location: "ELD Street ,Mannar ,Sri Lanka",
        contact: "023-2222850"
    },
    {
        name: "Manoj Oil Mart",
        location: "Dambulla Road, Malsiripura ,",
        contact: " 077 177 7757"
    },
    {
        name: "MARKERS",
        location: "599H, TRINCO ROAD, BATTICALOA ,",
        contact: "065 2223785, 0774 483026"
    },
    {
        name: "MARYAM OIL SHOP",
        location: "IML ICEVADI ROAD, ODDAMAVADI-02 ,",
        contact: "0776 056290"
    },
    {
        name: "Matale Motors",
        location: "No 118, King Street, Matale. ,",
        contact: "077 3460 590"
    },
    {
        name: "MATALE MPCS LTD",
        location: "No. 46, ,KANDY ROAD ,Matale ,Sri Lanka",
        contact: "662223890"
    },
    {
        name: "MATRO OIL MART",
        location: "MATALE ROAD, MADIPOLA ,",
        contact: "0776 512300"
    },
    {
        name: "MAWANELLA HEMMATAGAMA MPCS LTD",
        location: "Kandy Rd, Mawanella ,Mawanella ,Sri Lanka",
        contact: "0352246128"
    },
    {
        name: "MAWATHAGAMA MPCS LTD",
        location: "KANDY ROAD, MAWATHAGAMA. ,Mawathagama ,Sri Lanka",
        contact: "372297878"
    },
    {
        name: "MEDIWATTA DISTRIBUTOR",
        location: "63, NUWARAELIYA ROAD, WELIMADA ,",
        contact: "0722 462777"
    },
    {
        name: "MEDIWATTA OIL SHOP",
        location: "23/A, WELIGODAPOLA, HATHARALIYADDA ,",
        contact: "0722 462777"
    },
    {
        name: "Mega Super Oil",
        location: "Monaragala Road, Wellawaya ,",
        contact: "055 227 4631, 071 244 4409"
    },
    {
        name: "MENAKA SERVO SHOP",
        location: "BALANGODA ROAD, HUNUWALA, OPANAYAKA ,",
        contact: "0722 505996"
    },
    {
        name: "METRO SERVO SHOP",
        location: "NO.180/D, COLOMBO RD, INDIGODAWILA, CHILAW ,",
        contact: "0778 756505"
    },
    {
        name: "Migani Oil Mart",
        location: "Alpitiya Road, Pitigala ,",
        contact: "075 519 3146"
    },
    {
        name: "MINERAL SPRINGS (PVT) LTD",
        location: "291. DR.DANISTER DE SILVA MW ,COLOMBO 9 ,Dematagoda ,Sri Lanka",
        contact: "114970069"
    },
    {
        name: "MODERN OIL CENTER",
        location: "16, SENANAYAKA MW, BANDARAWELA ,",
        contact: "0773 010330"
    },
    {
        name: "Moon Oil Mart",
        location: "BOP 649/50, Nelumpura, Sungavila, Polonnaruwa ,",
        contact: "027 567 5318, 071 385 5595"
    },
    {
        name: "MPG Oil Mart",
        location: "Millagas Handiya, Raigama, Bandaragama ,",
        contact: "034 471 8505, 072 247 7252"
    },
    {
        name: "MR. MC PERERA/ MRS. CA WANNIARACHCHI",
        location: "HIGH LEVEL ROAD, MAKADURA, PANNIPITIYA. ,KOTTAWA ,Sri Lanka",
        contact: ""
    },
    {
        name: "MR.K.SURESH",
        location: "5 TH MILE, TALANKUDA, ARIYAMPATHY ,Sri Lanka",
        contact: "652058885"
    },
    {
        name: "MR.VA SUSANTHA / MRS HRP MALA GUNARATHNA ",
        location: "AUTOMATE FILLING STATION, 112/2, SRIMATH FRANSIS MOLAMURE MAWATHA, KEGALLE ,Sri Lanka",
        contact: "777662953"
    },
    {
        name: "MRG SERVICE",
        location: "BOGAHAWATTA, ATAKALANPANNA ,",
        contact: "0716 182827"
    },
    {
        name: "MRM MULTI OIL MART",
        location: "29A/3, JUMMA MASJITH MAWATHA, PERIYAMULLA ,",
        contact: "077 4660726"
    },
    {
        name: "MRS C R SAMARASINGHE",
        location: "PUTTALM ROAD, NoCHCHIYAGAMA ,Nochchiyagama ,Sri Lanka",
        contact: "025-2257990"
    },
    {
        name: "MRS K A A H DE SILVA",
        location: "TANGALLE RD, BELIATTA ,Beliatta ,Sri Lanka",
        contact: "472243203"
    },
    {
        name: "MRS M D PATHMA NILMINI",
        location: "Old Galle Road ,Moratuwa ,Moratuwa ,Sri Lanka",
        contact: "0112-649292"
    },
    {
        name: "MRS R M PULENDRAN",
        location: "MANNER JUNTION ,Vavuniya ,Sri Lanka",
        contact: "024-2222555"
    },
    {
        name: "MRS R P JAYASINGHE",
        location: "NO 71,BADULLA ROAD ,Welimada ,Sri Lanka",
        contact: "572245137"
    },
    {
        name: "MRS SOMA ABHAYAWARDHANA",
        location: "No. 169, MAYA AV ,KORULOPONE ,MAYA AVENUE, ,KORULOPONE ,COLOMBO 05 ,Sri Lanka",
        contact: "112597365"
    },
    {
        name: "MRS WIMALA SIRISENA",
        location: "ANAGARIKA DHARMAPALA MW, MATARA. ,Matara ,Sri Lanka",
        contact: "412222432"
    },
    {
        name: "Mrs. D.P.Nanayakkara",
        location: "TRINCOMALEE RD ,ANURADHAPURA ,Sri Lanka",
        contact: "252227509"
    },
    {
        name: "MRS. DEEPTHI SWINITHA BOGOLLAGAMA",
        location: "YAHAN GALE CITY FILLING STATION, LANKA IOC FILLING STATION, WARIYAPOLA ROAD, WEERAMBUGEDARA ,Sri Lanka",
        contact: ""
    },
    {
        name: "Ms. H A K PRIYANGI KUMARI",
        location: "M/s.WIJEYARATHNA FILLING STATION,285, NELIGAMA, MIRIGAMA ,Sri Lanka",
        contact: "0530-1100"
    },
    {
        name: "MS. SURANGI SENARATH",
        location: "NO 172, VILLA CICILIA, NEGAMBO RD, PANNALA ,Sri Lanka",
        contact: "37224551 "
    },
    {
        name: "Multi Servo Shop (Lanka Servo Shop)",
        location: "No 36/A, Rattota Road, Matale ,",
        contact: " 071 802 4014"
    },
    {
        name: "MUTHUR AGA DIVISION MPCS LTD",
        location: "BATTICALA ROAD,MUTHUR ,Sri Lanka",
        contact: "262238353"
    },
    {
        name: "MUTTUR A G A DIVISION MPCS LTD",
        location: "NO 45 ,KANDY ROAD ,Linganagar ,Sri Lanka",
        contact: "026-2221114"
    },
    {
        name: "N M M Faiz",
        location: "446 ,KURUNEGALA ROAD ,Aladheniya ,Sri Lanka",
        contact: "772512414"
    },
    {
        name: "N V SERVO SHOP",
        location: "NO.191 OUTER CIRCULAR ROAD, PUTTALAM ,",
        contact: "0777 048246"
    },
    {
        name: "Nachchikuda Servo Shop",
        location: "Nachchikuda junction, Kilinochchi ,",
        contact: "077 698 9934"
    },
    {
        name: "NADEEKA TYRE & MOTORS",
        location: "NO. 1/78, HAPUTALE ROAD, BORALANDA ,",
        contact: "057 2281053, 0773 049035"
    },
    {
        name: "NADEESHA TOURS & TRAVELS PVT LTD",
        location: "No. 394, PANNIPITIYA ROAD ,PELAWETTA. ,Batramulla ,Sri Lanka",
        contact: "112784859"
    },
    {
        name: "Nalanvirumbi Palporul Vanipam (Tamil)",
        location: "No 129B, Kangesarthurai Road, Jaffna ,",
        contact: "077 263 4255"
    },
    {
        name: "NANHATTAN MPCS",
        location: "Mannar Road ,Murungan ,Sri Lanka",
        contact: "0233231133"
    },
    {
        name: "National Oil Mart",
        location: "In front of Fuel Station, Galnewa ,",
        contact: "025 490 8600, 071 273 9046"
    },
    {
        name: "NELAN SERVO SHOP",
        location: "HALAWATHA ROAD, BANDARAKOSWATTA ,",
        contact: "0767 822373"
    },
    {
        name: "NETHUMINI MOTORS",
        location: "19TH MILE POST, POTTUVIL ROAD, SIYAMBALANDUWA ,",
        contact: "055 2279147, 0727 026502 / 0717026502"
    },
    {
        name: "New City Hardware",
        location: "No 4/16, Bulanawewa, Dewahuwa, Galewela ,",
        contact: "077 408 7068, 077 731 9838"
    },
    {
        name: "New Rathanasiri Hardware",
        location: "Marungoda, Mahauswawa ,",
        contact: "032 574 3744, 077 690 8750"
    },
    {
        name: "NEW SIRI LUCK OIL MART",
        location: "NO.58/8B, GANEMULLA, KADAWATHA ,",
        contact: "0777 071419"
    },
    {
        name: "NEW ST. ANNE'S OIL MART",
        location: "KANDY ROAD, YAKKALA ,",
        contact: "033 3341111, 0715 559555"
    },
    {
        name: "Nihal Servo Shop",
        location: "Hatton Road, Kithulgala ,",
        contact: "071 413 7085"
    },
    {
        name: "Nilanga Oil Shop",
        location: "Nishadi, Palatuwa, Matara ,",
        contact: "041 223 2855, 071 848 8071"
    },
    {
        name: "NIMMAX MOTORS & OIL MART",
        location: "KANDY ROAD, 9TH MILE POST, ILUKEWILA, VELADA, MAWATHAGAMA ,",
        contact: "0778 700959 / 0719 268889"
    },
    {
        name: "NIROSHAN MOTORS",
        location: "NO. 161/I, KIRULAPANA AVENUE, POLHENGODA ,",
        contact: "0773 885833"
    },
    {
        name: "Nitharo Lubrication Center",
        location: "Thambuttegama Road, 5th Mile Post, Rajanganaya ,",
        contact: "025 324 7947, 077 799 1155"
    },
    {
        name: "NJ OIL MART",
        location: "ANDHARA WEVA ROAD, MUDUNGODA, THALAWA ,",
        contact: "025 2054738, 0766 803078"
    },
    {
        name: "NO 148/12, PAHALA HANWELLA, OLD COLOMBO RD, HANWELLA",
        location: "Sri Lanka",
        contact: ""
    },
    {
        name: "NO 404/1,NEGAMBO RD,HANDALA, WATTALA",
        location: "Sri Lanka",
        contact: "777449848"
    },
    {
        name: "Omega Enterprises",
        location: "Mr.S.K.E.Hewavitharana ,\"Sarasi\", Thalgahapedhesa, Kirimatimulla, Matara ,Matara ,",
        contact: "041-2240319, 717224291"
    },
    {
        name: "OPAL LANKA (PVT) LTD",
        location: "NO 197/1, WANAGURA MAWATHA, HOKANDARA SOUTH ,Sri Lanka",
        contact: ""
    },
    {
        name: "ORIENT PROPERTIES (PVT) LTD ",
        location: "LANKA IOC FILLING STATION, 527, BADULLA ROAD,BANDARAWELA ,Sri Lanka",
        contact: "572222546"
    },
    {
        name: "Orit Oil Mart",
        location: "Digana Road, Malpana, Kandy ,",
        contact: "081 572 0613, 077 373 1893"
    },
    {
        name: "OSAKA FILLING",
        location: "NINTHAVOOR, AMPARA, ADDAPALAM. ,Addapalam ,Sri Lanka",
        contact: "672251380 "
    },
    {
        name: "Outer Colombo area",
        location: "ARANCO MKTG HOUSE PVT LTD ,No.127, Veluwanarama Road, Wellawatte ,Colombo-06 ,",
        contact: "011-2365803, 0777 845395"
    },
    {
        name: "Outer Colombo area",
        location: "U.K.G.Trading International Pvt Ltd ,No.5, Sumanarama Road, Mt. Lavinia. ,Mt. Lavinia. ,",
        contact: "077-3133788"
    },
    {
        name: "P A JAYANTHA UDAYA KUMARA",
        location: "ANKA IOC FILLING STATION, 404/5A, KADUWELA ROAD, THALANGAMA NORTH,BATTHARAMULLA ,Sri Lanka",
        contact: ""
    },
    {
        name: "P A THILAKAWARDANA",
        location: "RANAJAYAPURA, IPPOLOGAMA, KEKIRAWA ,Sri Lanka",
        contact: "252263602"
    },
    {
        name: "P D H P KARUNARATNE",
        location: "No. 174, HORANA RD, PILIYANDALA. ,Piliyandala ,Sri Lanka",
        contact: "0112-614583"
    },
    {
        name: "P G W SAMARASEKARA",
        location: "No. 718 ,PERADENIYA ROAD, KANDY ,Kandy ,Sri Lanka",
        contact: "812389897"
    },
    {
        name: "P K B N BANDARA",
        location: "No. 242 ,KIRILLAWELA. ,Kirilewela ,Sri Lanka",
        contact: "0112971450"
    },
    {
        name: "PALLEPOLA MPCS LTD",
        location: "MATALE ROAD ,Pallepola ,Sri Lanka",
        contact: "665681810"
    },
    {
        name: "Pamudu Servo Shop",
        location: "Main Street, Siyambalanduwa. ,",
        contact: "055 573 7211, 071 538 5530"
    },
    {
        name: "PARANAGAMA DUDLEY",
        location: "Matara Road ,Devata Junction ,Galle ,Sri Lanka",
        contact: "912224703"
    },
    {
        name: "PASSARA MPCS LTD",
        location: "BADULLA RD,PASSARA ,Sri Lanka",
        contact: "552288819 "
    },
    {
        name: "Pathirana Servo Shop",
        location: "No 1, Imbulgasdeniya ,",
        contact: "077 592 2660"
    },
    {
        name: "Pawan Enterprises (Zodiac)",
        location: "No 522 B 3, Mithreepala Senanayake Mawatha, Anuradapura ,",
        contact: "025 222 3740, 071 688 9660"
    },
    {
        name: "PELMADULLA MPCS LTD",
        location: "Rathnapura Road ,Pelmadulla ,Sri Lanka",
        contact: "045-2275749"
    },
    {
        name: "PERERA & SONS & CO",
        location: "No. 84, ST ANDREWS RD, MUTUWAL DOCKLAND. ,Mutuwal Dockland ,Sri Lanka",
        contact: "0112-522061"
    },
    {
        name: "Periyannai Oil Shop",
        location: "Main Street, Jaffna ,",
        contact: "077 715 3571"
    },
    {
        name: "Pinidu Oil Mart",
        location: "100 Feet Road, Ballagaswewa, Hambanthota ,",
        contact: "071 200 0846"
    },
    {
        name: "POLGAHAWELA MPCS LTD",
        location: "KURUNAGALA RD, POLGAHAWELA. ,Polgahawela ,Sri Lanka",
        contact: "037-2243320"
    },
    {
        name: "Polgolla Servo Shop",
        location: "No 2, Wattegama Road, Madawala ,",
        contact: "071 860 0837"
    },
    {
        name: "POOJAPITIYA OIL CENTER",
        location: "DIVISIONAL COMMERCIAL COMPLEX, KANDY ROAD, POOJAPITIYA ,",
        contact: "0723744123/0778964638"
    },
    {
        name: "PRABASHI SERVICE",
        location: "SIRI NIWASA, 9TH MILE POST, RIDIMALIYADDA ,",
        contact: "0724 154475"
    },
    {
        name: "PRAMOD ENTERPRISES",
        location: "NO.171, WILLIAM GOPALLAWA MAWATHA, KANDY ,",
        contact: "0777 303306"
    },
    {
        name: "Punchi Car Niwasa (Oil Niwasa)",
        location: "No 311, Kaduwela Road, Malabe ,",
        contact: "011 304 7062, 071 480 5322"
    },
    {
        name: "PUNCHIHEWA ENTERPRISES",
        location: "122/B, MAIN STREET, MAHAOYA ,",
        contact: "0772 064908"
    },
    {
        name: "Pure Direct Oil Center",
        location: "No 112, Samarathunga Watta, Me-Ella, Hakman ,",
        contact: "047 224 5888, 071 853 5656"
    },
    {
        name: "QUICK SUPER CENTER",
        location: "DAMBULLA ROAD, HABARANA ,",
        contact: "066 7921036, 0776 244000"
    },
    {
        name: "R B Stors",
        location: "Chandana Pokuna, Unagalawehera, Polonnaruwa ,",
        contact: "027 205 3257, 072 424 1457"
    },
    {
        name: "R G C WIJESIRI",
        location: "MAIN STREET ,KADURUWELA ,Girithale ,Sri Lanka",
        contact: "027-2246215"
    },
    {
        name: "R K S ENTERPRISES",
        location: "TRINCOMALEE ROAD, HOROWPATHANA ,",
        contact: "0254 935883, 0775 775353"
    },
    {
        name: "R M R T SERVO SHOP",
        location: "KATUPOTHA ROAD, MAGULAGAMA ,",
        contact: "0773 278033"
    },
    {
        name: "R M S Servo Shop",
        location: "Kiulagoda Govijanapadaya, Mahakubukkadawala, Puttalam ,",
        contact: "032 791 8267, 072 355 6118"
    },
    {
        name: "R M SENEVIRATNE",
        location: "PASSARA ROAD ,Lunugala ,Sri Lanka",
        contact: "555657953"
    },
    {
        name: "R N Oil Shop (Nathan)",
        location: "No 123, Stanly Road, Jaffna ,",
        contact: "021 222 9166, 077 554 5899"
    },
    {
        name: "R S Marketing",
        location: "No 69, Negambo Road, Kandana ,",
        contact: "077 062 8713"
    },
    {
        name: "RAIGAM UDAGAHAPATTU MPCS LTD",
        location: "Rathnapura Road ,Ingiriya ,Sri Lanka",
        contact: "034-3446161"
    },
    {
        name: "Rajapaksha Oil Centre",
        location: "22 Mile Post, Jayanthipura, Polonnaruwa ,",
        contact: "072 708 6850"
    },
    {
        name: "Rambukkana Servo Shop",
        location: "No 15, Main Street, Rambukkana ,",
        contact: "077 207 3770"
    },
    {
        name: "RANDIMA HOLDINGS",
        location: "HIRIMBURA RD, GALLE ,Sri Lanka",
        contact: "912223107"
    },
    {
        name: "RANGA OIL MART",
        location: "DENIYAYA ROAD, GALDOLA ,",
        contact: "0774 552568 / 0776497735"
    },
    {
        name: "RANJAN MOTORS & OIL MART",
        location: "M G C BUILDING, GAMPOLA ROAD, PERADENIYA ,",
        contact: "0777 418802"
    },
    {
        name: "Rasara Oil Mart",
        location: "Ingiriya ,",
        contact: "077 337 1313 "
    },
    {
        name: "RATHKARAWWA SERVO SHOP",
        location: "RATHKARAWWA, MASPOTHA ,",
        contact: "0718 515820"
    },
    {
        name: "RATHKARAWWA SERVO SHOP",
        location: "YAGGAPITIYA ,",
        contact: "0718 515820"
    },
    {
        name: "Rathna Oil Mart",
        location: "Kidapola, Kudagalgamuwa, Kurunegala ,",
        contact: "037 223 7144, 072 747 8851"
    },
    {
        name: "RATHNAYAKE OIL MART",
        location: "NO.5, WELIMADA ROAD, KEPPETIPOLA ,",
        contact: "0719 240471"
    },
    {
        name: "Rathnayake Servo Shop",
        location: "Colombo Road, Mahawewa ,",
        contact: "077 758 0207"
    },
    {
        name: "RATNAPURA MPCS LTD",
        location: "No. 10 BANDARANAYAKE MW, RATNAPURA.   ,Ratnapura ,Sri Lanka",
        contact: "452222419"
    },
    {
        name: "Ravi Oil Shop",
        location: "Andankulam, Adamban, Mannar ,",
        contact: "077 324 2848"
    },
    {
        name: "Rayani Oil Mart",
        location: "13 Mile post, Bandaragama, Pemaduwa ,",
        contact: "072 265 7682 / 078 342 9979"
    },
    {
        name: "Republic of Maldives",
        location: "SPACE PVT LTD ,Ma. Aadhaige, Nikagas Higun, Male, the Republic of Maldives ,Maldives ,Maldives",
        contact: "009603314044 / 3321221, 00960 7772223"
    },
    {
        name: "RISHI OIL MART",
        location: "NO.151/B/01, BULUGAHAMULLA, MINUWANGODA ,",
        contact: "033 3650857, 0712 773847"
    },
    {
        name: "Rohitha Servo Shop",
        location: "Puttalam Road, Mundala ,",
        contact: "077 378 9448"
    },
    {
        name: "RUBY MOTORS",
        location: "178, KATUWANA, HOMAGAMA ,",
        contact: "0778 478380"
    },
    {
        name: "Ruhunu Lanka IOC Filling Station ",
        location: "NO 07, TISSA RD, AMBALANTHOTA ,Sri Lanka",
        contact: "472223401"
    },
    {
        name: "Ruwanweli Oil Shop",
        location: "No 285, Kandagaspitiya, Dehiowita ,",
        contact: "036 223 3685, 077 037 1306"
    },
    {
        name: "S & D ENTERPRISES",
        location: "205 Galle Road ,Panadura ,Panadura ,Sri Lanka",
        contact: "038-2233076"
    },
    {
        name: "S & J OIL CENTER",
        location: "NO.19, ILIPPUGEDARA ROAD, KURUNEGALA ,",
        contact: "0772 203746"
    },
    {
        name: "S G HEMALATHA",
        location: "No.630B ,Colombo Road ,Kurana ,Sri Lanka",
        contact: "112251650"
    },
    {
        name: "S K K Servo Shop",
        location: "No 108, Kandasamy Kovil Road, Vavuniya ,",
        contact: "077 376 0587"
    },
    {
        name: "S L S Oil Mart",
        location: "Baddanwala, Urubokka ,",
        contact: "041 792 2060"
    },
    {
        name: "S LALITH PERERA",
        location: "NO 239B , PANADURA RD, RAMUKKANA, BANDARAGAMA ,Sri Lanka",
        contact: "38228880"
    },
    {
        name: "S M D M SAMARAKOON & SONS",
        location: "RAGALA ROAD ,Padiyapellela ,Sri Lanka",
        contact: "522287358"
    },
    {
        name: "S N JAYASINGHE",
        location: "No. 301, KANDY ROAD, PELIYAGODA ,Peliyagoda ,Sri Lanka",
        contact: "0112-934197"
    },
    {
        name: "S P GUNASINGHE",
        location: "93 Agalwatta Road ,Matugama ,Sri Lanka",
        contact: "342240475"
    },
    {
        name: "S P S Oil Shop",
        location: "Kandy Road, Kaithady, Jaffna ,",
        contact: "021 222 2273, 077 384 9618"
    },
    {
        name: "S R B ENTERPRISES",
        location: "No. 141, KANUWANA, JA ELA. ,Ja Ela ,Sri Lanka",
        contact: "112236724"
    },
    {
        name: "S S BANDARA",
        location: "No. 579, DAMBULLA ROAD, MATALE ,Matale ,Sri Lanka",
        contact: "662232926"
    },
    {
        name: "S S OIL MART",
        location: "NO.136B SEAVIEW ROAD, TRINCOMALEE ,",
        contact: "0754 285463"
    },
    {
        name: "S S S Servo Shop",
        location: "No 01, Walekade, Palugasdamana, Polonnaruwa ,",
        contact: "027 222 4633, 071 339 8122"
    },
    {
        name: "S S T TRADING",
        location: "67/G, SAMAGI MAWATHA, KALUDAEWALA, PANADURA ,",
        contact: "038 2232115, 0772 688555"
    },
    {
        name: "Sadeepa Enterprises",
        location: "No 06 A, Mabima, Makewita, Ja-Ela ,",
        contact: "077 124 0909"
    },
    {
        name: "SADEVI NEW OIL MART",
        location: "OPPOSITE TO FUEL STATION, WELIKANDA, POLONNARUWA ,",
        contact: "027 5629324, 076 4449324"
    },
    {
        name: "Sahana Oil Mart",
        location: "Kahanda, Angulugaha ,",
        contact: "071 335 9128 / 071 300 5122"
    },
    {
        name: "Sajaan Oil Mart",
        location: "Karathev, Ponparippu, Puttlam ,",
        contact: "032 332 1217, 077 777 3889"
    },
    {
        name: "Sajtha Oil Mart",
        location: "Trinco Road, Kahatagasdigiliya ,",
        contact: "025 224 7491, 071 921 3132"
    },
    {
        name: "SAKEER OIL & SPARE MART",
        location: "92, KEECHER LANE, SAMMANTHURAI ,",
        contact: "0765 268479"
    },
    {
        name: "Sakuni Servo Shop",
        location: "No 11, Yaya 2, Aralaganwela ,",
        contact: "027 225 7086, 078 481 4041"
    },
    {
        name: "SAMAN MAL OIL MART",
        location: "NO.161, DENIYAYA ROAD, AKURESSA ,",
        contact: "0773 517496"
    },
    {
        name: "Saman Sri Motors Pvt Ltd",
        location: "New Padaviya Road, Kabitigollewa ,",
        contact: "025 229 8188, 077 978 5673"
    },
    {
        name: "SAMARANAYAKA SAHA SAMARANAYAKA",
        location: "Agalawatta ,Agalawatta ,Sri Lanka",
        contact: "342243630"
    },
    {
        name: "SAMPATH ENTERPRISES",
        location: "No. 239 GALLE RD, MOUNT LAVINIA. ,Mt. Lavania ,Sri Lanka",
        contact: "0112-7149081"
    },
    {
        name: "SAMPATH SERVO SHOP",
        location: "NUWARAELIYA ROAD, DALPITIYA, ATABAGE ,",
        contact: "0778 473618"
    },
    {
        name: "SANDALANKAWA NEW MPCS LTD",
        location: "WETAKEWA, GONAWELA, SANDALANKAWA ,Sandalankawa ,Sri Lanka",
        contact: "313510017"
    },
    {
        name: "Sandarathna Oil Mart",
        location: "245B, Kuleyapitiya, Galayaya, Pannala ,",
        contact: "071 844 3981"
    },
    {
        name: "SANDUL SERVICE & OIL MART",
        location: "NO.252, GANITHAPURA, RUWANWELLATHARA ,",
        contact: "078 3991236"
    },
    {
        name: "Saram Oil Centre",
        location: "No 7A, Mankuliya Road, Negombo ,",
        contact: "031 223 8569, 077 787 7657"
    },
    {
        name: "SARANI ENTERPRISE PVT LTD",
        location: "COLOMBO RD, KIRINDIWELA. ,Kirindiwela ,Sri Lanka",
        contact: "0332268212"
    },
    {
        name: "Sarasi Oil Center",
        location: "No 167/2, Nugahena Watta, Kirindiwela ,",
        contact: "033 226 7496, 077 671 3950"
    },
    {
        name: "SARATHAS SPARE MART",
        location: "WARD NO.9, KOKKADDICHCHOLAI ,",
        contact: "065-2223920, 0763 476026"
    },
    {
        name: "Sasik Oil Mart",
        location: "No 325, Puttalam Road, Wariyapola ,",
        contact: "037 226 7991, 077 791 6716"
    },
    {
        name: "Sasvee Oil Mart",
        location: "Nawagamuwa, Ranala ,",
        contact: "011 485 8080, 077 672 2842"
    },
    {
        name: "Sathiesh Servo Shop",
        location: "Batticaloa ,",
        contact: "065 205 3067, 077 249 0098"
    },
    {
        name: "Sayanthan Oil Shop",
        location: "Kandy Road, Kaithady, Jaffna ,",
        contact: "021 320 2722, 077 319 3930"
    },
    {
        name: "SCAN LANKA",
        location: "1065B/1 ,DAMBULLA ROAD ,Matale ,Sri Lanka",
        contact: "662223280"
    },
    {
        name: "Seivsiri Oil Center",
        location: "No 171 B/2, Wadaranmulla, Korathota, Kaduwalla ,",
        contact: "071 425 1563"
    },
    {
        name: "SELLATHAMBY DILAXSHAN",
        location: "LANKA IOC FILLING STATION, MULLAITIVU ROAD, TANNIRYUTRU, MULLIYAWALI ,Sri Lanka",
        contact: ""
    },
    {
        name: "SELVAM OIL SHOP",
        location: "ANANTHAPURAM, KILINOCHCHI ,",
        contact: "0770 789769"
    },
    {
        name: "SELVARAJA",
        location: "No 56 ,TRINCOMALEE ROAD, BATTICALOA. ,Batticaloa ,Sri Lanka",
        contact: "652224178"
    },
    {
        name: "SENAKA OIL & TRADE CENTER",
        location: "122/43, WATARUKA, PADUKKA ,",
        contact: "0112 830864, 0714 447192"
    },
    {
        name: "SENANAYAKE SERVO SHOP",
        location: "WADAGALLA ROAD, DIVILLEWA, MAHO ,",
        contact: "0719 373530"
    },
    {
        name: "Senarath Tyre Centre",
        location: "Rambe, Maeliya ,",
        contact: "072 215 2805"
    },
    {
        name: "Serendib Oil Shop",
        location: "No 28, Aalim Road, Nintavur 13 ,",
        contact: "067 225 0010, 077 991 7840"
    },
    {
        name: "Servo Oil Shop",
        location: "Shilani, Gorakaduwa, Pelawatta ,",
        contact: "077 485 8882"
    },
    {
        name: "Simar Oil Shop",
        location: "Allainahar, Division 06, Thopur. ,",
        contact: "077 963 6121"
    },
    {
        name: "SINGHE ASSCOCIATE",
        location: "No. 02, MANGALA RD, GAMPAHA. ,Gampaha ,Sri Lanka",
        contact: "0322221660"
    },
    {
        name: "SINHA AUTO SERVICE (PVT) LTD.",
        location: "No.22 ,Puttlalam Road ,Chilaw ,Sri Lanka",
        contact: "322220087"
    },
    {
        name: "Sinha Distributors",
        location: "Puttlam Road, Arachichikattuwa ,",
        contact: "032 225 9440"
    },
    {
        name: "SIRI LUCK OIL MART",
        location: "418B 1/1, KANDY ROAD, KELANIYA ,",
        contact: "0772 373714"
    },
    {
        name: "SIRI OIL MART",
        location: "MAKULUGASWEVA, DEHAHUWA ,",
        contact: "066 2288118, 078 4604778"
    },
    {
        name: "SIRILUCK OIL MART",
        location: "130, KOPIWATTA, KADAWATHA ,",
        contact: "0112 928202, 0772 373714"
    },
    {
        name: "Sirimayura Service",
        location: "Sathipola Road, Monaragala ,",
        contact: "071 494 6224"
    },
    {
        name: "SIRIPURA SERVO SHOP",
        location: "NO.255, SIRIPURA SERVO SHOP, POLONNARUWA ,",
        contact: "027 2053939, 0723 243939"
    },
    {
        name: "Sithmini Oil Centre",
        location: "Attanagalla Road, Pasyala ,",
        contact: "033 228 4404"
    },
    {
        name: "SIVA FILLING STATION",
        location: "NO 278, KANDY ROAD, NUNAVIL ,Nunavil ,Sri Lanka",
        contact: "0777768835"
    },
    {
        name: "SIVAM MOTORS",
        location: "MAIN STREET, ODDUSUDAN ,",
        contact: "077 9198640 / 0771912908"
    },
    {
        name: "Siyath Servo Shop",
        location: "No 206 A/1, Raddoluwa, Seeduwa ,",
        contact: "077 538 7766"
    },
    {
        name: "SK & SONS OIL MART",
        location: "NO.411, MAIN STREET, TRINCOMALEE ,",
        contact: "026 2226018, 0773 568494"
    },
    {
        name: "SL OIL MART",
        location: "256/1, WILIGODAWATHTHA, KURUNEGALA ,",
        contact: "072 3239584"
    },
    {
        name: "SLIPTO AGENCIES PVT LTD",
        location: "No. 1141, PRADEEPA MW ,MALIGAWATTA, COLOMBO 10 ,Maligawatta ,Sri Lanka",
        contact: "112423267"
    },
    {
        name: "sl_store",
        location: "sl_address ,sl_address2 ,sl_city ,sl_zip ,sl_country ",
        contact: "sl_phone"
    },
    {
        name: "sl_store",
        location: "sl_address ,sl_address2 ,sl_city ,sl_zip ,sl_country ",
        contact: "sl_phone"
    },
    {
        name: "SONAL MOTOR HOUSE & OIL MART",
        location: "B209/3, DEBANGAMA, KEGALLE ,",
        contact: "0777 100719 / 0774311455"
    },
    {
        name: "Sonali Oil Mart",
        location: "341/B3, Public Ground Road, Anuradhapura ,",
        contact: "025 222 6426, 077 396 1661"
    },
    {
        name: "Sooriya Cycle Oil Mart",
        location: "Galle Road, Thawalama ,",
        contact: "077 276 5652 / 072 822 1223"
    },
    {
        name: "Southern Petroleum (Pvt) Ltd - 04",
        location: "NO 138A, GALLE RD, KOSGODA ,Sri Lanka",
        contact: "915700770"
    },
    {
        name: "Southern Petroleum (Pvt) Ltd - 05",
        location: "HAUASMUNE ESTATE, DABULLA RD, KURUNEGALA ,Sri Lanka",
        contact: "372052969"
    },
    {
        name: "Southern Petroleum (Pvt) Ltd - 06",
        location: "NO 171, RATHNAPURA RD, AVISSAWELLA ,Sri Lanka",
        contact: "365100051 "
    },
    {
        name: "Southern Petroleum (Pvt) Ltd - 07",
        location: "247, KESBAWA ROAD, ALUTHGAMA, BANDARAGAMA. ,Sri Lanka",
        contact: "115350208"
    },
    {
        name: "SOUTHERN PETROLEUM (PVT) LTD -1",
        location: "NO 293, MATARA RD, GALLE ,Sri lanka",
        contact: "912223664 "
    },
    {
        name: "SOUTHERN PETROLEUM (PVT) LTD -2",
        location: "NO 369, COLOMBO RD, WEHERA, KURUNEGALA ,Sri Lanka",
        contact: "372225221"
    },
    {
        name: "Speed Motors (AFS Trading (Pvt) Ltd) ",
        location: "No 98, Jumma Masjid Mawatha, Pankada Junction, Negombo ,",
        contact: "031 223 7399, 075 707 3747"
    },
    {
        name: "Speed Oil Mart",
        location: "No 161, Kurunegala - Colombo Road, Godawela, Polgahawela. ,",
        contact: "077 760 4144"
    },
    {
        name: "SRI LANKA RED CROSS SOCIETY ",
        location: "73 KANDY ROAD, JAFFNA ,Sri Lanka",
        contact: "212229792"
    },
    {
        name: "Sriyani Motors",
        location: "No 23, 621 Road, Menikhinna ,",
        contact: "081 237 5147, 077 513 2286"
    },
    {
        name: "SS KOTALAWALA P LTD",
        location: "579 ,DAMBULLA ROAD ,Narahenpita ,Sri Lanka",
        contact: "662232926"
    },
    {
        name: "St Anthony Oil Mart",
        location: "No 42/9/5H, Kirindewela Road, Yakkala ,",
        contact: "033 223 1466, 071 555 9555"
    },
    {
        name: "Star Oil Mart",
        location: "No 78, Gomarankalla, Galenbindunuwewa ,",
        contact: "072 458 1239"
    },
    {
        name: "SUBASINGHE OIL MART",
        location: "94/3, 4 ELA,POLONNARUWA ,",
        contact: "0771 719613"
    },
    {
        name: "Sudarshana Oil Mart",
        location: "Negambo Road, Dambadeniya ,",
        contact: "072 761 3638"
    },
    {
        name: "SUDATH SERVO SHOP",
        location: "THALAWWAHERA, PANNALA ,",
        contact: "0770 376906"
    },
    {
        name: "Sumith Stores",
        location: "No 02, Sumith Stores, Diyabeduma ,",
        contact: "027 205 0141, 077 236 7653"
    },
    {
        name: "Sun Oil Shop",
        location: "Main Street, Arayanpathy ,",
        contact: "065 224 8509"
    },
    {
        name: "Sunbright Enterprises",
        location: "No 63/4/1, Horana Road, Kesbewa ,",
        contact: "011 485 4502, 072 550 1042"
    },
    {
        name: "Suneru Constructions & Distributors Pvt Ltd",
        location: "Villa Lusiya, Mathara Road, Unawatuna ,",
        contact: "091 225 0042, 077 713 6563"
    },
    {
        name: "SUNIL MOTORS",
        location: "ALUTHNUWARA, IMBULPE, BALANGODA ,",
        contact: "045 2289551, 076 6671989"
    },
    {
        name: "SUPER SUN OIL MART",
        location: "NO.114, THORANEGAMA, GALNEWA ,",
        contact: "025 2269784, 0716 302259"
    },
    {
        name: "SUPUN SERVO SHOP",
        location: "SUPUN', MEEGAHAWATTA, METARAMBA, UNAWATUNA ,",
        contact: "091 3909379, 0773 108813"
    },
    {
        name: "SURANG MOTORS",
        location: "NO.87, BORELLA ROAD, ATHURUGIRIYA ,",
        contact: "0115 998859, 0774 632249"
    },
    {
        name: "Susil Motores",
        location: "Rambe, Maeliya ,",
        contact: "077 695 1764 / 072 250 1578"
    },
    {
        name: "SWASTHIKA MILLS LTD",
        location: "No. 323, HAVELOCK ROAD ,COLOMBO 06 ,COLOMBO 06 ,Havelock road ,Sri Lanka",
        contact: "117206234"
    },
    {
        name: "T S JAYALATH",
        location: "RATKARAWWA, MASPOTHA. ,Maspotha ,Sri Lanka",
        contact: "372236954 "
    },
    {
        name: "T V K Marketing ",
        location: "No 338/B, Madiwela, Kotte ,",
        contact: "011 498 4431, 072 799 9119"
    },
    {
        name: "TANGALLE MPCS LTD",
        location: "MAHAWELLA RD, TANGALLE. ,Tangalle ,Sri Lanka",
        contact: "474934854"
    },
    {
        name: "Thankas Oil Shop",
        location: "Achchuveli North, Achchuveli ,",
        contact: "077 322 2871"
    },
    {
        name: "THARANGA FILLING STATION",
        location: "137/4 ,TRINCOMALEE ROAD ,Kantale ,Sri Lanka",
        contact: "026-2234778"
    },
    {
        name: "Tharanga Servo Shop",
        location: "Near Post Office, Padawe Parakkramapura ,",
        contact: "025 389 8156, 077 105 5609 / 077 504 0460"
    },
    {
        name: "THEEPAN OIL SHOP",
        location: "KATTASPATHRI, PESAALAI ,",
        contact: "0750 329395"
    },
    {
        name: "Thkuma Power",
        location: "Hiripitiya Road, Wellawa ,",
        contact: "037 223 5471, 071 388 2856"
    },
    {
        name: "THURKA OIL SHOP",
        location: "NEERVELY SOUTH, NEERVELY ,",
        contact: "0778 448775"
    },
    {
        name: "Thushari Oil Mart",
        location: "Galenbindunuwewa Road, Seeppukulama ,",
        contact: "025 205 6870, 071 980 1774"
    },
    {
        name: "Thusitha Oil Mart ",
        location: "No 48B, Madipola Road, Pallapola, Mathale ,",
        contact: "066 224 7434, 077 806 7763"
    },
    {
        name: "TILAKA FILLING STATION",
        location: "183 ,BATTICALOW ROAD, KALMUNAI. ,Kalmunai ,Sri Lanka",
        contact: "0672229701"
    },
    {
        name: "TISSAMAHARAMA MPCS LTD",
        location: "HAMBANTHOTA RD, DEBERAWEWA. ,Deberawewa ,Sri Lanka",
        contact: "474937261 "
    },
    {
        name: "TRYME MOTORS",
        location: "42/14, SP LANE, KATHANKUDY-02 ,",
        contact: "0777 697061"
    },
    {
        name: "U J OIL MART",
        location: "NO.486, NEW KALMUNAI ROAD, MANCHANTHODUWAI ,",
        contact: "065 4929259, 076 8237993"
    },
    {
        name: "UKG Mahageddra Oil Mart",
        location: "Thissa Road, Dehigahalanda ,",
        contact: "091 223 3411, 077 313 3788"
    },
    {
        name: "UKG Mahageddra Oil Mart",
        location: "No 357/B3, Dangedara, Galle ,",
        contact: "091 223 3411, 077 313 3788"
    },
    {
        name: "UNIQUE SERVO OIL MART",
        location: "KANDY ROAD, PARAGAHADENIYA ,",
        contact: "0779 803445"
    },
    {
        name: "V K S Oil Shop",
        location: "No 5, Palali Road, Punnalaikadduvan, Chunnakam ,",
        contact: "021 491 2135, 077 591 2046"
    },
    {
        name: "VELMURUGAN OIL SHOP",
        location: "MAIN STREET, MULLIYAWALAI ,",
        contact: ""
    },
    {
        name: "Visda Oil Mart",
        location: "Visda Building, Puttalam Road, Chilaw ,",
        contact: "071 313 6469"
    },
    {
        name: "VISHWA OIL MART",
        location: "GAMAGEDARA, NAEROOLA, DAMBAGALLA, MONARAGALA ,",
        contact: "0773 870853"
    },
    {
        name: "W A Perera & Son",
        location: "No 150/3, Madawala Road, Digana ,",
        contact: "081 222 3164, 077 227 7399"
    },
    {
        name: "W A PERERA & SON",
        location: "No. 362 ,KATUGASTOTA ROAD, KANDY. ,Kandy ,Sri Lanka",
        contact: "812223164"
    },
    {
        name: "W CALISTUS B PERERA & SONS",
        location: "No. 66, GREENS RD, NEGOMBO. ,Negombo ,Sri Lanka",
        contact: "312232329"
    },
    {
        name: "W G LALITH DHARMAKEERTHI",
        location: "VIHARAGALA, SOORIYAWEWA. ,Sooriyawewa ,Sri Lanka",
        contact: "474923611"
    },
    {
        name: "W PALIHAWADANA & SONS",
        location: "No. 14, KANDY ROAD, NUWARAELIYA. ,Nuwaraeliya ,Sri Lanka",
        contact: "522222221"
    },
    {
        name: "Warakapola Oil Mart",
        location: "No 177, Kandy Road, Warakapola ,",
        contact: "035 226 7383, 077 753 8938"
    },
    {
        name: "Wariyapola Oil Mart (Thilina)",
        location: "Puttlam Road, Wariyapola ,",
        contact: "071 113 7006"
    },
    {
        name: "Waruni Oil Mart",
        location: "Kurunegala Road, Hettipola ,",
        contact: "037 229 1132, 077 989 7099"
    },
    {
        name: "WATTAWALA PLANTATIONS PLC",
        location: "LANKA IOC FILLING STATION, TEA CUP, ROSELLA ,N.ELIYA ROAD, WATTAWALA ,Sri Lanka",
        contact: "767046006"
    },
    {
        name: "WAYAMBA OIL MART ",
        location: "NEGOMBO ROAD, NARAMMALA ,",
        contact: "0777 964136"
    },
    {
        name: "WEERASEKARA OIL MART",
        location: "OORAPOLA WATTA, OORAPOLA ,",
        contact: "0788-709114 / 0724072230"
    },
    {
        name: "WELDISI PVT LTD",
        location: "TANGALLE RD, HAMBANTHOTA. ,Hambantota ,Sri Lanka",
        contact: "472220810"
    },
    {
        name: "WIJERAMA ENTERPRISES",
        location: "No. 678, WIJERAMA JUNCTION ,GAMGODAWILA ,NUGEGODA. ,Sri Lanka",
        contact: "112803200"
    },
    {
        name: "Wijey Oil Mart",
        location: "No 14/C, Horathudawa, Polgasovita ,",
        contact: "077 157 5933"
    },
    {
        name: "Wipula Dharmadasa",
        location: "COLOMBO RD, KALUWELLA, GALLE ,Galle ,Sri Lanka",
        contact: "912234957"
    },
    {
        name: "Y B K Oil Mart",
        location: "Matale Road, Bakamuna ,",
        contact: "066 225 6030, 077 378 7657 / 071 873 7500"
    },
    {
        name: "YASARAN MOTORS",
        location: "LOLANWEWA, KOBEIGANE ,",
        contact: "0724 714080"
    },
    {
        name: "YAYINNA MOTORS & SERVICE",
        location: "NO.6/1, PANSALA ROAD, KAHAWATTA ,",
        contact: "0712 567202"
    },
    {
        name: "YOMAL FILLING STATION",
        location: "MAIN STREET, BIBILE. ,Bibile ,Sri Lanka",
        contact: "552265807"
    }
]

module.exports = dealers;