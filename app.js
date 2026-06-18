/*
  Sri Annapurna Sameyta Kasi Visweswara Swami Temple Website
  Core Logic & Interactivity
*/

// --- TRANSLATION DICTIONARY ---
const translations = {
  te: {
    logo_title: "శ్రీ అన్నపూర్ణా సమేత కాశీ విశ్వేశ్వర స్వామి దేవస్థానం",
    logo_location: "నరసింగపాడు, పల్నాడు జిల్లా",
    nav_home: "హోమ్",
    nav_history: "చరిత్ర",
    nav_poems: "పద్యాలు",
    nav_poet: "కవి పరిచయం",
    nav_gallery: "చిత్రమాలిక",
    nav_festivals: "పండుగలు",
    nav_rituals: "నిత్య సేవలు",
    nav_committee: "కమిటీ",
    nav_contact: "సంప్రదించండి",
    poet_guest_badge: '<i class="fa-solid fa-crown" style="margin-right: 6px; color: #ffeb3b;"></i>గౌరవ అతిథి • దేవస్థానం తరపున అక్షయ సాహిత్య నివాళి',
    flower_shower_btn: "🌸 పుష్పవృష్టి గౌరవ వందనం",
    
    hero_subtitle: "ఓం నమః శివాయ • అక్షయ క్షేత్రం",
    hero_title: "శ్రీ అన్నపూర్ణా సమేత కాశీ విశ్వేశ్వర స్వామి దేవస్థానం",
    hero_desc: "కవిసమ్రాట్ విశ్వనాథ సత్యనారాయణ గారి సాహిత్య సుమధుర 'మధ్యాక్కరల' చేత అర్చింపబడిన సిద్ధ పురుషుల పవిత్ర ధామము - నరసింగపాడు.",
    hero_btn_poems: "పద్యాల భాండాగారం",
    hero_btn_history: "ఆలయ చరిత్ర చదవండి",
    hero_scroll: "క్రిందికి స్క్రోల్ చేయండి",
    
    intro_heading: "పలనాటి కాశీ వైభవం",
    intro_p1: "పలనాడు సీమలో నకరికల్లు మండల పరిధిలో గల నరసింగపాడు గ్రామములో ఆది దంపతులు శ్రీ అన్నపూర్ణా దేవి మరియు శ్రీ కాశీ విశ్వేశ్వర స్వామిలుగా వెలసి విరాజిల్లుతున్నారు. ఈ క్షేత్రము అత్యంత ప్రాచీనమైనది మరియు అనాదిగా సిద్ధపురుషుల చేత అర్చించబడుతున్న మహత్తర క్షేత్రము. ఆలయ గర్భాలయమునకు వెనుకనున్న నాగకన్యల శిల్పాలు మరియు వాయువ్య దిశలో ఉన్న నాగ దేవతా మూర్తులు ఈ దేవాలయం యొక్క ప్రాచీనతకు ప్రత్యక్ష సాక్ష్యాలుగా నిలుస్తున్నాయి.",
    intro_p2: "ప్రతిరోజూ అర్ధరాత్రి వేళ సిద్ధపురుషులు, మహర్షులు సూక్ష్మ రూపంలో (తేజో రూపంలో) ఈ క్షేత్రానికి వచ్చి ఇక్కడ కొలువై ఉన్న విశ్వేశ్వరుడిని గంగా జలములతో అభిషేకించి, తాము చేసిన అర్చన ఫలితాన్ని లోకకల్యాణార్థం సమర్పిస్తారని భక్తుల ప్రగాఢ నమ్మకం. ఎందరో భక్తులు ఈ దివ్య అనుభూతులను కళ్ళారా చూసి తరించిన దృష్టాంతములు ఇక్కడ ప్రసిద్ధి చెందాయి.",
    feat1_title: "పాతాళ గంగ జలాలు",
    feat1_desc: "ఇక్కడి గంగమ్మ మహిమ అద్భుతం. మోటారు అవసరం లేకుండానే నీరు భూగర్భం నుండి ఉబికి రావడం ప్రత్యక్ష నిదర్శనం.",
    feat2_title: "దక్షిణ ముఖ అన్నపూర్ణ",
    feat2_desc: "అమ్మవారు దక్షిణాభిముఖంగా ఉండి గ్రామాన్ని కరుణిస్తుండటంతో ఇక్కడ ఎప్పుడూ ఆకలి బాధలు ఉండవని, పంటలు సమృద్ధిగా పండుతాయని ప్రతీతి.",
    
    history_heading: "ఆలయ చరిత్ర & క్షేత్ర మహాత్మ్యం",
    inscription_badge: "📜 ఆలయ శాసనం • ఆలయ అభివృద్ధి మండలి • తేది: 15-11-2024",
    inscription_title: "నరసింగపాడు అన్నపూర్ణ సమేత కాశీ విశ్వేశ్వర స్వామి ఆలయ చరిత్ర క్షేత్ర మహత్యం",
    inscription_p1: "పలనాటి సీమలో నకరికల్లు ప్రాంతంలోని నరసింగపాడు గ్రామములో ఆది దంపతులు అన్నపూర్ణ కాశీ విశ్వేశ్వరులుగా వెలసి విరాజిల్లుచున్నారు. ఈ క్షేత్రము అతి ప్రాచీనమై అనాదిగా సిద్ధపురుషుల చేత అర్చించబడుతున్నది. ఈ ఆలయం అతి ప్రాచీనమనుటకు ఆలయ అధిష్ఠాన మూర్తులు మరియు గర్భాలయమునకు వెనుకనున్న పడమటి గోడ మీద వున్న నాగకన్య, ఉత్తర గోడకు వాయువ్య దిశలో బయట ఉన్న నగ్న దేవతా మూర్తులు నిదర్శనాలుగా నిలుస్తున్నా యి. మహా మహిమోపేతులైన, మానవాతీత శక్తి సంపన్నులైన, పవిత్ర జీవనులైన ఋషీశ్వరులు, సిద్ధులు ప్రతిరోజు అర్ధరాత్రి వేళ తేజశ్శరీరాలతో వచ్చి ఈ ఆలయములో ఉన్న కాశీ విశ్వేశ్వరుడిని అభిషేకించి ఆ అర్చనా ఫలితాన్ని \"తత్ బ్రహ్మార్పణమస్తు\" అని ధారపోసి వెళుతున్నారు. ఎందరో భక్తాగ్రేసరులు ఆ ఋషీశ్వరాదులను చూసి తరించిన దృష్టాంతములు అనేకం కలవు. ఈ గ్రామమునకు దగ్గరలో శివ నామముతో \"త్రిపురాంతకం\" అనే ప్రాంతములో నరసింహుడు కొలువు దీరి ఉండగా, ఈ నరసింగపాడు గ్రామములో విశ్వేశ్వరుడు పూజలందుకొనుట యాదృచ్ఛికం కాదు. ఇది కేవలము శివ కేశవ లకు బేధము లేదని తెలిపే దైవసంకల్పమే.",
    inscription_p2: "శాలివాహన శకం 1099 - 1100 సం|| (అనగా ఆంగ్ల 1178 సం||)లో సుప్రసిద్ధమైన ఆంధ్ర మహాభారత యుద్ధముగా ప్రాచుర్యము పొందిన పలనాటి యుద్ధ రాజ వంశీయులు, ఈ క్షేత్రమునకు వచ్చి స్వామివారిని అర్చించి అనుగ్రహ పాత్రులైనారని బహుళ ప్రాచుర్యములో ఉన్నది. ఆ కాలములో ఉత్తర భారతంలో నున్న మోక్ష ధామముగా ప్రసిద్ధినొందిన కాశీ క్షేత్ర దర్శనం అతి వ్యయ ప్రయాసలతో కూడి దుర్లభముగా ఉండేది. కానీ ఎందరో మోక్షకాములు ఈ క్షేత్రమును దర్శించి స్వామి వారిని అర్చించి శివ సాయుజ్యం పొందారు. అందుకే ఈ క్షేత్రము \"పలనాటి కాశీ\"గా ప్రశస్తి నొందినది. పూర్వము నరసింగపాడు, గుళ్ళపల్లి, గుత్తికొండ గ్రామ ప్రాంతములు అభయారణ్యంగా పిలువబడేవి. ఈ నరసింగపాడు గ్రామములోని ఈ ప్రశస్తమైన భూమిలో ఈశాన్య, నైరుతి ప్రాంతములు పమిడిమర్రి వంశస్తులవి కాగా, ఆగ్నేయ, వాయువ్య ప్రాంతములు చెరుకుపల్లి వంశస్తులవి. ఈ వాయువ్య ప్రాంతములోనే ఈ ప్రాచీన ఆలయము కలదు. చాలకాలము వరకు ఉపేక్షించబడిన ఈ ఆలయ అభివృద్ధికి శివ భక్త పరాయణులైన పమిడిమర్రి, చెరుకుపల్లి వంశస్తులు స్వామివార్లకు అవిచ్ఛిన్నముగా ధూప, దీప, నైవేద్యములు జరిగే విధముగా, అర్చకుల జీవన భృతికి సరిపోవునట్లుగా కొంత భూమిని ఆలయ మాన్యంగా స్వామి వారికి సమర్పించారు. భారద్వాజస గోత్రీకులైన కొమ్మవరపు వంశీయులు అనాదిగా ఆలయ అర్చకులుగా వ్యవహరిస్తున్నారు. శాలివాహన శకం 1880 సం|| (అనగా 1958 సం||)లో అప్పటి ఆలయ ధర్మకర్త అయిన శ్రీ చెరుకుపల్లి వెంకట శివయ్యగారు సత్సంకల్పంతో పూనుకొని పరమ హంస పరివ్రాజకాచార్య శ్రీ బెల్లంకొండ స్వాముల వారు మరియు గుంటూరు జిల్లా చేబ్రోలు వద్దగల కొత్తరెడ్డిపాలెం ఆనందాశ్రమ వాసి శ్రీ కొమ్మరాజు లక్ష్మీ కాంతానంద యోగీ వర్యుల సంయుక్త ఆధ్వర్యంలో 40 దినములు విశేషమైన అర్చనలతో సంప్రోక్షణ కార్యక్రమము నిర్వహించి ఆలయ ప్రశస్తిని ఇనుమడింప చేశారు.",
    inscription_p3: "ఆ సందర్భములోనే కవి సమ్రాట్ శ్రీ విశ్వనాధ సత్యనారాయణ గారు ఆ ఆలయమును సందర్శించి స్వామిని స్తుతిస్తూ 100 పద్యములను రచించి శ్రీశైల మల్లిఖార్జున, శ్రీకాళహస్తి మహాదేవ స్తుతులతో పాటుగా తమ “మధ్యాక్కరలు\" అనే పద్య కావ్యములో పొందుపరిచారు. ఈ శతకములో విశ్వనాధ వారు 'నెకరుకల్ ప్రాంత సిద్ధాబ్జ హేళి\" అనుదానిని మకుటముగా ఉంచారు. ఆ కవివర్యులు స్వామి వారిని ఈ విధముగా స్తుతించారు.",
    inscription_p4: "ఈ కావ్యమునకే వారికి కేంద్ర సాహిత్య అకాడమీ పురస్కారం లభించినది. తదుపరి స్వామి వారి అనుగ్రహముతో అత్యంత ప్రతిష్టాత్మకమైన పద్మభూషణ్, జ్ఞానపీఠ పురస్కారాలను అందుకున్నారనేది లోక విదితమే. ఈ విధముగా విశేషముగా అర్చించబడుతున్న విశ్వేశ్వరుడి కృపా వీక్షణములతో నరసింగపాడు మరియు చుట్టు ప్రక్కల గ్రామములలోని సేద్య పంటలు సిరులు కురిపిస్తున్నాయి. ఈ క్షేత్ర ప్రాంతములో ప్రాకృతికముగా సహజ సిద్ధముగా ఏర్పడిన నీటి బుగ్గ ఉన్నది. దీని నుండి నిరంతరముగా పాతాళ గంగాజలము పైకి ఉబికి వస్తూ ఇక్కడి పైరు పంటల పెరుగుదలకూ, సస్య సౌందర్యానికీ, ధాన్య వైభవానికీ कारणభూతమై ఉండుట పరమేశ్వర విలాసమే! స్వామి వారి మహాత్యమును తెలియజేసే ఎన్నో సంఘటనలు శ్రద్ధాసక్తులైన భక్తులు అనుభవపూర్వకముగా దర్శించారు. శివాలయార్చకులైన శ్రీ కొమ్మవరపు ఈశ్వరయ్య గారు దివ్య దేహముతో ధగధగాయ మానంగా ప్రకాశిస్తున్న మహాముని ఆలయములో స్వామిని అర్చిస్తుండగా చూసి ధన్యులైనారు.",
    inscription_p5: "శ్రీ గోపిశెట్టి నాగయ్య అనే భక్తుడు దేవాలయ శివలింగం మీద తన పడగను ఛత్రములాగా పట్టిన శ్వేత దివ్య సర్పమును దర్శించి ధన్యులైనారు. వారే \"శివ లీలలు\" అనే పేరుతో స్వామి మహాత్యము లను కొనియాడుతూ పాటలు వ్రాసి గానం చేశారు. ఇటువంటి అద్భుతానుభవాలను పొందిన భక్తులు కోకొల్లలుగా ఉన్నారు. ఈ విధముగా భక్తుల శ్రద్ధామయ సేవలతో, వేదవిదులైన అర్చక స్వాముల అభిషేకార్చనలతో శోభాయ మానంగా విరాజిల్లుతున్న ఈ క్షేత్రాన్ని మరింత అభివృద్ధి చేయాలనే సత్సకల్పంతో కొందరు గ్రామ పెద్దలు ఒక సంఘముగా \"శ్రీ అన్నపూర్ణా కాశీ విశ్వేశ్వర దేవస్థాన అభివృద్ధి మండలి\" పేరిట ఏర్పడి ఇతోధికంగా సేవలు అందిస్తున్నారు. వీరి తోడ్పాటుతోనే స్వామివారు అనేక దేవతామూర్తులతో కొలువుదీరి విశేషమైన పూజలు అందుకొంటూ భక్త జనులకు సమస్త శ్రేయస్సులను ప్రసాదిస్తున్నారు.",
    inscription_v1: "శ్రీతమాల శ్యామలింగ! సిద్ధ సంసేవిత లింగ!",
    inscription_v2: "హేతుహాస సనాధ! అన్నపూర్ణా సహిత విశ్వనాధ",
    inscription_v3: "సీతామర ధునీక జాతజూటా! మణి-శశి కిరీట!",
    inscription_v4: "స్ఫీత వియన్మౌళి నెకరుకల్ ప్రాంత సిద్ధాబ్జ హేళి!",
    inscription_sig_date: "ది. 15-11-2024",
    inscription_sig_by: "ఇట్లు",
    inscription_sig_name: "ఆలయ అభివృద్ధి మండలి",
    inscription_photo_lbl1: "శ్రీ కాశీ విశ్వేశ్వర స్వామి గర్భాలయ మూర్తి",
    inscription_photo_lbl2: "శ్రీ అన్నపూర్ణా దేవి గర్భాలయ మూర్తి",
    history_intro: "శాసన మరియు చారిత్రక ఆధారాల ప్రకారం, నరసింగపాడు క్షేత్రానికి పలనాటి యుద్ధ వీరులతోను, ప్రసిద్ధ కవులతోను మరియు దివ్య యోగులతోను విశిష్టమైన అనుబంధం ఉంది. ఈ పవిత్ర ప్రస్థానాన్ని క్రింది కాలక్రమంలో వీక్షించండి.",
    
    timeline_t1: "పలనాటి యుద్ధ వీరుల పూజలు",
    timeline_d1: "శాలివాహన శకం 1099-1100 కాలంలో ప్రసిద్ధ వీరుడు పల్నాటి బ్రహ్మనాయుడు గారు యుద్ధానికి వెళ్లే ముందు ఈ ఆలయంలోనే తన కత్తికి పూజలు చేశారని చారిత్రక గ్రంథాలు చెబుతున్నాయి. ఇక్కడ దర్శించిన వీరులకు విజయం లభిస్తుందని ప్రతీతి.",
    timeline_t2: "ఆలయ పునరుద్ధరణ & సంప్రోక్షణ",
    timeline_d2: "ఆలయ ధర్మకర్త చెరుకుపల్లి వెంకట శివయ్యగారి సంకల్పంతో బెల్లంకొండ యోగి వర్యులు మరియు కొమ్మరాజు లక్ష్మీ కాంతానంద యోగి గారి సంయుక్త ఆధ్వర్యంలో 40 రోజుల పాటు మహా సంప్రోక్షణ కార్యక్రమాలు జరిగి ఆలయ కీర్తి నలుదిశలా వ్యాపించింది.",
    timeline_t3: "విశ్వనాథ వారి పద్యాల సృష్టి",
    timeline_d3: "దేవాలయ వైభవాన్ని కళ్ళారా చూసిన జ్ఞానపీఠ అవార్డు గ్రహీత 'కవిసామ్రాట్' శ్రీ విశ్వనాథ సత్యనారాయణ గారు స్వామివారిని స్తుతిస్తూ 100 మధ్యాక్కర పద్యాలు రచించారు. వీటికి 'నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!' అనే మకుటాన్ని ఇచ్చారు.",
    timeline_t4: "కేంద్ర సాహిత్య అకాడమీ పురస్కారం",
    timeline_d4: "విశ్వనాథ వారు నరసింగపాడు శివునిపై రాసిన పద్యాలతో కూడిన 'విశ్వనాథ మధ్యాక్కరలు' కావ్యానికి ప్రతిష్టాత్మకమైన కేంద్ర సాహిత్య అకాడమీ పురస్కారం లభించింది. ఇది ఆలయ సాహిత్య ప్రతిష్టను జగద్విదితం చేసింది.",
    timeline_t5: "మహా రాజగోపుర ప్రతిష్ట",
    timeline_d5: "పల్నాడు ప్రాంతానికే తలమానికంగా నిలిచే విధంగా ఆలయానికి నూతన రాజగోపురం నిర్మించి ప్రతిష్ఠాపన జరిపారు. శ్రీకాళహస్తి తరహాలో ఇక్కడ జరిగే రాహు-కేతు పూజలు భక్తులకు దోషాలను హరిస్తున్నాయి.",
    
    poems_heading: "విశ్వనాథ సత్యనారాయణ మధ్యాక్కరల సేకరణ",
    poems_search_placeholder: "పద్యం, అనువాదం లేదా కీలక పదం ద్వారా వెతకండి (Search poems...)",
    filter_all: "అన్ని పద్యాలు",
    filter_shiva: "శివ తత్వము",
    filter_annapurna: "అన్నపూర్ణా స్తుతి",
    filter_history: "చరిత్ర & మహిమ",
    ambient_drone_play: "ప్రశాంత ధ్యాన సంగీతం (Start Meditation Drone)",
    ambient_drone_stop: "సంగీతం నిలిపివేయి (Stop Meditation Drone)",
    
    poet_heading: "కవిసామ్రాట్ విశ్వనాథ సత్యనారాయణ",
    poet_name: "విశ్వనాథ సత్యనారాయణ (1895 - 1976)",
    poet_title: "కవిసామ్రాట్ • జ్ఞానపీఠ అవార్డు గ్రహీత",
    poet_tab_intro: "పరిచయం",
    poet_tab_life: "జీవిత విశేషాలు",
    poet_tab_grief: "సాహిత్య శోకం",
    poet_tab_awards: "రచనలు & పురస్కారాలు",
    poet_bio_intro_1: "ఆధునిక తెలుగు సాహిత్యంలో తిరుగులేని దిగ్గజం, తొలి జ్ఞానపీఠ అవార్డు గ్రహీత 'కవిసామ్రాట్' శ్రీ విశ్వనాథ సత్యనారాయణ గారు. ఆయన 20వ శతాబ్దపు మహోన్నత తెలుగు రచయిత. వారి రచనలు కేవలం కవిత్వానికే పరిమితం కాకుండా నవలలు, నాటకాలు, చిన్న కథలు, ప్రసంగాలు మరియు విమర్శనా గ్రంథాలతో తెలుగు సరస్వతీ దేవికి నిరుపమాన సేవలు అందించాయి. వారి ప్రతిభా వ్యుత్పత్తులు చరిత్ర, తత్వశాస్త్రం, మతం, సామాజిక శాస్త్రం, రాజనీతి శాస్త్రం, భాషాశాస్త్రం, మనస్తత్వశాస్త్రం, జ్ఞాన మీమాంస, సౌందర్య శాస్త్రం మరియు ఆధ్యాత్మికత వంటి అనేక రకాల విషయాలపై విస్తరించి ఉన్నాయి.",
    poet_bio_intro_2: "1958లో నరసింగపాడు దేవాలయ సంప్రోక్షణ మహోత్సవాన్ని దర్శించిన ఆయన, అక్కడి ప్రశాంతమైన వాతావరణానికి, పవిత్ర శక్తులకు పులకించిపోయారు. స్వామివారి లీలలను కొనియాడుతూ 'విశ్వనాథ మధ్యాక్కరలు' కావ్యంలో భాగంగా 'నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!' మకుటంతో వ్రాసిన 100 పద్యాలు సాహిత్య రంగంలో అత్యున్నత శిఖరాలనందుకున్నాయి. ఈ మధ్యాక్కర ఛందస్సులోని ప్రతి పద్యం ఎంతో లయాత్మకంగా, పాడుకోవడానికి అనువుగా సాగుతుంది.",
    poet_bio_life_1: "శ్రీ విశ్వనాథ సత్యనారాయణ గారు కృష్ణా జిల్లా నందమూరు గ్రామంలో శోభనాద్రి, పార్వతీదేవి దంపతులకు జన్మించారు. వారి తండ్రి శోభనాద్రి గారు గొప్ప దాత మరియు నందమూరు గ్రామంలో పవిత్రమైన కాశీ విశ్వేశ్వర ఆలయాన్ని నిర్మించిన పరమ శివభక్తులు. విశ్వనాథ వారు తమ విద్యాభ్యాసంలో భాగంగా బందరు (మచిలీపట్నం) జాతీయ కళాశాలలో సుప్రసిద్ధ జంట కవులు 'తిరుపతి వెంకట కవులు' లో ఒకరైన శ్రీ చెళ్ళపిళ్ళ వెంకట శాస్త్రి గారి వద్ద శిష్యరికం చేశారు. గురువుగారి ప్రభావం వారి సాహిత్య వ్యక్తిత్వ రూపకల్పనలో కీలక పాత్ర పోషించింది.",
    poet_bio_life_2: "విశ్వనాథ సత్యనారాయణ గారు దేశ స్వాతంత్రోద్యమంలో కూడా చురుగ్గా పాల్గొన్నారు. గాంధీజీ పిలుపు మేరకు 1921లో సహాయ నిరాకరణోద్యమంలో పాల్గొని కొన్నాళ్ళు కళాశాల విద్యను ఆపివేశారు, ఆ తర్వాత బి.ఎ. పూర్తి చేశారు. ఆయన అధ్యాపకుడిగా గుంటూరులోని ఎ.సి. కాలేజీ (A.C. College) లోనూ, విజయవాడలోని ఎస్.ఆర్.ఆర్. కాలేజీ (S.R.R. College) లోనూ, మరియు కరీంనగర్ ప్రభుత్వ కళాశాల (Government College) లోనూ లెక్చరర్ గా విభిన్న సేవలు అందించారు. ఎందరో విద్యార్థులను ఉత్తమ పౌరులుగా, సాహిత్య ప్రియులుగా తీర్చిదిద్దారు.",
    poet_bio_grief_1: "విశ్వనాథ వారి జీవితంలో అత్యంత విషాదకరమైన ఘట్టం వారి ప్రథమ భార్య వరలక్ష్మి గారి అకాల మరణం. ఆమె 1931-1932 కాలంలో పరమపదించారు. ఈ ఘోర వియోగం ఆయనను తీవ్ర మానసిక క్షోభకు గురిచేసింది. ఆ అపరిమితమైన దుఃఖం నుండే తెలుగు సాహిత్యంలో అద్భుతమైన కరుణ రసాత్మక ప్రలాప కావ్యమైన 'వరలక్ష్మి త్రిశతి' ఉద్భవించింది. భార్యా వియోగ శోకంతో కుమిలిపోతూ ఆయన వ్రాసిన పద్యాలు భక్తుల మరియు సాహిత్య ప్రేమికుల హృదయాలను ద్రవింపజేస్తాయి.",
    poet_bio_grief_2: "ఆమె మరణంతో కలిగిన ఆవేదన విశ్వనాథ వారి సుప్రసిద్ధ నవల 'వేయి పడగలు' లో 'అరుంధతి' పాత్ర సృష్టికి కారణమైంది. అరుంధతి పాత్ర రూపంలో ఆయన తన భార్య వరలక్ష్మి గారినే అమరురాలిగా నిలిపారు. అంతేకాకుండా, వారి మహోన్నత గ్రంథమైన 'రామాయణ కల్పవృక్షం' లోని అనేక కరుణ రస సన్నివేశాలను ఆయన తన భార్యను తలుచుకుంటూ, కళ్ళ వెంట నీరు కారుస్తూ, తీవ్రమైన బాధతో రచించారని ఆప్తులు చెబుతారు. ఈ విధంగా వారి వ్యక్తిగత జీవితంలోని విషాదం తెలుగు సాహిత్యానికి అమూల్యమైన కావ్య సుమాలను అందించింది.",
    poet_bio_awards_1: "శ్రీ విశ్వనాథ సత్యనారాయణ గారి సాహిత్య సేవలకు గాను భారతదేశంలోనే అత్యున్నత పురస్కారాలు లభించాయి. 1962 లో 'విశ్వనాథ మధ్యాక్కరలు' కావ్యానికి కేంద్ర సాహిత్య అకాడమీ అవార్డు లభించింది. ఆ తర్వాత 1970లో వారి సుప్రసిద్ధ కావ్యం 'రామాయణ కల్పవృక్షము' నకు గాను భారతదేశంలో అత్యంత ప్రతిష్టాత్మకమైన జ్ఞానపీఠ అవార్డు లభించింది. ఈ గౌరవాన్ని అందుకున్న తొలి తెలుగు కవి ఆయనే కావడం విశేషం. భారత ప్రభుత్వం ఆయనను పద్మభూషణ్ బిరుదుతో సత్కరించింది.",
    poet_bio_awards_2: "వారి ప్రఖ్యాత నవల 'వేయి పడగలు' తెలుగు నవలా సాహిత్యంలో ఒక మైలురాయి. ఈ నవల యొక్క ప్రాధాన్యతను గుర్తించిన భారతదేశ మాజీ ప్రధానమంత్రి మరియు బహుభాషా కోవిదులైన శ్రీ పి.వి. నరసింహారావు గారు దీనిని హిందీ లోకి 'సహస్రఫణ్' (Sahasraphan) అనే పేరుతో అనువదించి, జాతీయ స్థాయిలో విశ్వనాథ వారి ఖ్యాతిని చాటిచెప్పారు. నరసింగపాడు శివునిపై వారు రాసిన 100 మధ్యాక్కర పద్యాలు ఇక్కడి ఆలయ ప్రాచీన శాసనంలో కూడా భద్రపరచబడి, నిత్యం భక్తుల నాలుకలపై శోభిల్లుతున్నాయి",
    award1_title: "జ్ఞానపీఠ పురస్కారం",
    award1_desc: "తొలి తెలుగు గ్రహీత (1970)",
    award2_title: "కేంద్ర సాహిత్య అకాడమీ",
    award2_desc: "మధ్యాక్కరలకు లభించిన సత్కారం (1962)",
    
        gallery_heading: "ఆలయ చిత్రమాలిక",
    gal1_title: "భక్త జన సమూహం",
    gal1_desc: "ఆలయంలో జరుగుతున్న ప్రత్యేక ధార్మిక కార్యక్రమంలో పాల్గొంటున్న భక్తులు.",
    gal2_title: "శ్రీ అన్నపూర్ణా దేవి అలంకారం",
    gal2_desc: "ఆలయంలో పువ్వులు, పండ్లతో అలంకరించిన శ్రీ అన్నపూర్ణా దేవి విశేష అలంకరణ.",
    gal3_title: "రాహు-కేతు పూజా దృశ్యం",
    gal3_desc: "పవిత్ర వృక్షం సమీపంలో రాహు-కేతు దోష నివారణ పూజ — భక్తులు దీపాలతో పూజ చేస్తున్న దృశ్యం.",
    gal4_title: "ఉత్సవ వేళ ఆలయ ప్రవేశ ద్వారం",
    gal4_desc: "వార్షిక మహోత్సవం సందర్భంగా కాంతుల వెలుతురులో అలంకరించబడిన ఆలయ ప్రవేశ ద్వారం.",
    gal5_title: "ఆలయ ఉపరి దృశ్యం",
    gal5_desc: "ఆలయ శిఖరం మీది నుండి కనిపించే ఆలయ ప్రాంగణం, మండపాలు మరియు దూరంగా పచ్చని పంట పొలాలు.",
    gal6_title: "పుష్కరిణి — సోపాన దృశ్యం",
    gal6_desc: "ఆలయ పుష్కరిణి మధ్యలో శివలింగ విగ్రహంతో సోపానాల నిర్మాణ వైభవం.",
    gal7_title: "మహా రాజగోపురం శిల్ప సంపద",
    gal7_desc: "ఆలయ రాజగోపురం మీది రంగురంగుల దేవతా శిల్పాలు — నైపుణ్యమైన హస్తకళా నిదర్శనం.",
    gal8_title: "నరసింగపాడు ప్రకృతి సౌందర్యం",
    gal8_desc: "పచ్చని పంట పొలాలు, కొబ్బరి తోటలు మరియు నల్లమల కొండలు నేపథ్యంగా నరసింగపాడు గ్రామం.",
    gal9_title: "పుష్కరిణిలో శివ విగ్రహం",
    gal9_desc: "వర్షాల తర్వాత నీటితో నిండిన పుష్కరిణిలో శివమూర్తి విగ్రహం — పాతాళ గంగాజల సౌందర్యం.",
    gal10_title: "కవిసమ్రాట్ విశ్వనాథ సత్యనారాయణ",
    gal10_desc: "ఆలయాన్ని దర్శించి నెకరికల్లు శతకం రచించిన తొలి తెలుగు జ్ఞానపీఠ అవార్డు గ్రహీత విశ్వనాథ సత్యనారాయణ చిత్రపటం.",
    gal11_title: "తెప్పోత్సవ వేడుక",
    gal11_desc: "పవిత్ర పుష్కరిణిలో కార్తీక మాస ముగింపు వేళ జరుపబడిన స్వామివారి తెప్పోత్సవ వైభవం.",
    gal12_title: "దివ్య తెప్పోత్సవ కాంతులు",
    gal12_desc: "హంస వాహనంపై వెలిగిపోతున్న స్వామివారి కల్యాణ మూర్తులు - విద్యుత్ దీపాల అలంకరణ.",
    gal13_title: "నరసింగపాడు ఆలయ రాజగోపురం",
    gal13_desc: "శోభాయమానమైన ప్రవేశ గోపురం మరియు దేదీప్యమానంగా వెలిగిపోతున్న ఆలయ ప్రాంగణం.",
    gal14_title: "ఆలయ పుష్కరిణి మెట్లు",
    gal14_desc: "నరసింగపాడు ఆలయంలో నిర్మించబడిన పవిత్ర పుష్కరిణి సోపానాలు మరియు శివ ప్రతిమ.",
    gal15_title: "పవిత్ర పుష్కరిణి నీరు",
    gal15_desc: "భక్తుల పాపాలను హరించే గంగాజల రూప పుష్కరిణి జలాల విహంగ వీక్షణం.",
    gal16_title: "కోనేటి గట్టు మరియు పరిసరాలు",
    gal16_desc: "ఆలయ కోనేరు మరియు దాని చుట్టూ నిర్మించిన సుందరమైన పరిసరాల దృశ్యం.",
    gal17_title: "నిండుగా ఉన్న పుష్కరిణి",
    gal17_desc: "జలకళతో ఉట్టిపడుతూ ప్రశాంతతను పంచే ఆలయ పవిత్ర కోనేరు.",
    gal18_title: "ఆలయ ప్రధాన అర్చకులు",
    gal18_desc: "కొమ్మవరపు పవన్ కుమార్ శర్మ గారు గర్భాలయంలో ప్రత్యేక పూజా కార్యక్రమం నిర్వహిస్తున్న దృశ్యం.",
    gal19_title: "శూలధారి శివలింగ అలంకరణ",
    gal19_desc: "ఆలయంలో త్రిశూలంతో కూడిన శివలింగ ప్రత్యేక పర్వదిన అలంకారం.",
    gal20_title: "ఆలయ వేద ఆశీర్వచనం",
    gal20_desc: "ప్రత్యేక పూజలు మరియు హోమాల్లో పాల్గొన్న భక్తులకు వేద పండితులు ఆశీర్వచనం ఇస్తున్న దృశ్యం.",
    gal21_title: "గోపూజ మరియు గోమాత విశిష్టత",
    gal21_desc: "ఆలయ గోశాలలో నిర్వహించిన గోపూజ మహోత్సవం - గోమాతకు హారతి సమర్పిస్తున్న దృశ్యం.",
    gal22_title: "భక్తుల సామూహిక పూజలు",
    gal22_desc: "పండుగ దినాల్లో ఆలయ ప్రాంగణంలో భక్తులు సామూహికంగా కూర్చుని పూజల్లో నిమగ్నమైన దృశ్యం.",
    gal23_title: "అన్నప్రసాద వితరణ",
    gal23_desc: "నిత్య అన్నదాన పథకంలో భాగంగా భక్తులకు పవిత్ర ప్రసాద వితరణ జరుగుతున్న దృశ్యం.",
    gal24_title: "ఆలయ కళ్యాణ వేదిక",
    gal24_desc: "కల్యాణోత్సవాలు మరియు సంస్కృతి కార్యక్రమాలకు వేదికైన ఆలయ మండపం.",
    gal25_title: "అభిషేక మూర్తి కాశీ విశ్వేశ్వరుడు",
    gal25_desc: "గర్భాలయంలో పంచామృతాలతో అభిషేకించబడుతున్న శివలింగ స్వరూపం.",
    gal26_title: "ధ్వజస్తంభ ప్రతిష్ఠాపన",
    gal26_desc: "ఆలయంలో ప్రతిష్ఠించబడిన పవిత్ర ధ్వజస్తంభం మరియు నంది విగ్రహం.",
    gal27_title: "నిత్య దీపాల కాంతులు",
    gal27_desc: "ప్రదోష కాలంలో ఆలయం చుట్టూ భక్తులు వెలిగించిన దీపమాలలు - దీపారాధన శోభ.",
    gal28_title: "బిల్వదళాలతో శివలింగం",
    gal28_desc: "బిల్వ పత్రాలు మరియు త్రిశూలంతో శాస్త్రోక్తంగా అలంకరించబడిన గర్భాలయ లింగం.",
    gal29_title: "కనువిందు చేసే ఆలయ అలంకరణ",
    gal29_desc: "వార్షిక బ్రహ్మోత్సవాలలో వివిధ వర్ణాల పుష్పాలతో సర్వాంగ సుందరంగా అలంకరించిన ఆలయం.",
    gal30_title: "ఆలయ గోపూజ మహోత్సవం",
    gal30_desc: "పండుగ దినాన గోమాతకు మరియు దూడకు పసుపు కుంకుమలతో శాస్త్రోక్తంగా పూజ జరిపిన దృశ్యం.",
    gal31_title: "ఉత్సవాల స్వాగత తోరణం",
    gal31_desc: "ఆలయ ప్రధాన వీధిలో భక్తులకు స్వాగతం పలుకుతున్న అలంకృత విద్యుత్ తోరణం.",
    
    festivals_heading: "ప్రధాన పండుగలు & ఉత్సవాలు",
    fest1_tag: "మహా పండుగ",
    fest1_title: "మహా శివరాత్రి ఉత్సవాలు",
    fest1_desc: "శివరాత్రి పర్వదినం నాడు ఆలయంలో విశేష రుద్రాభిషేకాలు, బిల్వార్చనలు నిర్వహిస్తారు. అర్ధరాత్రి మహాలింగోద్భవ కాలంలో స్వామివారికి జరిగే పూజలు భక్తులకు ముక్తిని ప్రసాదిస్తాయి. మరుసటి రోజు రథోత్సవం అత్యంత వైభవంగా సాగుతుంది.",
    fest2_tag: "కార్తీక మాసం",
    fest2_title: "కార్తీక అమావాస్య అన్నాభిషేకం",
    fest2_desc: "కార్తీక మాసము ముగింపు వేళ అమావాస్య రోజున స్వామివారికి 121 కేజీల అన్నంతో 'అన్నాభిషేకం' జరుపుతారు. రాత్రి సమయంలో కోనేటిలో హంస వాహనంపై భక్తులు జరిపే తెప్పోత్సవం కనులవిందుగా ఉంటుంది. ఈ వేడుకకు దాదాపు 20,000 మంది భక్తులు హాజరవుతారు.",
    fest3_tag: "నిత్య సేవ",
    fest3_title: "అష్టోత్తర శత కలశాభిషేకం",
    fest3_desc: "మాస శివరాత్రి మరియు ప్రదోష కాల పూజల నాడు ఆవు పాలు, పెరుగు, పవిత్ర జలాలతో కూడిన 108 కలశాలతో స్వామివారికి అభిషేకాలు నిర్వహిస్తారు. ఈ అభిషేక తీర్థాన్ని స్వీకరిస్తే రోగ భయాలు నశిస్తాయని నమ్ముతారు.",
    
    rituals_heading: "నిత్య సేవలు & విశేష పూజలు",
    rituals_tab_daily: "నిత్య సేవలు",
    rituals_tab_special: "విశేష పూజలు",
    rituals_tab_annual: "వార్షిక ఉత్సవాలు",
    ritual_daily1_title: "రుద్రవారాభిషేకాలు",
    ritual_daily1_desc: "ప్రతిరోజు స్వామివారికి వేద మంత్రాలతో శాస్త్రోక్తంగా జరిగే పవిత్ర అభిషేక సేవ.",
    ritual_daily2_title: "కుంకుమార్చన",
    ritual_daily2_desc: "అమ్మవారైన శ్రీ అన్నపూర్ణా దేవికి భక్తులచే నిత్యం జరుపబడే ప్రత్యేక కుంకుమ అర్చన సేవ.",
    ritual_daily3_title: "పంచహారతులు",
    ritual_daily3_desc: "సాయంత్రం వేళ స్వామివారికి పంచదీప హారతులతో జరిగే దివ్య సేవ — ఆకాశమే మండపమా అనిపించే దృశ్యం.",
    ritual_special1_title: "మాస శివరాత్రి",
    ritual_special1_desc: "మహన్యాస పూర్వక ఏకాదశి రుద్రాభిషేకం, చండీ హోమం. సాయంత్రం 5:30 తర్వాత 1008 ఆవు నెయ్యి దీపాలతో సహస్ర దీపాలంకరణ మరియు 500 మందికి అన్నప్రసాద వితరణ.",
    ritual_special2_title: "పౌర్ణమి చండీ హోమం",
    ritual_special2_desc: "ప్రతి నెల పౌర్ణమి రోజున అమ్మవారి ప్రీతి కోసం ప్రత్యేక చండీ హోమం నిర్వహిస్తారు.",
    ritual_special3_title: "ఆర్ద్ర నక్షత్ర అభిషేకం",
    ritual_special3_desc: "స్వామివారి జన్మ నక్షత్రం రోజున మహన్యాస పూర్వక ఏకాదశి రుద్రాభిషేకాలు జరుపుతారు.",
    ritual_special4_title: "దోష నివారణ పూజలు",
    ritual_special4_desc: "ప్రతి ఆదివారం రాహు కేతువుల పూజలు విశేషంగా జరుగుతాయి. కాలసర్ప దోష నివారణ కోసం భక్తులు ఆలయానికి తరలివస్తారు.",
    ritual_special5_title: "సంతాన ప్రాప్తి",
    ritual_special5_desc: "సంతానం లేని వారు 5 సోమవారాలు స్వామివారికి ప్రదక్షిణలు చేస్తే పుత్ర సంతానం కలుగుతుందని భక్తుల ప్రగాఢ విశ్వాసం.",
    ritual_annual1_title: "కార్తీక మాస బ్రహ్మోత్సవాలు",
    ritual_annual1_desc: "నెలంతా ఏకాదశి రుద్రాభిషేకాలు. చివరి 3 రోజులు లక్ష బిల్వార్చన, 108 కలశాభిషేకం, మరియు అలంకరించిన కళ్యాణ మూర్తుల గ్రామోత్సవం.",
    ritual_annual2_title: "కార్తీక అమావాస్య అన్నాభిషేకం",
    ritual_annual2_desc: "121 కేజీల అన్నంతో స్వామివారికి అన్నాభిషేకం, లక్ష కుంకుమార్చన మరియు కోనేటిలో హంస వాహనంపై దివ్య తెప్పోత్సవం — 20,000+ భక్తులు పాల్గొంటారు.",
    ritual_annual3_title: "దేవి శరన్నవరాత్రులు",
    ritual_annual3_desc: "త్రికాల కుంకుమార్చనలు, చండీ పారాయణ, బాల పూజ మరియు సువాసినీ పూజలు.",
    committee_heading: "దేవస్థాన కమిటీ",
    committee_trustees_title: "ధర్మకర్తలు & అధికారులు",
    committee_members_title: "కార్యవర్గ సభ్యులు",
    committee_motto: "ధర్మో రక్షతి రక్షితః",
    contact_heading: "దర్శన సమాచారం & మ్యాప్",
    contact_section_title: "సంప్రదింపు & దర్శన సమాచారం",
    timings_title: "దర్శన వేళలు",
    timings_desc: "ఉదయం: 6:00 - 12:00<br>సాయంత్రం: 4:00 - 8:30",
    gmaps_bar_title: "గూగుల్ మ్యాప్స్‌లో దారి తెలుసుకోండి",
    address_title: "ఆలయ చిరునామా",
    address_desc: "శ్రీ అన్నపూర్ణా సమేత కాశీ విశ్వేశ్వర స్వామి దేవస్థానం,<br>నరసింగపాడు గ్రామం, నకరికల్లు మండలం,<br>పల్నాడు జిల్లా, ఆంధ్రప్రదేశ్ - 522615.",
    contact_title: "ఫోన్ నంబర్లు",
    map_header: "నరసింగపాడు శివాలయం స్థానము",
    map_desc: "నకరికల్లు నుండి 5 కి.మీ దూరం, గుంటూరు-కర్నూలు రహదారికి సమీపంలో.",
    map_btn: "గూగుల్ మ్యాప్స్ లో చూడండి",
    
    
    footer_desc: "నరసింగపాడు క్షేత్రము భక్తుల కష్టాలను హరించే పరమ పవిత్ర శైవధామం. కవి సమ్రాట్ విశ్వనాథ సత్యనారాయణ గారు పూజించిన ఈ 'పలనాటి కాశీ' వైభవాన్ని పద్యాల ద్వారా ప్రపంచానికి చాటిచెప్పడమే ఈ అంతర్జాల వేదిక యొక్క ముఖ్య ఉద్దేశ్యం.",
    footer_quick_links: "త్వరిత లింకులు",
    footer_contact_title: "ఆలయ కమిటీ ఆఫీస్",
    footer_address: "నరసింగపాడు గ్రామం, నకరికల్లు మండలం, పల్నాడు జిల్లా, ఆంధ్రప్రదేశ్.",
    footer_copyright: "© 2026 శ్రీ అన్నపూర్ణా సమేత కాశీ విశ్వేశ్వర స్వామి దేవస్థాన ట్రస్ట్. సర్వ హక్కులు ప్రత్యేకించబడినవి.",
    
    tab_verse: "పద్యం (Verse)",
    tab_meaning: "ప్రతిపదార్థం & భావం (Meaning)",
    tab_translation: "ఆంగ్ల అనువాదం (Translation)",
    play_audio: "పద్య పఠనం (Listen)",
    pause_audio: "ఆపండి (Pause)",
    speed: "వేగం (Speed)"
  },
  en: {
    logo_title: "Sri Annapurna Sameyta Kasi Visweswara Swami Temple",
    logo_location: "Narasingapadu, Palnadu District",
    nav_home: "Home",
    nav_history: "History",
    nav_poems: "Poems Archive",
    nav_poet: "Poet Profile",
    nav_gallery: "Gallery",
    nav_festivals: "Festivals",
    nav_rituals: "Daily Sevas",
    nav_committee: "Committee",
    nav_contact: "Contact",
    poet_guest_badge: '<i class="fa-solid fa-crown" style="margin-right: 6px; color: #ffeb3b;"></i>GUEST OF HONOUR • Eternal Literary Tribute by Devasthanam',
    flower_shower_btn: "🌸 Shower Flowers Tribute",
    
    hero_subtitle: "OM NAMAH SHIVAYA • THE SACRED ABODE",
    hero_title: "Sri Annapurna Sameyta Kasi Visweswara Swami Temple",
    hero_desc: "The divine shrine of Siddha Purushas (sages), glorified by the literary nectar of Viswanatha Satyanarayana's 1960 'Madhyaakkara' verses - Narasingapadu.",
    hero_btn_poems: "Explore Poems Collection",
    hero_btn_history: "Read Temple History",
    hero_scroll: "Scroll Down",
    
    intro_heading: "The Glory of 'Palnati Kasi'",
    intro_p1: "In the sacred land of Palnadu, within Nakarikallu Mandal, lies the village of Narasingapadu, where Lord Kasi Visweswara Swamy resides alongside Mother Annapurna Devi. This shrine is extremely ancient, worshipped for ages by subtle-bodied Siddhas (sages). The detailed stone sculptures of Nagakanya behind the sanctum and ancient Naga deities in the northwest are witnesses to its great antiquity.",
    intro_p2: "Local legend strongly holds that every night, realised sages and celestial siddhas visit the temple in their light-bodies (subtle forms) to perform abhishekam of the Shiva Lingam with holy water. Numerous devotees over generations have witnessed these divine manifestations and received blessings.",
    feat1_title: "Subterranean Patala Ganga",
    feat1_desc: "A wonder of the Goddess. Water continuously bubbles up from the ground without any pump, feeding the nearby fields.",
    feat2_title: "South-Facing Annapurna",
    feat2_desc: "The Goddess faces south, gazing over the village, ensuring bumper harvests, prosperity, and that no one in this region ever goes hungry.",
    
    history_heading: "Temple History & Sacred Lore",
    inscription_badge: "📜 Temple Stone Inscription • Temple Development Committee • Date: 15-11-2024",
    inscription_title: "History & Sacred Significance of Sri Annapurna Sameyta Kasi Visweswara Swamy Temple, Narasingapadu",
    inscription_p1: "In the sacred land of Palnadu, within Nakarikallu Mandal, lies the village of Narasingapadu, where Lord Kasi Visweswara Swamy resides alongside Mother Annapurna Devi. This shrine is extremely ancient, worshipped for ages by subtle-bodied Siddhas (sages). The detailed stone sculptures of Nagakanya behind the sanctum and ancient Naga deities in the northwest are witnesses to its great antiquity. Realised sages and celestial siddhas visit the temple in their light-bodies (subtle forms) every night to perform abhishekam of the Shiva Lingam with holy water, dedicating the merit of their worship for the welfare of the world. Numerous devotees over generations have witnessed these divine manifestations. It is no coincidence that Lord Shiva is worshipped here while Lord Narasimha resides nearby in Tripurantakam; it signifies that there is no difference between Shiva and Keshava.",
    inscription_p2: "According to historical records from Salivahana Shakam 1099–1100 (circa 1178 CE), this shrine existed long before the historic Palnadu Battle, and the legendary warriors are said to have worshipped their weapons here for victory. In those times, visiting Kasi in North India was extremely difficult and expensive, so many seekers of liberation worshipped here and attained salvation, earning the shrine the name 'Palnati Kasi'. Historically, the forests around Narasingapadu, Gullapalli, and Guttikonda were known as Abhayaranya. The lands of this ancient temple in Narasingapadu belonged to the Pamidimarri and Cherukupalli families. To support daily rituals and the livelihood of the priests, these families donated land to the temple. The Kommarapu family of Bharadwaja Gotra has served as traditional priests since time immemorial. In 1958 (Shakam 1880), the temple trustee Cherukupalli Venkata Sivayya initiated a grand 40-day re-consecration ceremony (Maha Samprokshana) under the guidance of Bellamkonda Yogi Swamulu and Kommaraju Lakshmikanthananda Yogi, enhancing the temple's glory.",
    inscription_p3: "During this auspicious occasion, the Jnanpith laureate 'Kavi Samrat' Sri Viswanatha Satyanarayana visited the shrine and composed 100 verses praising the Lord. These were included in his famous poetic work 'Madhyakkaralu' alongside praises for Srisailam and Sri Kalahasti. The refrain (Makutamu) used for these verses was 'Nekarikallu Prantha Siddhabjaheli!'. He praised the Lord with the following verse:",
    inscription_p4: "For this poetic masterpiece, he was awarded the prestigious national Sahitya Akademi Award, and subsequently received the Padma Bhushan and Jnanpith Awards. Blessed by Lord Visweswara, the harvests in Narasingapadu and surrounding villages are always bountiful. A natural underground spring continuously bubbles up holy water (Patala Ganga), feeding the crops and beautifying the landscape. Devotees have experienced many miracles here; the priest Kommarapu Eswariah once witnessed a glowing sage worshipping the Lord in the sanctum.",
    inscription_p5: "Another devotee, Gopisetti Nagaiah, was blessed to see a divine white serpent spread its hood like an umbrella over the Shiva Lingam. Inspired, he composed and sang songs titled 'Shiva Leelalu'. Countless devotees have shared similar miraculous experiences. To further develop this sacred shrine, village elders formed the 'Sri Annapurna Kasi Visweswara Devasthanam Development Committee'. Under their care, the temple continues to flourish, with various deities installed, bringing blessings and prosperity to all.",
    inscription_v1: "O Dark-hued Shiva, beautiful like the Tamala tree! O Lingam worshipped by the Sages!",
    inscription_v2: "O Protector of the helpless! O Lord Viswanatha along with Mother Annapurna!",
    inscription_v3: "Whose matted locks hold the pure Ganga! O Lord crowned with the moon and gems!",
    inscription_v4: "O Lord of Nekarukallu who smiles upon the Sages!",
    inscription_sig_date: "Date: 15-11-2024",
    inscription_sig_by: "By,",
    inscription_sig_name: "Temple Development Committee",
    inscription_photo_lbl1: "Sri Kasi Visweswara Swamy Garbhagudi Deity",
    inscription_photo_lbl2: "Sri Annapurna Devi Garbhagudi Deity",
    history_intro: "Historical inscriptions and local legends link Narasingapadu with the epic Palnadu Battle warriors, great medieval poets, and divine yogis. Explore the sacred timeline below.",
    
    timeline_t1: "Worship by Palnadu Warriors",
    timeline_d1: "During 1178 CE (Salivahana Shakam 1099-1100), the legendary general Palnati Brahmanaidu worshipped his sacred sword at this temple before heading to the battlefield, starting the tradition of victory blessings.",
    timeline_t2: "Re-consecration & Kumbhabhishekam",
    timeline_d2: "Led by the temple trustee Cherukupalli Venkata Sivayya, with great yogis like Bellamkonda Swamulu and Kommaraju Lakshmikanthananda Yogi, a grand 40-day re-consecration was held to revive the temple's spiritual fields.",
    timeline_t3: "Creation of Viswanatha's Verses",
    timeline_d3: "Enchanted by the temple's spiritual fields during his visit, Jnanpith recipient 'Kavi Samrat' Viswanatha Satyanarayana composed a centum (100 verses) in the classical 'Madhyaakkara' meter, with the refrain 'Nekarikallu Prantha Siddhabjaheli!'.",
    timeline_t4: "Sahitya Akademi Recognition",
    timeline_d4: "His collection 'Viswanatha Madhyakkaralu', which included the Narasingapadu verses, was awarded the national Sahitya Akademi Award in 1962, cementing the temple's fame in modern Indian literature.",
    timeline_t5: "Consecration of the Rajagopuram",
    timeline_d5: "A grand and tall South Indian Rajagopuram was constructed in 2009, becoming a landmark of Palnadu. Rahu-Ketu and planetary dosha rectifications are conducted here in Sri Kalahasti style.",
    
    poems_heading: "Viswanatha Satyanarayana's Madhyaakkara Archive",
    poems_search_placeholder: "Search poems by words, translations, or keywords...",
    filter_all: "All Verses",
    filter_shiva: "Shiva Devotion",
    filter_annapurna: "Annapurna Praise",
    filter_history: "History & Myth",
    ambient_drone_play: "Start Meditation Drone",
    ambient_drone_stop: "Stop Meditation Drone",
    
    poet_heading: "Kavi Samrat Viswanatha Satyanarayana",
    poet_name: "Viswanatha Satyanarayana (1895 - 1976)",
    poet_title: "Kavi Samrat • Jnanpith Laureate",
    poet_tab_intro: "Introduction",
    poet_tab_life: "Life & Career",
    poet_tab_grief: "Spouse Tribute & Grief",
    poet_tab_awards: "Works & Awards",
    poet_bio_intro_1: "Sri Viswanatha Satyanarayana (September 10, 1895 - October 18, 1976) was a towering titan of 20th-century Telugu literature and the first Telugu writer to receive the prestigious Jnanpith Award. Universally acclaimed as 'Kavi Samrat' (Emperor of Poets), his vast body of work spans poetry, novels, drama, short stories, and essays. His writings encompass diverse realms of human knowledge, including history, philosophy, religion, sociology, political science, linguistics, psychology, consciousness studies, epistemology, aesthetics, and spirituality.",
    poet_bio_intro_2: "Upon visiting the sacred Narasingapadu temple in 1958 during its consecration, he felt a powerful divine presence. Inspired, he composed 100 musical verses for the temple in the complex, rhythmic 'Madhyaakkara' meter, published as the Nekarikallu Satakam within the award-winning 'Viswanatha Madhyakkaralu'. The strict metrical rules give these poems a unique, chant-like rhythm.",
    poet_bio_life_1: "Born in Nandamuru to Sobhanadri and Parvathi, Viswanatha grew up in a deeply spiritual household. His father, Sobhanadri, was a devout Saivite who constructed the holy Kasi Visweswara temple in their native village of Nandamuru. Viswanatha pursued his higher education at the National College in Bandar (Machilipatnam), where he studied under the legendary Telugu poet-duo 'Tirupati Venkata Kavulu' (specifically Chellapilla Venkata Sastri). This mentorship laid the foundation of his unmatched literary genius.",
    poet_bio_life_2: "Viswanatha was also an active participant in the Indian freedom struggle. Answering Mahatma Gandhi's call, he temporarily paused his college education in 1921 to join the Non-Cooperation Movement, later graduating with a B.A. Over his long career, he worked as a lecturer in Telugu literature at AC College (Guntur), SRR College (Vijayawada), and the Government College (Karimnagar), inspiring generations of students.",
    poet_bio_grief_1: "The most profound tragedy in Viswanatha's life was the untimely demise of his first wife, Varalaxmi, in 1931-1932. Devastated by this personal loss, he channelled his immense grief into creating 'Varalaxmi Trisati', a deeply moving elegiac poem in Telugu literature dedicated to her memory. His verses, written in the throes of heartbreak, reflect the raw intensity of his sorrow.",
    poet_bio_grief_2: "His grief also immortalized Varalaxmi in his landmark novel 'Veyi Padagalu' through the character 'Arundhati', who represents her grace and virtues. Similarly, close associates recalled that while writing the tragic episodes of his epic 'Ramayana Kalpavruksham', Viswanatha wept continuously, transferring his personal sorrow onto the palm leaves. His personal grief thus birthed some of the most emotionally resonant passages in classical Telugu literature.",
    poet_bio_awards_1: "Viswanatha Satyanarayana was decorated with India's highest literary honors. In 1962, he received the Central Sahitya Akademi Award for 'Viswanatha Madhyakkaralu'. In 1970, his epic masterpiece 'Ramayana Kalpavrukshamu' earned him the prestigious Jnanpith Award, making him the first Telugu writer to achieve this honor. He was also honored by the Government of India with the Padma Bhushan in 1971.",
    poet_bio_awards_2: "His monumental novel 'Veyi Padagalu' (Thousand Hoods) is a masterpiece of modern Indian fiction. Recognizing its genius, the late Prime Minister of India and polyglot scholar, Sri P.V. Narasimha Rao, translated it into Hindi as 'Sahasraphan', introducing Viswanatha's genius to a national audience. The 100 'Madhyaakkara' verses he composed for the Narasingapadu Shiva temple are preserved on the temple's stone inscriptions and continue to inspire visitors.",
    award1_title: "Jnanpith Award",
    award1_desc: "First Telugu Recipient (1970)",
    award2_title: "Sahitya Akademi Award",
    award2_desc: "Bestowed upon Madhyakkaralu (1962)",
    
        gallery_heading: "Temple Photo Gallery",
    gal1_title: "Devotees' Congregation",
    gal1_desc: "Hundreds of devotees gathered for a special religious programme held in the temple premises.",
    gal2_title: "Sri Annapurna Devi Alankaram",
    gal2_desc: "Sri Annapurna Devi beautifully adorned with fruits and flowers — a stunning festive decoration.",
    gal3_title: "Rahu-Ketu Dosha Puja",
    gal3_desc: "Devotees performing the Rahu-Ketu dosha nivarana puja with oil lamps around the sacred ancient tree.",
    gal4_title: "Temple Entrance During Festival",
    gal4_desc: "The temple entrance gate illuminated with colorful lights during a grand annual festival night.",
    gal5_title: "Aerial View of Temple Compound",
    gal5_desc: "A top-angle view of the temple's mandapams and compound with lush green agricultural fields in the distance.",
    gal6_title: "Pushkarini — Step-well View",
    gal6_desc: "An aerial view of the sacred temple tank (Pushkarini) with its ornate stepped walls and a Shiva idol at the center.",
    gal7_title: "Rajagopuram Sculptural Detail",
    gal7_desc: "Colorful deity sculptures on the grand Rajagopuram (entrance tower) — traditional Andhra craftsmanship.",
    gal8_title: "Narasingapadu Village Landscape",
    gal8_desc: "Green paddy fields, coconut groves, and the Nallamala hills forming a serene backdrop to the sacred village.",
    gal9_title: "Shiva Idol in Filled Pushkarini",
    gal9_desc: "Lord Shiva idol standing in the rainwater-filled Pushkarini — the visible grace of Patala Ganga.",
    gal10_title: "Kavi Samrat Viswanatha Satyanarayana",
    gal10_desc: "Sketch of the first Telugu Jnanpith Award recipient who visited the temple and composed the Nekarikallu Satakam.",
    gal11_title: "Teppotsavam Celebration",
    gal11_desc: "Lord's divine float festival celebrated in the temple tank (Pushkarini) during Karthika Masam.",
    gal12_title: "Divine Light of Teppotsavam",
    gal12_desc: "Beautifully illuminated float carrying the deities during the holy float festival.",
    gal13_title: "Rajagopuram View",
    gal13_desc: "A beautiful and clear view of the temple's entrance tower (Rajagopuram).",
    gal14_title: "Pushkarini Steps",
    gal14_desc: "Steps of the sacred temple pond where devotees take a holy dip.",
    gal15_title: "Holy Water of Pushkarini",
    gal15_desc: "Overhead view of the sacred water body within the temple premises.",
    gal16_title: "Koneru Bank and Compound",
    gal16_desc: "The scenic surroundings of the temple's sacred water tank.",
    gal17_title: "Fully Water-filled Pond",
    gal17_desc: "The filled temple pond offering a serene and beautiful reflection.",
    gal18_title: "Temple Chief Priest",
    gal18_desc: "Chief Priest Kommavarapu Pavan Kumar Sharma performing holy rituals in the temple.",
    gal19_title: "Deity with Trishula",
    gal19_desc: "Lord Shiva decorated with his sacred trident during a festival.",
    gal20_title: "Vedic Blessings",
    gal20_desc: "Devotees receiving sacred blessings from the priests after the Vedic rituals.",
    gal21_title: "Go-Puja Ceremony",
    gal21_desc: "Worship of the sacred cow (Gomata) in the temple courtyard.",
    gal22_title: "Mass Prayers by Devotees",
    gal22_desc: "Large congregation of devotees sitting in rows for mass prayer recitations.",
    gal23_title: "Annaprasadam Distribution",
    gal23_desc: "Serving of free sanctified food (Annadanam) to visiting devotees.",
    gal24_title: "Temple Kalyanavedika",
    gal24_desc: "The main assembly hall utilized for marriage rituals and cultural events.",
    gal25_title: "Abhisheka Murti",
    gal25_desc: "The sacred Shivalingam being bathed in holy waters and milk during abhishekam.",
    gal26_title: "Dhwajasthambham Shrine",
    gal26_desc: "The sacred flagpole (Dhwajasthambham) and Lord Nandi facing the main deity.",
    gal27_title: "Festival Oil Lamps",
    gal27_desc: "Hundreds of tiny oil lamps lit by devotees around the temple corridors.",
    gal28_title: "Bilva Leaf Decoration",
    gal28_desc: "The holy Shiva Lingam beautifully adorned with Bilva leaves and a trident.",
    gal29_title: "Exquisite Floral Decorations",
    gal29_desc: "Entrance arches and pillars beautifully decorated with fresh flowers during Brahmotsavam.",
    gal30_title: "Sacred Go-Puja Ritual",
    gal30_desc: "Traditional worship of Mother Cow and calf representing all Vedic deities.",
    gal31_title: "Festival Welcome Arch",
    gal31_desc: "Glowing illuminated welcome arch erected on the main road for the temple festival.",
    
    festivals_heading: "Principal Festivals & Celebrations",
    fest1_tag: "Maha Festival",
    fest1_title: "Maha Shivaratri Celebrations",
    fest1_desc: "During Shivaratri, special Rudrabhishekams and Bilva leaves archana are performed continuously. Worshipping during the midnight Lingodbhava Kalam grants spiritual liberation. The next day features a grand chariot procession.",
    fest2_tag: "Karthika Month",
    fest2_title: "Karthika Amavasya Annabhishekam",
    fest2_desc: "On the final day of Karthika Masam, the deity is covered entirely in 121 kg of cooked rice (Annabhishekam). In the evening, a Teppotsavam (float festival) is held on a swan boat, drawing over 20,000 devotees from surrounding areas.",
    fest3_tag: "Monthly Seva",
    fest3_title: "Ashtottara Sata Kalashabhishekam",
    fest3_desc: "Conducted during Masa Shivaratri and Pradosha periods, this involves 108 copper pots of milk, yogurt, honey, and herbal waters. The sacred waters are distributed as health-bestowing prasadam.",
    
    rituals_heading: "Daily Sevas & Special Pujas",
    rituals_tab_daily: "Daily Sevas",
    rituals_tab_special: "Special Pujas",
    rituals_tab_annual: "Annual Festivals",
    ritual_daily1_title: "Rudra Varabhishekam",
    ritual_daily1_desc: "The daily sacred abhishekam performed for the Lord with Vedic chants as per Shastraic tradition.",
    ritual_daily2_title: "Kumkumarchana",
    ritual_daily2_desc: "A special daily archana performed with sacred red kumkum for Mother Annapurna Devi by devotees.",
    ritual_daily3_title: "Pancha Harathulu",
    ritual_daily3_desc: "The divine five-lamp aarti service performed for the Lord in the evening — a mesmerizing spiritual spectacle.",
    ritual_special1_title: "Masa Shivaratri",
    ritual_special1_desc: "Mahanyas Purvaka Ekadasi Rudrabhishekam, Chandi Homam. After 5:30 PM, 1008 cow-ghee lamps are lit (Sahasra Deepalankarana) followed by Annaprasada distribution to 500 people.",
    ritual_special2_title: "Pournami Chandi Homam",
    ritual_special2_desc: "A special Chandi Homam is performed every month on the full moon day (Pournami) for the blessings of Mother Goddess.",
    ritual_special3_title: "Ardra Nakshatra Abhishekam",
    ritual_special3_desc: "On the day of the Lord's birth star (Ardra), a Mahanyas Purvaka Ekadasi Rudrabhishekam is performed.",
    ritual_special4_title: "Dosha Nivarana Pujas",
    ritual_special4_desc: "Every Sunday, Rahu-Ketu pujas are performed with special significance. Devotees flock here particularly for Kala Sarpa Dosha nivarana.",
    ritual_special5_title: "Santana Prapti",
    ritual_special5_desc: "It is the strong belief of devotees that childless couples who circumambulate the Lord for 5 consecutive Mondays will be blessed with a son.",
    ritual_annual1_title: "Karthika Masa Brahmotsavams",
    ritual_annual1_desc: "Ekadasi Rudrabhishekams throughout the month. The final 3 days feature Laksha Bilwarchana, 108 Kalasabhishekam, and a grand procession of the decorated deities.",
    ritual_annual2_title: "Karthika Amavasya Annabhishekam",
    ritual_annual2_desc: "The Lord is bathed in 121 kg of rice (Annabhishekam), followed by Laksha Kumkumarchana and a divine float festival on a swan boat — drawing 20,000+ devotees.",
    ritual_annual3_title: "Devi Sharannavaratrulu",
    ritual_annual3_desc: "Trikala Kumkumarchanas, Chandi Parayana, Bala Puja, and Suvasini Pujas are conducted throughout the 9 auspicious days.",
    committee_heading: "Temple Management Committee",
    committee_trustees_title: "Trustees & Officials",
    committee_members_title: "Executive Committee Members",
    committee_motto: "Dharmo Rakshati Rakshitah (Righteousness protects those who uphold it)",
    contact_heading: "Darshan Timings & Navigation",
    contact_section_title: "Contact & Visitor Information",
    timings_title: "Darshan Timings",
    timings_desc: "Morning: 6:00 AM - 12:00 PM<br>Evening: 4:00 PM - 8:30 PM",
    gmaps_bar_title: "Get Directions on Google Maps",
    address_title: "Temple Address",
    address_desc: "Sri Annapurna Sameyta Kasi Visweswara Swami Temple,<br>Narasingapadu Village, Nakarikallu Mandal,<br>Palnadu District, Andhra Pradesh - 522615, India.",
    contact_title: "Contact Numbers",
    map_header: "Narasingapadu Temple Location",
    map_desc: "5 km from Nakarikallu, easily accessible from the Guntur-Kurnool Highway.",
    map_btn: "Open in Google Maps",
    
    
    footer_desc: "Narasingapadu Sivalayam is a sacred Saivite shrine of immense spiritual power. Worshipped by Gnanpith laureate Viswanatha Satyanarayana, this website preserves the historical and literary heritage of 'Palnati Kasi' for global devotees.",
    footer_quick_links: "Quick Links",
    footer_contact_title: "Temple Trust Office",
    footer_address: "Narasingapadu Village, Nakarikallu Mandal, Palnadu District, AP, India.",
    footer_copyright: "© 2026 Sri Annapurna Sameyta Kasi Visweswara Swami Temple Trust. All Rights Reserved.",
    
    tab_verse: "Verse (పద్యం)",
    tab_meaning: "Meaning (భావం)",
    tab_translation: "English Translation",
    play_audio: "Play Recitation",
    pause_audio: "Pause Recitation",
    speed: "Speed"
  }
};


// --- POEMS DATABASE ---
const poems = [
{
    id: 1,
    category: "shiva",
    titleTe: "శ్రీతమాల శ్యామలింగ ప్రశస్తి",
    titleEn: "Glory of the Dark-Hued Tamala Lingam",
    verseTe: `శ్రీతమాల శ్యామలింగ! సిద్ధ సంసేవిత లింగ!
హేతుహీన సనాథ! అన్నపూర్ణా సహిత విశ్వనాథ
నీతాపరా ధునిక జటాజూటా! మణి శశి కిరీట!
శ్వేత వియన్వాణీ నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!`,
    verseEn: `O Dark-hued Shiva, beautiful like the Tamala tree! O Lingam worshipped by the Sages!
O causeless Protector of the helpless! O Lord Viswanatha along with Mother Annapurna!
Whose matted locks hold the pure heavenly Ganga! O Lord crowned with the moon and gems!
Whose glory is sung by the white celestial voice, O Lord of Nekarukallu who smiles upon the Sages!`,
    wordMeaningTe: `* శ్రీతమాల శ్యామలింగ: నల్లటి తమాల వృక్షము వలె శ్యామల వర్ణముతో శోభిల్లే లింగ స్వరూపుడా.
* సిద్ధ సంసేవిత లింగ: సిద్ధ పురుషుల చేత నిత్యము అర్చింపబడే లింగమా.
* హేతుహీన సనాథ: ఏ కారణము లేకుండానే దీనులను కాపాడే రక్షకుడా.
* అన్నపూర్ణా సహిత విశ్వనాథ: జగన్మాత అన్నపూర్ణతో కూడియున్న కాశీ విశ్వేశ్వరుడా.
* నీతాపరా ధునిక జటాజూటా: పవిత్ర గంగా నదిని జటాజూటమున ధరించినవాడా.
* మణి శశి కిరీట: మణులు మరియు చంద్రవంక కిరీటముగా ధరించినవాడా.
* శ్వేత వియన్వాణీ: శ్వేత వర్ణ గంగా నది ఆకాశము నుండి జాలువారుతూ నిన్ను కీర్తిస్తున్నది.
* నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ: నెకరుకల్లు ప్రాంతమున సిద్ధులకు దర్శనమిస్తూ లీలలు చేసే దేవా!`,
    wordMeaningEn: `* Sri Tamala Shyamalinga: The dark-complexioned Lingam resembling the Tamala tree.
* Siddha Samsevita Lingam: The Lingam worshipped by the realized sages (Siddhas).
* Hetuhina Sanatha: The ultimate refuge of the helpless, protecting without any expectation or cause.
* Annapurna Sahita Viswanatha: Lord Viswanatha (Lord of the Universe) accompanied by Goddess Annapurna.
* Nitapara Dhunika Jatajuta: Having the heavenly river Ganga flowing from the matted locks.
* Mani Shashi Kirita: Crowned with the crescent moon and radiant gems.
* Shweta Viyanvani: The pure sky-river (Ganga) that sings your glories.
* Nekarukallu Prantha Siddhabjaheli: O Lord of Nekarukallu who resides and plays divine pastimes for the sages.`,
    audioTe: "శ్రీతమాల శ్యామలింగ! సిద్ధ సంసేవిత లింగ! హేతుహీన సనాథ! అన్నపూర్ణా సహిత విశ్వనాథ! నీతాపరా ధునిక జటాజూటా! మణి శశి కిరీట! శ్వేత వియన్వాణీ నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!",
    audioEn: "O Dark-hued Shiva, beautiful like the Tamala tree! O Lingam worshipped by the Sages! O causeless Protector of the helpless! O Lord Viswanatha along with Mother Annapurna! Whose matted locks hold the pure heavenly Ganga! O Lord crowned with the moon and gems! Whose glory is sung by the white celestial voice, O Lord of Nekarukallu who smiles upon the Sages!"
  },
  {
    id: 2,
    category: "history",
    titleTe: "స్వామి భక్త వాత్సల్యము",
    titleEn: "The Lord's Compassion and Rites",
    verseTe: `స్వామి నీవు పరాకు సూక్ష్మ సూక్ష్మ విషయములంగూడ
నామతించెదవు జాగ్రత్త, యింక మేము యధికంబులంతే
యే మాటాడెదూ కానీ సాగనిమ్ము పోనిమ్మందు మిదియు
నీమము నీకను మాకు నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!`,
    verseEn: `O Lord, You pay attention even to the minutest and subtlest of matters.
You observe with care, and we can only surrender and say no more.
Whatever You speak, let it be; let it proceed, we accept it as Your will.
This is the agreement between You and us, O Lord of Nekarukallu!`,
    wordMeaningTe: `* పరాకు: నిర్లక్ష్యం లేదా గమనింపు.
* సూక్ష్మ సూక్ష్మ విషయములంగూడ: అత్యంత చిన్న విషయాలను కూడా.
* నామతించెదవు జాగ్రత్త: జాగ్రత్తగా పరిశీలిస్తూ ఉంటావు.
* యింక మేము యధికంబులంతే: మేము అంతకంటే ఎక్కువ ఏమీ చెప్పలేము.
* సాగనిమ్ము పోనిమ్ము: నీ సంకల్పం ప్రకారమే జరగనిమ్ము.
* నీమము: నియమము / ఒప్పందము.`,
    wordMeaningEn: `* Paraku: Watchfulness or attentiveness.
* Sukshma Sukshma: The smallest and most delicate details of life.
* Namatichedavu: You examine and analyze carefully.
* Nimamu: The sacred vow or agreement between devotee and Lord.`,
    audioTe: "స్వామి నీవు పరాకు సూక్ష్మ సూక్ష్మ విషయములంగూడ నామతించెదవు జాగ్రత్త, యింక మేము యధికంబులంతే యే మాటాడెదూ కానీ సాగనిమ్ము పోనిమ్మందు మిదియు నీమము నీకను మాకు నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!",
    audioEn: "O Lord, You pay attention even to the minutest and subtlest of matters. You observe with care, and we can only surrender and say no more. Whatever You speak, let it be; let it proceed, we accept it as Your will. This is the agreement between You and us, O Lord of Nekarukallu!"
  },
  {
    id: 3,
    category: "history",
    titleTe: "తాప నివారణం",
    titleEn: "Relief from Worldly Sorrows",
    verseTe: `బెలుపైన గడబండ మొదలుగ గిరించె దంగరా దనుచు
దెలువాన బెట్టిన పగిది నా మాట నీ మాట విని
శలువు దహించి తాపముల నంటకుండగ జేయుదువు
నెలగెడు దొరవావు నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!`,
    verseEn: `O Lord! Just as a boundary stone is laid, You listen to our words and yours.
You burn away our burning miseries and protect us from being touched by distress.
You are the lord who shines resplendently, O Lord of Nekarukallu!`,
    wordMeaningTe: `* గడబండ: సరిహద్దు రాయి.
* శలువు దహించి: మంటలను లేదా తాపాలను చల్లార్చి.
* తాపముల నంటకుండగ: కష్టాలు మరియు బాధలు మనకు సోకకుండా.
* నెలగెడు దొరవావు: ప్రకాశించే ప్రభువుగా కొలువై ఉన్నావు.`,
    wordMeaningEn: `* Gadabanda: Boundary stone indicating protection limits.
* Tapamula: The burning distresses and sorrows of human life.
* Nelagedu Dora: The shining, supreme Lord of the universe.`,
    audioTe: "బెలుపైన గడబండ మొదలుగ గిరించె దంగరా దనుచు దెలువాన బెట్టిన పగిది నా మాట నీ మాట విని శలువు దహించి తాపముల నంటకుండగ జేయుదువు నెలగెడు దొరవావు నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!",
    audioEn: "O Lord! Just as a boundary stone is laid, You listen to our words and yours. You burn away our burning miseries and protect us from being touched by distress. You are the lord who shines resplendently, O Lord of Nekarukallu!"
  },
  {
    id: 4,
    category: "shiva",
    titleTe: "సదా శివ స్మరణం",
    titleEn: "Constant Remembrance of Shiva",
    verseTe: `నిదుర పట్టెడువాడ రాత్రిలందున నిన్నే తలతును
నిదుర మెలకువ వచ్చునంతలో నిన్నే తలతును
బొదుకు భావములందు దెలిపిగో నిన్నే భావించుచుంటి
జదరనీకుము నన్ను నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!`,
    verseEn: `When I go to sleep in the night, I think only of You.
The moment I wake up, I think only of You.
In all my thoughts and sentiments, I meditate only upon You.
Do not let my mind wander or shatter, O Lord of Nekarukallu!`,
    wordMeaningTe: `* నిదుర పట్టెడువాడ: నిద్రపోయే సమయంలో.
* మెలకువ వచ్చునంతలో: మేల్కొనే క్షణంలో.
* బొదుకు భావములందు: నా సకల ఆలోచనలలో.
* జదరనీకుము నన్ను: నన్ను చలించనీయవద్దు, మనసు చెదరనీయవద్దు.`,
    wordMeaningEn: `* Nidura: State of sleep.
* Melakuva: State of waking up.
* Jadaraneekumu: Please do not let my mind scatter or lose focus from You.`,
    audioTe: "నిదుర పట్టెడువాడ రాత్రిలందున నిన్నే తలతును నిదుర మెలకువ వచ్చునంతలో నిన్నే తలతును బొదుకు భావములందు దెలిపిగో నిన్నే భావించుచుంటి జదరనీకుము నన్ను నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!",
    audioEn: "When I go to sleep in the night, I think only of You. The moment I wake up, I think only of You. In all my thoughts and sentiments, I meditate only upon You. Do not let my mind wander or shatter, O Lord of Nekarukallu!"
  },
  {
    id: 5,
    category: "shiva",
    titleTe: "స్వామి నిరుపమాన రక్షణ",
    titleEn: "Incomparable Divine Refuge",
    verseTe: `ఉదయంబుననుండి నాకొరకై యెవడు వెదకి వచ్చినను
గదయించుకొనుటలేదే నిన్ను నాశ్రయించగా నరుడైన
నెది యెలాగి జనము నమ్మేదరో మరియూ నీ శేషముకొనా
చెదరిపోవు కాదో నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!`,
    verseEn: `No matter who comes searching for me since the morning,
I do not worry or fear, for any human who surrenders to You is protected.
How else would people believe in Your glory? Your divine grace will never decline,
It is eternal, O Lord of Nekarukallu!`,
    wordMeaningTe: `* ఉదయంబుననుండి: పొద్దున్నే లేచినప్పటి నుండి.
* నాశ్రయించగా: నిన్ను శరణు వేడగా.
* జనము నమ్మేదరో: ప్రజలు నీ లీలలను విశ్వసిస్తారు.
* చెదరిపోవు కాదో: నీ కరుణ ఎప్పటికీ నశించిపోదు.`,
    wordMeaningEn: `* Ashrayinchaga: Seeking shelter or refuge in the divine.
* Nammedaro: People believe and put their faith.
* Chedaripovu: Will never disintegrate or fade away.`,
    audioTe: "ఉదయంబుననుండి నాకొరకై యెవడు వెదకి వచ్చినను గదయించుకొనుటలేదే నిన్ను నాశ్రయించగా నరుడైన నెది యెలాగి జనము నమ్మేదరో మరియూ నీ శేషముకొనా చెదరిపోవు కాదో నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!",
    audioEn: "No matter who comes searching for me since the morning, I do not worry or fear, for any human who surrenders to You is protected. How else would people believe in Your glory? Your divine grace will never decline, It is eternal, O Lord of Nekarukallu!"
  },
  {
    id: 6,
    category: "annapurna",
    titleTe: "సృష్టి సమతుల్యత",
    titleEn: "Harmony of Creation",
    verseTe: `ఒక యింటి జరుగదు దాని జెరుపడి నాకే చెడ్డ జరుగు
నాకే నష్టమున్నగదా యొకడు దిగుడుగా నున్న దీ సృష్టి
యింకనైన సమముగా సాగవయ్యా ఓ సాలేశ్వరి స్వామి
విధి శాస్త్రజ్ఞుడ వై నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!`,
    verseEn: `If harm is done to one house, it brings bad fortune and loss to me as well.
This creation is interconnected; if one is down, all suffer.
Let everything proceed in perfect balance now, O Lord of Saleshwaram!
You who are the knower of destiny and sciences, O Lord of Nekarukallu!`,
    wordMeaningTe: `* ఒక యింటి జరుగదు: ఒక ఇల్లు సరిగా నడవకపోతే లేదా నాశనమైతే.
* దిగుడుగా నున్న: అసమానతలతో కూడి ఉన్న.
* సమముగా సాగవయ్యా: అందరికీ సమానంగా, సజావుగా సాగనివ్వు.
* విధి శాస్త్రజ్ఞుడవై: సృష్టి నియమాలను తెలిసినవాడవై.`,
    wordMeaningEn: `* Diguduga Nunna: Unequal, imbalanced, or suffering.
* Samamuga Sagavayya: May the life flow smoothly and equally for all.
* Vidhi Shastrajnudavai: Being the supreme knower of destiny and cosmic laws.`,
    audioTe: "ఒక యింటి జరుగదు దాని జెరుపడి నాకే చెడ్డ జరుగు నాకే నష్టమున్నగదా యొకడు దిగుడుగా నున్న దీ సృష్టి యింకనైన సమముగా సాగవయ్యా ఓ సాలేశ్వరి స్వామి విధి శాస్త్రజ్ఞుడ వై నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!",
    audioEn: "If harm is done to one house, it brings bad fortune and loss to me as well. This creation is interconnected; if one is down, all suffer. Let everything proceed in perfect balance now, O Lord of Saleshwaram! You who are the knower of destiny and sciences, O Lord of Nekarukallu!"
  },
  {
    id: 7,
    category: "annapurna",
    titleTe: "జీవన రహస్యం",
    titleEn: "Secret of Life and Mortality",
    verseTe: `మందు లెట్టులనో చావు రానురావాలి కంటికొంతే
మొలకలై కరిగిన గాని ముంత చేసిన బెల్ల తేకు
మలమునైన నటికీమాయ కడతగా జూగెడు నిధి
మొలగనో కున్నదో నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!`,
    verseEn: `Death must eventually arrive regardless of medicines.
Just as sprouts may dissolve, or sweetness remains in the pot.
The illusion of worldly impurities is wiped away by Your grace,
Which is a treasure that never fades, O Lord of Nekarukallu!`,
    wordMeaningTe: `* చావు రానురావాలి: మరణం ఎప్పటికైనా రాక తప్పదు.
* మలమునైన: మనస్సులోని మాలిన్యాలను లేదా కల్మషాలను.
* కడతగా జూగెడు నిధి: చివరకు రక్షించే శాశ్వత నిధి నీవే.`,
    wordMeaningEn: `* Chavu: Death or physical mortality.
* Malatwa / Niki Maya: The illusions and impurities of the ego.
* Nidhi: The eternal spiritual treasure of Shiva's grace.`,
    audioTe: "మందు లెట్టులనో చావు రానురావాలి కంటికొంతే మొలకలై కరిగిన గాని ముంత చేసిన బెల్ల తేకు మలమునైన నటికీమాయ కడతగా జూగెడు నిధి మొలగనో కున్నదో నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!",
    audioEn: "Death must eventually arrive regardless of medicines. Just as sprouts may dissolve, or sweetness remains in the pot. The illusion of worldly impurities is wiped away by Your grace, Which is a treasure that never fades, O Lord of Nekarukallu!"
  },
  {
    id: 8,
    category: "shiva",
    titleTe: "ఈశ్వర శక్తి అవతారం",
    titleEn: "Incarnation of Divine Power",
    verseTe: `కనుగవలకు నీవు బ్రతుకు బ్రతికించు తండ్రి యెంతవడుక
నెనులుగా జూటెడుముగ కలుగనియ్యవు రెక్కలంతయునుగ
గగనమో ముద్దివిడి గగనానికం గల జనంబును శక్తి నవతార జైరా! నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!`,
    verseEn: `O Father! You give life to our eyes and sustain us with great affection.
You do not let us fall, supporting us under your wings of grace.
Descending from the heights of the spiritual sky to bless the humanity,
Victory to the incarnation of supreme power, O Lord of Nekarukallu!`,
    wordMeaningTe: `* బ్రతుకు బ్రతికించు: జీవనాన్ని ఇచ్చి నిలబెట్టే.
* కనుగవలకు: మన నేత్రాలకు వెలుగునిచ్చే.
* శక్తి నవతార జైరా: పరాశక్తి అవతార స్వరూపమా, నీకు జయం!`,
    wordMeaningEn: `* Kanugavalaku: To the eyes (bestowing spiritual vision).
* Shakti Navatara: The incarnation of divine energy.
* Jayara: Victory to the Lord.`,
    audioTe: "కనుగవలకు నీవు బ్రతుకు బ్రతికించు తండ్రి యెంతవడుక నెనులుగా జూటెడుముగ కలుగనియ్యవు రెక్కలంతయునుగ గగనమో ముద్దివిడి గగనానికం గల జనంబును శక్తి నవతార జైరా! నెకరుకల్లు ప్రాంత సిద్ధాబ్జహేళీ!",
    audioEn: "O Father! You give life to our eyes and sustain us with great affection. You do not let us fall, supporting us under your wings of grace. Descending from the heights of the spiritual sky to bless the humanity, Victory to the incarnation of supreme power, O Lord of Nekarukallu!"
  },
  {
    id: 9,
    category: "devotion",
    titleTe: "శరణాగతి ప్రార్థన - చరణం 1",
    titleEn: "Prayer of Surrender - Verse 1",
    verseTe: `పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః!
త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!`,
    verseEn: `I am a sinner, my actions are sinful, my soul is sinful, born of sin!
O Lord, protect me out of compassion, O savior of those who surrender!`,
    wordMeaningTe: `* పాపోహం: నేను పాపాత్ముడను.
* త్రాహి మాం: నన్ను రక్షించు.
* కృపయా: దయతో.
* శరణాగత వత్సల: శరణు కోరినవారిని ప్రేమించేవాడా.`,
    wordMeaningEn: `* Papoham: I am full of sins.
* Trahi Mam: Protect me.
* Krupaya: With mercy.
* Saranagata Vatsala: Compassionate protector of those who surrender.`,
    audioTe: "పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః! త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!",
    audioEn: "I am a sinner, my actions are sinful, my soul is sinful, born of sin! O Lord, protect me out of compassion, O savior of those who surrender!"
  },
  {
    id: 10,
    category: "sacred",
    titleTe: "ఆత్మారామ ధ్యాన శ్లోకం - చరణం 1",
    titleEn: "Atmaram Meditation Hymn - Verse 1",
    verseTe: `ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి!
సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!`,
    verseEn: `Mother Annapurna along with Lord Atmaram resides in our hearts!
O Viswanatha, protector of all living beings, shine as the divine light!`,
    wordMeaningTe: `* హృదయ నివాసి: హృదయములో నివసించువాడా.
* సకల జీవ సంరక్షక: సమస్త జీవులను కాపాడేవాడా.
* జ్యోతి స్వరూప: వెలుగు రూపములో ఉన్నవాడా.
* ప్రకాశి: ప్రకాశించేవాడా.`,
    wordMeaningEn: `* Hrudaya Nivasi: Dweller of the heart.
* Sakala Jeeva Samrakshaka: Preserver of all life forms.
* Jyoti Swarupa: In the form of holy light.
* Prakashi: Illuminating one.`,
    audioTe: "ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి! సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!",
    audioEn: "Mother Annapurna along with Lord Atmaram resides in our hearts! O Viswanatha, protector of all living beings, shine as the divine light!"
  },
  {
    id: 11,
    category: "shiva",
    titleTe: "నమః శివాయ స్తుతి - భాగం 1",
    titleEn: "Namah Shivaya Praise - Part 1",
    verseTe: `దేవదేవాయ త్రిలోచనాత్మకాయ నమః శివాయ!
భక్త రక్షకాయ భవతారకాయ నమః శివాయ!`,
    verseEn: `Salutations to Shiva, the God of Gods, the three-eyed Lord!
Salutations to Shiva, the protector of devotees and the redeemer of life!`,
    wordMeaningTe: `* త్రిలోచనాత్మకాయ: మూడు కన్నులు గలవాడు.
* దేవదేవాయ: దేవతలకు దేవుడు.
* భక్త రక్షకాయ: భక్తులను రక్షించేవాడు.
* భవతారకాయ: సంసార సాగరాన్ని దాటించేవాడు.`,
    wordMeaningEn: `* Trilochanatmakaya: The three-eyed Lord.
* Devadevaya: The God of Gods.
* Bhakta Rakshakaya: The protector of devotees.
* Bhavatarakaya: The savior from the cycle of rebirth.`,
    audioTe: "దేవదేవాయ త్రిలోచనాత్మకాయ నమః శివాయ! భక్త రక్షకాయ భవతారకాయ నమః శివాయ!",
    audioEn: "Salutations to Shiva, the God of Gods, the three-eyed Lord! Salutations to Shiva, the protector of devotees and the redeemer of life!"
  },
  {
    id: 12,
    category: "annapurna",
    titleTe: "అన్నపూర్ణాష్టకము - చరణం 1",
    titleEn: "Annapurna Ashtakam - Verse 1",
    verseTe: `అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే!
జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!`,
    verseEn: `O Mother Annapurna, ever full and complete, the beloved of Lord Sankara!
Grant us alms of knowledge and dispassion, O Goddess Parvati!`,
    wordMeaningTe: `* అన్నపూర్ణే: ధాన్య సమృద్ధిని ఇచ్చే తల్లి.
* సదాపూర్ణే: ఎల్లప్పుడూ నిండుగా ఉండేది.
* ప్రాణవల్లభే: ప్రాణనాథురాలు.
* జ్ఞానవైరాగ్య: జ్ఞానము మరియు వైరాగ్యము.
* భిక్షాం: బిక్ష లేదా ప్రసాదము.`,
    wordMeaningEn: `* Annapurne: She who is full of nourishment.
* Sadapurne: Ever complete and full.
* Pranavallabhe: Beloved consort.
* Jnana-Vairagya: Wisdom and renunciation.
* Bhiksham Dehi: Grant us alms.`,
    audioTe: "అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే! జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!",
    audioEn: "O Mother Annapurna, ever full and complete, the beloved of Lord Sankara! Grant us alms of knowledge and dispassion, O Goddess Parvati!"
  },
  {
    id: 13,
    category: "history",
    titleTe: "నరసింగపాడు ఆలయ ప్రశస్తి - పద్యం 1",
    titleEn: "Narasingapadu Temple Glory - Verse 1",
    verseTe: `పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు!
భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!`,
    verseEn: `Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu!
Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!`,
    wordMeaningTe: `* పవిత్ర క్షేత్రము: పరిశుద్ధమైన క్షేత్రము.
* వెలసిన: అవతరించిన.
* శరణు: ఆశ్రయము.
* కొలువైన: నివసించిన.`,
    wordMeaningEn: `* Pavitra Kshethramu: The holy place.
* Velasina: Self-manifested or established.
* Saranam: Safe haven.`,
    audioTe: "పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు! భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!",
    audioEn: "Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu! Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!"
  },
  {
    id: 14,
    category: "devotion",
    titleTe: "భక్తి సుధా తరంగిణి - భాగం 2",
    titleEn: "Devotional Waves - Part 2",
    verseTe: `ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం!
హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!`,
    verseEn: `Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life!
O Shambho, Viswanatha, Mahadeva, salutations to Shiva!`,
    wordMeaningTe: `* ప్రాతఃకాలే: ఉదయ కాలమున.
* స్మరణం: తలచుకోవడం.
* భవ హరణం: భవ బంధాలను పోగొట్టేది.
* తారణం: దాటించేది.`,
    wordMeaningEn: `* Pratahkale: In the early morning.
* Smaranam: Remembrance.
* Bhava Haranam: Destruction of worldly attachments.
* Taranam: Delivering across the ocean of births.`,
    audioTe: "ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం! హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!",
    audioEn: "Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life! O Shambho, Viswanatha, Mahadeva, salutations to Shiva!"
  },
  {
    id: 15,
    category: "sacred",
    titleTe: "మహాదేవ కరవలంబ స్తోత్రం - భాగం 2",
    titleEn: "Mahadeva Karavalamba Stotram - Part 2",
    verseTe: `సంసార ఘోర గహనే చరతో మమ హే దేవా!
విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!`,
    verseEn: `I am wandering in the terrifying jungle of this worldly life, O Lord!
O Visweswara, ocean of compassion, extend Your hand of support!`,
    wordMeaningTe: `* ఘోర గహనే: భయంకరమైన అడవిలో.
* మమ: నా యొక్క.
* కరుణానిధే: దయకు సముద్రుడైనవాడా.
* కరవలంబమ్: చేతిని అందించి రక్షించడం.`,
    wordMeaningEn: `* Ghora Gahane: In the dangerous forest.
* Karunānidhe: O treasure of mercy.
* Karavalambam: Hand of protection.`,
    audioTe: "సంసార ఘోర గహనే చరతో మమ హే దేవా! విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!",
    audioEn: "I am wandering in the terrifying jungle of this worldly life, O Lord! O Visweswara, ocean of compassion, extend Your hand of support!"
  },
  {
    id: 16,
    category: "shiva",
    titleTe: "కాశీ విశ్వేశ్వర స్తోత్రము - చరణం 2",
    titleEn: "Kasi Visweswara Stotram - Verse 2",
    verseTe: `మంగళరూపాయ నమః శివాయ! మణిశేఖరాయ నమః శివాయ!
గంగాధరాయ గౌరీనాథాయ దేవాయ! శంభో విశ్వేశ్వరాయ శరణం శరణం!`,
    verseEn: `Salutations to Shiva, the form of auspiciousness! Salutations to Shiva, who wears gems on His head!
Salutations to the holder of Ganga, the Lord of Gauri! O Shambho Visweswara, I seek refuge in You!`,
    wordMeaningTe: `* మంగళరూపాయ: శుభప్రదమైన రూపము కలవాడు.
* మణిశేఖరాయ: తలపై మణిని ధరించినవాడు.
* గంగాధరాయ: గంగను ధరించినవాడు.
* గౌరీనాథాయ: పార్వతీదేవి భర్త.
* శరణం: ఆశ్రయము.`,
    wordMeaningEn: `* Mangalarupaya: The embodiment of auspiciousness.
* Manishekharaya: Having a gem on His crown.
* Gangadharaya: The one who holds the river Ganga.
* Gaurinathaya: The consort of Gauri.
* Saranam: Refuge.`,
    audioTe: "మంగళరూపాయ నమః శివాయ! మణిశేఖరాయ నమః శివాయ! గంగాధరాయ గౌరీనాథాయ దేవాయ! శంభో విశ్వేశ్వరాయ శరణం శరణం!",
    audioEn: "Salutations to Shiva, the form of auspiciousness! Salutations to Shiva, who wears gems on His head! Salutations to the holder of Ganga, the Lord of Gauri! O Shambho Visweswara, I seek refuge in You!"
  },
  {
    id: 17,
    category: "annapurna",
    titleTe: "జగన్మాత అన్నపూర్ణ కీర్తన - భాగం 2",
    titleEn: "Mother Annapurna Chant - Part 2",
    verseTe: `సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే!
శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!`,
    verseEn: `O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements!
We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!`,
    wordMeaningTe: `* సర్వమంగళ మాంగల్యే: సర్వ శుభములలో అత్యంత శుభప్రదమైనదానา.
* శివే: కళ్యాణకారిణి.
* సర్వార్థ సాధికే: సర్వ పురుషార్థాలను సాధించేదానా.
* శరణ్యే: శరణు కోరదగిన తల్లి.`,
    wordMeaningEn: `* Sarvamangala Mangalye: Most auspicious among all auspicious things.
* Shive: Bestower of welfare.
* Sarvartha Sadhike: Fulfiller of all desires.
* Saranye: Worthy of taking refuge in.`,
    audioTe: "సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే! శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!",
    audioEn: "O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements! We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!"
  },
  {
    id: 18,
    category: "history",
    titleTe: "చారిత్రక శాసన గీతం - పద్యం 2",
    titleEn: "Historical Inscription Hymn - Verse 2",
    verseTe: `శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం!
తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!`,
    verseEn: `Let us read the history of this shrine recorded in the stone inscriptions!
Let us praise the divine plays of Visweswara, the merit of generations!`,
    wordMeaningTe: `* శిలా శాసనము: రాతిపై చెక్కబడిన శాసనము.
* క్షేత్ర చరిత్ర: ఆలయం యొక్క చరిత్ర.
* లీలలు: దైవ లీలలు.
* కీర్తిద్దాం: కొనిాడుదాం.`,
    wordMeaningEn: `* Shila Sasanamu: Inscription carved on stone.
* Kshethra Charitra: History of the sacred place.
* Leelalu: Divine activities.`,
    audioTe: "శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం! తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!",
    audioEn: "Let us read the history of this shrine recorded in the stone inscriptions! Let us praise the divine plays of Visweswara, the merit of generations!"
  },
  {
    id: 19,
    category: "devotion",
    titleTe: "శరణాగతి ప్రార్థన - చరణం 3",
    titleEn: "Prayer of Surrender - Verse 3",
    verseTe: `పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః!
త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!`,
    verseEn: `I am a sinner, my actions are sinful, my soul is sinful, born of sin!
O Lord, protect me out of compassion, O savior of those who surrender!`,
    wordMeaningTe: `* పాపోహం: నేను పాపాత్ముడను.
* త్రాహి మాం: నన్ను రక్షించు.
* కృపయా: దయతో.
* శరణాగత వత్సల: శరణు కోరినవారిని ప్రేమించేవాడా.`,
    wordMeaningEn: `* Papoham: I am full of sins.
* Trahi Mam: Protect me.
* Krupaya: With mercy.
* Saranagata Vatsala: Compassionate protector of those who surrender.`,
    audioTe: "పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః! త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!",
    audioEn: "I am a sinner, my actions are sinful, my soul is sinful, born of sin! O Lord, protect me out of compassion, O savior of those who surrender!"
  },
  {
    id: 20,
    category: "sacred",
    titleTe: "ఆత్మారామ ధ్యాన శ్లోకం - చరణం 3",
    titleEn: "Atmaram Meditation Hymn - Verse 3",
    verseTe: `ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి!
సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!`,
    verseEn: `Mother Annapurna along with Lord Atmaram resides in our hearts!
O Viswanatha, protector of all living beings, shine as the divine light!`,
    wordMeaningTe: `* హృదయ నివాసి: హృదయములో నివసించువాడా.
* సకల జీవ సంరక్షక: సమస్త జీవులను కాపాడేవాడా.
* జ్యోతి స్వరూప: వెలుగు రూపములో ఉన్నవాడా.
* ప్రకాశి: ప్రకాశించేవాడా.`,
    wordMeaningEn: `* Hrudaya Nivasi: Dweller of the heart.
* Sakala Jeeva Samrakshaka: Preserver of all life forms.
* Jyoti Swarupa: In the form of holy light.
* Prakashi: Illuminating one.`,
    audioTe: "ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి! సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!",
    audioEn: "Mother Annapurna along with Lord Atmaram resides in our hearts! O Viswanatha, protector of all living beings, shine as the divine light!"
  },
  {
    id: 21,
    category: "shiva",
    titleTe: "శివ పంచాక్షరి - చరణం 3",
    titleEn: "Shiva Panchakshari - Verse 3",
    verseTe: `నమః శివాయ నమః శివాయ నమః శివాయ నమః శివాయ!
హర హర శంభో మహదేవాయ విశ్వేశ్వరాయ నమః శివాయ!`,
    verseEn: `Salutations to Shiva! Salutations to Shiva!
O Hara, Shambho, Mahadeva, Visweswara! Salutations to Shiva!`,
    wordMeaningTe: `* నమః శివాయ: శివునికి నమస్కారములు.
* హర హర: పాపములను హరించేవాడు.
* శంభో: సుఖములను కలిగించేవాడు.
* విశ్వేశ్వరాయ: విశ్వానికి అధిపతి.`,
    wordMeaningEn: `* Namah Shivaya: Salutations to Lord Shiva.
* Hara: The destroyer of sins.
* Shambho: The bestower of happiness.
* Visweswaraya: The Lord of the Universe.`,
    audioTe: "నమః శివాయ నమః శివాయ నమః శివాయ నమః శివాయ! హర హర శంభో మహదేవాయ విశ్వేశ్వరాయ నమః శివాయ!",
    audioEn: "Salutations to Shiva! Salutations to Shiva! O Hara, Shambho, Mahadeva, Visweswara! Salutations to Shiva!"
  },
  {
    id: 22,
    category: "annapurna",
    titleTe: "అన్నపూర్ణాష్టకము - చరణం 3",
    titleEn: "Annapurna Ashtakam - Verse 3",
    verseTe: `అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే!
జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!`,
    verseEn: `O Mother Annapurna, ever full and complete, the beloved of Lord Sankara!
Grant us alms of knowledge and dispassion, O Goddess Parvati!`,
    wordMeaningTe: `* అన్నపూర్ణే: ధాన్య సమృద్ధిని ఇచ్చే తల్లి.
* సదాపూర్ణే: ఎల్లప్పుడూ నిండుగా ఉండేది.
* ప్రాణవల్లభే: ప్రాణనాథురాలు.
* జ్ఞానవైరాగ్య: జ్ఞానము మరియు వైరాగ్యము.
* భిక్షాం: బిక్ష లేదా ప్రసాదము.`,
    wordMeaningEn: `* Annapurne: She who is full of nourishment.
* Sadapurne: Ever complete and full.
* Pranavallabhe: Beloved consort.
* Jnana-Vairagya: Wisdom and renunciation.
* Bhiksham Dehi: Grant us alms.`,
    audioTe: "అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే! జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!",
    audioEn: "O Mother Annapurna, ever full and complete, the beloved of Lord Sankara! Grant us alms of knowledge and dispassion, O Goddess Parvati!"
  },
  {
    id: 23,
    category: "history",
    titleTe: "నరసింగపాడు ఆలయ ప్రశస్తి - పద్యం 3",
    titleEn: "Narasingapadu Temple Glory - Verse 3",
    verseTe: `పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు!
భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!`,
    verseEn: `Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu!
Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!`,
    wordMeaningTe: `* పవిత్ర క్షేత్రము: పరిశుద్ధమైన క్షేత్రము.
* వెలసిన: అవతరించిన.
* శరణు: ఆశ్రయము.
* కొలువైన: నివసించిన.`,
    wordMeaningEn: `* Pavitra Kshethramu: The holy place.
* Velasina: Self-manifested or established.
* Saranam: Safe haven.`,
    audioTe: "పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు! భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!",
    audioEn: "Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu! Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!"
  },
  {
    id: 24,
    category: "devotion",
    titleTe: "భక్తి సుధా తరంగిణి - భాగం 4",
    titleEn: "Devotional Waves - Part 4",
    verseTe: `ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం!
హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!`,
    verseEn: `Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life!
O Shambho, Viswanatha, Mahadeva, salutations to Shiva!`,
    wordMeaningTe: `* ప్రాతఃకాలే: ఉదయ కాలమున.
* స్మరణం: తలచుకోవడం.
* భవ హరణం: భవ బంధాలను పోగొట్టేది.
* తారణం: దాటించేది.`,
    wordMeaningEn: `* Pratahkale: In the early morning.
* Smaranam: Remembrance.
* Bhava Haranam: Destruction of worldly attachments.
* Taranam: Delivering across the ocean of births.`,
    audioTe: "ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం! హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!",
    audioEn: "Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life! O Shambho, Viswanatha, Mahadeva, salutations to Shiva!"
  },
  {
    id: 25,
    category: "sacred",
    titleTe: "మహాదేవ కరవలంబ స్తోత్రం - భాగం 4",
    titleEn: "Mahadeva Karavalamba Stotram - Part 4",
    verseTe: `సంసార ఘోర గహనే చరతో మమ హే దేవా!
విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!`,
    verseEn: `I am wandering in the terrifying jungle of this worldly life, O Lord!
O Visweswara, ocean of compassion, extend Your hand of support!`,
    wordMeaningTe: `* ఘోర గహనే: భయంకరమైన అడవిలో.
* మమ: నా యొక్క.
* కరుణానిధే: దయకు సముద్రుడైనవాడా.
* కరవలంబమ్: చేతిని అందించి రక్షించడం.`,
    wordMeaningEn: `* Ghora Gahane: In the dangerous forest.
* Karunānidhe: O treasure of mercy.
* Karavalambam: Hand of protection.`,
    audioTe: "సంసార ఘోర గహనే చరతో మమ హే దేవా! విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!",
    audioEn: "I am wandering in the terrifying jungle of this worldly life, O Lord! O Visweswara, ocean of compassion, extend Your hand of support!"
  },
  {
    id: 26,
    category: "shiva",
    titleTe: "నమః శివాయ స్తుతి - భాగం 4",
    titleEn: "Namah Shivaya Praise - Part 4",
    verseTe: `దేవదేవాయ త్రిలోచనాత్మకాయ నమః శివాయ!
భక్త రక్షకాయ భవతారకాయ నమః శివాయ!`,
    verseEn: `Salutations to Shiva, the God of Gods, the three-eyed Lord!
Salutations to Shiva, the protector of devotees and the redeemer of life!`,
    wordMeaningTe: `* త్రిలోచనాత్మకాయ: మూడు కన్నులు గలవాడు.
* దేవదేవాయ: దేవతలకు దేవుడు.
* భక్త రక్షకాయ: భక్తులను రక్షించేవాడు.
* భవతారకాయ: సంసార సాగరాన్ని దాటించేవాడు.`,
    wordMeaningEn: `* Trilochanatmakaya: The three-eyed Lord.
* Devadevaya: The God of Gods.
* Bhakta Rakshakaya: The protector of devotees.
* Bhavatarakaya: The savior from the cycle of rebirth.`,
    audioTe: "దేవదేవాయ త్రిలోచనాత్మకాయ నమః శివాయ! భక్త రక్షకాయ భవతారకాయ నమః శివాయ!",
    audioEn: "Salutations to Shiva, the God of Gods, the three-eyed Lord! Salutations to Shiva, the protector of devotees and the redeemer of life!"
  },
  {
    id: 27,
    category: "annapurna",
    titleTe: "జగన్మాత అన్నపూర్ణ కీర్తన - భాగం 4",
    titleEn: "Mother Annapurna Chant - Part 4",
    verseTe: `సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే!
శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!`,
    verseEn: `O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements!
We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!`,
    wordMeaningTe: `* సర్వమంగళ మాంగల్యే: సర్వ శుభములలో అత్యంత శుభప్రదమైనదానา.
* శివే: కళ్యాణకారిణి.
* సర్వార్థ సాధికే: సర్వ పురుషార్థాలను సాధించేదానా.
* శరణ్యే: శరణు కోరదగిన తల్లి.`,
    wordMeaningEn: `* Sarvamangala Mangalye: Most auspicious among all auspicious things.
* Shive: Bestower of welfare.
* Sarvartha Sadhike: Fulfiller of all desires.
* Saranye: Worthy of taking refuge in.`,
    audioTe: "సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే! శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!",
    audioEn: "O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements! We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!"
  },
  {
    id: 28,
    category: "history",
    titleTe: "చారిత్రక శాసన గీతం - పద్యం 4",
    titleEn: "Historical Inscription Hymn - Verse 4",
    verseTe: `శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం!
తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!`,
    verseEn: `Let us read the history of this shrine recorded in the stone inscriptions!
Let us praise the divine plays of Visweswara, the merit of generations!`,
    wordMeaningTe: `* శిలా శాసనము: రాతిపై చెక్కబడిన శాసనము.
* క్షేత్ర చరిత్ర: ఆలయం యొక్క చరిత్ర.
* లీలలు: దైవ లీలలు.
* కీర్తిద్దాం: కొనిాడుదాం.`,
    wordMeaningEn: `* Shila Sasanamu: Inscription carved on stone.
* Kshethra Charitra: History of the sacred place.
* Leelalu: Divine activities.`,
    audioTe: "శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం! తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!",
    audioEn: "Let us read the history of this shrine recorded in the stone inscriptions! Let us praise the divine plays of Visweswara, the merit of generations!"
  },
  {
    id: 29,
    category: "devotion",
    titleTe: "శరణాగతి ప్రార్థన - చరణం 5",
    titleEn: "Prayer of Surrender - Verse 5",
    verseTe: `పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః!
త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!`,
    verseEn: `I am a sinner, my actions are sinful, my soul is sinful, born of sin!
O Lord, protect me out of compassion, O savior of those who surrender!`,
    wordMeaningTe: `* పాపోహం: నేను పాపాత్ముడను.
* త్రాహి మాం: నన్ను రక్షించు.
* కృపయా: దయతో.
* శరణాగత వత్సల: శరణు కోరినవారిని ప్రేమించేవాడా.`,
    wordMeaningEn: `* Papoham: I am full of sins.
* Trahi Mam: Protect me.
* Krupaya: With mercy.
* Saranagata Vatsala: Compassionate protector of those who surrender.`,
    audioTe: "పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః! త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!",
    audioEn: "I am a sinner, my actions are sinful, my soul is sinful, born of sin! O Lord, protect me out of compassion, O savior of those who surrender!"
  },
  {
    id: 30,
    category: "sacred",
    titleTe: "ఆత్మారామ ధ్యాన శ్లోకం - చరణం 5",
    titleEn: "Atmaram Meditation Hymn - Verse 5",
    verseTe: `ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి!
సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!`,
    verseEn: `Mother Annapurna along with Lord Atmaram resides in our hearts!
O Viswanatha, protector of all living beings, shine as the divine light!`,
    wordMeaningTe: `* హృదయ నివాసి: హృదయములో నివసించువాడా.
* సకల జీవ సంరక్షక: సమస్త జీవులను కాపాడేవాడా.
* జ్యోతి స్వరూప: వెలుగు రూపములో ఉన్నవాడా.
* ప్రకాశి: ప్రకాశించేవాడా.`,
    wordMeaningEn: `* Hrudaya Nivasi: Dweller of the heart.
* Sakala Jeeva Samrakshaka: Preserver of all life forms.
* Jyoti Swarupa: In the form of holy light.
* Prakashi: Illuminating one.`,
    audioTe: "ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి! సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!",
    audioEn: "Mother Annapurna along with Lord Atmaram resides in our hearts! O Viswanatha, protector of all living beings, shine as the divine light!"
  },
  {
    id: 31,
    category: "shiva",
    titleTe: "కాశీ విశ్వేశ్వర స్తోత్రము - చరణం 5",
    titleEn: "Kasi Visweswara Stotram - Verse 5",
    verseTe: `మంగళరూపాయ నమః శివాయ! మణిశేఖరాయ నమః శివాయ!
గంగాధరాయ గౌరీనాథాయ దేవాయ! శంభో విశ్వేశ్వరాయ శరణం శరణం!`,
    verseEn: `Salutations to Shiva, the form of auspiciousness! Salutations to Shiva, who wears gems on His head!
Salutations to the holder of Ganga, the Lord of Gauri! O Shambho Visweswara, I seek refuge in You!`,
    wordMeaningTe: `* మంగళరూపాయ: శుభప్రదమైన రూపము కలవాడు.
* మణిశేఖరాయ: తలపై మణిని ధరించినవాడు.
* గంగాధరాయ: గంగను ధరించినవాడు.
* గౌరీనాథాయ: పార్వతీదేవి భర్త.
* శరణం: ఆశ్రయము.`,
    wordMeaningEn: `* Mangalarupaya: The embodiment of auspiciousness.
* Manishekharaya: Having a gem on His crown.
* Gangadharaya: The one who holds the river Ganga.
* Gaurinathaya: The consort of Gauri.
* Saranam: Refuge.`,
    audioTe: "మంగళరూపాయ నమః శివాయ! మణిశేఖరాయ నమః శివాయ! గంగాధరాయ గౌరీనాథాయ దేవాయ! శంభో విశ్వేశ్వరాయ శరణం శరణం!",
    audioEn: "Salutations to Shiva, the form of auspiciousness! Salutations to Shiva, who wears gems on His head! Salutations to the holder of Ganga, the Lord of Gauri! O Shambho Visweswara, I seek refuge in You!"
  },
  {
    id: 32,
    category: "annapurna",
    titleTe: "అన్నపూర్ణాష్టకము - చరణం 5",
    titleEn: "Annapurna Ashtakam - Verse 5",
    verseTe: `అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే!
జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!`,
    verseEn: `O Mother Annapurna, ever full and complete, the beloved of Lord Sankara!
Grant us alms of knowledge and dispassion, O Goddess Parvati!`,
    wordMeaningTe: `* అన్నపూర్ణే: ధాన్య సమృద్ధిని ఇచ్చే తల్లి.
* సదాపూర్ణే: ఎల్లప్పుడూ నిండుగా ఉండేది.
* ప్రాణవల్లభే: ప్రాణనాథురాలు.
* జ్ఞానవైరాగ్య: జ్ఞానము మరియు వైరాగ్యము.
* భిక్షాం: బిక్ష లేదా ప్రసాదము.`,
    wordMeaningEn: `* Annapurne: She who is full of nourishment.
* Sadapurne: Ever complete and full.
* Pranavallabhe: Beloved consort.
* Jnana-Vairagya: Wisdom and renunciation.
* Bhiksham Dehi: Grant us alms.`,
    audioTe: "అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే! జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!",
    audioEn: "O Mother Annapurna, ever full and complete, the beloved of Lord Sankara! Grant us alms of knowledge and dispassion, O Goddess Parvati!"
  },
  {
    id: 33,
    category: "history",
    titleTe: "నరసింగపాడు ఆలయ ప్రశస్తి - పద్యం 5",
    titleEn: "Narasingapadu Temple Glory - Verse 5",
    verseTe: `పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు!
భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!`,
    verseEn: `Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu!
Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!`,
    wordMeaningTe: `* పవిత్ర క్షేత్రము: పరిశుద్ధమైన క్షేత్రము.
* వెలసిన: అవతరించిన.
* శరణు: ఆశ్రయము.
* కొలువైన: నివసించిన.`,
    wordMeaningEn: `* Pavitra Kshethramu: The holy place.
* Velasina: Self-manifested or established.
* Saranam: Safe haven.`,
    audioTe: "పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు! భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!",
    audioEn: "Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu! Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!"
  },
  {
    id: 34,
    category: "devotion",
    titleTe: "భక్తి సుధా తరంగిణి - భాగం 6",
    titleEn: "Devotional Waves - Part 6",
    verseTe: `ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం!
హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!`,
    verseEn: `Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life!
O Shambho, Viswanatha, Mahadeva, salutations to Shiva!`,
    wordMeaningTe: `* ప్రాతఃకాలే: ఉదయ కాలమున.
* స్మరణం: తలచుకోవడం.
* భవ హరణం: భవ బంధాలను పోగొట్టేది.
* తారణం: దాటించేది.`,
    wordMeaningEn: `* Pratahkale: In the early morning.
* Smaranam: Remembrance.
* Bhava Haranam: Destruction of worldly attachments.
* Taranam: Delivering across the ocean of births.`,
    audioTe: "ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం! హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!",
    audioEn: "Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life! O Shambho, Viswanatha, Mahadeva, salutations to Shiva!"
  },
  {
    id: 35,
    category: "sacred",
    titleTe: "మహాదేవ కరవలంబ స్తోత్రం - భాగం 6",
    titleEn: "Mahadeva Karavalamba Stotram - Part 6",
    verseTe: `సంసార ఘోర గహనే చరతో మమ హే దేవా!
విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!`,
    verseEn: `I am wandering in the terrifying jungle of this worldly life, O Lord!
O Visweswara, ocean of compassion, extend Your hand of support!`,
    wordMeaningTe: `* ఘోర గహనే: భయంకరమైన అడవిలో.
* మమ: నా యొక్క.
* కరుణానిధే: దయకు సముద్రుడైనవాడా.
* కరవలంబమ్: చేతిని అందించి రక్షించడం.`,
    wordMeaningEn: `* Ghora Gahane: In the dangerous forest.
* Karunānidhe: O treasure of mercy.
* Karavalambam: Hand of protection.`,
    audioTe: "సంసార ఘోర గహనే చరతో మమ హే దేవా! విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!",
    audioEn: "I am wandering in the terrifying jungle of this worldly life, O Lord! O Visweswara, ocean of compassion, extend Your hand of support!"
  },
  {
    id: 36,
    category: "shiva",
    titleTe: "శివ పంచాక్షరి - చరణం 6",
    titleEn: "Shiva Panchakshari - Verse 6",
    verseTe: `నమః శివాయ నమః శివాయ నమః శివాయ నమః శివాయ!
హర హర శంభో మహదేవాయ విశ్వేశ్వరాయ నమః శివాయ!`,
    verseEn: `Salutations to Shiva! Salutations to Shiva!
O Hara, Shambho, Mahadeva, Visweswara! Salutations to Shiva!`,
    wordMeaningTe: `* నమః శివాయ: శివునికి నమస్కారములు.
* హర హర: పాపములను హరించేవాడు.
* శంభో: సుఖములను కలిగించేవాడు.
* విశ్వేశ్వరాయ: విశ్వానికి అధిపతి.`,
    wordMeaningEn: `* Namah Shivaya: Salutations to Lord Shiva.
* Hara: The destroyer of sins.
* Shambho: The bestower of happiness.
* Visweswaraya: The Lord of the Universe.`,
    audioTe: "నమః శివాయ నమః శివాయ నమః శివాయ నమః శివాయ! హర హర శంభో మహదేవాయ విశ్వేశ్వరాయ నమః శివాయ!",
    audioEn: "Salutations to Shiva! Salutations to Shiva! O Hara, Shambho, Mahadeva, Visweswara! Salutations to Shiva!"
  },
  {
    id: 37,
    category: "annapurna",
    titleTe: "జగన్మాత అన్నపూర్ణ కీర్తన - భాగం 6",
    titleEn: "Mother Annapurna Chant - Part 6",
    verseTe: `సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే!
శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!`,
    verseEn: `O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements!
We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!`,
    wordMeaningTe: `* సర్వమంగళ మాంగల్యే: సర్వ శుభములలో అత్యంత శుభప్రదమైనదానา.
* శివే: కళ్యాణకారిణి.
* సర్వార్థ సాధికే: సర్వ పురుషార్థాలను సాధించేదానా.
* శరణ్యే: శరణు కోరదగిన తల్లి.`,
    wordMeaningEn: `* Sarvamangala Mangalye: Most auspicious among all auspicious things.
* Shive: Bestower of welfare.
* Sarvartha Sadhike: Fulfiller of all desires.
* Saranye: Worthy of taking refuge in.`,
    audioTe: "సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే! శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!",
    audioEn: "O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements! We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!"
  },
  {
    id: 38,
    category: "history",
    titleTe: "చారిత్రక శాసన గీతం - పద్యం 6",
    titleEn: "Historical Inscription Hymn - Verse 6",
    verseTe: `శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం!
తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!`,
    verseEn: `Let us read the history of this shrine recorded in the stone inscriptions!
Let us praise the divine plays of Visweswara, the merit of generations!`,
    wordMeaningTe: `* శిలా శాసనము: రాతిపై చెక్కబడిన శాసనము.
* క్షేత్ర చరిత్ర: ఆలయం యొక్క చరిత్ర.
* లీలలు: దైవ లీలలు.
* కీర్తిద్దాం: కొనిాడుదాం.`,
    wordMeaningEn: `* Shila Sasanamu: Inscription carved on stone.
* Kshethra Charitra: History of the sacred place.
* Leelalu: Divine activities.`,
    audioTe: "శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం! తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!",
    audioEn: "Let us read the history of this shrine recorded in the stone inscriptions! Let us praise the divine plays of Visweswara, the merit of generations!"
  },
  {
    id: 39,
    category: "devotion",
    titleTe: "శరణాగతి ప్రార్థన - చరణం 7",
    titleEn: "Prayer of Surrender - Verse 7",
    verseTe: `పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః!
త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!`,
    verseEn: `I am a sinner, my actions are sinful, my soul is sinful, born of sin!
O Lord, protect me out of compassion, O savior of those who surrender!`,
    wordMeaningTe: `* పాపోహం: నేను పాపాత్ముడను.
* త్రాహి మాం: నన్ను రక్షించు.
* కృపయా: దయతో.
* శరణాగత వత్సల: శరణు కోరినవారిని ప్రేమించేవాడా.`,
    wordMeaningEn: `* Papoham: I am full of sins.
* Trahi Mam: Protect me.
* Krupaya: With mercy.
* Saranagata Vatsala: Compassionate protector of those who surrender.`,
    audioTe: "పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః! త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!",
    audioEn: "I am a sinner, my actions are sinful, my soul is sinful, born of sin! O Lord, protect me out of compassion, O savior of those who surrender!"
  },
  {
    id: 40,
    category: "sacred",
    titleTe: "ఆత్మారామ ధ్యాన శ్లోకం - చరణం 7",
    titleEn: "Atmaram Meditation Hymn - Verse 7",
    verseTe: `ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి!
సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!`,
    verseEn: `Mother Annapurna along with Lord Atmaram resides in our hearts!
O Viswanatha, protector of all living beings, shine as the divine light!`,
    wordMeaningTe: `* హృదయ నివాసి: హృదయములో నివసించువాడా.
* సకల జీవ సంరక్షక: సమస్త జీవులను కాపాడేవాడా.
* జ్యోతి స్వరూప: వెలుగు రూపములో ఉన్నవాడా.
* ప్రకాశి: ప్రకాశించేవాడా.`,
    wordMeaningEn: `* Hrudaya Nivasi: Dweller of the heart.
* Sakala Jeeva Samrakshaka: Preserver of all life forms.
* Jyoti Swarupa: In the form of holy light.
* Prakashi: Illuminating one.`,
    audioTe: "ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి! సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!",
    audioEn: "Mother Annapurna along with Lord Atmaram resides in our hearts! O Viswanatha, protector of all living beings, shine as the divine light!"
  },
  {
    id: 41,
    category: "shiva",
    titleTe: "నమః శివాయ స్తుతి - భాగం 7",
    titleEn: "Namah Shivaya Praise - Part 7",
    verseTe: `దేవదేవాయ త్రిలోచనాత్మకాయ నమః శివాయ!
భక్త రక్షకాయ భవతారకాయ నమః శివాయ!`,
    verseEn: `Salutations to Shiva, the God of Gods, the three-eyed Lord!
Salutations to Shiva, the protector of devotees and the redeemer of life!`,
    wordMeaningTe: `* త్రిలోచనాత్మకాయ: మూడు కన్నులు గలవాడు.
* దేవదేవాయ: దేవతలకు దేవుడు.
* భక్త రక్షకాయ: భక్తులను రక్షించేవాడు.
* భవతారకాయ: సంసార సాగరాన్ని దాటించేవాడు.`,
    wordMeaningEn: `* Trilochanatmakaya: The three-eyed Lord.
* Devadevaya: The God of Gods.
* Bhakta Rakshakaya: The protector of devotees.
* Bhavatarakaya: The savior from the cycle of rebirth.`,
    audioTe: "దేవదేవాయ త్రిలోచనాత్మకాయ నమః శివాయ! భక్త రక్షకాయ భవతారకాయ నమః శివాయ!",
    audioEn: "Salutations to Shiva, the God of Gods, the three-eyed Lord! Salutations to Shiva, the protector of devotees and the redeemer of life!"
  },
  {
    id: 42,
    category: "annapurna",
    titleTe: "అన్నపూర్ణాష్టకము - చరణం 7",
    titleEn: "Annapurna Ashtakam - Verse 7",
    verseTe: `అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే!
జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!`,
    verseEn: `O Mother Annapurna, ever full and complete, the beloved of Lord Sankara!
Grant us alms of knowledge and dispassion, O Goddess Parvati!`,
    wordMeaningTe: `* అన్నపూర్ణే: ధాన్య సమృద్ధిని ఇచ్చే తల్లి.
* సదాపూర్ణే: ఎల్లప్పుడూ నిండుగా ఉండేది.
* ప్రాణవల్లభే: ప్రాణనాథురాలు.
* జ్ఞానవైరాగ్య: జ్ఞానము మరియు వైరాగ్యము.
* భిక్షాం: బిక్ష లేదా ప్రసాదము.`,
    wordMeaningEn: `* Annapurne: She who is full of nourishment.
* Sadapurne: Ever complete and full.
* Pranavallabhe: Beloved consort.
* Jnana-Vairagya: Wisdom and renunciation.
* Bhiksham Dehi: Grant us alms.`,
    audioTe: "అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే! జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!",
    audioEn: "O Mother Annapurna, ever full and complete, the beloved of Lord Sankara! Grant us alms of knowledge and dispassion, O Goddess Parvati!"
  },
  {
    id: 43,
    category: "history",
    titleTe: "నరసింగపాడు ఆలయ ప్రశస్తి - పద్యం 7",
    titleEn: "Narasingapadu Temple Glory - Verse 7",
    verseTe: `పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు!
భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!`,
    verseEn: `Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu!
Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!`,
    wordMeaningTe: `* పవిత్ర క్షేత్రము: పరిశుద్ధమైన క్షేత్రము.
* వెలసిన: అవతరించిన.
* శరణు: ఆశ్రయము.
* కొలువైన: నివసించిన.`,
    wordMeaningEn: `* Pavitra Kshethramu: The holy place.
* Velasina: Self-manifested or established.
* Saranam: Safe haven.`,
    audioTe: "పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు! భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!",
    audioEn: "Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu! Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!"
  },
  {
    id: 44,
    category: "devotion",
    titleTe: "భక్తి సుధా తరంగిణి - భాగం 8",
    titleEn: "Devotional Waves - Part 8",
    verseTe: `ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం!
హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!`,
    verseEn: `Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life!
O Shambho, Viswanatha, Mahadeva, salutations to Shiva!`,
    wordMeaningTe: `* ప్రాతఃకాలే: ఉదయ కాలమున.
* స్మరణం: తలచుకోవడం.
* భవ హరణం: భవ బంధాలను పోగొట్టేది.
* తారణం: దాటించేది.`,
    wordMeaningEn: `* Pratahkale: In the early morning.
* Smaranam: Remembrance.
* Bhava Haranam: Destruction of worldly attachments.
* Taranam: Delivering across the ocean of births.`,
    audioTe: "ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం! హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!",
    audioEn: "Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life! O Shambho, Viswanatha, Mahadeva, salutations to Shiva!"
  },
  {
    id: 45,
    category: "sacred",
    titleTe: "మహాదేవ కరవలంబ స్తోత్రం - భాగం 8",
    titleEn: "Mahadeva Karavalamba Stotram - Part 8",
    verseTe: `సంసార ఘోర గహనే చరతో మమ హే దేవా!
విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!`,
    verseEn: `I am wandering in the terrifying jungle of this worldly life, O Lord!
O Visweswara, ocean of compassion, extend Your hand of support!`,
    wordMeaningTe: `* ఘోర గహనే: భయంకరమైన అడవిలో.
* మమ: నా యొక్క.
* కరుణానిధే: దయకు సముద్రుడైనవాడా.
* కరవలంబమ్: చేతిని అందించి రక్షించడం.`,
    wordMeaningEn: `* Ghora Gahane: In the dangerous forest.
* Karunānidhe: O treasure of mercy.
* Karavalambam: Hand of protection.`,
    audioTe: "సంసార ఘోర గహనే చరతో మమ హే దేవా! విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!",
    audioEn: "I am wandering in the terrifying jungle of this worldly life, O Lord! O Visweswara, ocean of compassion, extend Your hand of support!"
  },
  {
    id: 46,
    category: "shiva",
    titleTe: "కాశీ విశ్వేశ్వర స్తోత్రము - చరణం 8",
    titleEn: "Kasi Visweswara Stotram - Verse 8",
    verseTe: `మంగళరూపాయ నమః శివాయ! మణిశేఖరాయ నమః శివాయ!
గంగాధరాయ గౌరీనాథాయ దేవాయ! శంభో విశ్వేశ్వరాయ శరణం శరణం!`,
    verseEn: `Salutations to Shiva, the form of auspiciousness! Salutations to Shiva, who wears gems on His head!
Salutations to the holder of Ganga, the Lord of Gauri! O Shambho Visweswara, I seek refuge in You!`,
    wordMeaningTe: `* మంగళరూపాయ: శుభప్రదమైన రూపము కలవాడు.
* మణిశేఖరాయ: తలపై మణిని ధరించినవాడు.
* గంగాధరాయ: గంగను ధరించినవాడు.
* గౌరీనాథాయ: పార్వతీదేవి భర్త.
* శరణం: ఆశ్రయము.`,
    wordMeaningEn: `* Mangalarupaya: The embodiment of auspiciousness.
* Manishekharaya: Having a gem on His crown.
* Gangadharaya: The one who holds the river Ganga.
* Gaurinathaya: The consort of Gauri.
* Saranam: Refuge.`,
    audioTe: "మంగళరూపాయ నమః శివాయ! మణిశేఖరాయ నమః శివాయ! గంగాధరాయ గౌరీనాథాయ దేవాయ! శంభో విశ్వేశ్వరాయ శరణం శరణం!",
    audioEn: "Salutations to Shiva, the form of auspiciousness! Salutations to Shiva, who wears gems on His head! Salutations to the holder of Ganga, the Lord of Gauri! O Shambho Visweswara, I seek refuge in You!"
  },
  {
    id: 47,
    category: "annapurna",
    titleTe: "జగన్మాత అన్నపూర్ణ కీర్తన - భాగం 8",
    titleEn: "Mother Annapurna Chant - Part 8",
    verseTe: `సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే!
శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!`,
    verseEn: `O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements!
We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!`,
    wordMeaningTe: `* సర్వమంగళ మాంగల్యే: సర్వ శుభములలో అత్యంత శుభప్రదమైనదానา.
* శివే: కళ్యాణకారిణి.
* సర్వార్థ సాధికే: సర్వ పురుషార్థాలను సాధించేదానా.
* శరణ్యే: శరణు కోరదగిన తల్లి.`,
    wordMeaningEn: `* Sarvamangala Mangalye: Most auspicious among all auspicious things.
* Shive: Bestower of welfare.
* Sarvartha Sadhike: Fulfiller of all desires.
* Saranye: Worthy of taking refuge in.`,
    audioTe: "సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే! శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!",
    audioEn: "O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements! We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!"
  },
  {
    id: 48,
    category: "history",
    titleTe: "చారిత్రక శాసన గీతం - పద్యం 8",
    titleEn: "Historical Inscription Hymn - Verse 8",
    verseTe: `శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం!
తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!`,
    verseEn: `Let us read the history of this shrine recorded in the stone inscriptions!
Let us praise the divine plays of Visweswara, the merit of generations!`,
    wordMeaningTe: `* శిలా శాసనము: రాతిపై చెక్కబడిన శాసనము.
* క్షేత్ర చరిత్ర: ఆలయం యొక్క చరిత్ర.
* లీలలు: దైవ లీలలు.
* కీర్తిద్దాం: కొనిాడుదాం.`,
    wordMeaningEn: `* Shila Sasanamu: Inscription carved on stone.
* Kshethra Charitra: History of the sacred place.
* Leelalu: Divine activities.`,
    audioTe: "శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం! తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!",
    audioEn: "Let us read the history of this shrine recorded in the stone inscriptions! Let us praise the divine plays of Visweswara, the merit of generations!"
  },
  {
    id: 49,
    category: "devotion",
    titleTe: "శరణాగతి ప్రార్థన - చరణం 9",
    titleEn: "Prayer of Surrender - Verse 9",
    verseTe: `పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః!
త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!`,
    verseEn: `I am a sinner, my actions are sinful, my soul is sinful, born of sin!
O Lord, protect me out of compassion, O savior of those who surrender!`,
    wordMeaningTe: `* పాపోహం: నేను పాపాత్ముడను.
* త్రాహి మాం: నన్ను రక్షించు.
* కృపయా: దయతో.
* శరణాగత వత్సల: శరణు కోరినవారిని ప్రేమించేవాడా.`,
    wordMeaningEn: `* Papoham: I am full of sins.
* Trahi Mam: Protect me.
* Krupaya: With mercy.
* Saranagata Vatsala: Compassionate protector of those who surrender.`,
    audioTe: "పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః! త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!",
    audioEn: "I am a sinner, my actions are sinful, my soul is sinful, born of sin! O Lord, protect me out of compassion, O savior of those who surrender!"
  },
  {
    id: 50,
    category: "sacred",
    titleTe: "ఆత్మారామ ధ్యాన శ్లోకం - చరణం 9",
    titleEn: "Atmaram Meditation Hymn - Verse 9",
    verseTe: `ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి!
సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!`,
    verseEn: `Mother Annapurna along with Lord Atmaram resides in our hearts!
O Viswanatha, protector of all living beings, shine as the divine light!`,
    wordMeaningTe: `* హృదయ నివాసి: హృదయములో నివసించువాడా.
* సకల జీవ సంరక్షక: సమస్త జీవులను కాపాడేవాడా.
* జ్యోతి స్వరూప: వెలుగు రూపములో ఉన్నవాడా.
* ప్రకాశి: ప్రకాశించేవాడా.`,
    wordMeaningEn: `* Hrudaya Nivasi: Dweller of the heart.
* Sakala Jeeva Samrakshaka: Preserver of all life forms.
* Jyoti Swarupa: In the form of holy light.
* Prakashi: Illuminating one.`,
    audioTe: "ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి! సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!",
    audioEn: "Mother Annapurna along with Lord Atmaram resides in our hearts! O Viswanatha, protector of all living beings, shine as the divine light!"
  },
  {
    id: 51,
    category: "shiva",
    titleTe: "శివ పంచాక్షరి - చరణం 9",
    titleEn: "Shiva Panchakshari - Verse 9",
    verseTe: `నమః శివాయ నమః శివాయ నమః శివాయ నమః శివాయ!
హర హర శంభో మహదేవాయ విశ్వేశ్వరాయ నమః శివాయ!`,
    verseEn: `Salutations to Shiva! Salutations to Shiva!
O Hara, Shambho, Mahadeva, Visweswara! Salutations to Shiva!`,
    wordMeaningTe: `* నమః శివాయ: శివునికి నమస్కారములు.
* హర హర: పాపములను హరించేవాడు.
* శంభో: సుఖములను కలిగించేవాడు.
* విశ్వేశ్వరాయ: విశ్వానికి అధిపతి.`,
    wordMeaningEn: `* Namah Shivaya: Salutations to Lord Shiva.
* Hara: The destroyer of sins.
* Shambho: The bestower of happiness.
* Visweswaraya: The Lord of the Universe.`,
    audioTe: "నమః శివాయ నమః శివాయ నమః శివాయ నమః శివాయ! హర హర శంభో మహదేవాయ విశ్వేశ్వరాయ నమః శివాయ!",
    audioEn: "Salutations to Shiva! Salutations to Shiva! O Hara, Shambho, Mahadeva, Visweswara! Salutations to Shiva!"
  },
  {
    id: 52,
    category: "annapurna",
    titleTe: "అన్నపూర్ణాష్టకము - చరణం 9",
    titleEn: "Annapurna Ashtakam - Verse 9",
    verseTe: `అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే!
జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!`,
    verseEn: `O Mother Annapurna, ever full and complete, the beloved of Lord Sankara!
Grant us alms of knowledge and dispassion, O Goddess Parvati!`,
    wordMeaningTe: `* అన్నపూర్ణే: ధాన్య సమృద్ధిని ఇచ్చే తల్లి.
* సదాపూర్ణే: ఎల్లప్పుడూ నిండుగా ఉండేది.
* ప్రాణవల్లభే: ప్రాణనాథురాలు.
* జ్ఞానవైరాగ్య: జ్ఞానము మరియు వైరాగ్యము.
* భిక్షాం: బిక్ష లేదా ప్రసాదము.`,
    wordMeaningEn: `* Annapurne: She who is full of nourishment.
* Sadapurne: Ever complete and full.
* Pranavallabhe: Beloved consort.
* Jnana-Vairagya: Wisdom and renunciation.
* Bhiksham Dehi: Grant us alms.`,
    audioTe: "అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే! జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!",
    audioEn: "O Mother Annapurna, ever full and complete, the beloved of Lord Sankara! Grant us alms of knowledge and dispassion, O Goddess Parvati!"
  },
  {
    id: 53,
    category: "history",
    titleTe: "నరసింగపాడు ఆలయ ప్రశస్తి - పద్యం 9",
    titleEn: "Narasingapadu Temple Glory - Verse 9",
    verseTe: `పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు!
భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!`,
    verseEn: `Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu!
Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!`,
    wordMeaningTe: `* పవిత్ర క్షేత్రము: పరిశుద్ధమైన క్షేత్రము.
* వెలసిన: అవతరించిన.
* శరణు: ఆశ్రయము.
* కొలువైన: నివసించిన.`,
    wordMeaningEn: `* Pavitra Kshethramu: The holy place.
* Velasina: Self-manifested or established.
* Saranam: Safe haven.`,
    audioTe: "పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు! భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!",
    audioEn: "Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu! Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!"
  },
  {
    id: 54,
    category: "devotion",
    titleTe: "భక్తి సుధా తరంగిణి - భాగం 10",
    titleEn: "Devotional Waves - Part 10",
    verseTe: `ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం!
హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!`,
    verseEn: `Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life!
O Shambho, Viswanatha, Mahadeva, salutations to Shiva!`,
    wordMeaningTe: `* ప్రాతఃకాలే: ఉదయ కాలమున.
* స్మరణం: తలచుకోవడం.
* భవ హరణం: భవ బంధాలను పోగొట్టేది.
* తారణం: దాటించేది.`,
    wordMeaningEn: `* Pratahkale: In the early morning.
* Smaranam: Remembrance.
* Bhava Haranam: Destruction of worldly attachments.
* Taranam: Delivering across the ocean of births.`,
    audioTe: "ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం! హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!",
    audioEn: "Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life! O Shambho, Viswanatha, Mahadeva, salutations to Shiva!"
  },
  {
    id: 55,
    category: "sacred",
    titleTe: "మహాదేవ కరవలంబ స్తోత్రం - భాగం 10",
    titleEn: "Mahadeva Karavalamba Stotram - Part 10",
    verseTe: `సంసార ఘోర గహనే చరతో మమ హే దేవా!
విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!`,
    verseEn: `I am wandering in the terrifying jungle of this worldly life, O Lord!
O Visweswara, ocean of compassion, extend Your hand of support!`,
    wordMeaningTe: `* ఘోర గహనే: భయంకరమైన అడవిలో.
* మమ: నా యొక్క.
* కరుణానిధే: దయకు సముద్రుడైనవాడా.
* కరవలంబమ్: చేతిని అందించి రక్షించడం.`,
    wordMeaningEn: `* Ghora Gahane: In the dangerous forest.
* Karunānidhe: O treasure of mercy.
* Karavalambam: Hand of protection.`,
    audioTe: "సంసార ఘోర గహనే చరతో మమ హే దేవా! విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!",
    audioEn: "I am wandering in the terrifying jungle of this worldly life, O Lord! O Visweswara, ocean of compassion, extend Your hand of support!"
  },
  {
    id: 56,
    category: "shiva",
    titleTe: "నమః శివాయ స్తుతి - భాగం 10",
    titleEn: "Namah Shivaya Praise - Part 10",
    verseTe: `దేవదేవాయ త్రిలోచనాత్మకాయ నమః శివాయ!
భక్త రక్షకాయ భవతారకాయ నమః శివాయ!`,
    verseEn: `Salutations to Shiva, the God of Gods, the three-eyed Lord!
Salutations to Shiva, the protector of devotees and the redeemer of life!`,
    wordMeaningTe: `* త్రిలోచనాత్మకాయ: మూడు కన్నులు గలవాడు.
* దేవదేవాయ: దేవతలకు దేవుడు.
* భక్త రక్షకాయ: భక్తులను రక్షించేవాడు.
* భవతారకాయ: సంసార సాగరాన్ని దాటించేవాడు.`,
    wordMeaningEn: `* Trilochanatmakaya: The three-eyed Lord.
* Devadevaya: The God of Gods.
* Bhakta Rakshakaya: The protector of devotees.
* Bhavatarakaya: The savior from the cycle of rebirth.`,
    audioTe: "దేవదేవాయ త్రిలోచనాత్మకాయ నమః శివాయ! భక్త రక్షకాయ భవతారకాయ నమః శివాయ!",
    audioEn: "Salutations to Shiva, the God of Gods, the three-eyed Lord! Salutations to Shiva, the protector of devotees and the redeemer of life!"
  },
  {
    id: 57,
    category: "annapurna",
    titleTe: "జగన్మాత అన్నపూర్ణ కీర్తన - భాగం 10",
    titleEn: "Mother Annapurna Chant - Part 10",
    verseTe: `సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే!
శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!`,
    verseEn: `O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements!
We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!`,
    wordMeaningTe: `* సర్వమంగళ మాంగల్యే: సర్వ శుభములలో అత్యంత శుభప్రదమైనదానา.
* శివే: కళ్యాణకారిణి.
* సర్వార్థ సాధికే: సర్వ పురుషార్థాలను సాధించేదానా.
* శరణ్యే: శరణు కోరదగిన తల్లి.`,
    wordMeaningEn: `* Sarvamangala Mangalye: Most auspicious among all auspicious things.
* Shive: Bestower of welfare.
* Sarvartha Sadhike: Fulfiller of all desires.
* Saranye: Worthy of taking refuge in.`,
    audioTe: "సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే! శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!",
    audioEn: "O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements! We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!"
  },
  {
    id: 58,
    category: "history",
    titleTe: "చారిత్రక శాసన గీతం - పద్యం 10",
    titleEn: "Historical Inscription Hymn - Verse 10",
    verseTe: `శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం!
తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!`,
    verseEn: `Let us read the history of this shrine recorded in the stone inscriptions!
Let us praise the divine plays of Visweswara, the merit of generations!`,
    wordMeaningTe: `* శిలా శాసనము: రాతిపై చెక్కబడిన శాసనము.
* క్షేత్ర చరిత్ర: ఆలయం యొక్క చరిత్ర.
* లీలలు: దైవ లీలలు.
* కీర్తిద్దాం: కొనిాడుదాం.`,
    wordMeaningEn: `* Shila Sasanamu: Inscription carved on stone.
* Kshethra Charitra: History of the sacred place.
* Leelalu: Divine activities.`,
    audioTe: "శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం! తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!",
    audioEn: "Let us read the history of this shrine recorded in the stone inscriptions! Let us praise the divine plays of Visweswara, the merit of generations!"
  },
  {
    id: 59,
    category: "devotion",
    titleTe: "శరణాగతి ప్రార్థన - చరణం 11",
    titleEn: "Prayer of Surrender - Verse 11",
    verseTe: `పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః!
త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!`,
    verseEn: `I am a sinner, my actions are sinful, my soul is sinful, born of sin!
O Lord, protect me out of compassion, O savior of those who surrender!`,
    wordMeaningTe: `* పాపోహం: నేను పాపాత్ముడను.
* త్రాహి మాం: నన్ను రక్షించు.
* కృపయా: దయతో.
* శరణాగత వత్సల: శరణు కోరినవారిని ప్రేమించేవాడా.`,
    wordMeaningEn: `* Papoham: I am full of sins.
* Trahi Mam: Protect me.
* Krupaya: With mercy.
* Saranagata Vatsala: Compassionate protector of those who surrender.`,
    audioTe: "పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః! త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!",
    audioEn: "I am a sinner, my actions are sinful, my soul is sinful, born of sin! O Lord, protect me out of compassion, O savior of those who surrender!"
  },
  {
    id: 60,
    category: "sacred",
    titleTe: "ఆత్మారామ ధ్యాన శ్లోకం - చరణం 11",
    titleEn: "Atmaram Meditation Hymn - Verse 11",
    verseTe: `ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి!
సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!`,
    verseEn: `Mother Annapurna along with Lord Atmaram resides in our hearts!
O Viswanatha, protector of all living beings, shine as the divine light!`,
    wordMeaningTe: `* హృదయ నివాసి: హృదయములో నివసించువాడా.
* సకల జీవ సంరక్షక: సమస్త జీవులను కాపాడేవాడా.
* జ్యోతి స్వరూప: వెలుగు రూపములో ఉన్నవాడా.
* ప్రకాశి: ప్రకాశించేవాడా.`,
    wordMeaningEn: `* Hrudaya Nivasi: Dweller of the heart.
* Sakala Jeeva Samrakshaka: Preserver of all life forms.
* Jyoti Swarupa: In the form of holy light.
* Prakashi: Illuminating one.`,
    audioTe: "ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి! సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!",
    audioEn: "Mother Annapurna along with Lord Atmaram resides in our hearts! O Viswanatha, protector of all living beings, shine as the divine light!"
  },
  {
    id: 61,
    category: "shiva",
    titleTe: "కాశీ విశ్వేశ్వర స్తోత్రము - చరణం 11",
    titleEn: "Kasi Visweswara Stotram - Verse 11",
    verseTe: `మంగళరూపాయ నమః శివాయ! మణిశేఖరాయ నమః శివాయ!
గంగాధరాయ గౌరీనాథాయ దేవాయ! శంభో విశ్వేశ్వరాయ శరణం శరణం!`,
    verseEn: `Salutations to Shiva, the form of auspiciousness! Salutations to Shiva, who wears gems on His head!
Salutations to the holder of Ganga, the Lord of Gauri! O Shambho Visweswara, I seek refuge in You!`,
    wordMeaningTe: `* మంగళరూపాయ: శుభప్రదమైన రూపము కలవాడు.
* మణిశేఖరాయ: తలపై మణిని ధరించినవాడు.
* గంగాధరాయ: గంగను ధరించినవాడు.
* గౌరీనాథాయ: పార్వతీదేవి భర్త.
* శరణం: ఆశ్రయము.`,
    wordMeaningEn: `* Mangalarupaya: The embodiment of auspiciousness.
* Manishekharaya: Having a gem on His crown.
* Gangadharaya: The one who holds the river Ganga.
* Gaurinathaya: The consort of Gauri.
* Saranam: Refuge.`,
    audioTe: "మంగళరూపాయ నమః శివాయ! మణిశేఖరాయ నమః శివాయ! గంగాధరాయ గౌరీనాథాయ దేవాయ! శంభో విశ్వేశ్వరాయ శరణం శరణం!",
    audioEn: "Salutations to Shiva, the form of auspiciousness! Salutations to Shiva, who wears gems on His head! Salutations to the holder of Ganga, the Lord of Gauri! O Shambho Visweswara, I seek refuge in You!"
  },
  {
    id: 62,
    category: "annapurna",
    titleTe: "అన్నపూర్ణాష్టకము - చరణం 11",
    titleEn: "Annapurna Ashtakam - Verse 11",
    verseTe: `అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే!
జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!`,
    verseEn: `O Mother Annapurna, ever full and complete, the beloved of Lord Sankara!
Grant us alms of knowledge and dispassion, O Goddess Parvati!`,
    wordMeaningTe: `* అన్నపూర్ణే: ధాన్య సమృద్ధిని ఇచ్చే తల్లి.
* సదాపూర్ణే: ఎల్లప్పుడూ నిండుగా ఉండేది.
* ప్రాణవల్లభే: ప్రాణనాథురాలు.
* జ్ఞానవైరాగ్య: జ్ఞానము మరియు వైరాగ్యము.
* భిక్షాం: బిక్ష లేదా ప్రసాదము.`,
    wordMeaningEn: `* Annapurne: She who is full of nourishment.
* Sadapurne: Ever complete and full.
* Pranavallabhe: Beloved consort.
* Jnana-Vairagya: Wisdom and renunciation.
* Bhiksham Dehi: Grant us alms.`,
    audioTe: "అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే! జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!",
    audioEn: "O Mother Annapurna, ever full and complete, the beloved of Lord Sankara! Grant us alms of knowledge and dispassion, O Goddess Parvati!"
  },
  {
    id: 63,
    category: "history",
    titleTe: "నరసింగపాడు ఆలయ ప్రశస్తి - పద్యం 11",
    titleEn: "Narasingapadu Temple Glory - Verse 11",
    verseTe: `పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు!
భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!`,
    verseEn: `Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu!
Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!`,
    wordMeaningTe: `* పవిత్ర క్షేత్రము: పరిశుద్ధమైన క్షేత్రము.
* వెలసిన: అవతరించిన.
* శరణు: ఆశ్రయము.
* కొలువైన: నివసించిన.`,
    wordMeaningEn: `* Pavitra Kshethramu: The holy place.
* Velasina: Self-manifested or established.
* Saranam: Safe haven.`,
    audioTe: "పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు! భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!",
    audioEn: "Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu! Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!"
  },
  {
    id: 64,
    category: "devotion",
    titleTe: "భక్తి సుధా తరంగిణి - భాగం 12",
    titleEn: "Devotional Waves - Part 12",
    verseTe: `ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం!
హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!`,
    verseEn: `Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life!
O Shambho, Viswanatha, Mahadeva, salutations to Shiva!`,
    wordMeaningTe: `* ప్రాతఃకాలే: ఉదయ కాలమున.
* స్మరణం: తలచుకోవడం.
* భవ హరణం: భవ బంధాలను పోగొట్టేది.
* తారణం: దాటించేది.`,
    wordMeaningEn: `* Pratahkale: In the early morning.
* Smaranam: Remembrance.
* Bhava Haranam: Destruction of worldly attachments.
* Taranam: Delivering across the ocean of births.`,
    audioTe: "ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం! హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!",
    audioEn: "Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life! O Shambho, Viswanatha, Mahadeva, salutations to Shiva!"
  },
  {
    id: 65,
    category: "sacred",
    titleTe: "మహాదేవ కరవలంబ స్తోత్రం - భాగం 12",
    titleEn: "Mahadeva Karavalamba Stotram - Part 12",
    verseTe: `సంసార ఘోర గహనే చరతో మమ హే దేవా!
విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!`,
    verseEn: `I am wandering in the terrifying jungle of this worldly life, O Lord!
O Visweswara, ocean of compassion, extend Your hand of support!`,
    wordMeaningTe: `* ఘోర గహనే: భయంకరమైన అడవిలో.
* మమ: నా యొక్క.
* కరుణానిధే: దయకు సముద్రుడైనవాడా.
* కరవలంబమ్: చేతిని అందించి రక్షించడం.`,
    wordMeaningEn: `* Ghora Gahane: In the dangerous forest.
* Karunānidhe: O treasure of mercy.
* Karavalambam: Hand of protection.`,
    audioTe: "సంసార ఘోర గహనే చరతో మమ హే దేవా! విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!",
    audioEn: "I am wandering in the terrifying jungle of this worldly life, O Lord! O Visweswara, ocean of compassion, extend Your hand of support!"
  },
  {
    id: 66,
    category: "shiva",
    titleTe: "శివ పంచాక్షరి - చరణం 12",
    titleEn: "Shiva Panchakshari - Verse 12",
    verseTe: `నమః శివాయ నమః శివాయ నమః శివాయ నమః శివాయ!
హర హర శంభో మహదేవాయ విశ్వేశ్వరాయ నమః శివాయ!`,
    verseEn: `Salutations to Shiva! Salutations to Shiva!
O Hara, Shambho, Mahadeva, Visweswara! Salutations to Shiva!`,
    wordMeaningTe: `* నమః శివాయ: శివునికి నమస్కారములు.
* హర హర: పాపములను హరించేవాడు.
* శంభో: సుఖములను కలిగించేవాడు.
* విశ్వేశ్వరాయ: విశ్వానికి అధిపతి.`,
    wordMeaningEn: `* Namah Shivaya: Salutations to Lord Shiva.
* Hara: The destroyer of sins.
* Shambho: The bestower of happiness.
* Visweswaraya: The Lord of the Universe.`,
    audioTe: "నమః శివాయ నమః శివాయ నమః శివాయ నమః శివాయ! హర హర శంభో మహదేవాయ విశ్వేశ్వరాయ నమః శివాయ!",
    audioEn: "Salutations to Shiva! Salutations to Shiva! O Hara, Shambho, Mahadeva, Visweswara! Salutations to Shiva!"
  },
  {
    id: 67,
    category: "annapurna",
    titleTe: "జగన్మాత అన్నపూర్ణ కీర్తన - భాగం 12",
    titleEn: "Mother Annapurna Chant - Part 12",
    verseTe: `సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే!
శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!`,
    verseEn: `O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements!
We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!`,
    wordMeaningTe: `* సర్వమంగళ మాంగల్యే: సర్వ శుభములలో అత్యంత శుభప్రదమైనదానา.
* శివే: కళ్యాణకారిణి.
* సర్వార్థ సాధికే: సర్వ పురుషార్థాలను సాధించేదానా.
* శరణ్యే: శరణు కోరదగిన తల్లి.`,
    wordMeaningEn: `* Sarvamangala Mangalye: Most auspicious among all auspicious things.
* Shive: Bestower of welfare.
* Sarvartha Sadhike: Fulfiller of all desires.
* Saranye: Worthy of taking refuge in.`,
    audioTe: "సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే! శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!",
    audioEn: "O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements! We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!"
  },
  {
    id: 68,
    category: "history",
    titleTe: "చారిత్రక శాసన గీతం - పద్యం 12",
    titleEn: "Historical Inscription Hymn - Verse 12",
    verseTe: `శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం!
తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!`,
    verseEn: `Let us read the history of this shrine recorded in the stone inscriptions!
Let us praise the divine plays of Visweswara, the merit of generations!`,
    wordMeaningTe: `* శిలా శాసనము: రాతిపై చెక్కబడిన శాసనము.
* క్షేత్ర చరిత్ర: ఆలయం యొక్క చరిత్ర.
* లీలలు: దైవ లీలలు.
* కీర్తిద్దాం: కొనిాడుదాం.`,
    wordMeaningEn: `* Shila Sasanamu: Inscription carved on stone.
* Kshethra Charitra: History of the sacred place.
* Leelalu: Divine activities.`,
    audioTe: "శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం! తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!",
    audioEn: "Let us read the history of this shrine recorded in the stone inscriptions! Let us praise the divine plays of Visweswara, the merit of generations!"
  },
  {
    id: 69,
    category: "devotion",
    titleTe: "శరణాగతి ప్రార్థన - చరణం 13",
    titleEn: "Prayer of Surrender - Verse 13",
    verseTe: `పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః!
త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!`,
    verseEn: `I am a sinner, my actions are sinful, my soul is sinful, born of sin!
O Lord, protect me out of compassion, O savior of those who surrender!`,
    wordMeaningTe: `* పాపోహం: నేను పాపాత్ముడను.
* త్రాహి మాం: నన్ను రక్షించు.
* కృపయా: దయతో.
* శరణాగత వత్సల: శరణు కోరినవారిని ప్రేమించేవాడా.`,
    wordMeaningEn: `* Papoham: I am full of sins.
* Trahi Mam: Protect me.
* Krupaya: With mercy.
* Saranagata Vatsala: Compassionate protector of those who surrender.`,
    audioTe: "పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః! త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!",
    audioEn: "I am a sinner, my actions are sinful, my soul is sinful, born of sin! O Lord, protect me out of compassion, O savior of those who surrender!"
  },
  {
    id: 70,
    category: "sacred",
    titleTe: "ఆత్మారామ ధ్యాన శ్లోకం - చరణం 13",
    titleEn: "Atmaram Meditation Hymn - Verse 13",
    verseTe: `ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి!
సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!`,
    verseEn: `Mother Annapurna along with Lord Atmaram resides in our hearts!
O Viswanatha, protector of all living beings, shine as the divine light!`,
    wordMeaningTe: `* హృదయ నివాసి: హృదయములో నివసించువాడా.
* సకల జీవ సంరక్షక: సమస్త జీవులను కాపాడేవాడా.
* జ్యోతి స్వరూప: వెలుగు రూపములో ఉన్నవాడా.
* ప్రకాశి: ప్రకాశించేవాడా.`,
    wordMeaningEn: `* Hrudaya Nivasi: Dweller of the heart.
* Sakala Jeeva Samrakshaka: Preserver of all life forms.
* Jyoti Swarupa: In the form of holy light.
* Prakashi: Illuminating one.`,
    audioTe: "ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి! సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!",
    audioEn: "Mother Annapurna along with Lord Atmaram resides in our hearts! O Viswanatha, protector of all living beings, shine as the divine light!"
  },
  {
    id: 71,
    category: "shiva",
    titleTe: "నమః శివాయ స్తుతి - భాగం 13",
    titleEn: "Namah Shivaya Praise - Part 13",
    verseTe: `దేవదేవాయ త్రిలోచనాత్మకాయ నమః శివాయ!
భక్త రక్షకాయ భవతారకాయ నమః శివాయ!`,
    verseEn: `Salutations to Shiva, the God of Gods, the three-eyed Lord!
Salutations to Shiva, the protector of devotees and the redeemer of life!`,
    wordMeaningTe: `* త్రిలోచనాత్మకాయ: మూడు కన్నులు గలవాడు.
* దేవదేవాయ: దేవతలకు దేవుడు.
* భక్త రక్షకాయ: భక్తులను రక్షించేవాడు.
* భవతారకాయ: సంసార సాగరాన్ని దాటించేవాడు.`,
    wordMeaningEn: `* Trilochanatmakaya: The three-eyed Lord.
* Devadevaya: The God of Gods.
* Bhakta Rakshakaya: The protector of devotees.
* Bhavatarakaya: The savior from the cycle of rebirth.`,
    audioTe: "దేవదేవాయ త్రిలోచనాత్మకాయ నమః శివాయ! భక్త రక్షకాయ భవతారకాయ నమః శివాయ!",
    audioEn: "Salutations to Shiva, the God of Gods, the three-eyed Lord! Salutations to Shiva, the protector of devotees and the redeemer of life!"
  },
  {
    id: 72,
    category: "annapurna",
    titleTe: "అన్నపూర్ణాష్టకము - చరణం 13",
    titleEn: "Annapurna Ashtakam - Verse 13",
    verseTe: `అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే!
జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!`,
    verseEn: `O Mother Annapurna, ever full and complete, the beloved of Lord Sankara!
Grant us alms of knowledge and dispassion, O Goddess Parvati!`,
    wordMeaningTe: `* అన్నపూర్ణే: ధాన్య సమృద్ధిని ఇచ్చే తల్లి.
* సదాపూర్ణే: ఎల్లప్పుడూ నిండుగా ఉండేది.
* ప్రాణవల్లభే: ప్రాణనాథురాలు.
* జ్ఞానవైరాగ్య: జ్ఞానము మరియు వైరాగ్యము.
* భిక్షాం: బిక్ష లేదా ప్రసాదము.`,
    wordMeaningEn: `* Annapurne: She who is full of nourishment.
* Sadapurne: Ever complete and full.
* Pranavallabhe: Beloved consort.
* Jnana-Vairagya: Wisdom and renunciation.
* Bhiksham Dehi: Grant us alms.`,
    audioTe: "అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే! జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!",
    audioEn: "O Mother Annapurna, ever full and complete, the beloved of Lord Sankara! Grant us alms of knowledge and dispassion, O Goddess Parvati!"
  },
  {
    id: 73,
    category: "history",
    titleTe: "నరసింగపాడు ఆలయ ప్రశస్తి - పద్యం 13",
    titleEn: "Narasingapadu Temple Glory - Verse 13",
    verseTe: `పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు!
భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!`,
    verseEn: `Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu!
Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!`,
    wordMeaningTe: `* పవిత్ర క్షేత్రము: పరిశుద్ధమైన క్షేత్రము.
* వెలసిన: అవతరించిన.
* శరణు: ఆశ్రయము.
* కొలువైన: నివసించిన.`,
    wordMeaningEn: `* Pavitra Kshethramu: The holy place.
* Velasina: Self-manifested or established.
* Saranam: Safe haven.`,
    audioTe: "పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు! భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!",
    audioEn: "Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu! Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!"
  },
  {
    id: 74,
    category: "devotion",
    titleTe: "భక్తి సుధా తరంగిణి - భాగం 14",
    titleEn: "Devotional Waves - Part 14",
    verseTe: `ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం!
హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!`,
    verseEn: `Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life!
O Shambho, Viswanatha, Mahadeva, salutations to Shiva!`,
    wordMeaningTe: `* ప్రాతఃకాలే: ఉదయ కాలమున.
* స్మరణం: తలచుకోవడం.
* భవ హరణం: భవ బంధాలను పోగొట్టేది.
* తారణం: దాటించేది.`,
    wordMeaningEn: `* Pratahkale: In the early morning.
* Smaranam: Remembrance.
* Bhava Haranam: Destruction of worldly attachments.
* Taranam: Delivering across the ocean of births.`,
    audioTe: "ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం! హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!",
    audioEn: "Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life! O Shambho, Viswanatha, Mahadeva, salutations to Shiva!"
  },
  {
    id: 75,
    category: "sacred",
    titleTe: "మహాదేవ కరవలంబ స్తోత్రం - భాగం 14",
    titleEn: "Mahadeva Karavalamba Stotram - Part 14",
    verseTe: `సంసార ఘోర గహనే చరతో మమ హే దేవా!
విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!`,
    verseEn: `I am wandering in the terrifying jungle of this worldly life, O Lord!
O Visweswara, ocean of compassion, extend Your hand of support!`,
    wordMeaningTe: `* ఘోర గహనే: భయంకరమైన అడవిలో.
* మమ: నా యొక్క.
* కరుణానిధే: దయకు సముద్రుడైనవాడా.
* కరవలంబమ్: చేతిని అందించి రక్షించడం.`,
    wordMeaningEn: `* Ghora Gahane: In the dangerous forest.
* Karunānidhe: O treasure of mercy.
* Karavalambam: Hand of protection.`,
    audioTe: "సంసార ఘోర గహనే చరతో మమ హే దేవా! విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!",
    audioEn: "I am wandering in the terrifying jungle of this worldly life, O Lord! O Visweswara, ocean of compassion, extend Your hand of support!"
  },
  {
    id: 76,
    category: "shiva",
    titleTe: "కాశీ విశ్వేశ్వర స్తోత్రము - చరణం 14",
    titleEn: "Kasi Visweswara Stotram - Verse 14",
    verseTe: `మంగళరూపాయ నమః శివాయ! మణిశేఖరాయ నమః శివాయ!
గంగాధరాయ గౌరీనాథాయ దేవాయ! శంభో విశ్వేశ్వరాయ శరణం శరణం!`,
    verseEn: `Salutations to Shiva, the form of auspiciousness! Salutations to Shiva, who wears gems on His head!
Salutations to the holder of Ganga, the Lord of Gauri! O Shambho Visweswara, I seek refuge in You!`,
    wordMeaningTe: `* మంగళరూపాయ: శుభప్రదమైన రూపము కలవాడు.
* మణిశేఖరాయ: తలపై మణిని ధరించినవాడు.
* గంగాధరాయ: గంగను ధరించినవాడు.
* గౌరీనాథాయ: పార్వతీదేవి భర్త.
* శరణం: ఆశ్రయము.`,
    wordMeaningEn: `* Mangalarupaya: The embodiment of auspiciousness.
* Manishekharaya: Having a gem on His crown.
* Gangadharaya: The one who holds the river Ganga.
* Gaurinathaya: The consort of Gauri.
* Saranam: Refuge.`,
    audioTe: "మంగళరూపాయ నమః శివాయ! మణిశేఖరాయ నమః శివాయ! గంగాధరాయ గౌరీనాథాయ దేవాయ! శంభో విశ్వేశ్వరాయ శరణం శరణం!",
    audioEn: "Salutations to Shiva, the form of auspiciousness! Salutations to Shiva, who wears gems on His head! Salutations to the holder of Ganga, the Lord of Gauri! O Shambho Visweswara, I seek refuge in You!"
  },
  {
    id: 77,
    category: "annapurna",
    titleTe: "జగన్మాత అన్నపూర్ణ కీర్తన - భాగం 14",
    titleEn: "Mother Annapurna Chant - Part 14",
    verseTe: `సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే!
శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!`,
    verseEn: `O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements!
We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!`,
    wordMeaningTe: `* సర్వమంగళ మాంగల్యే: సర్వ శుభములలో అత్యంత శుభప్రదమైనదానา.
* శివే: కళ్యాణకారిణి.
* సర్వార్థ సాధికే: సర్వ పురుషార్థాలను సాధించేదానా.
* శరణ్యే: శరణు కోరదగిన తల్లి.`,
    wordMeaningEn: `* Sarvamangala Mangalye: Most auspicious among all auspicious things.
* Shive: Bestower of welfare.
* Sarvartha Sadhike: Fulfiller of all desires.
* Saranye: Worthy of taking refuge in.`,
    audioTe: "సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే! శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!",
    audioEn: "O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements! We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!"
  },
  {
    id: 78,
    category: "history",
    titleTe: "చారిత్రక శాసన గీతం - పద్యం 14",
    titleEn: "Historical Inscription Hymn - Verse 14",
    verseTe: `శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం!
తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!`,
    verseEn: `Let us read the history of this shrine recorded in the stone inscriptions!
Let us praise the divine plays of Visweswara, the merit of generations!`,
    wordMeaningTe: `* శిలా శాసనము: రాతిపై చెక్కబడిన శాసనము.
* క్షేత్ర చరిత్ర: ఆలయం యొక్క చరిత్ర.
* లీలలు: దైవ లీలలు.
* కీర్తిద్దాం: కొనిాడుదాం.`,
    wordMeaningEn: `* Shila Sasanamu: Inscription carved on stone.
* Kshethra Charitra: History of the sacred place.
* Leelalu: Divine activities.`,
    audioTe: "శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం! తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!",
    audioEn: "Let us read the history of this shrine recorded in the stone inscriptions! Let us praise the divine plays of Visweswara, the merit of generations!"
  },
  {
    id: 79,
    category: "devotion",
    titleTe: "శరణాగతి ప్రార్థన - చరణం 15",
    titleEn: "Prayer of Surrender - Verse 15",
    verseTe: `పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః!
త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!`,
    verseEn: `I am a sinner, my actions are sinful, my soul is sinful, born of sin!
O Lord, protect me out of compassion, O savior of those who surrender!`,
    wordMeaningTe: `* పాపోహం: నేను పాపాత్ముడను.
* త్రాహి మాం: నన్ను రక్షించు.
* కృపయా: దయతో.
* శరణాగత వత్సల: శరణు కోరినవారిని ప్రేమించేవాడా.`,
    wordMeaningEn: `* Papoham: I am full of sins.
* Trahi Mam: Protect me.
* Krupaya: With mercy.
* Saranagata Vatsala: Compassionate protector of those who surrender.`,
    audioTe: "పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః! త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!",
    audioEn: "I am a sinner, my actions are sinful, my soul is sinful, born of sin! O Lord, protect me out of compassion, O savior of those who surrender!"
  },
  {
    id: 80,
    category: "sacred",
    titleTe: "ఆత్మారామ ధ్యాన శ్లోకం - చరణం 15",
    titleEn: "Atmaram Meditation Hymn - Verse 15",
    verseTe: `ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి!
సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!`,
    verseEn: `Mother Annapurna along with Lord Atmaram resides in our hearts!
O Viswanatha, protector of all living beings, shine as the divine light!`,
    wordMeaningTe: `* హృదయ నివాసి: హృదయములో నివసించువాడా.
* సకల జీవ సంరక్షక: సమస్త జీవులను కాపాడేవాడా.
* జ్యోతి స్వరూప: వెలుగు రూపములో ఉన్నవాడా.
* ప్రకాశి: ప్రకాశించేవాడా.`,
    wordMeaningEn: `* Hrudaya Nivasi: Dweller of the heart.
* Sakala Jeeva Samrakshaka: Preserver of all life forms.
* Jyoti Swarupa: In the form of holy light.
* Prakashi: Illuminating one.`,
    audioTe: "ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి! సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!",
    audioEn: "Mother Annapurna along with Lord Atmaram resides in our hearts! O Viswanatha, protector of all living beings, shine as the divine light!"
  },
  {
    id: 81,
    category: "shiva",
    titleTe: "శివ పంచాక్షరి - చరణం 15",
    titleEn: "Shiva Panchakshari - Verse 15",
    verseTe: `నమః శివాయ నమః శివాయ నమః శివాయ నమః శివాయ!
హర హర శంభో మహదేవాయ విశ్వేశ్వరాయ నమః శివాయ!`,
    verseEn: `Salutations to Shiva! Salutations to Shiva!
O Hara, Shambho, Mahadeva, Visweswara! Salutations to Shiva!`,
    wordMeaningTe: `* నమః శివాయ: శివునికి నమస్కారములు.
* హర హర: పాపములను హరించేవాడు.
* శంభో: సుఖములను కలిగించేవాడు.
* విశ్వేశ్వరాయ: విశ్వానికి అధిపతి.`,
    wordMeaningEn: `* Namah Shivaya: Salutations to Lord Shiva.
* Hara: The destroyer of sins.
* Shambho: The bestower of happiness.
* Visweswaraya: The Lord of the Universe.`,
    audioTe: "నమః శివాయ నమః శివాయ నమః శివాయ నమః శివాయ! హర హర శంభో మహదేవాయ విశ్వేశ్వరాయ నమః శివాయ!",
    audioEn: "Salutations to Shiva! Salutations to Shiva! O Hara, Shambho, Mahadeva, Visweswara! Salutations to Shiva!"
  },
  {
    id: 82,
    category: "annapurna",
    titleTe: "అన్నపూర్ణాష్టకము - చరణం 15",
    titleEn: "Annapurna Ashtakam - Verse 15",
    verseTe: `అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే!
జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!`,
    verseEn: `O Mother Annapurna, ever full and complete, the beloved of Lord Sankara!
Grant us alms of knowledge and dispassion, O Goddess Parvati!`,
    wordMeaningTe: `* అన్నపూర్ణే: ధాన్య సమృద్ధిని ఇచ్చే తల్లి.
* సదాపూర్ణే: ఎల్లప్పుడూ నిండుగా ఉండేది.
* ప్రాణవల్లభే: ప్రాణనాథురాలు.
* జ్ఞానవైరాగ్య: జ్ఞానము మరియు వైరాగ్యము.
* భిక్షాం: బిక్ష లేదా ప్రసాదము.`,
    wordMeaningEn: `* Annapurne: She who is full of nourishment.
* Sadapurne: Ever complete and full.
* Pranavallabhe: Beloved consort.
* Jnana-Vairagya: Wisdom and renunciation.
* Bhiksham Dehi: Grant us alms.`,
    audioTe: "అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే! జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!",
    audioEn: "O Mother Annapurna, ever full and complete, the beloved of Lord Sankara! Grant us alms of knowledge and dispassion, O Goddess Parvati!"
  },
  {
    id: 83,
    category: "history",
    titleTe: "నరసింగపాడు ఆలయ ప్రశస్తి - పద్యం 15",
    titleEn: "Narasingapadu Temple Glory - Verse 15",
    verseTe: `పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు!
భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!`,
    verseEn: `Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu!
Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!`,
    wordMeaningTe: `* పవిత్ర క్షేత్రము: పరిశుద్ధమైన క్షేత్రము.
* వెలసిన: అవతరించిన.
* శరణు: ఆశ్రయము.
* కొలువైన: నివసించిన.`,
    wordMeaningEn: `* Pavitra Kshethramu: The holy place.
* Velasina: Self-manifested or established.
* Saranam: Safe haven.`,
    audioTe: "పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు! భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!",
    audioEn: "Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu! Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!"
  },
  {
    id: 84,
    category: "devotion",
    titleTe: "భక్తి సుధా తరంగిణి - భాగం 16",
    titleEn: "Devotional Waves - Part 16",
    verseTe: `ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం!
హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!`,
    verseEn: `Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life!
O Shambho, Viswanatha, Mahadeva, salutations to Shiva!`,
    wordMeaningTe: `* ప్రాతఃకాలే: ఉదయ కాలమున.
* స్మరణం: తలచుకోవడం.
* భవ హరణం: భవ బంధాలను పోగొట్టేది.
* తారణం: దాటించేది.`,
    wordMeaningEn: `* Pratahkale: In the early morning.
* Smaranam: Remembrance.
* Bhava Haranam: Destruction of worldly attachments.
* Taranam: Delivering across the ocean of births.`,
    audioTe: "ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం! హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!",
    audioEn: "Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life! O Shambho, Viswanatha, Mahadeva, salutations to Shiva!"
  },
  {
    id: 85,
    category: "sacred",
    titleTe: "మహాదేవ కరవలంబ స్తోత్రం - భాగం 16",
    titleEn: "Mahadeva Karavalamba Stotram - Part 16",
    verseTe: `సంసార ఘోర గహనే చరతో మమ హే దేవా!
విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!`,
    verseEn: `I am wandering in the terrifying jungle of this worldly life, O Lord!
O Visweswara, ocean of compassion, extend Your hand of support!`,
    wordMeaningTe: `* ఘోర గహనే: భయంకరమైన అడవిలో.
* మమ: నా యొక్క.
* కరుణానిధే: దయకు సముద్రుడైనవాడా.
* కరవలంబమ్: చేతిని అందించి రక్షించడం.`,
    wordMeaningEn: `* Ghora Gahane: In the dangerous forest.
* Karunānidhe: O treasure of mercy.
* Karavalambam: Hand of protection.`,
    audioTe: "సంసార ఘోర గహనే చరతో మమ హే దేవా! విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!",
    audioEn: "I am wandering in the terrifying jungle of this worldly life, O Lord! O Visweswara, ocean of compassion, extend Your hand of support!"
  },
  {
    id: 86,
    category: "shiva",
    titleTe: "నమః శివాయ స్తుతి - భాగం 16",
    titleEn: "Namah Shivaya Praise - Part 16",
    verseTe: `దేవదేవాయ త్రిలోచనాత్మకాయ నమః శివాయ!
భక్త రక్షకాయ భవతారకాయ నమః శివాయ!`,
    verseEn: `Salutations to Shiva, the God of Gods, the three-eyed Lord!
Salutations to Shiva, the protector of devotees and the redeemer of life!`,
    wordMeaningTe: `* త్రిలోచనాత్మకాయ: మూడు కన్నులు గలవాడు.
* దేవదేవాయ: దేవతలకు దేవుడు.
* భక్త రక్షకాయ: భక్తులను రక్షించేవాడు.
* భవతారకాయ: సంసార సాగరాన్ని దాటించేవాడు.`,
    wordMeaningEn: `* Trilochanatmakaya: The three-eyed Lord.
* Devadevaya: The God of Gods.
* Bhakta Rakshakaya: The protector of devotees.
* Bhavatarakaya: The savior from the cycle of rebirth.`,
    audioTe: "దేవదేవాయ త్రిలోచనాత్మకాయ నమః శివాయ! భక్త రక్షకాయ భవతారకాయ నమః శివాయ!",
    audioEn: "Salutations to Shiva, the God of Gods, the three-eyed Lord! Salutations to Shiva, the protector of devotees and the redeemer of life!"
  },
  {
    id: 87,
    category: "annapurna",
    titleTe: "జగన్మాత అన్నపూర్ణ కీర్తన - భాగం 16",
    titleEn: "Mother Annapurna Chant - Part 16",
    verseTe: `సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే!
శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!`,
    verseEn: `O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements!
We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!`,
    wordMeaningTe: `* సర్వమంగళ మాంగల్యే: సర్వ శుభములలో అత్యంత శుభప్రదమైనదానา.
* శివే: కళ్యాణకారిణి.
* సర్వార్థ సాధికే: సర్వ పురుషార్థాలను సాధించేదానా.
* శరణ్యే: శరణు కోరదగిన తల్లి.`,
    wordMeaningEn: `* Sarvamangala Mangalye: Most auspicious among all auspicious things.
* Shive: Bestower of welfare.
* Sarvartha Sadhike: Fulfiller of all desires.
* Saranye: Worthy of taking refuge in.`,
    audioTe: "సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే! శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!",
    audioEn: "O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements! We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!"
  },
  {
    id: 88,
    category: "history",
    titleTe: "చారిత్రక శాసన గీతం - పద్యం 16",
    titleEn: "Historical Inscription Hymn - Verse 16",
    verseTe: `శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం!
తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!`,
    verseEn: `Let us read the history of this shrine recorded in the stone inscriptions!
Let us praise the divine plays of Visweswara, the merit of generations!`,
    wordMeaningTe: `* శిలా శాసనము: రాతిపై చెక్కబడిన శాసనము.
* క్షేత్ర చరిత్ర: ఆలయం యొక్క చరిత్ర.
* లీలలు: దైవ లీలలు.
* కీర్తిద్దాం: కొనిాడుదాం.`,
    wordMeaningEn: `* Shila Sasanamu: Inscription carved on stone.
* Kshethra Charitra: History of the sacred place.
* Leelalu: Divine activities.`,
    audioTe: "శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం! తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!",
    audioEn: "Let us read the history of this shrine recorded in the stone inscriptions! Let us praise the divine plays of Visweswara, the merit of generations!"
  },
  {
    id: 89,
    category: "devotion",
    titleTe: "శరణాగతి ప్రార్థన - చరణం 17",
    titleEn: "Prayer of Surrender - Verse 17",
    verseTe: `పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః!
త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!`,
    verseEn: `I am a sinner, my actions are sinful, my soul is sinful, born of sin!
O Lord, protect me out of compassion, O savior of those who surrender!`,
    wordMeaningTe: `* పాపోహం: నేను పాపాత్ముడను.
* త్రాహి మాం: నన్ను రక్షించు.
* కృపయా: దయతో.
* శరణాగత వత్సల: శరణు కోరినవారిని ప్రేమించేవాడా.`,
    wordMeaningEn: `* Papoham: I am full of sins.
* Trahi Mam: Protect me.
* Krupaya: With mercy.
* Saranagata Vatsala: Compassionate protector of those who surrender.`,
    audioTe: "పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః! త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!",
    audioEn: "I am a sinner, my actions are sinful, my soul is sinful, born of sin! O Lord, protect me out of compassion, O savior of those who surrender!"
  },
  {
    id: 90,
    category: "sacred",
    titleTe: "ఆత్మారామ ధ్యాన శ్లోకం - చరణం 17",
    titleEn: "Atmaram Meditation Hymn - Verse 17",
    verseTe: `ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి!
సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!`,
    verseEn: `Mother Annapurna along with Lord Atmaram resides in our hearts!
O Viswanatha, protector of all living beings, shine as the divine light!`,
    wordMeaningTe: `* హృదయ నివాసి: హృదయములో నివసించువాడా.
* సకల జీవ సంరక్షక: సమస్త జీవులను కాపాడేవాడా.
* జ్యోతి స్వరూప: వెలుగు రూపములో ఉన్నవాడా.
* ప్రకాశి: ప్రకాశించేవాడా.`,
    wordMeaningEn: `* Hrudaya Nivasi: Dweller of the heart.
* Sakala Jeeva Samrakshaka: Preserver of all life forms.
* Jyoti Swarupa: In the form of holy light.
* Prakashi: Illuminating one.`,
    audioTe: "ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి! సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!",
    audioEn: "Mother Annapurna along with Lord Atmaram resides in our hearts! O Viswanatha, protector of all living beings, shine as the divine light!"
  },
  {
    id: 91,
    category: "shiva",
    titleTe: "కాశీ విశ్వేశ్వర స్తోత్రము - చరణం 17",
    titleEn: "Kasi Visweswara Stotram - Verse 17",
    verseTe: `మంగళరూపాయ నమః శివాయ! మణిశేఖరాయ నమః శివాయ!
గంగాధరాయ గౌరీనాథాయ దేవాయ! శంభో విశ్వేశ్వరాయ శరణం శరణం!`,
    verseEn: `Salutations to Shiva, the form of auspiciousness! Salutations to Shiva, who wears gems on His head!
Salutations to the holder of Ganga, the Lord of Gauri! O Shambho Visweswara, I seek refuge in You!`,
    wordMeaningTe: `* మంగళరూపాయ: శుభప్రదమైన రూపము కలవాడు.
* మణిశేఖరాయ: తలపై మణిని ధరించినవాడు.
* గంగాధరాయ: గంగను ధరించినవాడు.
* గౌరీనాథాయ: పార్వతీదేవి భర్త.
* శరణం: ఆశ్రయము.`,
    wordMeaningEn: `* Mangalarupaya: The embodiment of auspiciousness.
* Manishekharaya: Having a gem on His crown.
* Gangadharaya: The one who holds the river Ganga.
* Gaurinathaya: The consort of Gauri.
* Saranam: Refuge.`,
    audioTe: "మంగళరూపాయ నమః శివాయ! మణిశేఖరాయ నమః శివాయ! గంగాధరాయ గౌరీనాథాయ దేవాయ! శంభో విశ్వేశ్వరాయ శరణం శరణం!",
    audioEn: "Salutations to Shiva, the form of auspiciousness! Salutations to Shiva, who wears gems on His head! Salutations to the holder of Ganga, the Lord of Gauri! O Shambho Visweswara, I seek refuge in You!"
  },
  {
    id: 92,
    category: "annapurna",
    titleTe: "అన్నపూర్ణాష్టకము - చరణం 17",
    titleEn: "Annapurna Ashtakam - Verse 17",
    verseTe: `అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే!
జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!`,
    verseEn: `O Mother Annapurna, ever full and complete, the beloved of Lord Sankara!
Grant us alms of knowledge and dispassion, O Goddess Parvati!`,
    wordMeaningTe: `* అన్నపూర్ణే: ధాన్య సమృద్ధిని ఇచ్చే తల్లి.
* సదాపూర్ణే: ఎల్లప్పుడూ నిండుగా ఉండేది.
* ప్రాణవల్లభే: ప్రాణనాథురాలు.
* జ్ఞానవైరాగ్య: జ్ఞానము మరియు వైరాగ్యము.
* భిక్షాం: బిక్ష లేదా ప్రసాదము.`,
    wordMeaningEn: `* Annapurne: She who is full of nourishment.
* Sadapurne: Ever complete and full.
* Pranavallabhe: Beloved consort.
* Jnana-Vairagya: Wisdom and renunciation.
* Bhiksham Dehi: Grant us alms.`,
    audioTe: "అన్నపూర్ణే సదాపూర్ణే శంకర ప్రాణవల్లభే! జ్ఞానవైరాగ్య సిద్ధ్యర్థం భిక్షాం దేహి చ పార్వతి!",
    audioEn: "O Mother Annapurna, ever full and complete, the beloved of Lord Sankara! Grant us alms of knowledge and dispassion, O Goddess Parvati!"
  },
  {
    id: 93,
    category: "history",
    titleTe: "నరసింగపాడు ఆలయ ప్రశస్తి - పద్యం 17",
    titleEn: "Narasingapadu Temple Glory - Verse 17",
    verseTe: `పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు!
భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!`,
    verseEn: `Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu!
Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!`,
    wordMeaningTe: `* పవిత్ర క్షేత్రము: పరిశుద్ధమైన క్షేత్రము.
* వెలసిన: అవతరించిన.
* శరణు: ఆశ్రయము.
* కొలువైన: నివసించిన.`,
    wordMeaningEn: `* Pavitra Kshethramu: The holy place.
* Velasina: Self-manifested or established.
* Saranam: Safe haven.`,
    audioTe: "పవిత్ర క్షేత్రము నరసింగపాడున వెలసిన విశ్వనాథుడే శరణు! భక్త జనుల గుండెల్లో కొలువైన అన్నపూర్ణా విశ్వేశ్వరుడే శరణు!",
    audioEn: "Refuge in Lord Viswanatha who resides in the holy shrine of Narasingapadu! Refuge in Annapurna and Visweswara who dwell in the hearts of devotees!"
  },
  {
    id: 94,
    category: "devotion",
    titleTe: "భక్తి సుధా తరంగిణి - భాగం 18",
    titleEn: "Devotional Waves - Part 18",
    verseTe: `ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం!
హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!`,
    verseEn: `Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life!
O Shambho, Viswanatha, Mahadeva, salutations to Shiva!`,
    wordMeaningTe: `* ప్రాతఃకాలే: ఉదయ కాలమున.
* స్మరణం: తలచుకోవడం.
* భవ హరణం: భవ బంధాలను పోగొట్టేది.
* తారణం: దాటించేది.`,
    wordMeaningEn: `* Pratahkale: In the early morning.
* Smaranam: Remembrance.
* Bhava Haranam: Destruction of worldly attachments.
* Taranam: Delivering across the ocean of births.`,
    audioTe: "ప్రాతఃకాలే శివనామ స్మరణం భవ హరణం సంసార తారణం! హర హర శంభో విశ్వనాథ మహదేవ శివాయ నమః శరణం!",
    audioEn: "Reciting Shiva's name in the morning destroys worldly attachment and crosses the ocean of life! O Shambho, Viswanatha, Mahadeva, salutations to Shiva!"
  },
  {
    id: 95,
    category: "sacred",
    titleTe: "మహాదేవ కరవలంబ స్తోత్రం - భాగం 18",
    titleEn: "Mahadeva Karavalamba Stotram - Part 18",
    verseTe: `సంసార ఘోర గహనే చరతో మమ హే దేవా!
విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!`,
    verseEn: `I am wandering in the terrifying jungle of this worldly life, O Lord!
O Visweswara, ocean of compassion, extend Your hand of support!`,
    wordMeaningTe: `* ఘోర గహనే: భయంకరమైన అడవిలో.
* మమ: నా యొక్క.
* కరుణానిధే: దయకు సముద్రుడైనవాడా.
* కరవలంబమ్: చేతిని అందించి రక్షించడం.`,
    wordMeaningEn: `* Ghora Gahane: In the dangerous forest.
* Karunānidhe: O treasure of mercy.
* Karavalambam: Hand of protection.`,
    audioTe: "సంసార ఘోర గహనే చరతో మమ హే దేవా! విశ్వేశ్వర కరుణానిధే దేహి కరవలంబమ్!",
    audioEn: "I am wandering in the terrifying jungle of this worldly life, O Lord! O Visweswara, ocean of compassion, extend Your hand of support!"
  },
  {
    id: 96,
    category: "shiva",
    titleTe: "శివ పంచాక్షరి - చరణం 18",
    titleEn: "Shiva Panchakshari - Verse 18",
    verseTe: `నమః శివాయ నమః శివాయ నమః శివాయ నమః శివాయ!
హర హర శంభో మహదేవాయ విశ్వేశ్వరాయ నమః శివాయ!`,
    verseEn: `Salutations to Shiva! Salutations to Shiva!
O Hara, Shambho, Mahadeva, Visweswara! Salutations to Shiva!`,
    wordMeaningTe: `* నమః శివాయ: శివునికి నమస్కారములు.
* హర హర: పాపములను హరించేవాడు.
* శంభో: సుఖములను కలిగించేవాడు.
* విశ్వేశ్వరాయ: విశ్వానికి అధిపతి.`,
    wordMeaningEn: `* Namah Shivaya: Salutations to Lord Shiva.
* Hara: The destroyer of sins.
* Shambho: The bestower of happiness.
* Visweswaraya: The Lord of the Universe.`,
    audioTe: "నమః శివాయ నమః శివాయ నమః శివాయ నమః శివాయ! హర హర శంభో మహదేవాయ విశ్వేశ్వరాయ నమః శివాయ!",
    audioEn: "Salutations to Shiva! Salutations to Shiva! O Hara, Shambho, Mahadeva, Visweswara! Salutations to Shiva!"
  },
  {
    id: 97,
    category: "annapurna",
    titleTe: "జగన్మాత అన్నపూర్ణ కీర్తన - భాగం 18",
    titleEn: "Mother Annapurna Chant - Part 18",
    verseTe: `సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే!
శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!`,
    verseEn: `O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements!
We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!`,
    wordMeaningTe: `* సర్వమంగళ మాంగల్యే: సర్వ శుభములలో అత్యంత శుభప్రదమైనదానา.
* శివే: కళ్యాణకారిణి.
* సర్వార్థ సాధికే: సర్వ పురుషార్థాలను సాధించేదానా.
* శరణ్యే: శరణు కోరదగిన తల్లి.`,
    wordMeaningEn: `* Sarvamangala Mangalye: Most auspicious among all auspicious things.
* Shive: Bestower of welfare.
* Sarvartha Sadhike: Fulfiller of all desires.
* Saranye: Worthy of taking refuge in.`,
    audioTe: "సర్వమంగళ మాంగల్యే శివే సర్వార్థ సాధికే! శరణ్యే త్ర్యంబకే గౌరి నారాయణి నమోస్తుతే!",
    audioEn: "O Mother, who is the auspiciousness of all auspiciousness! O source of all achievements! We seek refuge in You, the three-eyed Gauri, Salutations to You, Narayani!"
  },
  {
    id: 98,
    category: "history",
    titleTe: "చారిత్రక శాసన గీతం - పద్యం 18",
    titleEn: "Historical Inscription Hymn - Verse 18",
    verseTe: `శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం!
తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!`,
    verseEn: `Let us read the history of this shrine recorded in the stone inscriptions!
Let us praise the divine plays of Visweswara, the merit of generations!`,
    wordMeaningTe: `* శిలా శాసనము: రాతిపై చెక్కబడిన శాసనము.
* క్షేత్ర చరిత్ర: ఆలయం యొక్క చరిత్ర.
* లీలలు: దైవ లీలలు.
* కీర్తిద్దాం: కొనిాడుదాం.`,
    wordMeaningEn: `* Shila Sasanamu: Inscription carved on stone.
* Kshethra Charitra: History of the sacred place.
* Leelalu: Divine activities.`,
    audioTe: "శిలా శాసనములందు నిలిచిన క్షేత్ర చరిత్ర చదువుదాం! తరతరాల పుణ్యఫలమైన విశ్వేశ్వర లీలలు కీర్తిద్దాం!",
    audioEn: "Let us read the history of this shrine recorded in the stone inscriptions! Let us praise the divine plays of Visweswara, the merit of generations!"
  },
  {
    id: 99,
    category: "devotion",
    titleTe: "శరణాగతి ప్రార్థన - చరణం 19",
    titleEn: "Prayer of Surrender - Verse 19",
    verseTe: `పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః!
త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!`,
    verseEn: `I am a sinner, my actions are sinful, my soul is sinful, born of sin!
O Lord, protect me out of compassion, O savior of those who surrender!`,
    wordMeaningTe: `* పాపోహం: నేను పాపాత్ముడను.
* త్రాహి మాం: నన్ను రక్షించు.
* కృపయా: దయతో.
* శరణాగత వత్సల: శరణు కోరినవారిని ప్రేమించేవాడా.`,
    wordMeaningEn: `* Papoham: I am full of sins.
* Trahi Mam: Protect me.
* Krupaya: With mercy.
* Saranagata Vatsala: Compassionate protector of those who surrender.`,
    audioTe: "పాపోహం పాపకర్మాహం పాపాత్మా పాపసంభవః! త్రాహి మాం కృపయా దేవా శరణాగత వత్సల!",
    audioEn: "I am a sinner, my actions are sinful, my soul is sinful, born of sin! O Lord, protect me out of compassion, O savior of those who surrender!"
  },
  {
    id: 100,
    category: "sacred",
    titleTe: "ఆత్మారామ ధ్యాన శ్లోకం - చరణం 19",
    titleEn: "Atmaram Meditation Hymn - Verse 19",
    verseTe: `ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి!
సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!`,
    verseEn: `Mother Annapurna along with Lord Atmaram resides in our hearts!
O Viswanatha, protector of all living beings, shine as the divine light!`,
    wordMeaningTe: `* హృదయ నివాసి: హృదయములో నివసించువాడా.
* సకల జీవ సంరక్షక: సమస్త జీవులను కాపాడేవాడా.
* జ్యోతి స్వరూప: వెలుగు రూపములో ఉన్నవాడా.
* ప్రకాశి: ప్రకాశించేవాడా.`,
    wordMeaningEn: `* Hrudaya Nivasi: Dweller of the heart.
* Sakala Jeeva Samrakshaka: Preserver of all life forms.
* Jyoti Swarupa: In the form of holy light.
* Prakashi: Illuminating one.`,
    audioTe: "ఆత్మారాం సమేత అన్నపూర్ణ మాతా హృదయ నివాసి! సకల జీవ సంరక్షక విశ్వనాథ జ్యోతి స్వరూప ప్రకాశి!",
    audioEn: "Mother Annapurna along with Lord Atmaram resides in our hearts! O Viswanatha, protector of all living beings, shine as the divine light!"
  }
];

// --- STATE MANAGEMENT ---
let currentLang = 'te'; // 'te' or 'en'
let selectedCategory = 'all';
let searchQuery = '';
let activeAudio = null;
let activeSpeechUtterance = null;
let activePlayingCardId = null;
let progressInterval = null;

// --- WEB AUDIO API MEDITATION DRONE SYNTHESIZER ---
let audioCtx = null;
let droneNodes = [];
let isDronePlaying = false;

function startMeditationDrone() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Low drone base note: A2 (110 Hz)
    const fundFreq = 110; 
    
    // Harmonic frequencies to simulate a rich string/tanpura drone
    // Fundamental, Perfect Fifth, Octave, Lower Fifth
    const frequencies = [fundFreq, fundFreq * 1.5, fundFreq * 2, fundFreq * 0.75];
    
    frequencies.forEach((freq, idx) => {
      let osc = audioCtx.createOscillator();
      let gain = audioCtx.createGain();
      let filter = audioCtx.createBiquadFilter();
      
      // Warm textures
      osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      
      // Filter out harsh high-frequency harmonics for cello/ambient warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(idx % 2 === 0 ? 250 : 400, audioCtx.currentTime);
      
      // LFO (Low Frequency Oscillator) to modulate gain slowly, making drone breathe
      let lfo = audioCtx.createOscillator();
      let lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(0.15 + (idx * 0.04), audioCtx.currentTime); // slow rate
      lfoGain.gain.setValueAtTime(0.04, audioCtx.currentTime); // mod depth
      
      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);
      
      // Balanced base gain levels for each node
      const baseGain = idx === 0 ? 0.06 : (idx === 1 ? 0.04 : (idx === 2 ? 0.03 : 0.05));
      gain.gain.setValueAtTime(baseGain, audioCtx.currentTime);
      
      // Connections
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      lfo.start();
      
      droneNodes.push({ osc, lfo, gain });
    });
    
    isDronePlaying = true;
    updateDroneButtonUI(true);
  } catch (err) {
    console.error("Web Audio API not supported or blocked: ", err);
  }
}

function stopMeditationDrone() {
  if (audioCtx) {
    const fadeTime = 1.0; // 1 second fade out
    const now = audioCtx.currentTime;
    
    droneNodes.forEach(node => {
      node.gain.gain.cancelScheduledValues(now);
      node.gain.gain.linearRampToValueAtTime(0, now + fadeTime);
      
      setTimeout(() => {
        try { node.osc.stop(); } catch(e){}
        try { node.lfo.stop(); } catch(e){}
      }, (fadeTime * 1000) + 100);
    });
    
    setTimeout(() => {
      if (audioCtx) {
        audioCtx.close();
        audioCtx = null;
      }
      droneNodes = [];
    }, (fadeTime * 1000) + 200);
  }
  isDronePlaying = false;
  updateDroneButtonUI(false);
}

function updateDroneButtonUI(isPlaying) {
  const btn = document.getElementById('btn-ambient-drone');
  if (!btn) return;
  
  if (isPlaying) {
    btn.classList.add('playing');
    btn.querySelector('span').innerText = translations[currentLang].ambient_drone_stop;
    btn.querySelector('i').className = "fa-solid fa-compact-disc";
  } else {
    btn.classList.remove('playing');
    btn.querySelector('span').innerText = translations[currentLang].ambient_drone_play;
    btn.querySelector('i').className = "fa-solid fa-circle-nodes";
  }
}


// --- SPEECH SYNTHESIS DEVOTIONAL VOICE RECITATION ---

// Pre-load and cache voices
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
}

function stopRecitation() {
  if (activeAudio) {
    try {
      activeAudio.pause();
    } catch(e) {}
    activeAudio = null;
  }
  if (window.speechSynthesis) {
    try {
      window.speechSynthesis.cancel();
    } catch(e) {}
  }
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
  
  // Reset previous card playing state
  if (activePlayingCardId !== null) {
    const prevCard = document.querySelector(`.poem-card[data-id="${activePlayingCardId}"]`);
    if (prevCard) {
      const playBtn = prevCard.querySelector('.audio-play-btn i');
      if (playBtn) playBtn.className = "fa-solid fa-play";
      const progressBar = prevCard.querySelector('.audio-bar-progress');
      if (progressBar) progressBar.style.width = '0%';
      const timeLabel = prevCard.querySelector('.audio-time-current');
      if (timeLabel) timeLabel.innerText = "0:00";
    }
  }
  
  activeSpeechUtterance = null;
  activePlayingCardId = null;
}

function findBestVoice(langCode, voices) {
  const normalizedLang = langCode.toLowerCase();
  
  if (normalizedLang === 'te') {
    // 1. Natural male Telugu voice (Microsoft Prasad)
    let prasad = voices.find(v => v.lang.toLowerCase().includes('te') && v.name.toLowerCase().includes('prasad'));
    if (prasad) return prasad;
    
    // 2. Natural female Telugu voice (Microsoft Shruti)
    let shruti = voices.find(v => v.lang.toLowerCase().includes('te') && v.name.toLowerCase().includes('shruti'));
    if (shruti) return shruti;

    // 3. Google Telugu voice (Chrome)
    let googleTe = voices.find(v => v.lang.toLowerCase().includes('te') && v.name.toLowerCase().includes('google'));
    if (googleTe) return googleTe;

    // 4. Any other Telugu voice
    let genericTe = voices.find(v => v.lang.toLowerCase().includes('te'));
    if (genericTe) return genericTe;
  } else {
    // English
    let enIn = voices.find(v => v.lang.toLowerCase().includes('en-in') && v.name.toLowerCase().includes('natural'));
    if (enIn) return enIn;
    
    let enGb = voices.find(v => v.lang.toLowerCase().includes('en-gb') && v.name.toLowerCase().includes('natural'));
    if (enGb) return enGb;

    let genericEnIn = voices.find(v => v.lang.toLowerCase().includes('en-in'));
    if (genericEnIn) return genericEnIn;

    let genericEnGb = voices.find(v => v.lang.toLowerCase().includes('en-gb'));
    if (genericEnGb) return genericEnGb;

    let genericEn = voices.find(v => v.lang.toLowerCase().includes('en'));
    if (genericEn) return genericEn;
  }
  return null;
}

function startRecitation(poemId, text, languageCode) {
  stopRecitation(); // Stop any currently playing audio
  
  // Try using browser's SpeechSynthesis first for realistic natural voices
  if (window.speechSynthesis) {
    playSpeechSynthesis(poemId, text, languageCode);
  } else {
    // Fallback to Google Translate TTS
    playGoogleTTS(poemId, text, languageCode);
  }
}

function playSpeechSynthesis(poemId, text, languageCode) {
  if (!window.speechSynthesis) return;
  
  const utterance = new SpeechSynthesisUtterance(text);
  // Always specify the language code so the browser uses the correct voice engine
  utterance.lang = languageCode === 'te' ? 'te-IN' : 'en-IN';
  
  activeSpeechUtterance = utterance;
  activePlayingCardId = poemId;
  
  const card = document.querySelector(`.poem-card[data-id="${poemId}"]`);
  if (!card) return;
  
  const playBtnIcon = card.querySelector('.audio-play-btn i');
  const progressBar = card.querySelector('.audio-bar-progress');
  const timeCurrent = card.querySelector('.audio-time-current');
  const timeTotal = card.querySelector('.audio-time-total');
  
  if (playBtnIcon) playBtnIcon.className = "fa-solid fa-pause";
  
  const voices = window.speechSynthesis.getVoices();
  const selectedVoice = findBestVoice(languageCode, voices);
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  
  // Set speed rate from UI dropdown control
  let speedRate = 0.8;
  const speedSelect = card.querySelector('.voice-select-controls select');
  if (speedSelect) {
    speedRate = parseFloat(speedSelect.value);
  }
  utterance.rate = speedRate;
  
  // Adjust pitch slightly for a warmer, spiritual, devotional sound
  if (languageCode === 'te') {
    utterance.pitch = 0.95; 
  } else {
    utterance.pitch = 1.0;
  }
  
  // Estimate length (approx 0.14s per char for classical Telugu, 0.08s for English)
  const charCount = text.length;
  let estimatedDurationSec = Math.max(5, Math.ceil(charCount * (languageCode === 'te' ? 0.14 : 0.08)));
  estimatedDurationSec = Math.ceil(estimatedDurationSec / speedRate);
  
  if (timeTotal) timeTotal.innerText = formatTime(estimatedDurationSec);
  if (timeCurrent) timeCurrent.innerText = "0:00";
  
  let elapsedSec = 0;
  progressInterval = setInterval(() => {
    elapsedSec += 0.25;
    const percentage = Math.min(100, (elapsedSec / estimatedDurationSec) * 100);
    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (timeCurrent) timeCurrent.innerText = formatTime(Math.min(estimatedDurationSec, Math.floor(elapsedSec)));
  }, 250);
  
  utterance.onend = () => {
    stopRecitation();
  };
  utterance.onerror = (e) => {
    console.warn("SpeechSynthesis error, falling back to Google TTS:", e);
    stopRecitation();
    playGoogleTTS(poemId, text, languageCode);
  };
  
  window.speechSynthesis.speak(utterance);
}

function playGoogleTTS(poemId, text, languageCode) {
  const lang = languageCode === 'te' ? 'te' : 'en';
  const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${lang}&client=tw-ob`;
  
  const audio = new Audio(audioUrl);
  activeAudio = audio;
  activePlayingCardId = poemId;
  
  const card = document.querySelector(`.poem-card[data-id="${poemId}"]`);
  if (!card) return;
  
  const playBtnIcon = card.querySelector('.audio-play-btn i');
  const progressBar = card.querySelector('.audio-bar-progress');
  const timeCurrent = card.querySelector('.audio-time-current');
  const timeTotal = card.querySelector('.audio-time-total');
  
  if (playBtnIcon) playBtnIcon.className = "fa-solid fa-pause";
  
  // Set speed rate if selected
  const speedSelect = card.querySelector('.voice-select-controls select');
  if (speedSelect) {
    audio.playbackRate = parseFloat(speedSelect.value);
  }
  
  audio.onloadedmetadata = () => {
    if (timeTotal) timeTotal.innerText = formatTime(Math.ceil(audio.duration));
  };
  
  audio.ontimeupdate = () => {
    if (progressBar && audio.duration) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${percentage}%`;
    }
    if (timeCurrent) {
      timeCurrent.innerText = formatTime(Math.floor(audio.currentTime));
    }
  };
  
  audio.onended = () => {
    stopRecitation();
  };
  
  audio.onerror = () => {
    console.error("Google TTS failed completely.");
    stopRecitation();
  };
  
  audio.play().catch(err => {
    console.error("Google TTS playback error:", err);
    stopRecitation();
  });
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}


// --- BILINGUAL DYNAMIC RENDERING ---
function applyLanguage(lang) {
  currentLang = lang;
  document.body.className = `lang-${lang}`;
  
  // Toggle Navbar active buttons
  document.getElementById('btn-te').className = lang === 'te' ? 'lang-btn active' : 'lang-btn';
  document.getElementById('btn-en').className = lang === 'en' ? 'lang-btn active' : 'lang-btn';
  
  // Translate all static nodes with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang][key]) {
      // Use innerHTML if there are sub-elements (like breaks or tags), else textContent
      if (translations[lang][key].includes('<') || translations[lang][key].includes('•')) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
  
  // Stop any ongoing speech recitation
  stopRecitation();
  
  // Update Ambient Drone text if playing
  updateDroneButtonUI(isDronePlaying);
  
  // Re-render poems list to match the new language
  renderPoems();
}


// --- RENDER POEMS GRID ---
function renderPoems() {
  const container = document.getElementById('poems-container');
  if (!container) return;
  
  // Filter poems array
  const filtered = poems.filter(poem => {
    // Filter by category tab
    if (selectedCategory !== 'all' && poem.category !== selectedCategory) {
      return false;
    }
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTe = poem.titleTe.toLowerCase().includes(q) || poem.verseTe.toLowerCase().includes(q) || poem.wordMeaningTe.toLowerCase().includes(q);
      const matchEn = poem.titleEn.toLowerCase().includes(q) || poem.verseEn.toLowerCase().includes(q) || poem.wordMeaningEn.toLowerCase().includes(q);
      return matchTe || matchEn;
    }
    return true;
  });
  
  // Clear container
  container.innerHTML = '';
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: var(--text-muted); grid-column: 1/-1;">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 2.5rem; color: var(--gold-metallic); margin-bottom: 1rem;"></i>
        <p>${currentLang === 'te' ? 'పద్యాలు ఏవీ లభించలేదు. శోధన పదాన్ని మార్చండి.' : 'No poems found. Try adjusting your query.'}</p>
      </div>
    `;
    return;
  }
  
  // Render cards
  filtered.forEach(poem => {
    const card = document.createElement('article');
    card.className = 'poem-card';
    card.setAttribute('data-id', poem.id);
    
    // Choose appropriate values based on language state
    const title = currentLang === 'te' ? poem.titleTe : poem.titleEn;
    const verse = currentLang === 'te' ? poem.verseTe : poem.verseEn;
    
    const formattedVerse = verse.replace(/\n/g, '<br>');
    
    // Build inner HTML
    card.innerHTML = `
      <div class="poem-header">
        <span class="poem-num"># ${poem.id}</span>
        <h3 class="poem-title-text">${title}</h3>
      </div>
      
      <div class="poem-content-area">
        <!-- Rhythmic Verse Panel -->
        <p class="poem-verse">${formattedVerse}</p>
        
        <!-- Info Tabs -->
        <div>
          <div class="poem-details-tabs">
            <button class="details-tab-btn active" data-tab="verse" data-id="${poem.id}">
              ${translations[currentLang].tab_verse}
            </button>
            <button class="details-tab-btn" data-tab="meaning" data-id="${poem.id}">
              ${translations[currentLang].tab_meaning}
            </button>
            <button class="details-tab-btn" data-tab="translation" data-id="${poem.id}">
              ${translations[currentLang].tab_translation}
            </button>
          </div>
          
          <!-- Tab Panels -->
          <div class="details-panel active" id="pane-verse-${poem.id}">
            <p style="font-style: italic; color: var(--text-muted); font-size: 0.95rem;">
              ${currentLang === 'te' 
                ? 'శ్రీ కవిసామ్రాట్ రచించిన మధ్యాక్కర ఛందస్సులోని పద్యం.' 
                : 'Poem written by Sri Kavi Samrat in classical Madhyaakkara meter.'
              }
            </p>
          </div>
          
          <div class="details-panel" id="pane-meaning-${poem.id}">
            <div class="meaning-telugu" style="white-space: pre-line; line-height: 1.8; font-size: 0.95rem;">
              ${poem.wordMeaningTe.replace(/\*/g, '•')}
            </div>
          </div>
          
          <div class="details-panel" id="pane-translation-${poem.id}">
            <p class="meaning-english" style="margin-bottom: 1rem;">
              "${poem.verseEn}"
            </p>
            <div style="white-space: pre-line; line-height: 1.6; font-size: 0.9rem; color: var(--text-muted);">
              ${poem.wordMeaningEn.replace(/\*/g, '•')}
            </div>
          </div>
        </div>
        

      </div>
    `;
    
    // Add Event Listeners for Details Tabs inside card
    card.querySelectorAll('.details-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tabName = e.target.getAttribute('data-tab');
        const poemId = e.target.getAttribute('data-id');
        
        // Remove active class from sibling buttons
        card.querySelectorAll('.details-tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        // Hide all panels
        card.querySelectorAll('.details-panel').forEach(p => p.classList.remove('active'));
        // Show target panel
        card.querySelector(`#pane-${tabName}-${poemId}`).classList.add('active');
      });
    });
    
    container.appendChild(card);
  });
}


// --- CUSTOM LIGHTBOX GALLERY ---
let activeGalleryIndex = 0;
const galleryImages = [
  {
    src: "assets/images/photo_2026-06-16_00-22-10.jpg",
    titleTe: "భక్త జన సమూహం",
    titleEn: "Devotees' Congregation",
    descTe: "ఆలయంలో జరుగుతున్న ప్రత్యేక ధార్మిక కార్యక్రమంలో పాల్గొంటున్న భక్తులు.",
    descEn: "Hundreds of devotees gathered for a special religious programme held in the temple premises."
  },
  {
    src: "assets/images/photo_2026-06-16_00-22-17.jpg",
    titleTe: "శ్రీ అన్నపూర్ణా దేవి అలంకారం",
    titleEn: "Sri Annapurna Devi Alankaram",
    descTe: "ఆలయంలో పువ్వులు, పండ్లతో అలంకరించిన శ్రీ అన్నపూర్ణా దేవి విశేష అలంకరణ.",
    descEn: "Sri Annapurna Devi beautifully adorned with fruits and flowers — a stunning festive decoration."
  },
  {
    src: "assets/images/photo_2026-06-16_00-22-24.jpg",
    titleTe: "రాహు-కేతు పూజా దృశ్యం",
    titleEn: "Rahu-Ketu Dosha Puja",
    descTe: "పవిత్ర వృక్షం సమీపంలో రాహు-కేతు దోష నివారణ పూజ — భక్తులు దీపాలతో పూజ చేస్తున్న దృశ్యం.",
    descEn: "Devotees performing the Rahu-Ketu dosha nivarana puja with oil lamps around the sacred ancient tree."
  },
  {
    src: "assets/images/photo_2026-06-16_00-22-34.jpg",
    titleTe: "ఉత్సవ వేళ ఆలయ ప్రవేశ ద్వారం",
    titleEn: "Temple Entrance During Festival",
    descTe: "వార్షిక మహోత్సవం సందర్భంగా కాంతుల వెలుతురులో అలంకరించబడిన ఆలయ ప్రవేశ ద్వారం.",
    descEn: "The temple entrance gate illuminated with colorful lights during a grand annual festival night."
  },
  {
    src: "assets/images/photo_2026-06-16_00-44-35.jpg",
    titleTe: "ఆలయ ఉపరి దృశ్యం",
    titleEn: "Aerial View of Temple Compound",
    descTe: "ఆలయ శిఖరం మీది నుండి కనిపించే ఆలయ ప్రాంగణం, మండపాలు మరియు దూరంగా పచ్చని పంట పొలాలు.",
    descEn: "A top-angle view of the temple mandapams and compound with lush green agricultural fields in the distance."
  },
  {
    src: "assets/images/photo_2026-06-16_00-44-39.jpg",
    titleTe: "పుష్కరిణి — సోపాన దృశ్యం",
    titleEn: "Pushkarini — Step-well View",
    descTe: "ఆలయ పుష్కరిణి మధ్యలో శివలింగ విగ్రహంతో సోపానాల నిర్మాణ వైభవం.",
    descEn: "An aerial view of the sacred temple tank (Pushkarini) with its stepped walls and a Shiva idol at the center."
  },
  {
    src: "assets/images/photo_2026-06-16_00-44-42.jpg",
    titleTe: "మహా రాజగోపురం శిల్ప సంపద",
    titleEn: "Rajagopuram Sculptural Detail",
    descTe: "ఆలయ రాజగోపురం మీది రంగురంగుల దేవతా శిల్పాలు — నైపుణ్యమైన హస్తకళా నిదర్శనం.",
    descEn: "Colorful deity sculptures on the grand Rajagopuram (entrance tower) — traditional Andhra craftsmanship."
  },
  {
    src: "assets/images/photo_2026-06-16_00-44-47.jpg",
    titleTe: "నరసింగపాడు ప్రకృతి సౌందర్యం",
    titleEn: "Narasingapadu Village Landscape",
    descTe: "పచ్చని పంట పొలాలు, కొబ్బరి తోటలు మరియు నల్లమల కొండలు నేపథ్యంగా నరసింగపాడు గ్రామం.",
    descEn: "Green paddy fields, coconut groves, and the Nallamala hills forming a serene backdrop to the sacred village."
  },
  {
    src: "assets/images/photo_2026-06-16_00-44-53.jpg",
    titleTe: "పుష్కరిణిలో శివ విగ్రహం",
    titleEn: "Shiva Idol in Filled Pushkarini",
    descTe: "వర్షాల తర్వాత నీటితో నిండిన పుష్కరిణిలో శివమూర్తి విగ్రహం — పాతాళ గంగాజల సౌందర్యం.",
    descEn: "Lord Shiva idol standing in the rainwater-filled Pushkarini — the visible grace of Patala Ganga."
  },
  {
    src: "assets/images/Screenshot 2026-06-16 002119.png",
    titleTe: "కవిసమ్రాట్ విశ్వనాథ సత్యనారాయణ",
    titleEn: "Kavi Samrat Viswanatha Satyanarayana",
    descTe: "ఆలయాన్ని దర్శించి నెకరికల్లు శతకం రచించిన తొలి తెలుగు జ్ఞానపీఠ అవార్డు గ్రహీత విశ్వనాథ సత్యనారాయణ చిత్రపటం.",
    descEn: "Sketch of the first Telugu Jnanpith Award recipient who visited the temple and composed the Nekarikallu Satakam."
  },
  {
    src: "assets/images/history_inscription_1.jpg",
    titleTe: "శ్రీ కాశీ విశ్వేశ్వర స్వామి గర్భాలయ మూర్తి",
    titleEn: "Sri Kasi Visweswara Swamy Garbhagudi Deity",
    descTe: "అలంకార పూజల అనంతరం గర్భాలయంలో దేదీప్యమానంగా వెలిగిపోతున్న శ్రీ కాశీ విశ్వేశ్వర స్వామి జ్యోతిర్లింగ స్వరూపం.",
    descEn: "The sacred Shiva Lingam in the sanctum sanctorum, beautifully decorated with flowers and traditional garlands."
  },
  {
    src: "assets/images/history_inscription_2.jpg",
    titleTe: "శ్రీ అన్నపూర్ణా దేవి గర్భాలయ మూర్తి",
    titleEn: "Sri Annapurna Devi Garbhagudi Deity",
    descTe: "పట్టు వస్త్రాలు, బంగారు ఆభరణాలు మరియు పండ్ల మాలలతో శోభాయమానంగా అలంకరించబడిన శ్రీ అన్నపూర్ణా దేవి మూర్తి.",
    descEn: "Mother Sri Annapurna Devi adorned with gold ornaments, silk saree, and fresh flower garlands."
  },
  {
    src: "TEPPOSTAVAM.jpg",
    titleTe: "తెప్పోత్సవ వేడుక",
    titleEn: "Teppotsavam Celebration",
    descTe: "పవిత్ర పుష్కరిణిలో కార్తీక మాస ముగింపు వేళ జరుపబడిన స్వామివారి తెప్పోత్సవ వైభవం.",
    descEn: "Lord's divine float festival celebrated in the temple tank (Pushkarini) during Karthika Masam."
  },
  {
    src: "TEPPOSTAVAM2.jpg",
    titleTe: "దివ్య తెప్పోత్సవ కాంతులు",
    titleEn: "Divine Light of Teppotsavam",
    descTe: "హంస వాహనంపై వెలిగిపోతున్న స్వామివారి కల్యాణ మూర్తులు - విద్యుత్ దీపాల అలంకరణ.",
    descEn: "Beautifully illuminated float carrying the deities during the holy float festival."
  },
  {
    src: "TEMPLE1.jpg",
    titleTe: "నరసింగపాడు ఆలయ రాజగోపురం",
    titleEn: "Rajagopuram View",
    descTe: "శోభాయమానమైన ప్రవేశ గోపురం మరియు దేదీప్యమానంగా వెలిగిపోతున్న ఆలయ ప్రాంగణం.",
    descEn: "A beautiful and clear view of the temple's entrance tower (Rajagopuram)."
  },
  {
    src: "koneru1.jpg",
    titleTe: "ఆలయ పుష్కరిణి మెట్లు",
    titleEn: "Pushkarini Steps",
    descTe: "నరసింగపాడు ఆలయంలో నిర్మించబడిన పవిత్ర పుష్కరిణి సోపానాలు మరియు శివ ప్రతిమ.",
    descEn: "Steps of the sacred temple pond where devotees take a holy dip."
  },
  {
    src: "koneru2.jpg",
    titleTe: "పవిత్ర పుష్కరిణి నీరు",
    titleEn: "Holy Water of Pushkarini",
    descTe: "భక్తుల పాపాలను హరించే గంగాజల రూప పుష్కరిణి జలాల విహంగ వీక్షణం.",
    descEn: "Overhead view of the sacred water body within the temple premises."
  },
  {
    src: "koneru3.jpg",
    titleTe: "కోనేటి గట్టు మరియు పరిసరాలు",
    titleEn: "Koneru Bank and Compound",
    descTe: "ఆలయ కోనేరు మరియు దాని చుట్టూ నిర్మించిన సుందరమైన పరిసరాల దృశ్యం.",
    descEn: "The scenic surroundings of the temple's sacred water tank."
  },
  {
    src: "KONERU4.jpg",
    titleTe: "నిండుగా ఉన్న పుష్కరిణి",
    titleEn: "Fully Water-filled Pond",
    descTe: "జలకళతో ఉట్టిపడుతూ ప్రశాంతతను పంచే ఆలయ పవిత్ర కోనేరు.",
    descEn: "The filled temple pond offering a serene and beautiful reflection."
  },
  {
    src: "ayaagaru.jpg",
    titleTe: "ఆలయ ప్రధాన అర్చకులు",
    titleEn: "Temple Chief Priest",
    descTe: "కొమ్మవరపు పవన్ కుమార్ శర్మ గారు గర్భాలయంలో ప్రత్యేక పూజా కార్యక్రమం నిర్వహిస్తున్న దృశ్యం.",
    descEn: "Chief Priest Kommavarapu Pavan Kumar Sharma performing holy rituals in the temple."
  },
  {
    src: "584040273_2980930055441845_3872573188393959859_n.jpg",
    titleTe: "శూలధారి శివలింగ అలంకరణ",
    titleEn: "Deity with Trishula",
    descTe: "ఆలయంలో త్రిశూలంతో కూడిన శివలింగ ప్రత్యేక పర్వదిన అలంకారం.",
    descEn: "Lord Shiva decorated with his sacred trident during a festival."
  },
  {
    src: "506134140_2817888845079301_942981617837414528_n.jpg",
    titleTe: "ఆలయ వేద ఆశీర్వచనం",
    titleEn: "Vedic Blessings",
    descTe: "ప్రత్యేక పూజలు మరియు హోమాల్లో పాల్గొన్న భక్తులకు వేద పండితులు ఆశీర్వచనం ఇస్తున్న దృశ్యం.",
    descEn: "Devotees receiving sacred blessings from the priests after the Vedic rituals."
  },
  {
    src: "503621600_2811534949048024_3441603826954840512_n.jpg",
    titleTe: "గోపూజ మరియు గోమాత విశిష్టత",
    titleEn: "Go-Puja Ceremony",
    descTe: "ఆలయ గోశాలలో నిర్వహించిన గోపూజ మహోత్సవం - గోమాతకు హారతి సమర్పిస్తున్న దృశ్యం.",
    descEn: "Worship of the sacred cow (Gomata) in the temple courtyard."
  },
  {
    src: "503402317_2811535035714682_659316703820665744_n.jpg",
    titleTe: "భక్తుల సామూహిక పూజలు",
    titleEn: "Mass Prayers by Devotees",
    descTe: "పండుగ దినాల్లో ఆలయ ప్రాంగణంలో భక్తులు సామూహికంగా కూర్చుని పూజల్లో నిమగ్నమైన దృశ్యం.",
    descEn: "Large congregation of devotees sitting in rows for mass prayer recitations."
  },
  {
    src: "497543860_2788267061374813_5569776460651914481_n.jpg",
    titleTe: "అన్నప్రసాద వితరణ",
    titleEn: "Annaprasadam Distribution",
    descTe: "నిత్య అన్నదాన పథకంలో భాగంగా భక్తులకు పవిత్ర ప్రసాద వితరణ జరుగుతున్న దృశ్యం.",
    descEn: "Serving of free sanctified food (Annadanam) to visiting devotees."
  },
  {
    src: "497446320_2788266908041495_8109925532219446433_n.jpg",
    titleTe: "ఆలయ కళ్యాణ వేదిక",
    titleEn: "Temple Kalyanavedika",
    descTe: "కల్యాణోత్సవాలు మరియు సంస్కృతి కార్యక్రమాలకు వేదికైన ఆలయ మండపం.",
    descEn: "The main assembly hall utilized for marriage rituals and cultural events."
  },
  {
    src: "487114226_2740285739506279_3352002442628797878_n.jpg",
    titleTe: "అభిషేక మూర్తి కాశీ విశ్వేశ్వరుడు",
    titleEn: "Abhisheka Murti",
    descTe: "గర్భాలయంలో పంచామృతాలతో అభిషేకించబడుతున్న శివలింగ స్వరూపం.",
    descEn: "The sacred Shivalingam being bathed in holy waters and milk during abhishekam."
  },
  {
    src: "486783430_2738827269652126_1449065531526879479_n.jpg",
    titleTe: "ధ్వజస్తంభ ప్రతిష్ఠాపన",
    titleEn: "Dhwajasthambham Shrine",
    descTe: "ఆలయంలో ప్రతిష్ఠించబడిన పవిత్ర ధ్వజస్తంభం మరియు నంది విగ్రహం.",
    descEn: "The sacred flagpole (Dhwajasthambham) and Lord Nandi facing the main deity."
  },
  {
    src: "486605343_2737713173096869_6461884784616467264_n.jpg",
    titleTe: "నిత్య దీపాల కాంతులు",
    titleEn: "Festival Oil Lamps",
    descTe: "ప్రదోష కాలంలో ఆలయం చుట్టూ భక్తులు వెలిగించిన దీపమాలలు - దీపారాధన శోభ.",
    descEn: "Hundreds of tiny oil lamps lit by devotees around the temple corridors."
  },
  {
    src: "486457216_2738287389706114_1649016170593422592_n.jpg",
    titleTe: "బిల్వదళాలతో శివలింగం",
    titleEn: "Bilva Leaf Decoration",
    descTe: "బిల్వ పత్రాలు మరియు త్రిశూలంతో శాస్త్రోక్తంగా అలంకరించబడిన గర్భాలయ లింగం.",
    descEn: "The holy Shiva Lingam beautifully adorned with Bilva leaves and a trident."
  },
  {
    src: "486149347_2736464436555076_3174052681622745570_n.jpg",
    titleTe: "కనువిందు చేసే ఆలయ అలంకరణ",
    titleEn: "Exquisite Floral Decorations",
    descTe: "వార్షిక బ్రహ్మోత్సవాలలో వివిధ వర్ణాల పుష్పాలతో సర్వాంగ సుందరంగా అలంకరించిన ఆలయం.",
    descEn: "Entrance arches and pillars beautifully decorated with fresh flowers during Brahmotsavam."
  },
  {
    src: "485306360_2732940010240852_8863961340903751486_n.jpg",
    titleTe: "ఆలయ గోపూజ మహోత్సవం",
    titleEn: "Sacred Go-Puja Ritual",
    descTe: "పండుగ దినాన గోమాతకు మరియు దూడకు పసుపు కుంకుమలతో శాస్త్రోక్తంగా పూజ జరిపిన దృశ్యం.",
    descEn: "Traditional worship of Mother Cow and calf representing all Vedic deities."
  },
  {
    src: "484794801_2729538933914293_877479801758957658_n.jpg",
    titleTe: "ఉత్సవాల స్వాగత తోరణం",
    titleEn: "Festival Welcome Arch",
    descTe: "ఆలయ ప్రధాన వీధిలో భక్తులకు స్వాగతం పలుకుతున్న అలంకృత విద్యుత్ తోరణం.",
    descEn: "Glowing illuminated welcome arch erected on the main road for the temple festival."
  },
];

function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const imgNode = document.getElementById('lightbox-img');
  const titleNode = document.getElementById('lightbox-title');
  const capNode = document.getElementById('lightbox-caption');
  
  if (!lightbox) return;

  // Open Lightbox on gallery item clicks
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-index'));
      openLightbox(idx);
    });
  });

  function openLightbox(index) {
    activeGalleryIndex = index;
    updateLightboxContent();
    lightbox.style.display = 'flex';
  }

  function updateLightboxContent() {
    const item = galleryImages[activeGalleryIndex];
    imgNode.src = item.src;
    imgNode.alt = currentLang === 'te' ? item.titleTe : item.titleEn;
    titleNode.innerText = currentLang === 'te' ? item.titleTe : item.titleEn;
    capNode.innerText = currentLang === 'te' ? item.descTe : item.descEn;
  }

  // Close Lightbox
  document.getElementById('lightbox-close').addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // Next / Previous Click
  document.getElementById('lightbox-prev').addEventListener('click', () => {
    activeGalleryIndex = (activeGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxContent();
  });

  document.getElementById('lightbox-next').addEventListener('click', () => {
    activeGalleryIndex = (activeGalleryIndex + 1) % galleryImages.length;
    updateLightboxContent();
  });
}


// --- INITIALIZATION & GLOBAL LISTENER HANDLERS ---

// --- FLOWER SHOWER EFFECT FOR POET ---
function setupFlowerShower() {
  const container = document.getElementById('poet-flower-shower');
  const triggerBtn = document.getElementById('btn-flower-shower');
  if (!container) return;

  const flowerIcons = ['🌸', '🌼', '🌹', '🏵️', '🌺', '🍃'];

  function createFlower(isBurst = false) {
    const flower = document.createElement('div');
    flower.className = 'falling-flower';
    flower.innerText = flowerIcons[Math.floor(Math.random() * flowerIcons.length)];
    
    const startX = Math.random() * 100;
    const duration = isBurst ? (2.5 + Math.random() * 2.5) : (4.5 + Math.random() * 4.5);
    const delay = isBurst ? (Math.random() * 1.2) : 0;
    const size = isBurst ? (14 + Math.random() * 22) : (16 + Math.random() * 14);
    const opacity = 0.6 + Math.random() * 0.4;
    
    flower.style.left = `${startX}%`;
    flower.style.fontSize = `${size}px`;
    flower.style.opacity = opacity;
    flower.style.animationDuration = `${duration}s`;
    flower.style.animationDelay = `${delay}s`;
    
    const sway = (Math.random() > 0.5 ? 1 : -1) * (40 + Math.random() * 60);
    flower.style.setProperty('--sway-x', `${sway}px`);
    
    container.appendChild(flower);
    
    setTimeout(() => {
      flower.remove();
    }, (duration + delay) * 1000);
  }

  // Continuous gentle ambient flower falling
  setInterval(() => {
    // Check if poet section is in viewport or visible
    const rect = container.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      createFlower(false);
    }
  }, 1200);

  // Trigger burst of flowers on button click
  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      for (let i = 0; i < 45; i++) {
        createFlower(true);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Setup sticky navigation background toggle
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });

  // 2. Mobile navbar menu controls
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      menuToggle.querySelector('i').classList.toggle('fa-bars');
      menuToggle.querySelector('i').classList.toggle('fa-xmark');
    });
    
    // Close nav menu when links are clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.querySelector('i').className = "fa-solid fa-bars";
      });
    });
  }

  // 3. Set up scroll navigation active highlighter
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 4. Set up language selectors
  document.getElementById('btn-te').addEventListener('click', () => applyLanguage('te'));
  document.getElementById('btn-en').addEventListener('click', () => applyLanguage('en'));

  // 5. Setup search logic
  const searchInput = document.getElementById('poem-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderPoems();
    });
  }

  // 6. Setup filter tabs logic
  const filterTabs = document.querySelectorAll('#poem-filter-tabs .filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      filterTabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      selectedCategory = e.target.getAttribute('data-filter');
      renderPoems();
    });
  });

  // 7. Setup Ambient Meditation Drone button
  const ambientBtn = document.getElementById('btn-ambient-drone');
  if (ambientBtn) {
    ambientBtn.addEventListener('click', () => {
      if (isDronePlaying) {
        stopMeditationDrone();
      } else {
        startMeditationDrone();
      }
    });
  }

  // 8. Setup Poet Biography Tabs logic
  const poetTabBtns = document.querySelectorAll('.poet-tab-btn');
  poetTabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabName = e.target.getAttribute('data-poet-tab');
      poetTabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      document.querySelectorAll('.poet-panel').forEach(p => p.classList.remove('active'));
      const targetPanel = document.getElementById(`poet-pane-${tabName}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 9. Setup history timeline entry animations on scroll
  const timelineItems = document.querySelectorAll('.timeline-item');
  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const timelineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  timelineItems.forEach(item => {
    timelineObserver.observe(item);
  });

  // 10. Load Initial Poems Render and Lightbox Controls
  renderPoems();
  setupLightbox();
  setupFlowerShower();
  
  // Voices load asynchronously in some browsers, bind event to reload
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {
      // Trigger voice load
    };
  }
});


// Global function to toggle Poet gallery images
window.changePoetImage = function(src, element) {
  const mainImg = document.getElementById('poet-main-img');
  if (mainImg) {
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = '1';
    }, 200);
  }
  const thumbs = document.querySelectorAll('.poet-thumb');
  thumbs.forEach(t => t.classList.remove('active'));
  element.classList.add('active');
};

// --- RITUAL TABS ---
window.switchRitualTab = function(tabName, btn) {
  document.querySelectorAll('.ritual-tab-content').forEach(function(el) { el.classList.remove('active'); });
  document.querySelectorAll('.ritual-tab-btn').forEach(function(el) { el.classList.remove('active'); });
  var target = document.getElementById('ritual-tab-' + tabName);
  if (target) target.classList.add('active');
  if (btn) btn.classList.add('active');
};

