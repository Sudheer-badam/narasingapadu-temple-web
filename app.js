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
    gal9_desc: "పాతాళ గంగాజల సౌందర్యం.",
    gal10_title: "కవిసమ్రాట్ విశ్వనాథ సత్యనారాయణ",
    gal10_desc: "ఆలయాన్ని దర్శించి నెకరికల్లు శతకం రచించిన తొలి తెలుగు జ్ఞానపీఠ అవార్డు గ్రహీత విశ్వనాథ సత్యనారాయణ చిత్రపటం.",
    gal11_title: "తెప్పోత్సవ వేడుక",
    gal11_desc: "పవిత్ర పుష్కరిణిలో కార్తీక మాస ముగింపు వేళ జరుపబడిన స్వామివారి తెప్పోత్సవ వైభవం.",
    gal12_title: "దివ్య తెప్పోత్సవ కాంతులు",
    gal12_desc: "హంస వాహనంపై వెలిగిపోతున్న స్వామివారి కల్యాణ మూర్తులు - విద్యుత్ దీపాల అలంకరణ.",
    gal13_title: "నరసింగపాడు ఆలయ రాజగోపురం",
    gal13_desc: "శోభాయమానమైన ప్రవేశ గోపురం మరియు దేదీప్యమానంగా వెలిగిపోతున్న ఆలయ ప్రాంగణం.",
    gal14_title: "స్వామివారి త్రిశూల ప్రవేశం",
    gal14_desc: "ఆలయ ఉత్సవాలలో భాగంగా పవిత్ర త్రిశూలాన్ని ధరించి భక్తులు, అర్చకులు ప్రవేశిస్తున్న శోభాయమాన దృశ్యం.",
    gal15_title: "పుష్కరిణిలో పవిత్ర త్రిశూల స్నానం",
    gal15_desc: "కార్తీక మాస వేడుకల్లో భాగంగా కోనేటి నీటిలో స్వామివారి పవిత్ర త్రిశూలానికి అభిషేక స్నానం జరిపిస్తున్న అర్చకులు మరియు భక్తులు.",
    gal16_title: "స్వామివారి పవిత్ర త్రిశూల పూజ",
    gal16_desc: "ఆలయ మహోత్సవాల సందర్భంగా గులాబీ పూలమాలలు మరియు పసుపుతో అలంకరించిన స్వామివారి బంగారు త్రిశూలాన్ని భక్తులకు దర్శనమిస్తున్న అర్చకులు.",
    gal17_title: "పుష్కరిణి మెట్ల వద్ద భక్తుల స్నానాలు",
    gal17_desc: "ఆలయ పుష్కరిణి రేవు వద్ద పండుగ వేళల్లో పవిత్ర స్నానాలు ఆచరించేందుకు కూడిన భక్తుల సమూహం.",
    gal18_title: "పవిత్ర హారతి మరియు పూజా ద్రవ్యాలతో అర్చకులు",
    gal18_desc: "ఆలయ ప్రధాన అర్చకులు పసుపు వస్త్రాలు ధరించి హారతి, పూజా ద్రవ్యాలు మరియు పూర్ణకుంభంతో గర్భాలయం వైపు వెళ్తున్న దృశ్యం.",
    gal19_title: "శివలింగ అన్నాభిషేక మహోత్సవం",
    gal19_desc: "కార్తీక మాస పర్వదినాన స్వామివారికి పరమ పవిత్రంగా జరిపే అన్న సమర్పణ — 'అన్నాభిషేక' విశేషాలంకరణ.",
    gal20_title: "శ్రీ అన్నపూర్ణా దేవి దివ్య దర్శనం",
    gal20_desc: "గర్భాలయంలో పసుపు అలంకరణ, పట్టుచీర మరియు సువర్ణ ఆభరణాలతో శోభిల్లుతున్న జగన్మాత శ్రీ అన్నపూర్ణా దేవి మూలవిరాట్ రూపం.",
    gal21_title: "హరిద్రాలంకరణలో కాశీ విశ్వేశ్వర స్వామి",
    gal21_desc: "పసుపు అభిషేకానంతరం సువాసనలు వెదజల్లే మల్లెపూలు, మందారాలతో సుందరంగా అలంకరించబడిన శివలింగ రూపం.",
    gal22_title: "సింధూరారుణ కాంతితో కాశీ విశ్వేశ్వరుడు",
    gal22_desc: "కుంకుమ మరియు గంధపు తిలకంతో వెలిగిపోతూ, భక్తులకు కనువిందు కలిగించే పవిత్ర గర్భాలయ శివలింగ జ్యోతి రూపం.",
    gal23_title: "శ్రీ అన్నపూర్ణ సమేత కాశీ విశ్వేశ్వర స్వామి ఉత్సవ విగ్రహాలు",
    gal23_desc: "పట్టు వస్త్రాలు మరియు స్వర్ణ కిరీటాలతో దివ్య శోభతో వెలిగిపోతున్న స్వామి, అమ్మవార్ల ఉత్సవ విగ్రహాల అర్చన రూపం.",
    gal24_title: "ఆలయ నాగదేవత ప్రతిమ",
    gal24_desc: "ఆలయ ప్రాంగణంలో ప్రతిష్ఠించబడి, పసుపు, కుంకుమలు మరియు పుష్పమాలలతో అర్చించబడుతున్న పవిత్ర నాగదేవతా విగ్రహం.",
    gal25_title: "శివలింగ దివ్య పుష్పాలంకరణ",
    gal25_desc: "రంగురంగుల పుష్పమాలలను వలయాకారంలో అమర్చి, వెండి ముఖపద్మంతో నయనమనోహరంగా అలంకరించిన విశ్వేశ్వరుని రూపం.",
    gal26_title: "హరిద్రా-కుంకుమ అర్చన రూపం",
    gal26_desc: "శివలింగానికి ఒకవైపు పసుపు, మరోవైపు కుంకుమతో చేసిన అర్చన — బిల్వ పత్రాలు, శంఖుపుష్పాలతో పూజించిన అపూర్వ రూపం.",
    gal27_title: "కార్తీక మాస జ్వాలాతోరణం",
    gal27_desc: "కార్తీక పౌర్ణమి రాత్రి ఆలయ ప్రాంగణంలో వెలిగించే సాంప్రదాయ జ్వాలాతోరణ వేడుకను భక్తిశ్రద్ధలతో వీక్షిస్తున్న భక్తులు.",
    gal28_title: "శ్రీ అన్నపూర్ణా దేవి ఉత్సవ రూపం",
    gal28_desc: "వార్షిక బ్రహ్మోత్సవాలలో భాగంగా సమస్త ఆభరణాలతో, పట్టువస్త్రాలతో జగన్మాతను ఊరేగింపు కోసం సిద్దం చేసిన పవిత్ర రూపం.",
    gal29_title: "శంఖుపుష్పాలతో శివలింగ అర్చన",
    gal29_desc: "ఈశ్వరునికి ప్రీతిపాత్రమైన నీలి శంఖుపుష్పాలు, బంతిపూలతో మనోహరంగా అలంకరించిన విశ్వేశ్వర స్వామి శివలింగం.",
    gal30_title: "శ్రీ విఘ్నేశ్వర స్వామి అలంకరణ",
    gal30_desc: "వెండి కవచం (ముఖము, చెవులు మరియు తొండము) మరియు గులాబీ దండలతో భక్తులకు దర్శనమిస్తున్న విఘ్న వినాయకుడు.",
    gal31_title: "రజత కవచ కాశీ విశ్వేశ్వర స్వామి",
    gal31_desc: "వెండి ముఖపద్మం, రజత కిరీటం, నాగాభరణాలతో గర్భాలయంలో తేజోమయంగా వెలిగిపోతున్న శ్రీ కాశీ విశ్వేశ్వర స్వామి దివ్య మంగళ స్వరూపం.",
    
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
    speed: "వేగం (Speed)",
    role_hon_trustee: "గౌరవ ధర్మకర్త",
    role_chairman: "చైర్మన్",
    role_chief_priest: "ప్రధాన అర్చకులు",
    member_anjaneyulu: "చెరుకుపల్లి ఆంజనేయులు",
    member_krishna_reddy: "బిజ్జం కృష్ణారెడ్డి",
    member_pavan_sharma: "కొమ్మవరపు పవన్ కుమార్ శర్మ",
    member_kasiviswanatham: "మైలవరపు కాశీవిశ్వనాథం",
    member_srinivasarao: "యక్కల వెంకట శ్రీనివాసరావు",
    member_brahmareddy: "జినుగు బ్రహ్మారెడ్డి",
    member_ramanjaneyulu: "మోదడుగు రామాంజనేయులు",
    member_subbareddy: "సింగంరెడ్డి సుబ్బారెడ్డి",
    member_medam_chinna: "మేడం చిన్న కోటి రెడ్డి",
    member_bijjam_lakshmi: "బిజ్జం లక్ష్మి రెడ్డి",
    member_rayala_kondaiah: "రాయల కొండయ్య",
    member_avula_srinivas: "ఆవుల శ్రీనివాస్ రెడ్డి",
    member_tiyyagura_venkata: "తియ్యగుర వెంకట రెడ్డి",
    member_nallabollu_venkata: "నల్లబోలు వెంకట రెడ్డి",
    member_podili_venkateswarlu: "పొదిలి వెంకటేశ్వర్లు",
    member_veeramreddy_venkateswarlu: "వీరంరెడ్డి వెంకటేశ్వర్లు రెడ్డి",
    member_ronda_abbul: "రోండా అబ్బుల్ రెడ్డి",
    member_yeluri_adinarayana: "యేలూరి ఆదినారాయణ",
    member_vallambotla_sivaprasad: "వల్లంభొట్ల శివప్రసాద్",
    member_atmakuri_nageswar: "ఆత్మకూరి నాగేశ్వర రావు",
    member_ronda_ashok: "రోండా అశోక్ రెడ్డి",
    member_pabbati_lakshmi: "పబ్బాటి లక్ష్మీనారాయణ",
    member_jinugu_vijaybhaskar: "జినుగు విజయభాస్కర్ రెడ్డి",
    member_kypu_ramachanra: "కైపు రామచంద్ర రెడ్డి",
    
    advisor_garikapati_ramamurty: "గరికిపాటి రామమూర్తి",
    advisor_badri_venkata: "బద్రి వెంకట రమణ రెడ్డి",
    advisor_jinugu_chandrasekhara: "జినుగు చంద్రశేఖర రెడ్డి",
    advisor_kypu_ravindra: "కైపు రవీంద్ర రెడ్డి",
    advisor_avula_venkata: "ఆవుల వెంకట స్వామి రెడ్డి",
    advisor_segu_ramesh: "సేగు రమేష్ బాబు",
    advisors_title: "గౌరవ సలహాదారులు"
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
    gal14_title: "Trishula Procession Entry",
    gal14_desc: "Priests and devotees carrying the holy trident (Trishula) in a ceremonial procession through the temple gates.",
    gal15_title: "Holy Trishula Bath in Pushkarini",
    gal15_desc: "Devotees and priests taking a sacred dip with the holy Trishula in the temple tank (Pushkarini) during Karthika Masam.",
    gal16_title: "Sacred Trishula Worship Ceremony",
    gal16_desc: "Priests presenting the sacred golden Trishula adorned with rose garlands and turmeric to devotees during the temple festival.",
    gal17_title: "Devotees at the Pushkarini Steps",
    gal17_desc: "Devotees gathering on the stone steps (ghat) of the sacred temple pond (Pushkarini) to take their holy baths.",
    gal18_title: "Priests with Sacred Offerings",
    gal18_desc: "Temple priests carrying sacred offerings, coconuts, and holy water vessels in a ceremonial procession towards the sanctum.",
    gal19_title: "Shiva Lingam Annabhishekam",
    gal19_desc: "The grand Annabhishekam ritual where the Shivalingam is covered with cooked rice and decorated with flower garlands.",
    gal20_title: "Divine Darshan of Sri Annapurna Devi",
    gal20_desc: "The main deity of Goddess Sri Annapurna Devi adorned in a beautiful saree and yellow flower garlands on her silver throne.",
    gal21_title: "Shiva Lingam in Turmeric Alankaram",
    gal21_desc: "The sacred Shiva Lingam smeared with auspicious turmeric paste and adorned with fresh jasmine and hibiscus flowers.",
    gal22_title: "Shiva Lingam in Sindhoor Alankaram",
    gal22_desc: "The Shiva Lingam adorned with a sandalwood tilak and a garland of white and pink flowers in the inner shrine.",
    gal23_title: "Processional Deities of Sri Annapurna & Kasi Visweswara",
    gal23_desc: "The standing processional metallic deities (Utsava Vigrahas) of Sri Annapurna Devi and Lord Kasi Visweswara Swami under the golden arch.",
    gal24_title: "Sri Naga Devatha Shrine",
    gal24_desc: "The sacred snake deity (Naga Devatha) statue adorned with flower garlands and vermilion in the temple compound.",
    gal25_title: "Exquisite Floral Decoration of Shiva Lingam",
    gal25_desc: "Concentric rings of fresh marigold and rose garlands surrounding the Shiva Lingam with a silver face mask.",
    gal26_title: "Turmeric and Kumkum Dual Alankaram",
    gal26_desc: "Shiva Lingam adorned uniquely with turmeric paste on one half and kumkum on the other, topped with sacred Bilva leaves.",
    gal27_title: "Karthika Masam Jwala Toranam",
    gal27_desc: "Devotees witnessing the traditional fire-torch arch ceremony (Jwala Toranam) during the holy Karthika Pournami night.",
    gal28_title: "Sri Annapurna Devi Utsava Vigraham",
    gal28_desc: "The processional deity of Goddess Sri Annapurna Devi adorned in rich ornaments and seated on a golden throne.",
    gal29_title: "Shiva Lingam Decorated with Butterfly Pea Flowers",
    gal29_desc: "The sacred Shiva Lingam decorated with blue and white butterfly pea flowers (Shankhupushpi) and yellow marigolds.",
    gal30_title: "Lord Sri Vighneswara Swami Darshan",
    gal30_desc: "The statue of Lord Ganesha (Sri Vighneswara) decorated with a silver armor mask and beautiful rose garlands.",
    gal31_title: "Silver-Adorned Kasi Visweswara Swami",
    gal31_desc: "The divine form of Sri Kasi Visweswara Swami in the sanctum sanctorum, adorned with a silver face mask, crown, and serpent ornaments, glowing beautifully in the light of sacred lamps.",
    
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
    speed: "Speed",
    role_hon_trustee: "Hon. Trustee",
    role_chairman: "Chairman",
    role_chief_priest: "Chief Priest",
    member_anjaneyulu: "Cherukupalli Anjaneyulu",
    member_krishna_reddy: "Bijjam Krishna Reddy",
    member_pavan_sharma: "Kommarapu Pavan Kumar Sharma",
    member_kasiviswanatham: "Mylavarapu Kasiviswanatham",
    member_srinivasarao: "Yakkala Venkata Srinivasarao",
    member_brahmareddy: "Jinugu Brahmareddy",
    member_ramanjaneyulu: "Modadugu Ramanjaneyulu",
    member_subbareddy: "Singamreddy Subbareddy",
    member_medam_chinna: "Medam Chinna Koti Reddy",
    member_bijjam_lakshmi: "Bijjam Lakshmi Reddy",
    member_rayala_kondaiah: "Rayala Kondaiah",
    member_avula_srinivas: "Avula Srinivas Reddy",
    member_tiyyagura_venkata: "Tiyyagura Venkata Reddy",
    member_nallabollu_venkata: "Nallabollu Venkata Reddy",
    member_podili_venkateswarlu: "Podili Venkateswarlu",
    member_veeramreddy_venkateswarlu: "Veeramreddy Venkateswarlu Reddy",
    member_ronda_abbul: "Ronda Abbul Reddy",
    member_yeluri_adinarayana: "Yeluri Adinarayana",
    member_vallambotla_sivaprasad: "Vallambotla Sivaprasad",
    member_atmakuri_nageswar: "Atmakuri Nageswar Rao",
    member_ronda_ashok: "Ronda Ashok Reddy",
    member_pabbati_lakshmi: "Pabbati Lakshmi Narayana",
    member_jinugu_vijaybhaskar: "Jinugu Vijaybhaskar Reddy",
    member_kypu_ramachanra: "Kypu Ramachanra Reddy",
    
    advisor_garikapati_ramamurty: "Garikapati Ramamurty",
    advisor_badri_venkata: "Badri Venkata Ramana Reddy",
    advisor_jinugu_chandrasekhara: "Jinugu Chandrasekhara Reddy",
    advisor_kypu_ravindra: "Kypu Ravindra Reddy",
    advisor_avula_venkata: "Avula Venkata Swami Reddy",
    advisor_segu_ramesh: "Segu Ramesh Babu",
    advisors_title: "Respected Advisors"
  }
};


// --- POEMS DATABASE ---
const poems = [
  {
    id: 1,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 1",
    titleEn: "Nekarukallu Satakam - Poem 1",
    verseTe: `శ్రీతమాలశ్యామలింగ! సిద్ధసంసేవిత లింగ!
హేతుహీన సనాధ! అన్నపూర్ణా సహిత విశ్వనాథ
నీరామరధునీక జటాజూటా! మణి శశి కిరీట!
స్ఫీత వియన్మౌళి నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!`,
    verseEn: `Shreetamaalashyaamalimga! siddhasamsevita limga!
Hetuheena sanaadha! annapoornaa sahita vishvanaatha
Neeraamaradhuneeka jataajootaa! mani shashi kireeta!
Spheeta viyanmauḻi nèkarukal praamta siddhaabda heḻi!`,
    wordMeaningTe: `శ్రితమలశ్యామలింగ!సిద్ధసంసేవిత లింగ!
అహేతుక పరికరం!అన్నపూర్ణతో విశ్వనాథ
నిరామదాహునిక జటాజూటా!మణి శశి కిరీట!
స్ఫీత వియన్మౌళి నెకరుకల్ ప్రాంతం సిద్ధబ్ద హెలీ!`,
    wordMeaningEn: `Shritamalashyamalinga!Siddhasamsevita Linga!
Irrational device!Vishwanatha with Annapurna
Niramadahunika Jatajuta!Mani Sashi crown!
Sfitha Viyanmouli Nekarukal Region Siddhabda Heli!`,
    audioTe: "శ్రీతమాలశ్యామలింగ! సిద్ధసంసేవిత లింగ! హేతుహీన సనాధ! అన్నపూర్ణా సహిత విశ్వనాథ నీరామరధునీక జటాజూటా! మణి శశి కిరీట! స్ఫీత వియన్మౌళి నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!",
    audioEn: ""
  },
  {
    id: 2,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 2",
    titleEn: "Nekarukallu Satakam - Poem 2",
    verseTe: `స్వామి నీవు పరమ సూక్ష్మ సూక్ష్మ విషయములంగూడ
నామతించెదవు జాగ్రత్త, యిక మేమొ యధికంబులందె
యే మాయయో కాని సాగనిమ్ము పోనిమ్మందు మిదియ
సీమ నీకును మాకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Svaami neevu parama sookshma sookshma vishayamulamgooda
Naamatimchèdavu jaagratta, yika memò yadhikambulamdè
Ye maayayo kaani saaganimmu ponimmamdu midiya
Seema neekunu maaku nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ప్రభూ, నీవు అత్యంత సూక్ష్మమైనవాడివి
మీ పేరు మార్చుకోకుండా జాగ్రత్త వహించండి
యే మాయవో కానీ సాగనిమ్ము పోనిమ్ము మిదియ
నెకరుకల్ ప్రాంత సిద్ధబ్దహేలీ మీకూ మాకూ సీమ!`,
    wordMeaningEn: `Lord, you are the most subtle
Be careful not to change your name
Ye Mayao but Saganimmu Ponimdu Midiya
Nekarukal region Siddhabdaheli for you and us Seema!`,
    audioTe: "స్వామి నీవు పరమ సూక్ష్మ సూక్ష్మ విషయములంగూడ నామతించెదవు జాగ్రత్త, యిక మేమొ యధికంబులందె యే మాయయో కాని సాగనిమ్ము పోనిమ్మందు మిదియ సీమ నీకును మాకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 3,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 3",
    titleEn: "Nekarukallu Satakam - Poem 3",
    verseTe: `బలువైన గుదెబండ మెడకుఁ దగిలించి వంగ రా దనుచు
నిలువాన పెట్టిన పగిది నా మాట నీ మాట వినని
கలుష దేహంబిచ్చి పాపముల సంటఁ కట్ట నెంచెదవు
సిలుగుల దొర వౌదు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Baluvaina gudèbamda mèdaku~ dagilimchi vamga raa danuchu
Niluvaana pèttina pagidi naa maata nee maata vinani
கlusha dehambichchi paapamula samta~ katta nèmchèdavu
Silugula dòra vaudu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `బలమైన గూడెబండ మెడపై పడి వంగ ర దనుచు
నిలబడ్డ పగిడి నా మాట వినలేదు
దేహంలోని కల్మషం, శరీర పాపాలు పోవు
సిలుగుల దొర వుడు నెకరుకల్ ప్రాంతానికి చెందిన సిద్దబ్దహేళి!`,
    wordMeaningEn: `Strong Gudebanda fell to the neck and Vanga Ra Danuchu
Pagidi, who is standing, did not listen to me
The taint of the flesh and the sins of the body will not go away
Siddabdaheli of Silugula Dora Vaudu Nekarukal area!`,
    audioTe: "బలువైన గుదెబండ మెడకుఁ దగిలించి వంగ రా దనుచు నిలువాన పెట్టిన పగిది నా మాట నీ మాట వినని கలుష దేహంబిచ్చి పాపముల సంటఁ కట్ట నెంచెదవు సిలుగుల దొర వౌదు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 4,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 4",
    titleEn: "Nekarukallu Satakam - Poem 4",
    verseTe: `నిదుర పట్టెడుదాఁక రాత్రులందున నిన్నే తలఁచుచు
నిదుర మెలుకువ వచ్చునంతలో నిన్నే తలఁచుచు
బ్రదుకు భావనలందుఁ దెఱపిలో నిన్నె భావించుచుంటిఁ
జెదరనీకువె నన్ను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Nidura pattèdudaa~ka raatrulamduna ninne tala~chuchu
Nidura mèlukuva vachchunamtalo ninne tala~chuchu
Braduku bhaavanalamdu~ dèṟapilo ninnè bhaavimchuchumti~
Jèdaraneekuvè nannu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `అర్థరాత్రుల కారణంగా మీ గురించి ఆలోచించండి
నిద్ర లేవగానే మీ గురించి ఆలోచించండి
నా జీవిత చరమాంకంలో నీ గురించి ఆలోచిస్తాను
జీడరానికువే నాకు నెకరుకల్ ప్రాంతం సిద్దబ్దహేలి!`,
    wordMeaningEn: `Think of yourself because of the late nights
Think of yourself as soon as you wake up
I think of you in the end of my life
Jedaranikuve me Nekarukal region Siddabdaheli!`,
    audioTe: "నిదుర పట్టెడుదాఁక రాత్రులందున నిన్నే తలఁచుచు నిదుర మెలుకువ వచ్చునంతలో నిన్నే తలఁచుచు బ్రదుకు భావనలందుఁ దెఱపిలో నిన్నె భావించుచుంటిఁ జెదరనీకువె నన్ను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 5,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 5",
    titleEn: "Nekarukallu Satakam - Poem 5",
    verseTe: `ఉదరంబులోనుండి పొంగులై యేడు పుబికి వచ్చెడిని
గదియించుకొను వేళ నిన్నుఁ తీవ్రంబుగా నెదలోన
నిది యోగి జనము నవ్వెదరొ మరియు నీ వేమనుకొనెదొ
చిద్రుపలు కానీకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Udarambulonumdi pòmgulai yedu pubiki vachchèdini
Gadiyimchukònu veḻa ninnu~ teevrambugaa nèdalona
Nidi yogi janamu navvèdarò mariyu nee vemanukònèdò
Chidrupalu kaaneeku nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `పొంగులై ఏడు పొట్ట నుండి వచ్చింది
మీరు గదిని తీసుకున్నప్పుడు, మీరు హృదయంలో ఉంటారు
నిది యోగి ప్రజలు నవ్వుతారు మరియు మీరు ఏడుస్తారు
చిద్రూపాలు కనికు నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `Pongulai Yedu came from the belly
When you take the room, you are in the heart
Nidi Yogi's people laugh and you cry
Chidrupalu Kaniku Nekarukal region Siddabdaheli!`,
    audioTe: "ఉదరంబులోనుండి పొంగులై యేడు పుబికి వచ్చెడిని గదియించుకొను వేళ నిన్నుఁ తీవ్రంబుగా నెదలోన నిది యోగి జనము నవ్వెదరొ మరియు నీ వేమనుకొనెదొ చిద్రుపలు కానీకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 6,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 6",
    titleEn: "Nekarukallu Satakam - Poem 6",
    verseTe: `ఒక మంచి జరుగును దాని వెంబడి నొక చెడ్డ జరుగు
నొక సమమ్ముగఁ బోక యెగుడు దిగుడుగా నున్న దీ సృష్టి
యొకఁడవు సమముగా సాగువాడ నీ వొకడవే స్వామి
చికిలి శ్రీవ్వెల్లవై నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!`,
    verseEn: `Òka mamchi jarugunu daani vèmbadi nòka chèdda jarugu
Nòka samammuga~ boka yègudu digudugaa nunna dee srushti
Yòka~davu samamugaa saaguvaada nee vòkadave svaami
Chikili shreevvèllavai nèkarukal praamta siddhaabda heḻi!`,
    wordMeaningTe: `ఒక మంచి విషయానికి ఒక చెడు తర్వాత వస్తుంది
ఇది ఇలాంటి వ్యక్తుల సమూహం యొక్క సృష్టి
భూమిని సమానంగా పండించే వారందరికీ నీవే ప్రభువు
చికిలి శ్రీవ్వెళ్లవై నెకరుకల్ ప్రాంతం సిద్ధబ్ద హెలీ!`,
    wordMeaningEn: `A good thing is followed by a bad thing
This is the creation of a similar group of people
You are the Lord of all who cultivate the land equally
Chikili Srivvellavai Nekarukal region Siddhabda Heli!`,
    audioTe: "ఒక మంచి జరుగును దాని వెంబడి నొక చెడ్డ జరుగు నొక సమమ్ముగఁ బోక యెగుడు దిగుడుగా నున్న దీ సృష్టి యొకఁడవు సమముగా సాగువాడ నీ వొకడవే స్వామి చికిలి శ్రీవ్వెల్లవై నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!",
    audioEn: ""
  },
  {
    id: 7,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 7",
    titleEn: "Nekarukallu Satakam - Poem 7",
    verseTe: `పలపల పుట్టుకల్ చావు లాసులో ఎలి కండెవోలె
సిలుగులై తిరిగితిఁ గాని సుంత నేసిన బట్ట లేదు
చలమొప్ప నేటికీమాత్ర నేఁతగా సాగెడు నిద్ది
జిలుగవో మన్నెదో నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Palapala puttukal chaavu laasulo èli kamdèvolè
Silugulai tirigiti~ gaani sumta nesina batta ledu
Chalamòppa netikeemaatra ne~tagaa saagèdu niddi
Jilugavo mannèdo nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ఎన్నో జనన మరణాలలో ఎలి కందేవోలే
సిలుగులై, సుంట నేసిన వస్త్రం లేదు
చలమొప్ప నేటికీ నేత కార్మికుడిగా కొనసాగుతున్నారు
జిలుగావో మన్నెడో నెకరుకల్ ప్రాంతం సిద్దబ్దహేలి!`,
    wordMeaningEn: `Eli Kandevole in many births and deaths
There is no cloth woven from Silugulai or Sunta
Chalamoppa continues to be a weaver even today
Jilugao Mannedo Nekarukal area Siddabdaheli!`,
    audioTe: "పలపల పుట్టుకల్ చావు లాసులో ఎలి కండెవోలె సిలుగులై తిరిగితిఁ గాని సుంత నేసిన బట్ట లేదు చలమొప్ప నేటికీమాత్ర నేఁతగా సాగెడు నిద్ది జిలుగవో మన్నెదో నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 8,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 8",
    titleEn: "Nekarukallu Satakam - Poem 8",
    verseTe: `రుసరుసలుగ నేమి బ్రదుకు బ్రదికింతు రూక్ష చింతనకు
వెసులు బాటింతయుఁ గలుగనీయవు వెక్కసంబడుచుఁ
గసరుటో ముక్తిపైని సగమాఁకలి గల జనంబును శ
శి సహిత కైశికా! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Rusarusaluga nemi braduku bradikimtu rooksha chimtanaku
Vèsulu baatimtayu~ galuganeeyavu vèkkasambaduchu~
Gasaruto muktipaini sagamaa~kali gala janambunu sha
Shi sahita kaishikaa! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `రుసరుసలుగ నేమి బర్దుకు బరిదుక్తు రుక్ష చింతనకు
వేసులు బటింతయుఁ గలుగనియు వక్కసంబడుచున్
గసరుతో ముక్తి పై సగమకలి జనంబును శ
శి!నేకరుకల్ ప్రాంతం సిద్ధబ్దహేలితో కైశిక!`,
    wordMeaningEn: `Rusarusaluga Nemi Barduku Bariduktu Ruksha Chintanaku
Vesulu Batintayaun Galuganiyu Vakkasambaduchun
Gasaruto Mukti Pai Sagamakali Janambunu Sh
Kaishika with shi!Nekarukal area Siddabdaheli!`,
    audioTe: "రుసరుసలుగ నేమి బ్రదుకు బ్రదికింతు రూక్ష చింతనకు వెసులు బాటింతయుఁ గలుగనీయవు వెక్కసంబడుచుఁ గసరుటో ముక్తిపైని సగమాఁకలి గల జనంబును శ శి సహిత కైశికా! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 9,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 9",
    titleEn: "Nekarukallu Satakam - Poem 9",
    verseTe: `సుకముగాఁ జనిపోవుటన్న భయ మొకించుకయు లేదనుము
ఆకట యే ఘోరమైనట్టి చావో యటన్న భయంబె
నికరంబుగా నీవు గుండె లోపల నిల్చిన, వెఱపు
సెకలివ్వి నిల్వవు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Sukamugaa~ janipovutanna bhaya mòkimchukayu ledanumu
Aakata ye ghoramainatti chaavo yatanna bhayambè
Nikarambugaa neevu gumdè lopala nilchina, vèṟapu
Sèkalivvi nilvavu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `సులువుగా పుట్టడం గురించి భయపడవద్దు
అదో భయంకరమైన చావు భయం
నికరంబుగా నీవు గుండెల్లో నిలుచుని, మండుతున్నావు
సేకలివ్వి రిజర్వ్ నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `Don't be afraid of having an easy birth
That's a terrible fear of death
As Nikarambu you stand within the heart, burning
Sekalivvi reserve Nekarukal region Siddabdaheli!`,
    audioTe: "సుకముగాఁ జనిపోవుటన్న భయ మొకించుకయు లేదనుము ఆకట యే ఘోరమైనట్టి చావో యటన్న భయంబె నికరంబుగా నీవు గుండె లోపల నిల్చిన, వెఱపు సెకలివ్వి నిల్వవు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 10,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 10",
    titleEn: "Nekarukallu Satakam - Poem 10",
    verseTe: `ఒసకఁ దానొక వంద యిచ్చి కర్జునకుద్దియౌ దాత
ననిపించుకొన నెంచు జనుని వోల్కి నూహలు నీకు నిచ్చి
తనర నాత్మార్పణ చేయువాని చందానఁ గనవల
సినదని కోరెద నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!`,
    verseEn: `Òsaka~ daanòka vamda yichchi karjunakuddiyau daata
Nanipimchukòna nèmchu januni volki noohalu neeku nichchi
Tanara naatmaarpana cheyuvaani chamdaana~ ganavala
Sinadani korèda nèkarukal praamta siddhaabda heḻi!`,
    wordMeaningTe: `కార్జునకుడ్డియౌ ఒసక్ దానొక దాత
నెంచు జానుని వోల్కి నుహాలు నీకేం అనిపించిందో
చందన గనవల తన యజ్ఞం చేస్తానన్నాడు
సినాదాని కోరేడ నెకరుకల్ ప్రాంతం సిద్ధబ్ద హెలీ!`,
    wordMeaningEn: `Karjunakuddiyau is the donor of Osak Danoka
Nenchu Januni Volki Nuhalu gave you what you think
Chandana Ganavala is the one who will do his sacrifice
Sinadani Koreda Nekarukal area Siddhabda Heli!`,
    audioTe: "ఒసకఁ దానొక వంద యిచ్చి కర్జునకుద్దియౌ దాత ననిపించుకొన నెంచు జనుని వోల్కి నూహలు నీకు నిచ్చి తనర నాత్మార్పణ చేయువాని చందానఁ గనవల సినదని కోరెద నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!",
    audioEn: ""
  },
  {
    id: 11,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 11",
    titleEn: "Nekarukallu Satakam - Poem 11",
    verseTe: `ఈ కోరికలు నీ భయంబులును మరి యివి యొక్కటొకటి
వే కోయవలె నన్నఁ జాలవు వేయి జన్మములు
నీ కంటి నిప్పు సెగ నిగిడించి మండించుమీ యెల్ల
శ్రీకరాసారంబు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Ee korikalu nee bhayambulunu mari yivi yòkkatòkati
Ve koyavalè nanna~ jaalavu veyi janmamulu
Nee kamti nippu sèga nigidimchi mamdimchumee yèlla
Shreekaraasaarambu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ఈ కోరికలు మీ భయాలలో ఒకటి
వెయ్యి జన్మలు వేయి వలలాంటివి
మీ కళ్లలో మంటలు ఆర్పి కాల్చకండి
శ్రీకరసారంబు నెకరుకల్ ప్రాంత సిద్ధబ్దహేళి!`,
    wordMeaningEn: `These desires are one of your fears
A thousand births are like a thousand nets
Do not put out the fire in your eyes and burn it
Srikarasarambu Nekarukal area Siddhabdaheli!`,
    audioTe: "ఈ కోరికలు నీ భయంబులును మరి యివి యొక్కటొకటి వే కోయవలె నన్నఁ జాలవు వేయి జన్మములు నీ కంటి నిప్పు సెగ నిగిడించి మండించుమీ యెల్ల శ్రీకరాసారంబు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 12,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 12",
    titleEn: "Nekarukallu Satakam - Poem 12",
    verseTe: `నిను బిలువ వాంఛింతునాయె రక్షింపు! నెలతలు ధనము
תనువున రోగములేమి యధికారితయు సర్వమంచు
మనసున నెంచుచు బ్రతికినన్నాళ్ళు మనవచ్చు నట్టి
చెసఁటిని గాదాయె నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Ninu biluva vaamchhimtunaayè rakshimpu! nèlatalu dhanamu
תnuvuna rogamulemi yadhikaaritayu sarvamamchu
Manasuna nèmchuchu bratikinannaaḻḻu manavachchu natti
Chèsa~tini gaadaayè nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `మీ గౌరవాన్ని కాపాడుకోండి!నెలల కొద్దీ డబ్బు
మీరు వ్యాధి మరియు అధికారం నుండి విముక్తి పొందారు
మనసుతో జీవిస్తే బాగుండును
చేసేంటిని గదయె నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `Protect your dignity!Months of money
You are free from disease and authority
If you live with your mind, you will be fine
Chesantini Gadaye Nekarukal area Siddabdaheli!`,
    audioTe: "నిను బిలువ వాంఛింతునాయె రక్షింపు! నెలతలు ధనము תనువున రోగములేమి యధికారితయు సర్వమంచు మనసున నెంచుచు బ్రతికినన్నాళ్ళు మనవచ్చు నట్టి చెసఁటిని గాదాయె నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 13,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 13",
    titleEn: "Nekarukallu Satakam - Poem 13",
    verseTe: `ఏలాగు సాగింతొ పరచఁ బడ్డెట్టి యీ యనంతమగు
కాలంబు, తలఁచిన గుండెలో భీతి కల్గెడు, సంతు
మాలిన యట్టి జన్మలును మృతులును మాలించు, కొట్టి
సీలను నెత్తిపై నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Elaagu saagimtò paracha~ baddètti yee yanamtamagu
Kaalambu, tala~china gumdèlo bheeti kalgèdu, samtu
Maalina yatti janmalunu mrutulunu maalimchu, kòtti
Seelanu nèttipai nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ఎలా సాగింది?
కలంబు, మనసులోని భయం, సంతు
మలిన యట్టి జనన మరణములను మార్చుము, కొట్టుము
ముద్రగడ నెత్తిమీద నెకరుకల్ ప్రాంత సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `How did it go?
Kalambu, the fear in the heart of the thought, santu
Change the births and deaths of Malina Yatti, beat
Siddabdaheli of Nekarukal region on the scalp of seals!`,
    audioTe: "ఏలాగు సాగింతొ పరచఁ బడ్డెట్టి యీ యనంతమగు కాలంబు, తలఁచిన గుండెలో భీతి కల్గెడు, సంతు మాలిన యట్టి జన్మలును మృతులును మాలించు, కొట్టి సీలను నెత్తిపై నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 14,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 14",
    titleEn: "Nekarukallu Satakam - Poem 14",
    verseTe: `నిన్నెంచుచు జపంబుమీఁద నున్నళ్ళు నిశ్చింతముగనె
యున్నది గాని జరుగుట యెట్టు లట్లున్నచో నెపుడు
అన్నలా! మేనునఁ తేళ్ళు ప్రాకుచున్నట్లుండు జగము
చిన్నెలు చూచిన నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Ninnèmchuchu japambumee~da nunnaḻḻu nishchimtamuganè
Yunnadi gaani jaruguta yèttu latlunnacho nèpudu
Annalaa! menuna~ teḻḻu praakuchunnatlumdu jagamu
Chinnèlu choochina nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `జపాన్‌లో మీకు మనశ్శాంతి లేదు
ఏది జరుగుతున్నా అది జరగనివ్వండి
అలా!ప్రపంచం తేళ్లతో నిండిపోయింది
చిన్నారులను చూసిన నెకరుకల్‌ ప్రాంతానికి చెందిన సిద్ధబ్దహేళి!`,
    wordMeaningEn: `You have no peace of mind in Japan
Whatever is happening, let it happen
Like that!The world is full of scorpions
Siddabdaheli of Nekarukal region that saw the little ones!`,
    audioTe: "నిన్నెంచుచు జపంబుమీఁద నున్నళ్ళు నిశ్చింతముగనె యున్నది గాని జరుగుట యెట్టు లట్లున్నచో నెపుడు అన్నలా! మేనునఁ తేళ్ళు ప్రాకుచున్నట్లుండు జగము చిన్నెలు చూచిన నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 15,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 15",
    titleEn: "Nekarukallu Satakam - Poem 15",
    verseTe: `అంతయును నశించిపోవునని రూఢియైనట్టి దాని
వింతలుచూచి రమించు సంత యోపిక లేదు నాకు
వింతలో వింత బ్రదుకుట తప్పని విధియు నీ వలె గ్ర
సింతు చేదును నేను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Amtayunu nashimchipovunani roodhiyainatti daani
Vimtaluchoochi ramimchu samta yopika ledu naaku
Vimtalo vimta bradukuta tappani vidhiyu nee valè gra
Simtu chedunu nenu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `అది నశించిపోతుందని నిశ్చయించుకున్న వాడు
వింతలను చూసి ఆనందించాలని నాకు క్రిస్మస్ కల లేదు
ఒక వింత ప్రదేశంలో నివసించడం మీలాగే ఒక వింత విధి
సింటు చేడును నేను నెకరుకల్ ప్రాంతం సిద్దబ్దహేళి!`,
    wordMeaningEn: `It is the one who is convinced that it will perish
I don't have a Christmas dream to enjoy seeing strange things
Living in a strange place is a strange destiny, just like you
Sintu Chedunu I Nekarukal region Siddabdaheli!`,
    audioTe: "అంతయును నశించిపోవునని రూఢియైనట్టి దాని వింతలుచూచి రమించు సంత యోపిక లేదు నాకు వింతలో వింత బ్రదుకుట తప్పని విధియు నీ వలె గ్ర సింతు చేదును నేను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 16,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 16",
    titleEn: "Nekarukallu Satakam - Poem 16",
    verseTe: `అలవాటుగా దేహమన్న కట్టె యాడుచునుండె
మిలమిలై బందుగుల్ దీనియందు రమించుచున్నారు.
తెలిసియు మృత్యువు గూర్చి తలచకు, తెలివి యశుద్ధము
చిలుకవల్కుల జాతి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Alavaatugaa dehamanna kattè yaaduchunumdè
Milamilai bamdugul deeniyamdu ramimchuchunnaaru.
Tèlisiyu mrutyuvu goorchi talachaku, tèlivi yashuddhamu
Chilukavalkula jaati nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `అలవాటుగా దేహమన్న కట్టెలు కొట్టేవాడు
మిలమిలై బందుంగుల్ దీనిని ఆనందిస్తున్నారు.
తెలిసి చావు గురించి ఆలోచించవద్దు, మనస్సు స్వచ్ఛమైనది
చిలుకావల్కుల జాతి నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `As a habit, Dehamanna used to cut firewood
Milamilai Bandungul are enjoying this.
Don't think about death knowingly, the mind is pure
Chilukavalkula race Nekarukal region Siddabdaheli!`,
    audioTe: "అలవాటుగా దేహమన్న కట్టె యాడుచునుండె మిలమిలై బందుగుల్ దీనియందు రమించుచున్నారు. తెలిసియు మృత్యువు గూర్చి తలచకు, తెలివి యశుద్ధము చిలుకవల్కుల జాతి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 17,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 17",
    titleEn: "Nekarukallu Satakam - Poem 17",
    verseTe: `చచ్చెడువారికిఁ తప్ప ముసలులై చచ్చెదరేని
క్రచ్చర మిగిలిన వారి కభ్యంతరమ్ము లేదిచటఁ
జచ్చెడువాఁడు నీకోసమై తాను చావంగవలయు
చిచ్చఱకను వేల్ప! నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!`,
    verseEn: `Chachchèduvaariki~ tappa musalulai chachchèdareni
Krachchara migilina vaari kabhyamtarammu ledichata~
Jachchèduvaa~du neekosamai taanu chaavamgavalayu
Chichchaṟakanu velpa! nèkarukal praamta siddhaabda heḻi!`,
    wordMeaningTe: `చనిపోయే వారు తప్ప, వారు వృద్ధాప్యం మరియు మరణిస్తారు
మిగిలిన వారి అభిప్రాయాన్ని క్రాచర ఎత్తలేదు
నీకు జచ్చెడువాఁడు చచ్చిపోవును
చింతించకండి!నెకరుకల్ ప్రాంతం సిద్ధబ్ద హెలీ!`,
    wordMeaningEn: `Except for those who die, they die old and die
Krachara did not raise the opinion of the rest of them
Jachcheduvandu will die for you
Don't worry!Nekarukal area Siddhabda Heli!`,
    audioTe: "చచ్చెడువారికిఁ తప్ప ముసలులై చచ్చెదరేని క్రచ్చర మిగిలిన వారి కభ్యంతరమ్ము లేదిచటఁ జచ్చెడువాఁడు నీకోసమై తాను చావంగవలయు చిచ్చఱకను వేల్ప! నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!",
    audioEn: ""
  },
  {
    id: 18,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 18",
    titleEn: "Nekarukallu Satakam - Poem 18",
    verseTe: `కన్నులు మూసిన నెఱుపు కన్పించుఁ కన్పించు నలుపు
వెన్నెల కన్పించు దోర వెలుగు కన్పించుఁ కన్పించు
సన్నని బిందువు దూరదూరమ్ము చనును గన్పడవు
చిన్నారి లింగంబ! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Kannulu moosina nèṟupu kanpimchu~ kanpimchu nalupu
Vènnèla kanpimchu dora vèlugu kanpimchu~ kanpimchu
Sannani bimduvu dooradoorammu chanunu ganpadavu
Chinnaari limgamba! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `కళ్ళు మూసుకున్న నలుపు
చంద్రుడు ప్రకాశిస్తాడు, కాంతి ప్రకాశిస్తుంది
ఒక సన్నని చుక్క ఎక్కువ దూరం పాలను పిచికారీ చేయదు
చిన్న లింగాంబ!నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `Black with eyes closed
The moon shines, the light shines
A thin droplet can't spray milk over a long distance
Little Lingamba!Nekarukal area Siddabdaheli!`,
    audioTe: "కన్నులు మూసిన నెఱుపు కన్పించుఁ కన్పించు నలుపు వెన్నెల కన్పించు దోర వెలుగు కన్పించుఁ కన్పించు సన్నని బిందువు దూరదూరమ్ము చనును గన్పడవు చిన్నారి లింగంబ! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 19,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 19",
    titleEn: "Nekarukallu Satakam - Poem 19",
    verseTe: `నొగలుపైఁ చర్మంబు బొమిక లోపల నొక్కిన చోట
ముసరుచు నున్నట్టి చూపు పరమార్థముగ నైచోట
మసలుట మానిన యూహ సర్వము మన్నించుచో, వ
శి! సవదరింతువో నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Nògalupai~ charmambu bòmika lopala nòkkina chota
Musaruchu nunnatti choopu paramaarthamuga naichota
Masaluta maanina yooha sarvamu mannimchucho, va
Shi! savadarimtuvo nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `పొత్తికడుపు లోపలి భాగంలో చర్మం నొక్కినప్పుడు నొప్పి
ముసరుచు నున్నట్టి చూడు పరమార్థముగ నైచోట
మసలుత మన యూహ సర్వమును మన్నించును, వి
శి!సావదారింతువో నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `Pain where the skin presses against the inside of the abdomen
Musaruchu Nunnatti look Paramarthamuga naichota
Masaluta Mana Yuha forgives everything, v
Shi!Savadarinthuo Nekarukal region Siddabdaheli!`,
    audioTe: "నొగలుపైఁ చర్మంబు బొమిక లోపల నొక్కిన చోట ముసరుచు నున్నట్టి చూపు పరమార్థముగ నైచోట మసలుట మానిన యూహ సర్వము మన్నించుచో, వ శి! సవదరింతువో నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 20,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 20",
    titleEn: "Nekarukallu Satakam - Poem 20",
    verseTe: `అలమాయ తనయంద మంతయు సమరించుకొంచు
సలయించలేక జగతియందు రవ్వంత రవ్వంత
వెలఁదులందున నుంచి నీదు సంశల వెత పెట్టుఁ తేజు
చెలమ లెండించును నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Alamaaya tanayamda mamtayu samarimchukòmchu
Salayimchaleka jagatiyamdu ravvamta ravvamta
Vèla~dulamduna numchi needu samshala vèta pèttu~ teju
Chèlama lèmdimchunu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `అలమయ కోసం మిమ్మల్ని మీరు సిద్ధం చేసుకోండి
ప్రపంచంలో ఇంత అందంగా ఉండకుండా ఉండలేను
ప్రచురణ సమయం నుండి, మీరు సమస్యల కోసం వెతుకుతున్నారు
చెలమ లెండించును నెకరుకల్ ప్రాంత సిద్ధబ్దహేలి!`,
    wordMeaningEn: `Prepare yourself for Alamaya
I can't help but be so beautiful in the world
From the time of publication, you have been searching for problems
Chelama Lendinchunu Nekarukal region Siddabdaheli!`,
    audioTe: "అలమాయ తనయంద మంతయు సమరించుకొంచు సలయించలేక జగతియందు రవ్వంత రవ్వంత వెలఁదులందున నుంచి నీదు సంశల వెత పెట్టుఁ తేజు చెలమ లెండించును నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 21,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 21",
    titleEn: "Nekarukallu Satakam - Poem 21",
    verseTe: `పనివడి అందంపుజిలుగు తెలివిచే వాడియా బుద్ధి
నినుదిస్స మొలవాని మనసులోపల నిలుపగా లేదు
కనికని నిలిపిన నైన నింగువ కట్టిన గుడ్డ
చినుగులై యేమాయె నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Panivadi amdampujilugu tèliviche vaadiyaa buddhi
Ninudissa mòlavaani manasulopala nilupagaa ledu
Kanikani nilipina naina nimguva kattina gudda
Chinugulai yemaayè nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `పనివాడి అందం తెలివైనది మరియు తెలివైనది
నినుదిస్సా మొలవాని మనసులో నిలవలేదు
సన్నని నారతో చేసిన వస్త్రం
చినుగులై యేమయె నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `Workman's beauty is clever and intelligent
Ninudissa Molawani did not remain in his mind
A cloth made of fine linen
Chinugulai Yemaye Nekarukal area Siddhabdaheli!`,
    audioTe: "పనివడి అందంపుజిలుగు తెలివిచే వాడియా బుద్ధి నినుదిస్స మొలవాని మనసులోపల నిలుపగా లేదు కనికని నిలిపిన నైన నింగువ కట్టిన గుడ్డ చినుగులై యేమాయె నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 22,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 22",
    titleEn: "Nekarukallu Satakam - Poem 22",
    verseTe: `సీలమండల లోతు వాగు నిన్నెంచు చిత్తంబు నాది
వాలు కామమ్ముగా నుండియుండి తాఁ బడబోసి నెడు
తోలిన వరదలై యొచటి దచ్చటఁ తుడిచి పెట్టెడిని
చేలు మట్టము చేసి నెకరుకల్ ప్రాంత సిద్ధాబహేళి!`,
    verseEn: `Seelamamdala lotu vaagu ninnèmchu chittambu naadi
Vaalu kaamammugaa numdiyumdi taa~ badabosi nèdu
Tolina varadalai yòchati dachchata~ tudichi pèttèdini
Chelu mattamu chesi nèkarukal praamta siddhaabaheḻi!`,
    wordMeaningTe: `శీలమండల లోతైన వాగు నాది
వాలు నిండా కామం
తోలు ప్రవహించింది మరియు నేను దానిని తుడిచిపెట్టాను
నెకరుకల్ ప్రాంతాన్ని సమం చేయడం ద్వారా సిద్ధబహేలీ!`,
    wordMeaningEn: `Seelamandala's deep brook is mine
The slope is full of lust
The leather was flooded and I wiped it off
Nekarukal region Siddhabaheli by leveling up!`,
    audioTe: "సీలమండల లోతు వాగు నిన్నెంచు చిత్తంబు నాది వాలు కామమ్ముగా నుండియుండి తాఁ బడబోసి నెడు తోలిన వరదలై యొచటి దచ్చటఁ తుడిచి పెట్టెడిని చేలు మట్టము చేసి నెకరుకల్ ప్రాంత సిద్ధాబహేళి!",
    audioEn: ""
  },
  {
    id: 23,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 23",
    titleEn: "Nekarukallu Satakam - Poem 23",
    verseTe: `ఏ నెఱుంగుదుఁ కథ లెన్ని యో కల వెందుకుం బనికి
రానట్టి వారల మునిఁగి చన్నట్లు రక్షించిన యవి
ప్రాణముల్ సుడిగొని నిన్ను బతిమాలి బామాలుకొలఁది
జేనెడై మూరెడై నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!`,
    verseEn: `E nèṟumgudu~ katha lènni yo kala vèmdukum baniki
Raanatti vaarala muni~gi channatlu rakshimchina yavi
Praanamul sudigòni ninnu batimaali baamaalukòla~di
Jenèdai moorèdai nèkarukal praamta siddhaabda heḻi!`,
    wordMeaningTe: `ఏ నెఱుంగుదున్ కథ లెన్ని యో కల్ వెందుఁ బనికి
రణట్టి వారల మునింగి చాన్నాటు యవిని రక్షించెను
ప్రాణముల్ సుడిగాని నిన్ను ఆదుకున్నాడు
జానెదై మూరెడై నెకరుకల్ ప్రాంతం సిద్ధబ్ద హెలీ!`,
    wordMeaningEn: `Ae Nerungudun Katha Lenny Yo Kal Vendum Baniki
Ranatti Varala Muningi Channatu saved Yavi
Pranamul Sudigoni took care of you
Janedai Mooredai Nekarukal area Siddhabda Heli!`,
    audioTe: "ఏ నెఱుంగుదుఁ కథ లెన్ని యో కల వెందుకుం బనికి రానట్టి వారల మునిఁగి చన్నట్లు రక్షించిన యవి ప్రాణముల్ సుడిగొని నిన్ను బతిమాలి బామాలుకొలఁది జేనెడై మూరెడై నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!",
    audioEn: ""
  },
  {
    id: 24,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 24",
    titleEn: "Nekarukallu Satakam - Poem 24",
    verseTe: `తినుటకున్నది యింతేచాలు నెక్కువ తెచ్చి పెట్టనను
పనివడి తెచ్చెదు, దానికై కష్టపడునట్లు, నేమి
పని యిద్ది, నమ్మగానిట్లు చేయగా వలయునె, యిద్ది
చినచూపొ పొదచూపొ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Tinutakunnadi yimtechaalu nèkkuva tèchchi pèttananu
Panivadi tèchchèdu, daanikai kashtapadunatlu, nemi
Pani yiddi, nammagaanitlu cheyagaa valayunè, yiddi
Chinachoopò pòdachoopò nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నేను తినడానికి చాలా వస్తువులు తీసుకురాను
తెచ్చిన పని, దానికోసం నేమి కష్టపడాలి అన్నట్టు
పని చేయండి మరియు మీరు నమ్మాలనుకున్నది చేయండి
చినచూపో పొడచూపో నెకరుకల్ ప్రాంత సిద్ధబ్దహేలి!`,
    wordMeaningEn: `I will not bring so many things to eat
The work brought, as if I had to work hard for it, Nemi
Do the work and do what you want to believe
Siddabdaheli of Chinachupo Podachupo Nekarukal area!`,
    audioTe: "తినుటకున్నది యింతేచాలు నెక్కువ తెచ్చి పెట్టనను పనివడి తెచ్చెదు, దానికై కష్టపడునట్లు, నేమి పని యిద్ది, నమ్మగానిట్లు చేయగా వలయునె, యిద్ది చినచూపొ పొదచూపొ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 25,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 25",
    titleEn: "Nekarukallu Satakam - Poem 25",
    verseTe: `చచ్చెద నన్నచోఁ గాదు బ్రదుకుము, సరియట్ల నీదు
నిచ్చయన గాదు చావుమనెద వట్లే యన్నఁ గాదు
చచ్చుచు బ్రతుకుమంచనెదు దానికి సరియ, దూఁకెదన
చిచ్చు దూఁకుమసంగ నెకరుకలాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Chachchèda nannacho~ gaadu bradukumu, sariyatla needu
Nichchayana gaadu chaavumanèda vatle yanna~ gaadu
Chachchuchu bratukumamchanèdu daaniki sariya, doo~kèdana
Chichchu doo~kumasamga nèkarukalaamta siddhaabdaheḻi!`,
    wordMeaningTe: `చనిపోయిన తల్లిలా బ్రతకకండి, మీరు చెప్పింది నిజమే
నీచాయన గాడు చావులాంటివాడు
దానికి చచ్చు బ్రతుకుమంచనెడు దుంకెదన
చిచ్చు డుంకుమసంగ నెకరుకలంత సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `Don't live like a dead mother, you are right
Nichayana Gadu is like death
Chachuchu bratukumanchanedu is right for that, dunkedana
Chichu Dunkumasanga Nekarukalantha Siddhabdaheli!`,
    audioTe: "చచ్చెద నన్నచోఁ గాదు బ్రదుకుము, సరియట్ల నీదు నిచ్చయన గాదు చావుమనెద వట్లే యన్నఁ గాదు చచ్చుచు బ్రతుకుమంచనెదు దానికి సరియ, దూఁకెదన చిచ్చు దూఁకుమసంగ నెకరుకలాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 26,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 26",
    titleEn: "Nekarukallu Satakam - Poem 26",
    verseTe: `నిన్నన్నఁ పనియేమి స్వామి వనియందు నీ తోడఁ జేసి
కొన్న వారికి మహాదేవ! అది చేసికొన్నంత తెలియు
మున్నిట్లు చేసిన స్వామి दर्शनము ఘటిల్లు నన్న
చిన్నెలే యెఱుగనో నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Ninnanna~ paniyemi svaami vaniyamdu nee toda~ jesi
Kònna vaariki mahaadeva! adi chesikònnamta tèliyu
Munnitlu chesina svaami दर्शनmu ghatillu nanna
Chinnèle yèṟugano nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నిన్న మీరు స్వామి వానియేమితో ఉన్నారు
కొన్న వారికి మహాదేవా!ఎలా చేయాలో తెలియడం లేదు
అంతకుముందు జరిగిన స్వామివారి దర్శనం ఘటిల్లు నాన్న
చిన్నేలె యెరుగనో నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `Yesterday, you were with Swami Vaniyemi
Mahadeva to those who bought!Don't know how to do it
Swami's darshan which was done earlier was Ghatillu Nanna
Chinnele Yerugano Nekarukal area Siddhabdaheli!`,
    audioTe: "నిన్నన్నఁ పనియేమి స్వామి వనియందు నీ తోడఁ జేసి కొన్న వారికి మహాదేవ! అది చేసికొన్నంత తెలియు మున్నిట్లు చేసిన స్వామి दर्शनము ఘటిల్లు నన్న చిన్నెలే యెఱుగనో నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 27,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 27",
    titleEn: "Nekarukallu Satakam - Poem 27",
    verseTe: `వడీ నా యొడల్ మరినాకుఁ తెలియని పనులు చేసితిని
చెడి, నా యొడల్ నాకుఁ తెలియకుండెడి స్థితికి, నుమేశ
ఒడలు నాయది నేటికైన నా దగ్గరుండని యట్టి
చెడుత్రోవ పోనీకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Vadee naa yòdal marinaaku~ tèliyani panulu chesitini
Chèdi, naa yòdal naaku~ tèliyakumdèdi sthitiki, numesha
Òdalu naayadi netikaina naa daggarumdani yatti
Chèdutrova poneeku nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `వాడి నా యోడెల్ నాకు తెలియని పనులు చేసాడు
చెడీ, నా యెడల కూడా తెలియనంతగా నుమేషా
ఒడలు నయాది ఈనాటికీ నాతో ఉంది
చెడ్డ త్రోవ పోనీ కోసం నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలి!`,
    wordMeaningEn: `Vadi Na Yodel did things that I didn't even know about
Chedi, to the point where I don't even know my yodel, Numesha
Odalu Nayadi is still with me today
Nekarukal area Siddhabdaheli for bad trova pony!`,
    audioTe: "వడీ నా యొడల్ మరినాకుఁ తెలియని పనులు చేసితిని చెడి, నా యొడల్ నాకుఁ తెలియకుండెడి స్థితికి, నుమేశ ఒడలు నాయది నేటికైన నా దగ్గరుండని యట్టి చెడుత్రోవ పోనీకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 28,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 28",
    titleEn: "Nekarukallu Satakam - Poem 28",
    verseTe: `నిజముగా లేనిచో నాల్గు వ్రేళ్ళు లోనికిఁ పోవుటకును
ప్రజ వారివారివౌ కాళ్లు కడుపులు పట్టుకోవచ్చు
అజ! అప్పుడే లేద యిప్పుడేటికి నది నాకును మన
సిజ దహనా! శివా! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Nijamugaa lenicho naalgu vreḻḻu loniki~ povutakunu
Praja vaarivaarivau kaaḻlu kadupulu pattukovachchu
Aja! appude leda yippudetiki nadi naakunu mana
Sija dahanaa! shivaa! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `అది నిజం కాకపోతే నాలుగు వేలు అందులోకి వెళ్తాయి
ప్రజల కాళ్లు మరియు కడుపులు పట్టుకోగలవు
ఆహా!అప్పుడూ ఇప్పుడూ కాదు, నది నాది
సిజ దహన!శివా!నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `If it is not true, four fingers will go into it
People's legs and stomachs can hold
Aha!Not then or now, the river is mine
Sija Dahana!Shiva!Nekarukal area Siddabdaheli!`,
    audioTe: "నిజముగా లేనిచో నాల్గు వ్రేళ్ళు లోనికిఁ పోవుటకును ప్రజ వారివారివౌ కాళ్లు కడుపులు పట్టుకోవచ్చు అజ! అప్పుడే లేద యిప్పుడేటికి నది నాకును మన సిజ దహనా! శివా! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 29,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 29",
    titleEn: "Nekarukallu Satakam - Poem 29",
    verseTe: `వైరాగ్య భావంబు కలిగి బ్రదికిన బ్రదుకు తేలికయు
వైరాగ్య లేశంబులేక బ్రదికెడు బదుకు దుర్భరము
వైరాగ్య మననేమి నిన్నుఁ పండించు వ్యవసాయ మందు
జేరదీయు హలీమ! నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!`,
    verseEn: `Vairaagya bhaavambu kaligi bradikina braduku telikayu
Vairaagya leshambuleka bradikèdu baduku durbharamu
Vairaagya mananemi ninnu~ pamdimchu vyavasaaya mamdu
Jeradeeyu haleema! nèkarukal praamta siddhaabda heḻi!`,
    wordMeaningTe: `నిరాసక్తతతో జీవించే జీవితం సులభం
వైరాగ్యుడు జీవించలేడు, కానీ అది దయనీయమైనది
వైరాగ్య మననేమి నిన్ను పండించే వ్యవసాయ మందు
జెరడియు హలీమా!నెకరుకల్ ప్రాంతం సిద్ధబ్ద హెలీ!`,
    wordMeaningEn: `A life lived with dispassion is easy
Vairagya is not able to live, but it is miserable
Vairagya Mananemi is an agricultural drug that cultivates you
Jeradiu Halima!Nekarukal area Siddhabda Heli!`,
    audioTe: "వైరాగ్య భావంబు కలిగి బ్రదికిన బ్రదుకు తేలికయు వైరాగ్య లేశంబులేక బ్రదికెడు బదుకు దుర్భరము వైరాగ్య మననేమి నిన్నుఁ పండించు వ్యవసాయ మందు జేరదీయు హలీమ! నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!",
    audioEn: ""
  },
  {
    id: 30,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 30",
    titleEn: "Nekarukallu Satakam - Poem 30",
    verseTe: `అది యట్లు జరుగుచునుండె సాగెడు నంత కాలమ్ము
నది నిత్యమన్నట్లు తలఁచు లోకంబు, నది అనిత్యమని
మదిలో నెచటనో యెఱుంగమియులేదు, మనసు వంచించుఁ
జెదరిస తత్త్వమై నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Adi yatlu jaruguchunumdè saagèdu namta kaalammu
Nadi nityamannatlu tala~chu lokambu, nadi anityamani
Madilo nèchatano yèṟumgamiyuledu, manasu vamchimchu~
Jèdarisa tattvamai nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `చాలా సేపు ఇలాగే సాగింది
నది శాశ్వతం, నది శాశ్వతం అని ఆలోచించండి
మనసు వంగలేదు, మనసు వంగిపోతుంది
జేదరిస తత్త్వమై నెకరుకల్ ప్రాంత సిద్ధబ్దహేళి!`,
    wordMeaningEn: `It went on like this for a long time
Think that the river is eternal, the river is eternal
The mind is not bent, the mind bends
Jedarisa Tattvamai Nekarukal area Siddhabdaheli!`,
    audioTe: "అది యట్లు జరుగుచునుండె సాగెడు నంత కాలమ్ము నది నిత్యమన్నట్లు తలఁచు లోకంబు, నది అనిత్యమని మదిలో నెచటనో యెఱుంగమియులేదు, మనసు వంచించుఁ జెదరిస తత్త్వమై నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 31,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 31",
    titleEn: "Nekarukallu Satakam - Poem 31",
    verseTe: `మనసిది యొక పాఱుబోతు గొడ్డు శ్రీ మహిత! సహజము
గనె, కదలక యుంటెఱుఁగదు పట్టుకోగా నెంతువేని
మొనసి డొంకలు బీళ్ళు కోళ్ళు తోపులు మోరెత్తిపఱచు
చెనటి ముండ్లకు నీడ్చు నెకరుకలాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Manasidi yòka paaṟubotu gòddu shree mahita! sahajamu
Ganè, kadalaka yumtèṟu~gadu pattukogaa nèmtuveni
Mònasi dòmkalu beeḻḻu koḻḻu topulu morèttipaṟachu
Chènati mumdlaku needchu nèkarukalaamta siddhaabdaheḻi!`,
    wordMeaningTe: `మనసిది ఒక అడవి ఆవు శ్రీ మహిత!సహజమైనది
గానే, ఉంటెరుంగడు పట్టుకొని కదలకు
మొనాసి డొంకలు తేనెటీగలు, కోళ్లు, చెట్లు, కాకులు
సిద్ధబ్దహేళి ముదిగొండ వరంలా!`,
    wordMeaningEn: `Manasidi is a wild cow Sri Mahita!natural
Gane, don't move while holding the unterungadu
Monasi Donkalu Bees, chickens, trees, crowing
Siddabdaheli is like a blessing to the forehead!`,
    audioTe: "మనసిది యొక పాఱుబోతు గొడ్డు శ్రీ మహిత! సహజము గనె, కదలక యుంటెఱుఁగదు పట్టుకోగా నెంతువేని మొనసి డొంకలు బీళ్ళు కోళ్ళు తోపులు మోరెత్తిపఱచు చెనటి ముండ్లకు నీడ్చు నెకరుకలాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 32,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 32",
    titleEn: "Nekarukallu Satakam - Poem 32",
    verseTe: `నా కొడల్ వంగదు పట్టుకొని యిద్ది నన్ను వేధించు
నాకంటె సోమరి యుండబోడు పినాకి! యిదెల్ల
నా కేల యొకచోటఁ కూరుచుండి ధ్యాసము సేతు నిన్ను
చీకాకు పెట్టకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Naa kòdal vamgadu pattukòni yiddi nannu vedhimchu
Naakamtè somari yumdabodu pinaaki! yidèlla
Naa kela yòkachota~ kooruchumdi dhyaasamu setu ninnu
Cheekaaku pèttaku nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నా కోడల్ బెండ్ పట్టుకుని నన్ను ఆటపట్టించండి
పినాకి నాకంటే బద్ధకంగా ఉంటుంది!అంతే
నేను ఎక్కడో కూర్చుని నిన్ను ధ్యానిస్తున్నాను
నెకరుకల్ ప్రాంతం సిద్దబ్దహేలి సిగ్గుపడకు!`,
    wordMeaningEn: `Hold my codal bend and tease me
Pinaki will be lazier than me!That's it
I sit somewhere and meditate on you
Nekarukal region Siddabdaheli do not be shy!`,
    audioTe: "నా కొడల్ వంగదు పట్టుకొని యిద్ది నన్ను వేధించు నాకంటె సోమరి యుండబోడు పినాకి! యిదెల్ల నా కేల యొకచోటఁ కూరుచుండి ధ్యాసము సేతు నిన్ను చీకాకు పెట్టకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 33,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 33",
    titleEn: "Nekarukallu Satakam - Poem 33",
    verseTe: `తక్కిన నాలుగన్న మయకోశ మాధారమై కలవు
లేదన్న మాత్మ కున్ననా కన్నంబు నిడదు
బక్క దేహమునకై భ్రాంతి యీ మహాభ్రాంతి మాన్పించు
చిక్కని దైవమై నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Takkina naaluganna mayakosha maadhaaramai kalavu
Ledanna maatma kunnanaa kannambu nidadu
Bakka dehamunakai bhraamti yee mahaabhraamti maanpimchu
Chikkani daivamai nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నాలుగు సంబంధిత మాయకోశాలు మధారగా ఉపయోగించబడతాయి
Otherwise Matma Kunnana Kannambu will not sleep
Get rid of the illusion of the body of the goat
దట్టమైన దివ్యమైన నెకరుకల్ ప్రాంత సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `The four corresponding Mayakoshas are used as Madhara
Otherwise Matma Kunnana Kannambu will not sleep
Get rid of the illusion of the body of the goat
Siddhabdaheli of Nekarukal area, which is thick and divine!`,
    audioTe: "తక్కిన నాలుగన్న మయకోశ మాధారమై కలవు లేదన్న మాత్మ కున్ననా కన్నంబు నిడదు బక్క దేహమునకై భ్రాంతి యీ మహాభ్రాంతి మాన్పించు చిక్కని దైవమై నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 34,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 34",
    titleEn: "Nekarukallu Satakam - Poem 34",
    verseTe: `ఇది నాది యని కూడఁగాదు నాస్వామి యిది నే యనుట
ఇది యహంకృతికిని మొదటి రూపమ యిది మాయలోఁత్రు
కదలించి పెట్టు పునాది పడఁద్రోతుఁ కట్టిన మేడ
చెదరని నేనుగా నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Idi naadi yani kooda~gaadu naasvaami yidi ne yanuta
Idi yahamkrutikini mòdati roopama yidi maayalo~tru
Kadalimchi pèttu punaadi pada~drotu~ kattina meda
Chèdarani nenugaa nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ఇది నా పేరు
ఇది యహంకృతి యొక్క మొదటి రూపము ఇది మాయలోంత్రు
పదండ్రోతు పునాదిని తరలించి ఉంచండి
నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `This is my name
This is the first form of Yahankriti which is Mayalontru
Move and place the foundation of Padandrothu
Nekarukal area Siddhabdaheli!`,
    audioTe: "ఇది నాది యని కూడఁగాదు నాస్వామి యిది నే యనుట ఇది యహంకృతికిని మొదటి రూపమ యిది మాయలోఁత్రు కదలించి పెట్టు పునాది పడఁద్రోతుఁ కట్టిన మేడ చెదరని నేనుగా నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 35,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 35",
    titleEn: "Nekarukallu Satakam - Poem 35",
    verseTe: `ఊహచే సిద్ధాంతపరచితిఁ తదాశయుఁ త్యజించినాడ
యూహించు దానినిగూర్చి మరల నీ యూహించు టేలొ
ఈహ వదలి పెట్టి, కూడ నూహించుటేటికో మరి యి
సీ !హరిద్వాససా! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Oohache siddhaamtaparachiti~ tadaashayu~ tyajimchinaada
Yoohimchu daaninigoorchi marala nee yoohimchu telò
Eeha vadali pètti, kooda noohimchutetiko mari yi
See !haridvaasasaa! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `అతను ఊహ సిద్ధాంతాన్ని త్యజించాడు
దాని గురించి మరోసారి ఆలోచించండి
దాన్ని వదిలేసి దాని గురించి ఆలోచించండి
చూడండి !హరిద్వాసస!నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `He renounced the theory of imagination
Think again about that
Leave it and think about it
See !Haridwasasa!Nekarukal area Siddabdaheli!`,
    audioTe: "ఊహచే సిద్ధాంతపరచితిఁ తదాశయుఁ త్యజించినాడ యూహించు దానినిగూర్చి మరల నీ యూహించు టేలొ ఈహ వదలి పెట్టి, కూడ నూహించుటేటికో మరి యి సీ !హరిద్వాససా! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 36,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 36",
    titleEn: "Nekarukallu Satakam - Poem 36",
    verseTe: `కట్టెలలో నన్నుఁ బెట్టినపుడైనఁ గాని కామమ్ము
కట్టుబడుట యున్నదా యనేకముల్ కడగి కోసితిని
అట్టడుగున నున్న దేమొ యీ వాంఛ యా వేరు త్రుంపు
చెట్టిది చచ్చును నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Kattèlalo nannu~ bèttinapudaina~ gaani kaamammu
Kattubaduta yunnadaa yanekamul kadagi kositini
Attaduguna nunna demò yee vaamchha yaa veru trumpu
Chèttidi chachchunu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నన్ను కట్టెల్లో వేస్తే గాని
ఇది కట్టుబడి ఉందా?
దిగువన ఉన్న డెమో ఒక ప్రత్యేక సమూహం
చెట్టిది చచ్చును నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `If you put me in the firewood, you will either
Is it binding?
Demo at the bottom is a separate group
Chettidi Chachunu Nekarukal area Siddabdaheli!`,
    audioTe: "కట్టెలలో నన్నుఁ బెట్టినపుడైనఁ గాని కామమ్ము కట్టుబడుట యున్నదా యనేకముల్ కడగి కోసితిని అట్టడుగున నున్న దేమొ యీ వాంఛ యా వేరు త్రుంపు చెట్టిది చచ్చును నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 37,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 37",
    titleEn: "Nekarukallu Satakam - Poem 37",
    verseTe: `నాయందు దయలేదు నీకు ననఁ కృతజ్ఞపు మాట యవున
నాయందు దయయుండె నీకు ననుచు నన మనసొప్ప
దోయయ్య దయయున్నఁ కన్నుగవ మధ్య నూగాడు వచ్చి
చేయెత్తి మొక్కెద నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Naayamdu dayaledu neeku nana~ krutajnyapu maata yavuna
Naayamdu dayayumdè neeku nanuchu nana manasòppa
Doyayya dayayunna~ kannugava madhya noogaadu vachchi
Cheyètti mòkkèda nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నాకు దయ లేదు, మీకు నా కృతజ్ఞతా పదాలు
నా హృదయం, నీ పట్ల నాకు జాలి ఉంది
కానుగవ మధ్యలో దోయయ్య దయున్న
చేయెత్తి మొక్కెడ నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `I have no mercy, my words of gratitude to you
I have compassion for you, my heart
Doyayya Dayunna came in the middle of Kanugava
Cheyetti Mokkeda Nekarukal area Siddabdaheli!`,
    audioTe: "నాయందు దయలేదు నీకు ననఁ కృతజ్ఞపు మాట యవున నాయందు దయయుండె నీకు ననుచు నన మనసొప్ప దోయయ్య దయయున్నఁ కన్నుగవ మధ్య నూగాడు వచ్చి చేయెత్తి మొక్కెద నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 38,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 38",
    titleEn: "Nekarukallu Satakam - Poem 38",
    verseTe: `ఆరయ స్వప్న కథాళి చూడఁ కోపమే యధిక మన్పించు
మరియు జాగ్రద్వేళ కామ భావమే యధిక మన్పించు
వెరసి కామక్రోధములివి తక్కువై వెలయవ నుతులఁ
జెరిగిపోయుదు నిన్ను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Aaraya svapna kathaaḻi chooda~ kopame yadhika manpimchu
Mariyu jaagradveḻa kaama bhaavame yadhika manpimchu
Vèrasi kaamakrodhamulivi takkuvai vèlayava nutula~
Jèrigipoyudu ninnu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `అరయ స్వప్న కథలి చూడ కోపమే యధిక మాన్పించు
ఇక జాగ్రద్వేలా కామ భవ యాధిక మాన్పింకు
వెరసి కామక్రోధములివి తక్కువ మరియు ఖరీదైనవి
నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `Araya swapna kathali chuda kopame yadhika manpinchu
And Jagradvela Kama Bhava is Yadhika Manpinku
Verasi Kamakrodhamulivi low and expensive
Nekarukal region Siddabdaheli!`,
    audioTe: "ఆరయ స్వప్న కథాళి చూడఁ కోపమే యధిక మన్పించు మరియు జాగ్రద్వేళ కామ భావమే యధిక మన్పించు వెరసి కామక్రోధములివి తక్కువై వెలయవ నుతులఁ జెరిగిపోయుదు నిన్ను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 39,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 39",
    titleEn: "Nekarukallu Satakam - Poem 39",
    verseTe: `నిక్కమ్ము నాయందు నీకు దయలేదని వచింపవలయు
నొక్కయెదో లౌకికంపు మేలు నా కొనగూర్చి నాకు
చిక్కని మనసును దాని నూహింపఁ జేసెను నీకుఁ
జిక్కి మనసును నెకరుకల్ ప్రాంత సిద్ధాష్టహేళి!`,
    verseEn: `Nikkammu naayamdu neeku dayaledani vachimpavalayu
Nòkkayèdo laukikampu melu naa kònagoorchi naaku
Chikkani manasunu daani noohimpa~ jesènu neeku~
Jikki manasunu nèkarukal praamta siddhaashtaheḻi!`,
    wordMeaningTe: `నాలో నీకు దయ లేదని దాచాలి
మీరు నొక్కితే, లోకహితం నాకు
నీకు దట్టమైన మనసు చూపిస్తాను
జిక్కి మనాను నెకరుకల్ ప్రాంతం సిద్దాష్ట హెలీ!`,
    wordMeaningEn: `You must hide that you have no mercy in me
If you press on, the worldly good is for me
I will show you the dense mind
Zikki Mananu Nekarukal Region Siddashta Heli!`,
    audioTe: "నిక్కమ్ము నాయందు నీకు దయలేదని వచింపవలయు నొక్కయెదో లౌకికంపు మేలు నా కొనగూర్చి నాకు చిక్కని మనసును దాని నూహింపఁ జేసెను నీకుఁ జిక్కి మనసును నెకరుకల్ ప్రాంత సిద్ధాష్టహేళి!",
    audioEn: ""
  },
  {
    id: 40,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 40",
    titleEn: "Nekarukallu Satakam - Poem 40",
    verseTe: `కన్నది అనుభూతి సగము పచ్చి సగము దోరగాగ
నున్నది భోగ వేళ సయితమ్ము నా యుల్లంబునందు
నున్నది నీవును, నురక కదలుచు నున్నది మేను
చెన్ను మాసిన మేను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Kannadi anubhooti sagamu pachchi sagamu doragaaga
Nunnadi bhoga veḻa sayitammu naa yullambunamdu
Nunnadi neevunu, nuraka kadaluchu nunnadi menu
Chènnu maasina menu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `కన్నయ్ సగం పచ్చిగా మరియు సగం మురికిగా అనిపిస్తుంది
సయితమ్ము భోగ సమయమున నా యులుంబునందు
కదులుతున్నది నువ్వే, నురుగు నేనే
చెన్ను మాసిన మేను నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `Kannai feels half raw and half dirty
Saitammu is in my Yullumbun during the time of indulgence
You are the one who is moving and the foam is me
Chennu Masina Menu Nekarukal area Siddabdaheli!`,
    audioTe: "కన్నది అనుభూతి సగము పచ్చి సగము దోరగాగ నున్నది భోగ వేళ సయితమ్ము నా యుల్లంబునందు నున్నది నీవును, నురక కదలుచు నున్నది మేను చెన్ను మాసిన మేను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 41,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 41",
    titleEn: "Nekarukallu Satakam - Poem 41",
    verseTe: `కీర్తి మర్యాదలయందు మనసు లగించి యున్నానొ
కీర్తి మర్యాదలయందు నీవు బిగించుచున్నావు
కీర్తి మర్యాదలు వలదులే స్వామి కృతముల నెన్ని
చేర్తు నన్నింటను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Keerti maryaadalayamdu manasu lagimchi yunnaanò
Keerti maryaadalayamdu neevu bigimchuchunnaavu
Keerti maryaadalu valadule svaami krutamula nènni
Chertu nannimtanu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `కీర్తి మర్యాదలపై మనసు పెట్టింది
నీవు కీర్తి మర్యాదలలో బిగుసుకుపోతున్నావు
కీర్తి మర్యాదలు స్వామివారి యోగ్యత అంత ఎక్కువ
చేరు నన్నింతను నెకరుకల్ ప్రాంత సిద్ధబ్దహేళి!`,
    wordMeaningEn: `Keerti has set his mind on the manners
You are tightening in the manners of glory
The manners of fame are as many as the merits of Swami
Cherthu Nannintanu Nekarukal region Siddabdaheli!`,
    audioTe: "కీర్తి మర్యాదలయందు మనసు లగించి యున్నానొ కీర్తి మర్యాదలయందు నీవు బిగించుచున్నావు కీర్తి మర్యాదలు వలదులే స్వామి కృతముల నెన్ని చేర్తు నన్నింటను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 42,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 42",
    titleEn: "Nekarukallu Satakam - Poem 42",
    verseTe: `యా యా భావనాయ సిద్ధిస్సమంజసా భవతి
తా దృశీ యన్నట్లు నన్ను వట్టి చైతన్యాకృతిఁ ప్రతి
వాదించుటకు నేమొ విర లెవ్వరు పలుకరు లేవు
సీదరింపులు కూడ నెకరుకల్ ప్రాంత సిద్ధాబహేళి!`,
    verseEn: `Yaa yaa bhaavanaaya siddhissamamjasaa bhavati
Taa drushee yannatlu nannu vatti chaitanyaakruti~ prati
Vaadimchutaku nemò vira lèvvaru palukaru levu
Seedarimpulu kooda nèkarukal praamta siddhaabaheḻi!`,
    wordMeaningTe: `యా యా భవనాయ సిద్ధిస్సమఞ్జసా భవతి
ఇది నన్ను చూసేలా చేసే చైతన్య రూపం
మాకు వాదించడానికి మాటలు లేవు
నేకరుకల్ ప్రాంతానికి చెందిన సిద్దాబహేలి కూడా అభినందనీయం!`,
    wordMeaningEn: `Ya ya bhavanaya siddissamanjasa bhavati
It is a form of consciousness that makes me look at it
We have no words to argue
Siddabaheli of Nekarukal area is also appreciated!`,
    audioTe: "యా యా భావనాయ సిద్ధిస్సమంజసా భవతి తా దృశీ యన్నట్లు నన్ను వట్టి చైతన్యాకృతిఁ ప్రతి వాదించుటకు నేమొ విర లెవ్వరు పలుకరు లేవు సీదరింపులు కూడ నెకరుకల్ ప్రాంత సిద్ధాబహేళి!",
    audioEn: ""
  },
  {
    id: 43,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 43",
    titleEn: "Nekarukallu Satakam - Poem 43",
    verseTe: `నేనన్న దే లేని యపుడు పాపముల్ నేనేమి సేతు
నేనేమి సేతుఁ పాపములు చేసితి నీ వనె దేని
నే నన్న భ్రాంతి మాయించు నీవును నేను నదొక్క
చేనిలో పంటగా నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Nenanna de leni yapudu paapamul nenemi setu
Nenemi setu~ paapamulu chesiti nee vanè deni
Ne nanna bhraamti maayimchu neevunu nenu nadòkka
Chenilo pamtagaa nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నేనేమి సేతు నాతో సంబంధం లేని పాపం
నేను పాపాలు చేసాను, మీరు ఏమి చేస్తున్నారు?
నేను నాది మరియు మీరు నావారు
చేతికి పంటగా నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `Nenemi Setu is a sinner who has nothing to do with me
I have committed sins, what are you doing?
I am mine and you are mine
Nekarukal area Siddhabdaheli as a crop in hand!`,
    audioTe: "నేనన్న దే లేని యపుడు పాపముల్ నేనేమి సేతు నేనేమి సేతుఁ పాపములు చేసితి నీ వనె దేని నే నన్న భ్రాంతి మాయించు నీవును నేను నదొక్క చేనిలో పంటగా నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 44,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 44",
    titleEn: "Nekarukallu Satakam - Poem 44",
    verseTe: `అంతయు శూన్యంぶగాగఁ కన్పించినప్పుడు చాల
వింత, శూన్యము గాగఁ జూచిన యతండు వీఁడుం కెఁగా దె
భ్రాంతి నేదో చిత్రపటము చూడఁ కావలేనని రూప
చింతనాహత బుద్ధి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Amtayu shoonyamぶgaaga~ kanpimchinappudu chaala
Vimta, shoonyamu gaaga~ joochina yatamdu vee~dum kè~gaa dè
Bhraamti nedo chitrapatamu chooda~ kaavalenani roopa
Chimtanaahata buddhi nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `శూన్యం కనిపించినప్పుడు సరిపోతుంది
విచిత్రం, శూన్యం పాతదే
భ్రమ అనేది చిత్రాన్ని చూసినట్లే
చింతనహత బుద్ధిలోని నెకరుకల్ ప్రాంత సిద్ధబ్దహేళి!`,
    wordMeaningEn: `That's enough when the void appears
The strange, the void is the same as the old one
Illusion is like seeing a picture
Siddabdaheli of the Nekarukal region of Chintanahata Buddhi!`,
    audioTe: "అంతయు శూన్యంぶగాగఁ కన్పించినప్పుడు చాల వింత, శూన్యము గాగఁ జూచిన యతండు వీఁడుం కెఁగా దె భ్రాంతి నేదో చిత్రపటము చూడఁ కావలేనని రూప చింతనాహత బుద్ధి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 45,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 45",
    titleEn: "Nekarukallu Satakam - Poem 45",
    verseTe: `మన్నిత్య భావనాధార! నేను కుమ్మరి పుర్వువోలె
నున్నాను తాఁబేలువోలెఁ చేతగాకున్నది యున్కి
యున్న యున్కి యితరులకు నసహ్యమై యొగి బావి నీటి
చిన్న తీపెక్కక నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Mannitya bhaavanaadhaara! nenu kummari purvuvolè
Nunnaanu taa~beluvolè~ chetagaakunnadi yunki
Yunna yunki yitarulaku nasahyamai yògi baavi neeti
Chinna teepèkkaka nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ప్రశంసల భావన!నేను కుమ్మరిలా ఉన్నాను
నున్న తంబేలువోలెం చేయునది యుంకి
యోగి బావి నీరు ఇతరులకు నచ్చదు
చిన్న తీపక్కక నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `Appreciation concept!I am like a potter
What is done by Nunna Tambeluvolem is Yunki
Yogi's well water is disliked by others
Little Thiepakkaka Nekarukal area Siddabdaheli!`,
    audioTe: "మన్నిత్య భావనాధార! నేను కుమ్మరి పుర్వువోలె నున్నాను తాఁబేలువోలెఁ చేతగాకున్నది యున్కి యున్న యున్కి యితరులకు నసహ్యమై యొగి బావి నీటి చిన్న తీపెక్కక నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 46,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 46",
    titleEn: "Nekarukallu Satakam - Poem 46",
    verseTe: `నిగుడు, లోకము పైకి మనసు నిన్ను ధ్యానించెడు వేళ
నిగుడు, లోక వ్యవహార వేళల నీయందె నిలుచు
తగముందు కళ్లెము వెనుక వైపునఁ తగిలించినట్లు
సిగపట్ల మారిది నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Nigudu, lokamu paiki manasu ninnu dhyaanimchèdu veḻa
Nigudu, loka vyavahaara veḻala neeyamdè niluchu
Tagamumdu kaḻlèmu vènuka vaipuna~ tagilimchinatlu
Sigapatla maaridi nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నిగుడు, లోకము పైన మనస్సు నిన్ను ధ్యానించునప్పుడు
నిగుడు, నీవు లోకవ్యవహార సమయములో నిలుచు
మునుపటిలా, ఎముక వెనుకకు జోడించబడింది
సిగపట్ల మరిది నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `Nigudu, when the mind meditates on you above the world
Nigudu, you stand in the time of world affairs
As before, the bone was attached to the back
Sigapatla Maridi Nekarukal region Siddabdaheli!`,
    audioTe: "నిగుడు, లోకము పైకి మనసు నిన్ను ధ్యానించెడు వేళ నిగుడు, లోక వ్యవహార వేళల నీయందె నిలుచు తగముందు కళ్లెము వెనుక వైపునఁ తగిలించినట్లు సిగపట్ల మారిది నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 47,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 47",
    titleEn: "Nekarukallu Satakam - Poem 47",
    verseTe: `ఈ మేనితోఁగూడి యిచట నున్నవి ఎన్ని యో కలవు
ఈ మేను ప్రారబ్ధ మొకఁడు బిట్టుగా నేచి యేర్పడియె
సామి నీ వీ రెంటి నిచట నిచ్చటే సమయింపు! సామి
సీమంతినీమూర్తి.! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Ee menito~goodi yichata nunnavi ènni yo kalavu
Ee menu praarabdha mòka~du bittugaa nechi yerpadiyè
Saami nee vee rèmti nichata nichchate samayimpu! saami
Seemamtineemoorti.! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ఈ గనిలో ఎన్ని సంవత్సరాలు ఉన్నాయి?
ఈ మెనూ ప్రారబ్ధ మొకందు ముక్కగా అల్లినది
ఇది సామీ మరియు మీరు ఒకరికొకరు నిజాయితీగా ఉండాల్సిన సమయం!సామీ
సీమంతిని మూర్తి.నెకరుకల్ ప్రాంతం సిద్దబ్దహేళి!`,
    wordMeaningEn: `How many years are there in this mine?
This menu Prarabdha Mokandu is woven into a piece
It's time for Sami and you to be honest with each other!Sami
Seemanthini Murthy.Nekarukal area Siddabdaheli!`,
    audioTe: "ఈ మేనితోఁగూడి యిచట నున్నవి ఎన్ని యో కలవు ఈ మేను ప్రారబ్ధ మొకఁడు బిట్టుగా నేచి యేర్పడియె సామి నీ వీ రెంటి నిచట నిచ్చటే సమయింపు! సామి సీమంతినీమూర్తి.! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 48,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 48",
    titleEn: "Nekarukallu Satakam - Poem 48",
    verseTe: `మును నిరర్థకమైన దాని సార్థకంబుగ నెంచుచుండి
కని నిరర్థక మైనదానిని నిరర్థకంబుగ నేడు
తనర నెల్లించియును గోయ మాత్రము తప్పుటలే ద
సినిశిత సుమహస్క! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Munu nirarthakamaina daani saarthakambuga nèmchuchumdi
Kani nirarthaka mainadaanini nirarthakambuga nedu
Tanara nèllimchiyunu goya maatramu tapputale da
Sinishita sumahaska! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ఇంతకు ముందు అర్థం లేనిది అర్థం చేసుకోండి
ఈరోజు పనికిరాని వాటిని చేయండి
తానారా నెల్లించియు పోవుట తప్పుకాదు
సినీశిత సుమహాస్కా!నేకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `Make sense of what was previously meaningless
Make what is useless today
It is not wrong to go to Tanara Nellinchiu
Sinishita Sumahaska!Nekarukal area Siddabdaheli!`,
    audioTe: "మును నిరర్థకమైన దాని సార్థకంబుగ నెంచుచుండి కని నిరర్థక మైనదానిని నిరర్థకంబుగ నేడు తనర నెల్లించియును గోయ మాత్రము తప్పుటలే ద సినిశిత సుమహస్క! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 49,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 49",
    titleEn: "Nekarukallu Satakam - Poem 49",
    verseTe: `ప్రశమిత తీవ్ర భావమగు వేళల భార్యయు బిడ్డ
లశసంబు వీనినిగూర్చి యూహలాహతములై పొల్చు
నిశితంబుగా సర్వవేళలందున నిన్నెంచు పట్టి
శిశిర దృష్టులఁజూడు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Prashamita teevra bhaavamagu veḻala bhaaryayu bidda
Lashasambu veeninigoorchi yoohalaahatamulai pòlchu
Nishitambugaa sarvaveḻalamduna ninnèmchu patti
Shishira drushtula~joodu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ప్రశమిత తీవ్రమైన భావోద్వేగాల భార్య మరియు బిడ్డ
లాషా సాంబు ఒక చెడ్డవాడు
నిశితంబు నీకు సదా సన్నిధి
శరదృతువులో నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `Prashamita is a wife and child of intense emotions
Lasha Sambu is a scumbag
Nishitambu is always close to you
Nekarukal area Siddhabdaheli in autumn!`,
    audioTe: "ప్రశమిత తీవ్ర భావమగు వేళల భార్యయు బిడ్డ లశసంబు వీనినిగూర్చి యూహలాహతములై పొల్చు నిశితంబుగా సర్వవేళలందున నిన్నెంచు పట్టి శిశిర దృష్టులఁజూడు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 50,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 50",
    titleEn: "Nekarukallu Satakam - Poem 50",
    verseTe: `ఇవి హిరణ్యాక్ష వరములు కావుగదే మదేభాజి
న వసన! దానిచే దీనిచేఁ చావు నాకు వద్దనుచు
శివ! చావు కానట్టి చావు నాశింతు శివ! జగతికి న
శివకారి కాదిద్ది! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Ivi hiranyaaksha varamulu kaavugade madebhaaji
Na vasana! daaniche deeniche~ chaavu naaku vaddanuchu
Shiva! chaavu kaanatti chaavu naashimtu shiva! jagatiki na
Shivakaari kaadiddi! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ఇవి హిరణ్యాక్షుని వరములు, గాదె మదేభాజీ
రాగానే!దీని వల్ల నాకు చావాలని లేదు
శివా!నీవు చావకపోతే చచ్చిపోతావు!ప్రపంచం మీద
శివకారి కాడిది!నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `These are Hiranyaksha's bounties, Gade Madebhaji
On arrival!I don't want to die because of this
Shiva!If you don't die, you will die!On the world
Shivkari Kadidi!Nekarukal area Siddabdaheli!`,
    audioTe: "ఇవి హిరణ్యాక్ష వరములు కావుగదే మదేభాజి న వసన! దానిచే దీనిచేఁ చావు నాకు వద్దనుచు శివ! చావు కానట్టి చావు నాశింతు శివ! జగతికి న శివకారి కాదిద్ది! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 51,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 51",
    titleEn: "Nekarukallu Satakam - Poem 51",
    verseTe: `నీముక్కు మొగము నే నెఱుగ శాస్త్రముల్ నినుఁగూర్చి చెప్పె
నీ మాదిరిగ నాశయించి న౯ ఫలియింతు వీవనుచు
సోమ కిరీట! నాదింతె మీర్మీరు చూచికోవలయు
సీమాంతములదాఁక నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Neemukku mògamu ne nèṟuga shaastramul ninu~goorchi chèppè
Nee maadiriga naashayimchi na9 phaliyimtu veevanuchu
Soma kireeta! naadimtè meermeeru choochikovalayu
Seemaamtamuladaa~ka nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నిన్ను గూర్చి నీకు మొగము నే నెరుగ శాస్త్రముల్ చెప్పెను
మీ ఉదాహరణను అనుసరించండి మరియు ఫలితాలను చూడండి
సోమ కిరీటం!నాది నువ్వు చూడాలి
సీమంత్ములదంకర నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `Nimukku Mogamu Ne Neruga Shastramul told about you
Follow your example and see the results
Soma crown!You have to see mine
Seemantmuladankara Nekarukal region Siddabdaheli!`,
    audioTe: "నీముక్కు మొగము నే నెఱుగ శాస్త్రముల్ నినుఁగూర్చి చెప్పె నీ మాదిరిగ నాశయించి న౯ ఫలియింతు వీవనుచు సోమ కిరీట! నాదింతె మీర్మీరు చూచికోవలయు సీమాంతములదాఁక నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 52,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 52",
    titleEn: "Nekarukallu Satakam - Poem 52",
    verseTe: `నను నమ్మెదేల యనంగ శాస్త్రముల్ ననుఁ కూర్చి చెప్పె
ననుగూర్చి చెప్పినదెల్ల నిజమయ్యె నా యనుభవము
నను నిను గూర్చియు నిజమైనఁ కావలె నన్నిం దన వల
సిన దేమియును లేద! నెకరుకల్ ప్రాంత సిద్ధాహేళి!`,
    verseEn: `Nanu nammèdela yanamga shaastramul nanu~ koorchi chèppè
Nanugoorchi chèppinadèlla nijamayyè naa yanubhavamu
Nanu ninu goorchiyu nijamaina~ kaavalè nannim dana vala
Sina demiyunu leda! nèkarukal praamta siddhaaheḻi!`,
    wordMeaningTe: `ననుమేడల యనంగ శాస్త్రముల్ నన్ను కూర్చోబెట్టి చెప్పెను
నా గురించి చెప్పినవన్నీ నిజమే, నా యవ్వనం
నేను మీ గురించి నిజం చెప్పాలనుకుంటున్నాను
సిన దేమియును లేదు!నెకరుకల్ ప్రాంతం సిద్దహేలీ!`,
    wordMeaningEn: `Nanumedela Yananga Shastramul sat me down and told me
Everything said about me is true, my youth
I want to be true about you
Sina Demiunu no!Nekarukal area Siddaheli!`,
    audioTe: "నను నమ్మెదేల యనంగ శాస్త్రముల్ ననుఁ కూర్చి చెప్పె ననుగూర్చి చెప్పినదెల్ల నిజమయ్యె నా యనుభవము నను నిను గూర్చియు నిజమైనఁ కావలె నన్నిం దన వల సిన దేమియును లేద! నెకరుకల్ ప్రాంత సిద్ధాహేళి!",
    audioEn: ""
  },
  {
    id: 53,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 53",
    titleEn: "Nekarukallu Satakam - Poem 53",
    verseTe: `ఎవ్వడో వీని నిందించెనని విని యెచటనో గాని
రవ్వంతయగు బాధ కలుగు చున్నదో రజత గిరీశ!
యెవ్వడో యెవనినో నింద చేసిన నీ నాకు నేల
చివ్వ రేపకు కేళి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Èvvado veeni nimdimchènani vini yèchatano gaani
Ravvamtayagu baadha kalugu chunnado rajata gireesha!
Yèvvado yèvanino nimda chesina nee naaku nela
Chivva repaku keḻi nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `తనని ఎవరో నిందించారని విన్నాడు
రవ్వంతయగు వేదన రజత గిరీశా!
మీరు ఎవరినైనా నిందించటానికి నేల
రేపు నెకరుకల్ ఏరియా సిద్ధబ్దహేలీ సరదా!`,
    wordMeaningEn: `He heard that someone blamed him
Ravvantayagu's pain is so great that Rajata Girisha!
You are the ground for blaming anyone
Nekarukal area Siddhabdaheli fun tomorrow!`,
    audioTe: "ఎవ్వడో వీని నిందించెనని విని యెచటనో గాని రవ్వంతయగు బాధ కలుగు చున్నదో రజత గిరీశ! యెవ్వడో యెవనినో నింద చేసిన నీ నాకు నేల చివ్వ రేపకు కేళి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 54,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 54",
    titleEn: "Nekarukallu Satakam - Poem 54",
    verseTe: `నట్టు గవసంబునకును నా శవినాభావమైన
యట్టి సంబంధంబు పెట్టికొని చెడి నట్టివాఁడేను
పుట్టి మునింగి పోయినదొ యెందలు పుట్టరు కవులు
చెట్టనైతిని గాని నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Nattu gavasambunakunu naa shavinaabhaavamaina
Yatti sambamdhambu pèttikòni chèdi nattivaa~denu
Putti munimgi poyinadò yèmdalu puttaru kavulu
Chèttanaitini gaani nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నట్టు గవశంబునకును నా శవినాభవ
నేను ఈ సంబంధంతో చెడు పనులు చేస్తున్నాను
కవులు పుట్టి మునిగినప్పుడు పుట్టరు
చెట్టనైతిని లేక నెకరుకల్ ఏరియా సిద్దబ్దహేలీ!`,
    wordMeaningEn: `Nattu Gavasambunakunu my Shavinabhava
I am doing bad things with this relationship
Poets are not born when they are born and drowned
Chettanaithini or Nekarukal area Siddabdaheli!`,
    audioTe: "నట్టు గవసంబునకును నా శవినాభావమైన యట్టి సంబంధంబు పెట్టికొని చెడి నట్టివాఁడేను పుట్టి మునింగి పోయినదొ యెందలు పుట్టరు కవులు చెట్టనైతిని గాని నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 55,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 55",
    titleEn: "Nekarukallu Satakam - Poem 55",
    verseTe: `మనిసితోడి యహంక్రియానుగతి కాక మనుజుల౦ దెవడు
తనయందుఁగల విద్యకోసమై పుట్టె దా నొక్కరుండె
యనయము 'లచ్చోపలచ్చ' లున్నా రహంకార పడగఁ
జెనటులు ననుఁబోలె నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Manisitodi yahamkriyaanugati kaaka manujula0 dèvadu
Tanayamdu~gala vidyakosamai puttè daa nòkkarumdè
Yanayamu 'lachchopalachcha' lunnaa rahamkaara padaga~
Jènatulu nanu~bolè nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `మనిషి దెయ్యం, మనిషి కాదు
కొడుకు చదువు కోసం పుట్టె ద ని ఒత్తిడి చేస్తున్నాడు
యనయము 'లచ్చోపలచ్చ' లున్న రహమాంకర పదగ్
గెనెతులు ననుంబోలె నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `Man is a devil, not a man
He was pressing Putte da for his son's education
Yanayamu 'Lachchopalachcha' Lunna Rahmankara Padag
Genetulu Nanumbole Nekarukal area Siddhabdaheli!`,
    audioTe: "మనిసితోడి యహంక్రియానుగతి కాక మనుజుల౦ దెవడు తనయందుఁగల విద్యకోసమై పుట్టె దా నొక్కరుండె యనయము 'లచ్చోపలచ్చ' లున్నా రహంకార పడగఁ జెనటులు ననుఁబోలె నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 56,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 56",
    titleEn: "Nekarukallu Satakam - Poem 56",
    verseTe: `ఇన్నాళ్ళకైనను గన్ను తెఱపించి తీ మాత్రపుఁ కృప
మన్నునై తుదమన్ను లోనఁగలియని మహితమౌ వేళఁ
బన్ని నిక్ గెల్చుట వేరు నీ పీడ వదలుట వేరు
చెన్ను మాలిన పీడ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Innaaḻḻakainanu gannu tèṟapimchi tee maatrapu~ krupa
Mannunai tudamannu lona~galiyani mahitamau veḻa~
Banni nik gèlchuta veru nee peeda vadaluta veru
Chènnu maalina peeda nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `చాలా సేపు కూడా తుపాకీని తెరిచినందుకు ధన్యవాదాలు
మన్నునై తుదమన్ను లోనగలియని మహితమౌ వెలన్
బన్నీ నిక్ గెలవడం అనేది మీ బరువు తగ్గడం వేరు
చెన్ను మలిన పీడ నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `Thank you for opening the gun even for a long time
Mannunai tudamannu lonagaliani mahitamau velan
Winning a bunny nick is different from losing your weight
Chennu Malina Peeda Nekarukal region Siddhabdaheli!`,
    audioTe: "ఇన్నాళ్ళకైనను గన్ను తెఱపించి తీ మాత్రపుఁ కృప మన్నునై తుదమన్ను లోనఁగలియని మహితమౌ వేళఁ బన్ని నిక్ గెల్చుట వేరు నీ పీడ వదలుట వేరు చెన్ను మాలిన పీడ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 57,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 57",
    titleEn: "Nekarukallu Satakam - Poem 57",
    verseTe: `నిరుపాయుడై యదేపనిగ రాచుచుండిన రాయియైన
నరుగు సన్నట్లుగా నరుగుచున్నానయా విశ్వనాథ!
అరిగియరిగి చిట్టచివరకీ లేని యట్లుగాఁ జేయు
సిరము గాలికిఁబోవ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Nirupaayudai yadepaniga raachuchumdina raayiyaina
Narugu sannatlugaa naruguchunnaanayaa vishvanaatha!
Arigiyarigi chittachivarakee leni yatlugaa~ jeyu
Siramu gaaliki~bova nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నిర్మానుష్య స్థితిలో వ్రాసిన రాయి అది
సన్నగా విరిగిపోతున్నావా విశ్వనాథా?
అలసిపోకండి మరియు అంతం కాదు
సిరాము గాలిక్బోవ నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `It is a stone that is written in a desolate state
Viswanatha, are you breaking thin?
Get tired and never ending
Siramu Galikbowa Nekarukal Region Siddabdaheli!`,
    audioTe: "నిరుపాయుడై యదేపనిగ రాచుచుండిన రాయియైన నరుగు సన్నట్లుగా నరుగుచున్నానయా విశ్వనాథ! అరిగియరిగి చిట్టచివరకీ లేని యట్లుగాఁ జేయు సిరము గాలికిఁబోవ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 58,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 58",
    titleEn: "Nekarukallu Satakam - Poem 58",
    verseTe: `వసరి యధార్థ వాక్కు సకు వశుడనై వాశ్చమత్కార
మునకును గొని తెచ్చికొంటిఁ కద దారిఁపోవు తద్దినము
లను వందలును వేలు నీదు కృప, నవే లాభించెడిని, వ
శిని జేయుటకు నన్ను నెకరుకల్ ప్రాంత సిద్ధాబహేళి!`,
    verseEn: `Vasari yadhaartha vaakku saku vashudanai vaashchamatkaara
Munakunu gòni tèchchikòmti~ kada daari~povu taddinamu
Lanu vamdalunu velu needu krupa, nave laabhimchèdini, va
Shini jeyutaku nannu nèkarukal praamta siddhaabaheḻi!`,
    wordMeaningTe: `వసరి యధార్థ వాక్కు సకు వసుదనై వశ్చమత్కార
మునను గోని తీసికొని తెచ్చాము
లను వందలు వేలు నీదు కృపా, నావే లాభదాయక, వి
షినిని ఓడించడానికి నెకరుకల్ ప్రాంతం సిద్దబాహేలీ నాకు!`,
    wordMeaningEn: `Vasari Yadhartha Vakku Saku Vasudanai Vashchamatkara
We took Munanu Goni and brought it
Lanu hundredslu velu needu kripa, nave profiteer, v
Nekarukal region Siddabaheli me to defeat Shini!`,
    audioTe: "వసరి యధార్థ వాక్కు సకు వశుడనై వాశ్చమత్కార మునకును గొని తెచ్చికొంటిఁ కద దారిఁపోవు తద్దినము లను వందలును వేలు నీదు కృప, నవే లాభించెడిని, వ శిని జేయుటకు నన్ను నెకరుకల్ ప్రాంత సిద్ధాబహేళి!",
    audioEn: ""
  },
  {
    id: 59,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 59",
    titleEn: "Nekarukallu Satakam - Poem 59",
    verseTe: `నా మనస్సే ప్రమాణమని యిన్నాళ్లు నా కేలొ పొగరు
స్వామి యానో కాదొ యెల్ల బాలింపవలసిన డే మొ
తాము, మీకేలేదు నాకు నేలకందకు లేని దురద
చేమ కేటికి స్వామి! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Naa manasse pramaanamani yinnaaḻlu naa kelò pògaru
Svaami yaano kaadò yèlla baalimpavalasina de mò
Taamu, meekeledu naaku nelakamdaku leni durada
Chema ketiki svaami! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నా హృదయమే నా హృదయానికి ప్రమాణం
స్వామి యానో కాకపోతే రోజు ఎత్తాలి
వారు, మీరు కాదు, నాకు లోతైన దురద ఉంది
చేమ కేతికి స్వామీ!నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `My heart is the standard of my heart
If it is not Swami Yano, then the day should be raised
They, not you, I have a deep itch
Chema Ketiki Swami!Nekarukal area Siddabdaheli!`,
    audioTe: "నా మనస్సే ప్రమాణమని యిన్నాళ్లు నా కేలొ పొగరు స్వామి యానో కాదొ యెల్ల బాలింపవలసిన డే మొ తాము, మీకేలేదు నాకు నేలకందకు లేని దురద చేమ కేటికి స్వామి! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 60,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 60",
    titleEn: "Nekarukallu Satakam - Poem 60",
    verseTe: `తెరచిన యెడఁద వెన్క హరహర మహాదేవ యనొంచు
నిరతంబు గాదీ యెడంద, మూయవే, నీలకంఠ! శివ
పరమ మానులవోలె నీదు నెడదలోఁ బాలింపు కన్ను
శిరము వాల్చగఁ చేసి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Tèrachina yèda~da vènka harahara mahaadeva yanòmchu
Niratambu gaadee yèdamda, mooyave, neelakamtha! shiva
Parama maanulavolè needu nèdadalo~ baalimpu kannu
Shiramu vaalchaga~ chesi nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `తెరిచినది వేంక హరహర మహాదేవ యనొంచు
నిరతంబు గాడి యెదండ, మోయవే, నీలకంఠ!శివా
మహోన్నతమైన మానవునివలె నీవు పిల్లల కన్ను
శిరము వాల్చగన్ మరియు నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `The one that opened was Venka Harahara Mahadeva Yanonchu
Niratambu Gadi Yedanda, Moyave, Nilakanta!Shiva
Like the supreme human being, you are the child's eye
Shiramu Valchagan and Nekarukal region Siddhabdaheli!`,
    audioTe: "తెరచిన యెడఁద వెన్క హరహర మహాదేవ యనొంచు నిరతంబు గాదీ యెడంద, మూయవే, నీలకంఠ! శివ పరమ మానులవోలె నీదు నెడదలోఁ బాలింపు కన్ను శిరము వాల్చగఁ చేసి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 61,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 61",
    titleEn: "Nekarukallu Satakam - Poem 61",
    verseTe: `మిలనము తొలికర్మఫలము కలిగి మీ మీ సన్నిధాన
ములకును వచ్చి కూర్చుండి మీ జపమ్ములు చేసి చేసి
తొలఁచగాఁపాపముల్ తలతు, నది యున్నదో లేదొ నాకు
చిలువ సగల సామి! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Milanamu tòlikarmaphalamu kaligi mee mee sannidhaana
Mulakunu vachchi koorchumdi mee japammulu chesi chesi
Tòla~chagaa~paapamul talatu, nadi yunnado ledò naaku
Chiluva sagala saami! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `మీ సాన్నిహిత్యం కలయిక యొక్క మొదటి ఫలాన్ని కలిగి ఉంది
ములకును వచ్చి కూర్చొని ప్రార్థనలు చేయండి
నది ఉందో లేదో నాకు తెలియదు
చిలువ సాగాల సామీ!నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `Your closeness has the first fruit of union
Mulakunu come and sit and do your prayers
I don't know if there is a river or not
Chiluva Sagala Sami!Nekarukal area Siddabdaheli!`,
    audioTe: "మిలనము తొలికర్మఫలము కలిగి మీ మీ సన్నిధాన ములకును వచ్చి కూర్చుండి మీ జపమ్ములు చేసి చేసి తొలఁచగాఁపాపముల్ తలతు, నది యున్నదో లేదొ నాకు చిలువ సగల సామి! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 62,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 62",
    titleEn: "Nekarukallu Satakam - Poem 62",
    verseTe: `నా కీ జగతి సధికారములనఁ తృణప్రాయము లగుఁ
గాక, పిల్లల కేమియైన మిగులునో కాదననేల
నీ కృపావశమున మనసు నీ వైన నిలుచుచునుం డె
శ్రీకంఠ! దయచూడు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Naa kee jagati sadhikaaramulana~ trunapraayamu lagu~
Gaaka, pillala kemiyaina miguluno kaadananela
Nee krupaavashamuna manasu nee vaina niluchuchunum dè
Shreekamtha! dayachoodu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నా కి జగతి స్ధికారములనన్ తృణప్రాయము లగున్
ఇది పిల్లల కెమిస్ట్రీ యొక్క మిగిలిపోయిన అంశాలు కాదు
నీ దయతో నా హృదయం నీకు అండగా నిలుస్తుంది
శ్రీకాంత్!మెర్సీ నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `Na ki jagati sdhikaramulanan trinprayamu lagun
It is not the leftovers of children's chemistry
By your grace, my heart will stand by you
Srikanth!Mercy Nekarukal region Siddabdaheli!`,
    audioTe: "నా కీ జగతి సధికారములనఁ తృణప్రాయము లగుఁ గాక, పిల్లల కేమియైన మిగులునో కాదననేల నీ కృపావశమున మనసు నీ వైన నిలుచుచునుం డె శ్రీకంఠ! దయచూడు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 63,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 63",
    titleEn: "Nekarukallu Satakam - Poem 63",
    verseTe: `దినముల తరబడి నొక్కొకప్పుడు తీరని బ్రదుకు
పనులపై నుండి ని౯ దలచుటకు వీలుపడకుండ నుండు
మనసులో దిగులగుచుండు నీ ధ్యాన మహిత వస్త్రమునఁ
జినుగుపట్టినయట్లు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Dinamula tarabadi nòkkòkappudu teerani braduku
Panulapai numdi ni9 dalachutaku veelupadakumda numdu
Manasulo digulaguchumdu nee dhyaana mahita vastramuna~
Jinugupattinayatlu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `రోజుల తరబడి ఆశ లేకుండా జీవించండి
మిమ్మల్ని మీరు పని నుండి తప్పించుకోవడానికి అనుమతించవద్దు
మనస్సులో మీరు మీ ధ్యాన వస్త్రంలో విచారంగా ఉన్నారు
జినుగుపట్టినట్లు నెకరుకల్ ప్రాంతం సిద్దబ్దహేళి!`,
    wordMeaningEn: `Live without hope for days
Don't allow yourself to be swayed from the work
In the mind you are sad in your meditation robe
Jinugupattinatlu Nekarukal region Siddabdaheli!`,
    audioTe: "దినముల తరబడి నొక్కొకప్పుడు తీరని బ్రదుకు పనులపై నుండి ని౯ దలచుటకు వీలుపడకుండ నుండు మనసులో దిగులగుచుండు నీ ధ్యాన మహిత వస్త్రమునఁ జినుగుపట్టినయట్లు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 64,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 64",
    titleEn: "Nekarukallu Satakam - Poem 64",
    verseTe: `అవుకార! యేదొ నాకుఁ పెద్ద యొరిగించినట్లుగాఁ చూపి
చివరకుఁ టెంకాయ పిచ్చికొండ చేసెద వుమానాథ
వివరించి నీ మీదఁబెట్టు కొన్నాశ విషయంబునందు
చెవులు పిండకు తండ్రి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Avukaara! yedò naaku~ pèdda yòrigimchinatlugaa~ choopi
Chivaraku~ tèmkaaya pichchikòmda chesèda vumaanaatha
Vivarimchi nee meeda~bèttu kònnaasha vishayambunamdu
Chèvulu pimdaku tamdri nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `అంతే!అది నాకు పెద్ద విషయం
చివరకు టెంకాయ పిచ్చికొండ చేసేదా వుమనత
ఇది వివరించి మీ మీద పెట్టే విషయం
నేకరుకల్ ప్రాంత సిద్ధబ్దహేలి పాప చెవుల తండ్రి!`,
    wordMeaningEn: `That's it!That's a big deal for me
Finally Tenkaya Pichikonda Cheseda Vumanatha
It is a matter of explaining and putting it on you
Nekarukal region's Siddhabdaheli is the father of the baby's ears!`,
    audioTe: "అవుకార! యేదొ నాకుఁ పెద్ద యొరిగించినట్లుగాఁ చూపి చివరకుఁ టెంకాయ పిచ్చికొండ చేసెద వుమానాథ వివరించి నీ మీదఁబెట్టు కొన్నాశ విషయంబునందు చెవులు పిండకు తండ్రి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 65,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 65",
    titleEn: "Nekarukallu Satakam - Poem 65",
    verseTe: `ఒకటి మేలనుకొందు నేను మరియు నీవొక డనుకొందు
నకట! మేలేదొ కాదేదొ యెఱిగిన యంత లేనాయె
ముకురంబులో నున్న నేను నేనుప్రభూ! ద్రష్టనేనొ
సెశతూలి మఱచితి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Òkati melanukòmdu nenu mariyu neevòka danukòmdu
Nakata! meledò kaadedò yèṟigina yamta lenaayè
Mukurambulo nunna nenu nenuprabhoo! drashtanenò
Sèshatooli maṟachiti nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నాకు ఒకటి కావాలి మరియు నాకు మీరు కావాలి
తమాషా!యిరిగినంత మేలేదో కాదేదో కాదు
నేను ముకురంబులో ప్రభువును!నేను చూస్తున్నాను
శేషతులి మరచితి నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `I want one and I want you
Funny!Meledo Kadedo is not as much as Yirigi
I am the Lord in Mukurambu!I see
Sesathuli Marachithi Nekarukal area Siddhabdaheli!`,
    audioTe: "ఒకటి మేలనుకొందు నేను మరియు నీవొక డనుకొందు నకట! మేలేదొ కాదేదొ యెఱిగిన యంత లేనాయె ముకురంబులో నున్న నేను నేనుప్రభూ! ద్రష్టనేనొ సెశతూలి మఱచితి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 66,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 66",
    titleEn: "Nekarukallu Satakam - Poem 66",
    verseTe: `నీవేమి చేయఁగా వలయునో యది నీవు చేసితివి
మహాదేవ ! యింక నేను చేయగా వలయుట మిగిలె
జీవితమ్మునయందు నింక నెంత శేషించి యున్నదియొ
జీవిత పతి! చెప్పు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Neevemi cheya~gaa valayuno yadi neevu chesitivi
Mahaadeva ! yimka nenu cheyagaa valayuta migilè
Jeevitammunayamdu nimka nèmta sheshimchi yunnadiyò
Jeevita pati! chèppu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `మీరు చేయాలనుకున్నది చేసారు
మహాదేవా!మరియు నేను చేసినప్పుడు, సర్కిల్ మిగిలిపోయింది
జీవితంలో మిగిలేది ఎంత
జీవిత భాగస్వామి!నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలి అని చెప్పండి!`,
    wordMeaningEn: `You did what you wanted to do
Mahadeva!And when I did it, the circle remained
How much is left in life
Life partner!Say Nekarukal area Siddhabdaheli!`,
    audioTe: "నీవేమి చేయఁగా వలయునో యది నీవు చేసితివి మహాదేవ ! యింక నేను చేయగా వలయుట మిగిలె జీవితమ్మునయందు నింక నెంత శేషించి యున్నదియొ జీవిత పతి! చెప్పు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 67,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 67",
    titleEn: "Nekarukallu Satakam - Poem 67",
    verseTe: `లక్ష చెప్పుము వేయిచెప్పు మొక యింత లాభంబు లేదు
భిక్షుకుడంచు సన్యాసి యంచును బెట్టకు నాకు
దీక్షతో నిన్ను నాలోనఁ పరినిబంధితునిఁ చేయునటు
శిక్షింపు నన్నును నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Laksha chèppumu veyichèppu mòka yimta laabhambu ledu
Bhikshukudamchu sanyaasi yamchunu bèttaku naaku
Deekshato ninnu naalona~ parinibamdhituni~ cheyunatu
Shikshimpu nannunu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `100,000 బూట్లకు లాభం లేదు
నాకు భిక్షాటన చేసే సన్యాసిని ఇవ్వకు
దీక్షతో నిన్ను నాలో పరినిబంధిని చేస్తాను
నేకరుకల్ ప్రాంతం సిద్ధబ్దహేలి నన్ను శిక్షించండి!`,
    wordMeaningEn: `There is no profit as much as 100,000 shoes
Don't give me a begging monk
I will make you a Parinibandhi in me with initiation
Punish me Nekarukal region Siddabdaheli!`,
    audioTe: "లక్ష చెప్పుము వేయిచెప్పు మొక యింత లాభంబు లేదు భిక్షుకుడంచు సన్యాసి యంచును బెట్టకు నాకు దీక్షతో నిన్ను నాలోనఁ పరినిబంధితునిఁ చేయునటు శిక్షింపు నన్నును నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 68,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 68",
    titleEn: "Nekarukallu Satakam - Poem 68",
    verseTe: `పదునాల్గు భువనముల్ నీవు కుక్షిలోపలఁ బెట్టికొంటి
విది యెంతవాఁడవో నీవు, నిన్ను నా యెడఁద నిముర్తు
నది యెంతవాడనో నేను, నద్ది నా కనుభూతి తెమ్ము
చిదతీత సంస్థితీ! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Padunaalgu bhuvanamul neevu kukshilopala~ bèttikòmti
Vidi yèmtavaa~davo neevu, ninnu naa yèda~da nimurtu
Nadi yèmtavaadano nenu, naddi naa kanubhooti tèmmu
Chidateeta samsthitee! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `పద్నాలుగు భువనముల్ నీవు కుక్షిలో పడుకో
నువ్వే నా విధి
నేను నదిలా ఉన్నాను, నా సానుభూతి నదిపై ఉంది
చిదతీత సంస్థ!నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `Fourteen Bhuvanamul you lay down in Kukshi
You are my destiny
I am like a river, my sympathy is with the river
Chidathita institution!Nekarukal area Siddabdaheli!`,
    audioTe: "పదునాల్గు భువనముల్ నీవు కుక్షిలోపలఁ బెట్టికొంటి విది యెంతవాఁడవో నీవు, నిన్ను నా యెడఁద నిముర్తు నది యెంతవాడనో నేను, నద్ది నా కనుభూతి తెమ్ము చిదతీత సంస్థితీ! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 69,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 69",
    titleEn: "Nekarukallu Satakam - Poem 69",
    verseTe: `నన్ను నేనే మోసగించుకొంచుంటి నాటక మాడు
చున్నట్టులున్నది ప్రేమ యన్నది యొరులపైఁ జచ్చె,
నున్నట్లు మాట్లాడుచుంటిఁ చరియించుచుంటి నీ వైని
చెన్నారు కోర్కిగా నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Nannu nene mosagimchukòmchumti naataka maadu
Chunnattulunnadi prema yannadi yòrulapai~ jachchè,
Nunnatlu maatlaaduchumti~ chariyimchuchumti nee vaini
Chènnaaru korkigaa nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ఇది నన్ను మోసం చేసే డ్రామా
నీపై ప్రకాశించేది ప్రేమ,
ఏం జరుగుతుందో మీరు మాట్లాడుతున్నారు
చెన్రెన్ కోర్కిగ నెకరుకల్ ప్రాంత సిద్ధబ్దహేళి!`,
    wordMeaningEn: `It is a drama that deceives me
It is love that shines on you,
You are talking about what is going on
Siddabdaheli of Chenren Korkiga Nekarukal region!`,
    audioTe: "నన్ను నేనే మోసగించుకొంచుంటి నాటక మాడు చున్నట్టులున్నది ప్రేమ యన్నది యొరులపైఁ జచ్చె, నున్నట్లు మాట్లాడుచుంటిఁ చరియించుచుంటి నీ వైని చెన్నారు కోర్కిగా నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 70,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 70",
    titleEn: "Nekarukallu Satakam - Poem 70",
    verseTe: `ప్రతి నిమేషమ్ము వాంఛయుఁ ప్రతి నిమేష పరిహరణము
మతిలేని బ్రదుక్య్యె నొక్క యత్నము మాలిన యూహ
శితికంఠ! నీమీఁదఁదక్కఁ దక్కిన చేతంబు లోక
శితి వృత్తమెగఁప్రాకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Prati nimeshammu vaamchhayu~ prati nimesha pariharanamu
Matileni bradukyyè nòkka yatnamu maalina yooha
Shitikamtha! neemee~da~dakka~ dakkina chetambu loka
Shiti vruttamèga~praaku nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ప్రతి క్షణం ఒక కోరిక మరియు ప్రతి క్షణం ఒక త్యాగం
బుద్ధిలేని జీవితాన్ని గడపడానికి ప్రయత్నించడం సిగ్గుచేటు
శితికంతా!నీమిందక్కన్ పొందిన చేతంబు లోకం
వింటర్ సర్కిల్ కోసం నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `Every moment is a desire and every moment is a sacrifice
Trying to live a mindless life is a shame
Shitikanta!The world of Chetambu that got Neemindakkan
Nekarukal area Siddhabdaheli for winter circle!`,
    audioTe: "ప్రతి నిమేషమ్ము వాంఛయుఁ ప్రతి నిమేష పరిహరణము మతిలేని బ్రదుక్య్యె నొక్క యత్నము మాలిన యూహ శితికంఠ! నీమీఁదఁదక్కఁ దక్కిన చేతంబు లోక శితి వృత్తమెగఁప్రాకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 71,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 71",
    titleEn: "Nekarukallu Satakam - Poem 71",
    verseTe: `బతికి నన్నాళ్ళును తిండి కేమొ లోపమ్ము రాదు
మతిలోన నీవేమొ వచ్చి నిత్యంబు మన్నింపవలయు
వ్రతముగా, నవ్వ, కావలయు బువ్వ కావలయు నన్నట్లు
సిత మహాశిత లింగ! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Batiki nannaaḻḻunu timdi kemò lopammu raadu
Matilona neevemò vachchi nityambu mannimpavalayu
Vratamugaa, navva, kaavalayu buvva kaavalayu nannatlu
Sita mahaashita limga! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `బ్రతికితే తిని తాగుతా
నీ మనసులోకి వచ్చి ఎప్పటికీ క్షమించు
వ్రతముగ, నవ్వు, కావలెను
సీతా మహాసిత లింగ!నేకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `If you live, you will eat and drink
Come to your mind and forgive forever
Vratamuga, laugh, want to be wanted
Sita Mahasita Linga!Nekarukal area Siddabdaheli!`,
    audioTe: "బతికి నన్నాళ్ళును తిండి కేమొ లోపమ్ము రాదు మతిలోన నీవేమొ వచ్చి నిత్యంబు మన్నింపవలయు వ్రతముగా, నవ్వ, కావలయు బువ్వ కావలయు నన్నట్లు సిత మహాశిత లింగ! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 72,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 72",
    titleEn: "Nekarukallu Satakam - Poem 72",
    verseTe: `ఇది మనుష్యున కాయువల్పముగ నిచ్చి యెప్పటప్పటికి
బదుకుట యెట్లన్న ప్రశ్న యిందులోపల వచ్చి చచ్చె
డిదిలేదు వైసవా శేరులోన బోడి పదాచికముగ
చెదరిన బ్రదుకునై నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!`,
    verseEn: `Idi manushyuna kaayuvalpamuga nichchi yèppatappatiki
Badukuta yètlanna prashna yimdulopala vachchi chachchè
Didiledu vaisavaa sherulona bodi padaachikamuga
Chèdarina bradukunai nèkarukal praamta siddhaabda heḻi!`,
    wordMeaningTe: `ఇది మానవ జీవితానికి ముగింపు అయినప్పటికీ
బదులుగా ఏం చేయాలనే ప్రశ్న వచ్చి చచ్చిపోతుంది
దీదియుల వైశవ సేరులో బోడి పడచికముగ
నెకరుకల్ ఏరియా సిద్ధబ్ద హెలీకి చెదిరిన ప్రాణాలు!`,
    wordMeaningEn: `Even though this is the end of human life
The question of what to do instead comes in and dies
Bodi Padachikamuga in Didiula Vaisava Seru
Disturbed survivors of Nekarukal area Siddhabda Heli!`,
    audioTe: "ఇది మనుష్యున కాయువల్పముగ నిచ్చి యెప్పటప్పటికి బదుకుట యెట్లన్న ప్రశ్న యిందులోపల వచ్చి చచ్చె డిదిలేదు వైసవా శేరులోన బోడి పదాచికముగ చెదరిన బ్రదుకునై నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!",
    audioEn: ""
  },
  {
    id: 73,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 73",
    titleEn: "Nekarukallu Satakam - Poem 73",
    verseTe: `నిన్నీ బ్రదుకు తుదివాళ్ళఁ కైత పండింతుఁ ప్రాసంగు
పొన్ను ధాన్యపురాశి గాగ నా స్వామి పొడిపించి పెట్టు
నెన్నొసంటను నాకు గంగ తొణుకు నీ నెత్తిపై నున్న
చిన్ని చందురు రేశ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Ninnee braduku tudivaaḻḻa~ kaita pamdimtu~ praasamgu
Pònnu dhaanyapuraashi gaaga naa svaami pòdipimchi pèttu
Nènnòsamtanu naaku gamga tònuku nee nèttipai nunna
Chinni chamduru resha nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నిన్ని బ్రదుకు అనేది కైట పండింటు చివరి మాట
పొన్న ధాన్యపురాశి గాగ నా స్వామి దానిని ఆరబెట్టండి
ఇప్పుడు నీ నెత్తిమీద గంగానది ఉంది
చిన్ని చండూరు రేష నేకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `Ninny Braduku is the last word of Kaita Pandintu
Ponna Dhanyapurashi Gaga na Swami dry it
Now I have the Ganges on your scalp
Chinni Chanduru Resha Nekarukal Region Siddhabdaheli!`,
    audioTe: "నిన్నీ బ్రదుకు తుదివాళ్ళఁ కైత పండింతుఁ ప్రాసంగు పొన్ను ధాన్యపురాశి గాగ నా స్వామి పొడిపించి పెట్టు నెన్నొసంటను నాకు గంగ తొణుకు నీ నెత్తిపై నున్న చిన్ని చందురు రేశ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 74,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 74",
    titleEn: "Nekarukallu Satakam - Poem 74",
    verseTe: `భావమ్ము భావమ్ముగాగ నున్నచో భయమేమి కలదు
భావమ్ము విశృతిని బడసినంతనే భయమెల్లఁగలుగు
భావమ్ము తన స్థితిఁ బొందునట్లుగాఁ బాలింపు కరుణ
సేవధి! శ్రీకంఠ! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Bhaavammu bhaavammugaaga nunnacho bhayamemi kaladu
Bhaavammu vishrutini badasinamtane bhayamèlla~galugu
Bhaavammu tana sthiti~ bòmdunatlugaa~ baalimpu karuna
Sevadhi! shreekamtha! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ప్రేమ ఉన్నప్పుడు భయం ఉండదు
భావమ్ము విశృతిని చూడగానే భయమెల్లగుగు భయమేసింది
అతని స్థితిలో భావమ్ము కరుణిస్తుంది
సేవాధి!శ్రీకాంత్!నెకరుకల్ ఏరియా సిద్దబ్దహేలీ!`,
    wordMeaningEn: `There is no fear when there is love
As soon as Bhavammu saw Vishruti, Bhayamellagugu was afraid
Bhavammu is compassionate in his condition
Sevadhi!Srikanth!Nekarukal area Siddabdaheli!`,
    audioTe: "భావమ్ము భావమ్ముగాగ నున్నచో భయమేమి కలదు భావమ్ము విశృతిని బడసినంతనే భయమెల్లఁగలుగు భావమ్ము తన స్థితిఁ బొందునట్లుగాఁ బాలింపు కరుణ సేవధి! శ్రీకంఠ! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 75,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 75",
    titleEn: "Nekarukallu Satakam - Poem 75",
    verseTe: `దంతురమగు నూహ సేయుకొలదిఁ పద్మవ్యూహమయినఁ
గొంత నయమ్ము మానవుల భావనా కుటిలతి కంటె
వింతలై బందుగుల్ సఖుల యూహలే విప్పలేమాయె
చింత జేసియుఁకూడ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Damturamagu nooha seyukòladi~ padmavyoohamayina~
Gòmta nayammu maanavula bhaavanaa kutilati kamtè
Vimtalai bamdugul sakhula yoohale vippalemaayè
Chimta jesiyu~kooda nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `దంతురమగు నుహ సేుకోలదిన్ పద్మవ్యూహమయిన్
మనుష్యుల వక్రబుద్ధి కంటె గొంత నాయమ్ము
బంధుంగుల మిత్రులు చిక్కుముడులు విప్పకపోవడమే విచిత్రం
చింత జేస్యుంకుడు నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `Danturamagu Nuha Seukoladin Padmavyuhamayain
Gonta Nayammu is more than the perversity of human beings
It is strange that the friends of Bandungul can't untie the knots
Chinta Jesyunkuda Nekarukal area Siddhabdaheli!`,
    audioTe: "దంతురమగు నూహ సేయుకొలదిఁ పద్మవ్యూహమయినఁ గొంత నయమ్ము మానవుల భావనా కుటిలతి కంటె వింతలై బందుగుల్ సఖుల యూహలే విప్పలేమాయె చింత జేసియుఁకూడ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 76,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 76",
    titleEn: "Nekarukallu Satakam - Poem 76",
    verseTe: `ఎంతటి యిరుకటం బవుచునున్నది యిందైన బ్రదుకు
సంతాప మొక్కటి విఱుగడై నను జాలును నాకు
ఎంత నాయంపడ నెంతు వంత నేనెందుకుఁ కాను
చింత యిడేటికో నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Èmtati yirukatam bavuchununnadi yimdaina braduku
Samtaapa mòkkati viṟugadai nanu jaalunu naaku
Èmta naayampada nèmtu vamta nenèmduku~ kaanu
Chimta yidetiko nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ఇది ఎంత చిన్న జీవితం
నా మీద నాకే జాలి వేస్తుంది
నా జుట్టును ఎలా నయం చేయాలో నాకు తెలియదు
చింత యిదేటికో నెకరుకల్ ఏరియా సిద్దబ్దహేలీ!`,
    wordMeaningEn: `What a short life it is
I feel sorry for myself
I don't know how to heal my hair
Chinta Yidetico Nekarukal area Siddabdaheli!`,
    audioTe: "ఎంతటి యిరుకటం బవుచునున్నది యిందైన బ్రదుకు సంతాప మొక్కటి విఱుగడై నను జాలును నాకు ఎంత నాయంపడ నెంతు వంత నేనెందుకుఁ కాను చింత యిడేటికో నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 77,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 77",
    titleEn: "Nekarukallu Satakam - Poem 77",
    verseTe: `అయ్యొ యీ మేనున్న డెట్లు తప్పనియట్లుగా నుండె
ముయ్యేరు తలమీఁదగల్గు సామి! యీ మొండి దేహంబు
వయ్యలై వ్యర్థ సంస్కృతిని మరి శరీరమ్ము కట్టకుము
బియ్య పట్టను నేను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Ayyò yee menunna dètlu tappaniyatlugaa numdè
Muyyeru talamee~dagalgu saami! yee mòmdi dehambu
Vayyalai vyartha samskrutini mari shareerammu kattakumu
Biyya pattanu nenu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `అయ్యో, నా అప్పులు మాయమైనట్లు ఉన్నాయి
ముయ్యెరు తలమిందగల్గు సామీ!యీ మొండి దేహంబు
వ్యర్థ సంస్కృతిలో కూరుకుపోకండి
వరి పట్టాన్ నేను నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `Alas, my debts seem to have disappeared
Muyieru Talamindagalgu Sami!Yee stubborn dehambu
Don't get stuck in a wasteful culture
Rice Pattan I Nekarukal region Siddabdaheli!`,
    audioTe: "అయ్యొ యీ మేనున్న డెట్లు తప్పనియట్లుగా నుండె ముయ్యేరు తలమీఁదగల్గు సామి! యీ మొండి దేహంబు వయ్యలై వ్యర్థ సంస్కృతిని మరి శరీరమ్ము కట్టకుము బియ్య పట్టను నేను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 78,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 78",
    titleEn: "Nekarukallu Satakam - Poem 78",
    verseTe: `ఈ మేను నిజముగా నాది యైనచో నిది దాని యిష్ట
మేమొ దానిదిగాని, స్వామి, నా మాట యేమియు వినదె
కామమ్ము నాదియా యెవరిదేమి యీ కశ్మలమెల్ల
శ్రీమద్వియన్మౌళి నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!`,
    verseEn: `Ee menu nijamugaa naadi yainacho nidi daani yishta
Memò daanidigaani, svaami, naa maata yemiyu vinadè
Kaamammu naadiyaa yèvaridemi yee kashmalamèlla
Shreemadviyanmauḻi nèkarukal praamta siddhaabda heḻi!`,
    wordMeaningTe: `ఈ మెనూ నిజంగా నాది అయితే, ఇది దాని ఇష్టమైనది
స్వామి, నా మాట ఏమిటి?
కమమ్ము నదియా యెవరిదేమి యీ కశ్మలమెల్ల
శ్రీమద్వియన్మౌళి నెకరుకల్ ప్రాంతం సిద్ధబ్ద హెలీ!`,
    wordMeaningEn: `If this menu is truly mine, it is its favorite
Swami, what is my word?
Kamammu Nadia Yevaridemi Yee Kashmalamella
Srimadvianmouli Nekarukal region Siddhabda Heli!`,
    audioTe: "ఈ మేను నిజముగా నాది యైనచో నిది దాని యిష్ట మేమొ దానిదిగాని, స్వామి, నా మాట యేమియు వినదె కామమ్ము నాదియా యెవరిదేమి యీ కశ్మలమెల్ల శ్రీమద్వియన్మౌళి నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!",
    audioEn: ""
  },
  {
    id: 79,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 79",
    titleEn: "Nekarukallu Satakam - Poem 79",
    verseTe: `ఒక వేళఁ కానిమ్ము దీని భావింతు నొక వేళ నేమి
ఒక వేయివేళల నిన్ను భావించుచుంటిఁ కదయ్య
నికరమ్ము కట్టి చూడఁగ లెక్కకు నీవాడ నగుదుఁ
చికురార్పిత శశాంక! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Òka veḻa~ kaanimmu deeni bhaavimtu nòka veḻa nemi
Òka veyiveḻala ninnu bhaavimchuchumti~ kadayya
Nikarammu katti chooda~ga lèkkaku neevaada nagudu~
Chikuraarpita shashaamka! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ఒక్కోసారి కానిమ్ము అనేది ఒక్కోసారి ఆలోచన
నేను నీ గురించి వెయ్యి సార్లు ఆలోచిస్తున్నాను
నికరమ్ము కట్టి చూడఁగా ధనమునకు విలువలేదు
చికురార్పిత శశాంక!నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `At one time Kanimmu is the thought of one time
I think of you for a thousand times
Nikarammu Katti Chudanga is not worth the money
Chikurarpita Sashanka!Nekarukal area Siddabdaheli!`,
    audioTe: "ఒక వేళఁ కానిమ్ము దీని భావింతు నొక వేళ నేమి ఒక వేయివేళల నిన్ను భావించుచుంటిఁ కదయ్య నికరమ్ము కట్టి చూడఁగ లెక్కకు నీవాడ నగుదుఁ చికురార్పిత శశాంక! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 80,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 80",
    titleEn: "Nekarukallu Satakam - Poem 80",
    verseTe: `మనసుతో నిర్ణయించితిని గాని మది మది నిల్వనీవు
మనసునకును నిర్ణయంబునకును సంబంధంబు లేదొ
మనసుతోనైన దోషంబు గెలుచుట మనసుతో నెట్లు
చినచూపు చూడకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Manasuto nirnayimchitini gaani madi madi nilvaneevu
Manasunakunu nirnayambunakunu sambamdhambu ledò
Manasutonaina doshambu gèluchuta manasuto nètlu
Chinachoopu choodaku nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నేను నా మనస్సుతో నిర్ణయించుకున్నాను, కానీ నా మనస్సు రిజర్వ్ చేయబడింది
మనసుకు నిర్ణయానికి సంబంధం లేదు
బుద్ధితో దోషంబు బుద్ధితో వలలను గెలుస్తుంది
నెకరుకల్ ప్రాంత సిద్ధబ్దహేళిని చూడకు!`,
    wordMeaningEn: `I have decided with my mind, but my mind is reserved
The mind has nothing to do with the decision
Doshambu with a mind wins nets with a mind
Don't look at the Nekarukal region's Siddhabdaheli!`,
    audioTe: "మనసుతో నిర్ణయించితిని గాని మది మది నిల్వనీవు మనసునకును నిర్ణయంబునకును సంబంధంబు లేదొ మనసుతోనైన దోషంబు గెలుచుట మనసుతో నెట్లు చినచూపు చూడకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 81,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 81",
    titleEn: "Nekarukallu Satakam - Poem 81",
    verseTe: `మృతియనఁ ప్రాణముల్ నిలచిపోవుట, మృతివేళ జీవ
గతి యెట్టులుండునో తెలియఁ ప్రాణ సంఘమ్ము బిగించి
మతిఁచూడ నీవు నే నిద్దఱము చిత్సమాఖ్య నున్నాము
శితికంఠ! యిది నిల్పు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Mrutiyana~ praanamul nilachipovuta, mrutiveḻa jeeva
Gati yèttulumduno tèliya~ praana samghammu bigimchi
Mati~chooda neevu ne niddaṟamu chitsamaakhya nunnaamu
Shitikamtha! yidi nilpu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `మరణం జీవితం యొక్క విరమణ, మరణం జీవితం
విధి వస్తుందో లేదో తెలియదు, మీ జీవితాన్ని కలిసి ఉంచండి
మటించుడా, నువ్వూ నేనూ కలిసి నిద్రపోతున్నాం
శితికంత!ఇది నిల్పు నెకరుకల్ ప్రాంత సిద్ధబ్దహేళి!`,
    wordMeaningEn: `Death is the cessation of life, death is life
Don't know if fate is coming, keep your life together
Matinchuda, you and I are sleeping together
Shitikanta!This is Nilpu Nekarukal region's Siddabdaheli!`,
    audioTe: "మృతియనఁ ప్రాణముల్ నిలచిపోవుట, మృతివేళ జీవ గతి యెట్టులుండునో తెలియఁ ప్రాణ సంఘమ్ము బిగించి మతిఁచూడ నీవు నే నిద్దఱము చిత్సమాఖ్య నున్నాము శితికంఠ! యిది నిల్పు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 82,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 82",
    titleEn: "Nekarukallu Satakam - Poem 82",
    verseTe: `నిన్ను మఱచిపోయి యొక్క గంట యుంటిన యేని, జగతి
నున్నటి మోహాన, మోహమది త్రవ్వునురగ లోకములు
పన్ని నిన్నెందుకో మరల నెగఁప్రాకవలయు నా యెత్తు
స్విన్న మానసుడనై నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Ninnu maṟachipoyi yòkka gamta yumtina yeni, jagati
Nunnati mohaana, mohamadi travvunuraga lokamulu
Panni ninnèmduko marala nèga~praakavalayu naa yèttu
Svinna maanasudanai nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ఇది నిన్ను, ప్రపంచాన్ని మరచిపోయే గంట
నున్నటి మోహన మరియు మహమ్మది త్రవునురాగ లోకములు
మీరు మళ్లీ పని చేయాలనుకుంటే, నేను మీ వద్దకు తిరిగి వెళ్తాను
స్విన్న మనసుదానై నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `It is the hour of forgetting you, the world
Nunnati Mohana and Mohammadi Travunuraga worlds
If you want to work again, I will go back to you
Swinna Manasudanai Nekarukal area Siddhabdaheli!`,
    audioTe: "నిన్ను మఱచిపోయి యొక్క గంట యుంటిన యేని, జగతి నున్నటి మోహాన, మోహమది త్రవ్వునురగ లోకములు పన్ని నిన్నెందుకో మరల నెగఁప్రాకవలయు నా యెత్తు స్విన్న మానసుడనై నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 83,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 83",
    titleEn: "Nekarukallu Satakam - Poem 83",
    verseTe: `ఆనందమును విస్మృతిం గనుట జీవిదైన లక్షణము
ఆనందమూలమ్ము మఱవ డెట్లు సల్పాల్ప భోగావ
సానములందలి తృప్తి మఱచును క్షణములో జనుడు
శ్రీ నిరంతర తేజ! నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!`,
    verseEn: `Aanamdamunu vismrutim ganuta jeevidaina lakshanamu
Aanamdamoolammu maṟava dètlu salpaalpa bhogaava
Saanamulamdali trupti maṟachunu kshanamulo janudu
Shree niramtara teja! nèkarukal praamta siddhaabda heḻi!`,
    wordMeaningTe: `ఆనందాన్ని, మతిమరుపును మరచిపోవడం జీవితంలోని లక్షణం
ఆనందములమ్ము మరవ అప్పులు సల్పల్ప భోగవా
మనిషి సుఖాల తృప్తిని క్షణంలో మరిచిపోతాడు
శ్రీ నిరంతర తేజ!నెకరుకల్ ప్రాంతం సిద్ధబ్ద హెలీ!`,
    wordMeaningEn: `It is a characteristic of life to forget pleasure and forgetfulness
Anandamulammu Marava Debtlu Salpalpa Bhogava
A man forgets the satisfaction of comforts in a moment
Shree continuous Teja!Nekarukal area Siddhabda Heli!`,
    audioTe: "ఆనందమును విస్మృతిం గనుట జీవిదైన లక్షణము ఆనందమూలమ్ము మఱవ డెట్లు సల్పాల్ప భోగావ సానములందలి తృప్తి మఱచును క్షణములో జనుడు శ్రీ నిరంతర తేజ! నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!",
    audioEn: ""
  },
  {
    id: 84,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 84",
    titleEn: "Nekarukallu Satakam - Poem 84",
    verseTe: `విమల మహోదూరమగు ప్రతిక్షణ విస్మృతి నేను
శ్రమ యెఱుంగని యట్టిదగు ప్రతిక్షణ జాగ్రత్త నీవు
ఉమతో సగము వేఱు నీవు మే మొకడె యిద్దజము
చిమిడిన యాత్మలై నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Vimala mahodooramagu pratikshana vismruti nenu
Shrama yèṟumgani yattidagu pratikshana jaagratta neevu
Umato sagamu veṟu neevu me mòkadè yiddajamu
Chimidina yaatmalai nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `విమల మహోదురమగు ప్రతిక్షణ విస్మృతి నేను
మీరు బాధపడకుండా జాగ్రత్త వహించండి
నువ్వు నాకు సగం భిన్నంగా ఉన్నావు
యత్మలై నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `Vimala Mahoduramagu Pratiksana Vismriti I am
Be careful that you do not suffer
You are half different from me
Yatmalai Nekarukal region Siddhabdaheli!`,
    audioTe: "విమల మహోదూరమగు ప్రతిక్షణ విస్మృతి నేను శ్రమ యెఱుంగని యట్టిదగు ప్రతిక్షణ జాగ్రత్త నీవు ఉమతో సగము వేఱు నీవు మే మొకడె యిద్దజము చిమిడిన యాత్మలై నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 85,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 85",
    titleEn: "Nekarukallu Satakam - Poem 85",
    verseTe: `నాకు నీకు నభేదముగఁ తలంచుచున్నా నందుచేత
నా కంటి తుదలందు నీవు వచ్చి కన్పడవనుకొందు
నా- కీ యభేదము నీవు చేయుచున్నది సుమీ నేను
శ్రీకంఠ నినుగొల్తు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Naaku neeku nabhedamuga~ talamchuchunnaa namducheta
Naa kamti tudalamdu neevu vachchi kanpadavanukòmdu
Naa- kee yabhedamu neevu cheyuchunnadi sumee nenu
Shreekamtha ninugòltu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నా వల్ల నీ గురించే ఆలోచిస్తున్నాను
నేను నిన్ను నా కంటి మూలలో చూడాలనుకుంటున్నాను
నా- నువ్వు చేస్తున్న తేడా ఏమిటి సుమీ
శ్రీకాంత నినుగొల్తు నెకరుకల్ ప్రాంత సిద్ధబ్దహేళి!`,
    wordMeaningEn: `I am thinking about you because of me
I want to see you in the corner of my eye
Na- What is the difference you are making, I am Sumi
Srikantha Ninugoltu Nekarukal region Siddhabdaheli!`,
    audioTe: "నాకు నీకు నభేదముగఁ తలంచుచున్నా నందుచేత నా కంటి తుదలందు నీవు వచ్చి కన్పడవనుకొందు నా- కీ యభేదము నీవు చేయుచున్నది సుమీ నేను శ్రీకంఠ నినుగొల్తు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 86,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 86",
    titleEn: "Nekarukallu Satakam - Poem 86",
    verseTe: `ననుఁ బైకిఁ కొంచురావలయు నంచు నున్నది నీకు, నేను
కనులు మూసి మరింతలోని లోనికి గమియింప నెంచ
నను వచ్చి వెన్నానుకొంచు నిల్చెదు నా కన్ను లందు
సెనగ బద్ధంతయై నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Nanu~ baiki~ kòmchuraavalayu namchu nunnadi neeku, nenu
Kanulu moosi marimtaloni loniki gamiyimpa nèmcha
Nanu vachchi vènnaanukòmchu nilchèdu naa kannu lamdu
Sènaga baddhamtayai nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ననున్ బికినీ కొంచిరవిలా నంచు నంచు నీకు, నాకు
మీ కళ్ళు మూసుకుని లోపలికి వెళ్లండి
అతను వచ్చి నా వీపు మీద నిలబడ్డాడు, నా కళ్ళు మూసుకున్నాయి
సెనగ బదనేకై నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `Nanun bikin konchuravalayu nanchu nanchu to you, me
Close your eyes and go deep inside
He came and stood on my back, and my eyes were closed
Senaga Badantayai Nekarukal Region Siddhabdaheli!`,
    audioTe: "ననుఁ బైకిఁ కొంచురావలయు నంచు నున్నది నీకు, నేను కనులు మూసి మరింతలోని లోనికి గమియింప నెంచ నను వచ్చి వెన్నానుకొంచు నిల్చెదు నా కన్ను లందు సెనగ బద్ధంతయై నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 87,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 87",
    titleEn: "Nekarukallu Satakam - Poem 87",
    verseTe: `అవి యేమి వెల్దులో కంటియెదుట సమావిర్భవించు
శివములై పట్టరానంత యానంద సేవధులగుచు
శివ! బాధపడుచున్న మేనొకండు విస్మృతికిని రాదు
శివ! చంపు మిదికూడ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Avi yemi vèldulo kamtiyèduta samaavirbhavimchu
Shivamulai pattaraanamta yaanamda sevadhulaguchu
Shiva! baadhapaduchunna menòkamdu vismrutikini raadu
Shiva! champu midikooda nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `భవిష్యత్తులో కళ్ల ముందు కనిపిస్తారు
యానంద శివములై పట్టరానంత సేవకుడయ్యాడు
శివా!బాధ పడుతున్న మనం మరచిపోలేము
శివ!చంపు మీదికూ నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `They appear in front of the eyes in the future
Yananda became the servant of Shivamulai Pattarananta
Shiva!We who are suffering cannot forget
Shiva!Champu Midikoo Nekarukal area Siddabdaheli!`,
    audioTe: "అవి యేమి వెల్దులో కంటియెదుట సమావిర్భవించు శివములై పట్టరానంత యానంద సేవధులగుచు శివ! బాధపడుచున్న మేనొకండు విస్మృతికిని రాదు శివ! చంపు మిదికూడ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 88,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 88",
    titleEn: "Nekarukallu Satakam - Poem 88",
    verseTe: `తన నొసంట నిషణ్ణుడై పినాకహస్తకమును వంచి
కొని సహస్రారమ్ము లక్ష్యముం చేసి కొట్టుచున్నావొ
నినుఁ కూరుచున్న వానిని వృషాకపీ నే నెరుంగుదును
సృణికల్పనారాచ! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Tana nòsamta nishannudai pinaakahastakamunu vamchi
Kòni sahasraarammu lakshyamum chesi kòttuchunnaavò
Ninu~ kooruchunna vaanini vrushaakapee ne nèrumgudunu
Srunikalpanaaraacha! nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `పినాకహస్తకం ముక్కు వంచింది
కొని సహస్రారమ్ము గురిపెట్టి కొడుతోంది
నీ నుండి పారిపోతున్న వాడిని చంపేస్తాను
ఫాంటసీ ఫిక్షన్!నెకరుకల్ ప్రాంతం సిద్దబ్దహేలి!`,
    wordMeaningEn: `Pinakahastakam bent his nose
Koni Sahasrarammu is aiming and hitting
I will kill the one who is running away from you
Fantasy fiction!Nekarukal area Siddabdaheli!`,
    audioTe: "తన నొసంట నిషణ్ణుడై పినాకహస్తకమును వంచి కొని సహస్రారమ్ము లక్ష్యముం చేసి కొట్టుచున్నావొ నినుఁ కూరుచున్న వానిని వృషాకపీ నే నెరుంగుదును సృణికల్పనారాచ! నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 89,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 89",
    titleEn: "Nekarukallu Satakam - Poem 89",
    verseTe: `నావంటి మానిసుల్ బ్రదుకుచుండుట నాతియు సుతులు
దైవంబు నెంచుచుండుటయుఁ చచ్చుట తక్క నేమౌదు
రీవు కృపాదృష్టిఁ చూడనెంచవ యేని యేమౌదు
సేవాగతి ప్రీతి నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!`,
    verseEn: `Naavamti maanisul bradukuchumduta naatiyu sutulu
Daivambu nèmchuchumdutayu~ chachchuta takka nemaudu
Reevu krupaadrushti~ choodanèmchava yeni yemaudu
Sevaagati preeti nèkarukal praamta siddhaabda heḻi!`,
    wordMeaningTe: `నాలాంటి మనిసూల్ బతికే ఉన్నాడు
దేవుడిని చంపితే సరిపోదు
భగవంతుని దయ ఏమిటి?
సేవాగతి ప్రీతి నెకరుకల్ ప్రాంతం సిద్ధబ్ద హెలీ!`,
    wordMeaningEn: `Manisul like me is alive
It is not enough to kill God
What is the grace of God?
Sevagati Preeti Nekarukal Region Siddhabda Heli!`,
    audioTe: "నావంటి మానిసుల్ బ్రదుకుచుండుట నాతియు సుతులు దైవంబు నెంచుచుండుటయుఁ చచ్చుట తక్క నేమౌదు రీవు కృపాదృష్టిఁ చూడనెంచవ యేని యేమౌదు సేవాగతి ప్రీతి నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!",
    audioEn: ""
  },
  {
    id: 90,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 90",
    titleEn: "Nekarukallu Satakam - Poem 90",
    verseTe: `పొగడుచునుందురు మిత్రు లొక్క వైపుననుండి జనునిఁ
తెగడుచు నుందురు శత్రు లింకొక దెసనుండి జనుని
జగతి వానికి నెంత నీవు వ్రాసితో సాగెడు నంతే
సిగమీఱి చన డెందు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Pògaduchunumduru mitru lòkka vaipunanumdi januni~
Tègaduchu numduru shatru limkòka dèsanumdi januni
Jagati vaaniki nèmta neevu vraasito saagèdu namte
Sigameeṟi chana dèmdu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ప్రజలను ప్రశంసించే స్నేహితుడి వైపు నుండి
తెరడుచు నుందురు శత్రు అవతల నుండి పుట్టాడు
మీరు ప్రపంచానికి ఎంత వ్రాస్తారు?
సిగమిరి చన డెందు నెకరుకల్ ప్రాంత సిద్ధబ్దహేళి!`,
    wordMeaningEn: `From the side of a friend who praises people
Teraduchu Nunduru Sathru is born from the other side
How much do you write to the world?
Sigamiri Chana Dendu Nekarukal region Siddhabdaheli!`,
    audioTe: "పొగడుచునుందురు మిత్రు లొక్క వైపుననుండి జనునిఁ తెగడుచు నుందురు శత్రు లింకొక దెసనుండి జనుని జగతి వానికి నెంత నీవు వ్రాసితో సాగెడు నంతే సిగమీఱి చన డెందు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 91,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 91",
    titleEn: "Nekarukallu Satakam - Poem 91",
    verseTe: `ఒక్కప్పుడు నిజంబు నన్ను రక్షింతు వొగి జన్మ వితతి
చిక్కు తీరిన దనిపించు నొక్కపు చివరి కేమగునొ
యక్కటా యనిపించు జీవితపుఁ పరమార్థమ్ము తెలియు
చిక్కు తీరదటంచు నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!`,
    verseEn: `Òkkappudu nijambu nannu rakshimtu vògi janma vitati
Chikku teerina danipimchu nòkkapu chivari kemagunò
Yakkataa yanipimchu jeevitapu~ paramaarthammu tèliyu
Chikku teeradatamchu nèkarukal praamta siddhaabda heḻi!`,
    wordMeaningTe: `ఒకానొక సమయంలో సత్యం నన్ను రక్షించి నాకు జన్మనిచ్చింది
చివరి ట్రిక్ చిక్కుబడ్డ నొప్పిని నొక్కడం
నీకు ఒక్కడికే జీవిత పరమార్థం తెలియదు
నెకరుకల్ ప్రాంతం సిద్ధబ్ద హెలీ!`,
    wordMeaningEn: `At one time the truth saved me and gave birth to me
The final trick is to press the tangled pain
You don't know the meaning of life alone
Nekarukal area Siddhabda Heli!`,
    audioTe: "ఒక్కప్పుడు నిజంబు నన్ను రక్షింతు వొగి జన్మ వితతి చిక్కు తీరిన దనిపించు నొక్కపు చివరి కేమగునొ యక్కటా యనిపించు జీవితపుఁ పరమార్థమ్ము తెలియు చిక్కు తీరదటంచు నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!",
    audioEn: ""
  },
  {
    id: 92,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 92",
    titleEn: "Nekarukallu Satakam - Poem 92",
    verseTe: `ఎప్పటికప్పుడు నధికమా ధన మేమొ వచ్చునని
ఎప్పటికప్పుడు పెద్ద ఉద్యోగ మేదొ వచ్చునని
రొప్పుచున్నది యాస సన్వసింపించు రోగమ్ము కుదురు
చిప్ప చేతికివచ్చు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Èppatikappudu nadhikamaa dhana memò vachchunani
Èppatikappudu pèdda udyoga medò vachchunani
Ròppuchunnadi yaasa sanvasimpimchu rogammu kuduru
Chippa chetikivachchu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `కాలానుగుణంగా మాకు ఎక్కువ డబ్బు వస్తుంది
ఎప్పటికప్పుడు పెద్ద ఉద్యోగావకాశాలు వస్తాయి
రోగగ్రస్తులకు ఊరటనిచ్చేది యాస
నేకరుకల్ ప్రాంతం సిద్ధబ్దహేళి పొందొచ్చు!`,
    wordMeaningEn: `From time to time we will get more money
A big job opportunity will come from time to time
It is the slang that soothes the sick
Nekarukal region Siddabdaheli can be obtained!`,
    audioTe: "ఎప్పటికప్పుడు నధికమా ధన మేమొ వచ్చునని ఎప్పటికప్పుడు పెద్ద ఉద్యోగ మేదొ వచ్చునని రొప్పుచున్నది యాస సన్వసింపించు రోగమ్ము కుదురు చిప్ప చేతికివచ్చు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 93,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 93",
    titleEn: "Nekarukallu Satakam - Poem 93",
    verseTe: `ఇది యేమియును లేదటంచుఁ తెలిసియు నీ తనువచేత
బ్రదుకుట తప్పక మరల నిందులో పలఁ ప్రవేశించి
యుదయించు జ్ఞానంబు మరుగుండి పోవుచున్నది నన్ను
జెదలు పట్టగ నీకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Idi yemiyunu ledatamchu~ tèlisiyu nee tanuvacheta
Bradukuta tappaka marala nimdulo pala~ praveshimchi
Yudayimchu jnyaanambu marugumdi povuchunnadi nannu
Jèdalu pattaga neeku nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `ఇది మీ వల్ల, మీరు ఎవరో తెలుసుకోవడం
జీవించాలంటే మళ్లీ మళ్లీ ప్రవేశించాలి
యుద్ధ జ్ఞానము నాకు దూరమైపోతోంది
జెడలు పట్టగ మీరు నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `This is because of you, knowing who you are
To live must enter again and again
The wisdom of war is fading away from me
Jedalu Pattaga you Nekarukal region Siddabdaheli!`,
    audioTe: "ఇది యేమియును లేదటంచుఁ తెలిసియు నీ తనువచేత బ్రదుకుట తప్పక మరల నిందులో పలఁ ప్రవేశించి యుదయించు జ్ఞానంబు మరుగుండి పోవుచున్నది నన్ను జెదలు పట్టగ నీకు నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 94,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 94",
    titleEn: "Nekarukallu Satakam - Poem 94",
    verseTe: `భ్రూయుగంబునకును నడుమగా నిన్నుఁ ప్రోవు చేయంగఁ
చేయు యత్నము లెల్ల సన్న మెఱుములై చిదిసిపోయెడిని
నా యెడందను బందిమైన నిన్ను నీ నాల్గు మెట్లెక్కఁ
చేయఁజాలకపోదు నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!`,
    verseEn: `Bhrooyugambunakunu nadumagaa ninnu~ provu cheyamga~
Cheyu yatnamu lèlla sanna mèṟumulai chidisipoyèdini
Naa yèdamdanu bamdimaina ninnu nee naalgu mètlèkka~
Cheya~jaalakapodu nèkarukal praamta siddhaabda heḻi!`,
    wordMeaningTe: `నుదురు ఎముకలాగా నీకు నమస్కరిస్తాను
నేను దీన్ని చేయడానికి ప్రయత్నించాను, కానీ నేను పగిలిపోయాను
నా ఒక్క బందీ అయిన నువ్వు, నీ నాలుగు అడుగులు
నెకరుకల్ ప్రాంతం సిద్ధబ్ద హెలీ!`,
    wordMeaningEn: `Let me bow down to you as a brow bone
I tried to do it, but I was shattered
You who are my one captive, your four steps
Nekarukal area Siddhabda Heli!`,
    audioTe: "భ్రూయుగంబునకును నడుమగా నిన్నుఁ ప్రోవు చేయంగఁ చేయు యత్నము లెల్ల సన్న మెఱుములై చిదిసిపోయెడిని నా యెడందను బందిమైన నిన్ను నీ నాల్గు మెట్లెక్కఁ చేయఁజాలకపోదు నెకరుకల్ ప్రాంత సిద్ధాబ్ద హేళి!",
    audioEn: ""
  },
  {
    id: 95,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 95",
    titleEn: "Nekarukallu Satakam - Poem 95",
    verseTe: `బిడ్డను సరిదిద్ది మంచి త్రోవను బెట్టుకోవలయు
చెడ్డమానిసినైన యోగమార్గాలఁ చేదుకోవలయు
సడ్డగా ఁ గలిలోన స్మరణమాత్రము చాలుసన్నారు
జిడ్డయ్యె నీస్మృతి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Biddanu sarididdi mamchi trovanu bèttukovalayu
Chèddamaanisinaina yogamaargaala~ chedukovalayu
Saddagaa ~ galilona smaranamaatramu chaalusannaaru
Jiddayyè neesmruti nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `పిల్లవాడిని సరిదిద్దండి మరియు మంచి భంగిమను నిర్వహించండి
చెడు మాన్సిని యోగమార్గాలు చేయవచ్చు
సద్దగ మళ్లాలా
జిద్దాయే నిస్మృతి నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలీ!`,
    wordMeaningEn: `Correct the child and maintain a good posture
Bad mansini Yogamargalu can be done
Saddaga মাল্লাল্য়ালা
Ziddaye Nismriti Nekarukal Region Siddhabdaheli!`,
    audioTe: "బిడ్డను సరిదిద్ది మంచి త్రోవను బెట్టుకోవలయు చెడ్డమానిసినైన యోగమార్గాలఁ చేదుకోవలయు సడ్డగా ఁ గలిలోన స్మరణమాత్రము చాలుసన్నారు జిడ్డయ్యె నీస్మృతి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 96,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 96",
    titleEn: "Nekarukallu Satakam - Poem 96",
    verseTe: `భార్యపై బిడ్డలపైన మమత తప్ప మరొక్కడకు న
మర్యాద లేదడ్డ మివ్వి చాలవా మరియన్నచో న
మర్యాద లీ ధాత్రి లక్షలున్నవి మది నిలఁబెట్టు
జీర్ణదాశాజ్యోతి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Bhaaryapai biddalapaina mamata tappa maròkkadaku na
Maryaada ledadda mivvi chaalavaa mariyannacho na
Maryaada lee dhaatri lakshalunnavi madi nila~bèttu
Jeernadaashaajyoti nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `భార్యా పిల్లలపై ప్రేమ తప్ప మరొకటి లేదు
మర్యాద ఇస్తే చాలు
సౌజన్య లీ ధాత్రి లక్షలు మనసు నిలబెట్టు
నేకరుకల్ మండలానికి చెందిన సిద్దబ్దహేలి`,
    wordMeaningEn: `No other than love for wife and children
It's enough to give politeness
Courtesy Lee Dhatri Lakhs are mind nilabettu
Siddabdaheli of Nekarukal Region`,
    audioTe: "భార్యపై బిడ్డలపైన మమత తప్ప మరొక్కడకు న మర్యాద లేదడ్డ మివ్వి చాలవా మరియన్నచో న మర్యాద లీ ధాత్రి లక్షలున్నవి మది నిలఁబెట్టు జీర్ణదాశాజ్యోతి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 97,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 97",
    titleEn: "Nekarukallu Satakam - Poem 97",
    verseTe: `వేతును వేతున యెవరికై నను విను వెత్తుఁ తుదకు
బ్రాఁతిగ నేనేమొ యతినిగాక పోవచ్చు నైన జల
పాతమ్ము లున్నవి చిన్న వాగులే వలదు నీ మౌళి
శీతాద్రిసుత లేదొ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Vetunu vetuna yèvarikai nanu vinu vèttu~ tudaku
Braa~tiga nenemò yatinigaaka povachchu naina jala
Paatammu lunnavi chinna vaagule valadu nee mauḻi
Sheetaadrisuta ledò nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నా మాట వినమని ఎవరినీ అడగవద్దు
బ్రంటిగా నేనేమో పోగొట్టుకోగల నీరు
పాతవి చిన్న ధారలు కావు నీ సంపద
సీతాద్రిసుత లేదో నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `Don't ask anyone to listen to me
Brantiga Nenemo is the water that can be lost
The old ones are not small streams but your treasure
Sitadrisuta Ledo Nekarukal area Siddhabdaheli!`,
    audioTe: "వేతును వేతున యెవరికై నను విను వెత్తుఁ తుదకు బ్రాఁతిగ నేనేమొ యతినిగాక పోవచ్చు నైన జల పాతమ్ము లున్నవి చిన్న వాగులే వలదు నీ మౌళి శీతాద్రిసుత లేదొ నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 98,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 98",
    titleEn: "Nekarukallu Satakam - Poem 98",
    verseTe: `తన తీరెఱుఁగు మప్పు పుచ్చుకొందును తలఁచికొన్నంత
వనితా సుతుల మీఁద మమత చెప్పిన భ్రాంతి పొందకుము
క్షణము పట్టదుసుమీ నాశనము చేయగా నెంత తూలి
చిన మోహమైనను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Tana teerèṟu~gu mappu puchchukòmdunu tala~chikònnamta
Vanitaa sutula mee~da mamata chèppina bhraamti pòmdakumu
Kshanamu pattadusumee naashanamu cheyagaa nèmta tooli
China mohamainanu nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `తప్పు చేస్తానని అనుకున్నంత
వనితా సుతుల గురించి మమత చెప్పినట్టు భ్రమ పడకండి
క్షణాల్లో నాశనం చేయడానికి ఎంత ఖర్చవుతుంది?
చిన్న మొహమైనను నెకరుకల్ ప్రాంతం సిద్దబ్దహేలీ!`,
    wordMeaningEn: `As much as he thought that he was going to make a mistake
Don't get the illusion of what Mamata said about Vanita Sutula
How much does it cost to destroy in a matter of seconds?
Chinna Mohamainu Nekarukal area Siddabdaheli!`,
    audioTe: "తన తీరెఱుఁగు మప్పు పుచ్చుకొందును తలఁచికొన్నంత వనితా సుతుల మీఁద మమత చెప్పిన భ్రాంతి పొందకుము క్షణము పట్టదుసుమీ నాశనము చేయగా నెంత తూలి చిన మోహమైనను నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 99,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 99",
    titleEn: "Nekarukallu Satakam - Poem 99",
    verseTe: `నా కేమి యభ్యంతరమ్ము లేదయ్య నాథ! ప్రారబ్ధ
మీ కేళీగా సాగునేని నీవు నా యెదనుండి పోకు
తేఁకువ దొంగ వేషమ్ములను వేసితివ యేని చాల
చీకాకు సేసెద నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Naa kemi yabhyamtarammu ledayya naatha! praarabdha
Mee keḻeegaa saaguneni neevu naa yèdanumdi poku
Te~kuva dòmga veshammulanu vesitiva yeni chaala
Cheekaaku sesèda nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `నా కేమి యాభ్యాంతరమ్ము లేదయ్యా నాథ!ప్రరబ్ధ
మీరు మీ సరదాకి వెళుతున్నప్పుడు మీరు నా నుండి దూరంగా వెళ్లవద్దు
కొబ్బరికాయ దొంగ వేషం వేస్తే చాలు
చీకాకు సేసేద నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `Na Kemi Yabhyantharammu Ledayya Natha!Prarabdha
Don't you go away from me as you go about your fun
It is enough to dress up as a coconut thief
Cheekaku Seseda Nekarukal area Siddhabdaheli!`,
    audioTe: "నా కేమి యభ్యంతరమ్ము లేదయ్య నాథ! ప్రారబ్ధ మీ కేళీగా సాగునేని నీవు నా యెదనుండి పోకు తేఁకువ దొంగ వేషమ్ములను వేసితివ యేని చాల చీకాకు సేసెద నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 100,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 100",
    titleEn: "Nekarukallu Satakam - Poem 100",
    verseTe: `తల మధించుట యేల గుండెపై నెక్కి దంచుట యేల
యెలయక కడుపులో సుళ్ళు తిరుగుటయేల యెందుకివి
సులభమ్ముగా వచ్చి యాత్మలోన గూర్చుండక యెట్లు
శిలవైతి కదలక నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!`,
    verseEn: `Tala madhimchuta yela gumdèpai nèkki damchuta yela
Yèlayaka kadupulo suḻḻu tirugutayela yèmdukivi
Sulabhammugaa vachchi yaatmalona goorchumdaka yètlu
Shilavaiti kadalaka nèkarukal praamta siddhaabdaheḻi!`,
    wordMeaningTe: `తల కొట్టుకోవడం, గుండె కొరికేసుకోవడం లాంటిది
ఎందుకంటే యేలయ్యకు కడుపులో మెలికలు తిరుగుతాయి
తద్వారా అది సులువుగా రాదు మరియు యాత్మలో లీనమవుతుంది
శిలావైతి కదలక నెకరుకల్ ప్రాంతం సిద్ధబ్దహేళి!`,
    wordMeaningEn: `It is like beating the head and biting the heart
Because of the twists in the belly of Yelayaka
So that it does not come easily and is absorbed in Yatma
Shilavaithi Kadalaka Nekarukal area Siddhabdaheli!`,
    audioTe: "తల మధించుట యేల గుండెపై నెక్కి దంచుట యేల యెలయక కడుపులో సుళ్ళు తిరుగుటయేల యెందుకివి సులభమ్ముగా వచ్చి యాత్మలోన గూర్చుండక యెట్లు శిలవైతి కదలక నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి!",
    audioEn: ""
  },
  {
    id: 101,
    category: "shiva",
    titleTe: "నెకరుకల్లు శతకము - పద్యం 101",
    titleEn: "Nekarukallu Satakam - Poem 101",
    verseTe: `శ్రీతమాలశ్యామలింగ! సిద్ధసంసేవిత లింగ!
హేతుహీన సనాధ! అన్నపూర్ణా సహిత విశ్వనాథ
నీ తామరధునీశ జటాజూటా! మణి శశి కిరీట!
స్ఫీత వియన్మౌళి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి! (101)`,
    verseEn: `Shreetamaalashyaamalimga! siddhasamsevita limga!
Hetuheena sanaadha! annapoornaa sahita vishvanaatha
Nee taamaradhuneesha jataajootaa! mani shashi kireeta!
Spheeta viyanmauḻi nèkarukal praamta siddhaabdaheḻi! (101)`,
    wordMeaningTe: `శ్రితమలశ్యామలింగ!సిద్ధసంసేవిత లింగ!
అహేతుక పరికరం!అన్నపూర్ణతో విశ్వనాథ
నీ తామరధునిశ జటాజూటా!మణి శశి కిరీటమా!
స్ఫిత వియన్మౌళి నెకరుకల్ ప్రాంతం సిద్ధబ్దహేలి!(101)`,
    wordMeaningEn: `Shritamalashyamalinga!Siddhasamsevita Linga!
Irrational device!Vishwanatha with Annapurna
Thy tamaradhunisha jatajuta!Mani Sashi crown!
Sfitha Viyanmouli Nekarukal region Siddhabdaheli!(101)`,
    audioTe: "శ్రీతమాలశ్యామలింగ! సిద్ధసంసేవిత లింగ! హేతుహీన సనాధ! అన్నపూర్ణా సహిత విశ్వనాథ నీ తామరధునీశ జటాజూటా! మణి శశి కిరీట! స్ఫీత వియన్మౌళి నెకరుకల్ ప్రాంత సిద్ధాబ్దహేళి! (101)",
    audioEn: ""
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
  initPoetBioTabs();
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
    titleTe: "స్వామివారి పవిత్ర త్రిశూల పూజ",
    titleEn: "Sacred Trishula Worship Ceremony",
    descTe: "ఆలయ మహోత్సవాల సందర్భంగా గులాబీ పూలమాలలు మరియు పసుపుతో అలంకరించిన స్వామివారి బంగారు త్రిశూలాన్ని భక్తులకు దర్శనమిస్తున్న అర్చకులు.",
    descEn: "Priests presenting the sacred golden Trishula adorned with rose garlands and turmeric to devotees during the temple festival."
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
    titleTe: "రజత కవచ కాశీ విశ్వేశ్వర స్వామి",
    titleEn: "Silver-Adorned Kasi Visweswara Swami",
    descTe: "వెండి ముఖపద్మం, రజత కిరీటం, నాగాభరణాలతో గర్భాలయంలో తేజోమయంగా వెలిగిపోతున్న శ్రీ కాశీ విశ్వేశ్వర స్వామి దివ్య మంగళ స్వరూపం — వెనుక దీపాల వెలుతురులో.",
    descEn: "The divine form of Sri Kasi Visweswara Swami in the sanctum sanctorum, adorned with a silver face mask, crown, and serpent ornaments, glowing beautifully in the light of sacred lamps."
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


// ─── POET BIOGRAPHY TABS ──────────────────────────────────────────────────────
function initPoetBioTabs() {
  const tabs = document.querySelectorAll('.poet-bio-tab');
  const panels = document.querySelectorAll('.poet-bio-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-bio-tab');

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update active panel
      panels.forEach(p => p.classList.remove('active'));
      const targetPanel = document.getElementById('bio-panel-' + targetTab);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // 0. Setup Intro Splash Screen
  const introSplash = document.getElementById('intro-splash');
  const skipBtn = document.getElementById('skip-intro-btn');
  
  if (introSplash) {
    document.body.style.overflow = 'hidden'; // Lock scroll
    
    let secondsLeft = 7;
    const interval = setInterval(() => {
      secondsLeft--;
      if (secondsLeft <= 0) {
        clearInterval(interval);
        dismissIntro();
      }
    }, 1000);
    
    const dismissIntro = () => {
      clearInterval(interval);
      introSplash.classList.add('fade-out');
      document.body.style.overflow = ''; // Restore scroll
      setTimeout(() => {
        introSplash.style.display = 'none';
      }, 800); // Wait for CSS opacity fade out
    };
    
    if (skipBtn) {
      skipBtn.addEventListener('click', dismissIntro);
    }
  }

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

// --- WATERMARK VISIBILITY LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
  const watermark = document.querySelector('.site-watermark');
  if (!watermark) return;
  
  // Select images that should hide the watermark when they scroll into view
  const imagesToObserve = document.querySelectorAll('img:not(.watermark-circle img):not(.logo-photo):not(.footer-logo img)');
  
  let intersectingImagesCount = 0;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        intersectingImagesCount++;
      } else {
        intersectingImagesCount = Math.max(0, intersectingImagesCount - 1);
      }
    });

    // Hide watermark if any image is currently in the viewport
    if (intersectingImagesCount > 0) {
      watermark.classList.add('hidden');
    } else {
      watermark.classList.remove('hidden');
    }
  }, {
    rootMargin: '-10% 0px -10% 0px', 
    threshold: 0.05
  });

  imagesToObserve.forEach(img => observer.observe(img));
});

