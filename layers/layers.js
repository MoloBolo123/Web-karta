ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3765").setExtent([332518.116206, 5025708.904311, 333640.657197, 5026359.933392]);
var wms_layers = [];

var lyr_DOF_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoportal.dgu.hr/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "DOF",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'DOF',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DOF_0, 0]);
var format_Zgrade_1 = new ol.format.GeoJSON();
var features_Zgrade_1 = format_Zgrade_1.readFeatures(json_Zgrade_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3765'});
var jsonSource_Zgrade_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zgrade_1.addFeatures(features_Zgrade_1);
var lyr_Zgrade_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zgrade_1, 
                style: style_Zgrade_1,
                popuplayertitle: 'Zgrade',
                interactive: true,
    title: 'Zgrade<br />\
    <img src="styles/legend/Zgrade_1_0.png" /> gospodarska zgrada<br />\
    <img src="styles/legend/Zgrade_1_1.png" /> industrijska zgrada<br />\
    <img src="styles/legend/Zgrade_1_2.png" /> javna zgrada<br />\
    <img src="styles/legend/Zgrade_1_3.png" /> kuca<br />\
    <img src="styles/legend/Zgrade_1_4.png" /> poslovna zgrada<br />\
    <img src="styles/legend/Zgrade_1_5.png" /> stambeni blok zgrada<br />\
    <img src="styles/legend/Zgrade_1_6.png" /> trafostanica<br />' });
var format_Ceste_2 = new ol.format.GeoJSON();
var features_Ceste_2 = format_Ceste_2.readFeatures(json_Ceste_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3765'});
var jsonSource_Ceste_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ceste_2.addFeatures(features_Ceste_2);
var lyr_Ceste_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ceste_2, 
                style: style_Ceste_2,
                popuplayertitle: 'Ceste',
                interactive: true,
                title: '<img src="styles/legend/Ceste_2.png" /> Ceste'
            });
var format_okvir_3 = new ol.format.GeoJSON();
var features_okvir_3 = format_okvir_3.readFeatures(json_okvir_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3765'});
var jsonSource_okvir_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_okvir_3.addFeatures(features_okvir_3);
var lyr_okvir_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_okvir_3, 
                style: style_okvir_3,
                popuplayertitle: 'okvir',
                interactive: false,
                title: '<img src="styles/legend/okvir_3.png" /> okvir'
            });
var format_Trgovine_4 = new ol.format.GeoJSON();
var features_Trgovine_4 = format_Trgovine_4.readFeatures(json_Trgovine_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3765'});
var jsonSource_Trgovine_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trgovine_4.addFeatures(features_Trgovine_4);
var lyr_Trgovine_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trgovine_4, 
                style: style_Trgovine_4,
                popuplayertitle: 'Trgovine',
                interactive: true,
    title: 'Trgovine<br />\
    <img src="styles/legend/Trgovine_4_0.png" /> autosalon<br />\
    <img src="styles/legend/Trgovine_4_1.png" /> banka<br />\
    <img src="styles/legend/Trgovine_4_2.png" /> bankomat<br />\
    <img src="styles/legend/Trgovine_4_3.png" /> bar<br />\
    <img src="styles/legend/Trgovine_4_4.png" /> drogerija<br />\
    <img src="styles/legend/Trgovine_4_5.png" /> igralište<br />\
    <img src="styles/legend/Trgovine_4_6.png" /> kafić<br />\
    <img src="styles/legend/Trgovine_4_7.png" /> ljekarna<br />\
    <img src="styles/legend/Trgovine_4_8.png" /> optičar<br />\
    <img src="styles/legend/Trgovine_4_9.png" /> pekarna<br />\
    <img src="styles/legend/Trgovine_4_10.png" /> pošta<br />\
    <img src="styles/legend/Trgovine_4_11.png" /> pub<br />\
    <img src="styles/legend/Trgovine_4_12.png" /> restoran<br />\
    <img src="styles/legend/Trgovine_4_13.png" /> spomenik<br />\
    <img src="styles/legend/Trgovine_4_14.png" /> trgovina<br />\
    <img src="styles/legend/Trgovine_4_15.png" /> trgovina mobitela<br />\
    <img src="styles/legend/Trgovine_4_16.png" /> trgovina odjeće<br />' });

lyr_DOF_0.setVisible(true);lyr_Zgrade_1.setVisible(true);lyr_Ceste_2.setVisible(true);lyr_okvir_3.setVisible(true);lyr_Trgovine_4.setVisible(true);
var layersList = [lyr_DOF_0,lyr_Zgrade_1,lyr_Ceste_2,lyr_okvir_3,lyr_Trgovine_4];
lyr_Zgrade_1.set('fieldAliases', {'ime': 'NAZIV', 'vrsta': 'VRSTA', 'id': 'id', 'površina': 'POVRŠINA [m2]', 'namjena': 'NAMJENA', });
lyr_Ceste_2.set('fieldAliases', {'vrsta': 'VRSTA', 'ime': 'NAZIV', 'smjer': 'smjer', 'max brzina': 'max brzina', 'most': 'most', 'tunel': 'tunel', 'id': 'id', 'duljina': 'duljina', 'vrijeme': 'vrijeme', });
lyr_okvir_3.set('fieldAliases', {'id': 'id', });
lyr_Trgovine_4.set('fieldAliases', {'vrsta': 'VRSTA', 'ime': 'NAZIV', 'id': 'id', });
lyr_Zgrade_1.set('fieldImages', {'ime': 'TextEdit', 'vrsta': 'TextEdit', 'id': 'Hidden', 'površina': 'TextEdit', 'namjena': 'TextEdit', });
lyr_Ceste_2.set('fieldImages', {'vrsta': 'TextEdit', 'ime': 'TextEdit', 'smjer': 'Hidden', 'max brzina': 'Hidden', 'most': 'Hidden', 'tunel': 'Hidden', 'id': 'Hidden', 'duljina': 'Hidden', 'vrijeme': 'Hidden', });
lyr_okvir_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Trgovine_4.set('fieldImages', {'vrsta': 'TextEdit', 'ime': 'TextEdit', 'id': 'Hidden', });
lyr_Zgrade_1.set('fieldLabels', {'ime': 'inline label - always visible', 'vrsta': 'inline label - always visible', 'površina': 'inline label - always visible', 'namjena': 'inline label - always visible', });
lyr_Ceste_2.set('fieldLabels', {'vrsta': 'inline label - always visible', 'ime': 'inline label - always visible', });
lyr_okvir_3.set('fieldLabels', {'id': 'no label', });
lyr_Trgovine_4.set('fieldLabels', {'vrsta': 'inline label - always visible', 'ime': 'inline label - always visible', });
lyr_Trgovine_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});