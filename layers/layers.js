var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasKecamatanAR_1 = new ol.format.GeoJSON();
var features_BatasKecamatanAR_1 = format_BatasKecamatanAR_1.readFeatures(json_BatasKecamatanAR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatanAR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatanAR_1.addFeatures(features_BatasKecamatanAR_1);
var lyr_BatasKecamatanAR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatanAR_1, 
                style: style_BatasKecamatanAR_1,
                popuplayertitle: 'Batas Kecamatan AR',
                interactive: true,
    title: 'Batas Kecamatan AR<br />\
    <img src="styles/legend/BatasKecamatanAR_1_0.png" /> Bagelen<br />\
    <img src="styles/legend/BatasKecamatanAR_1_1.png" /> Banyuurip<br />\
    <img src="styles/legend/BatasKecamatanAR_1_2.png" /> Bayan<br />\
    <img src="styles/legend/BatasKecamatanAR_1_3.png" /> Bener<br />\
    <img src="styles/legend/BatasKecamatanAR_1_4.png" /> Bruno<br />\
    <img src="styles/legend/BatasKecamatanAR_1_5.png" /> Butuh<br />\
    <img src="styles/legend/BatasKecamatanAR_1_6.png" /> Gebang<br />\
    <img src="styles/legend/BatasKecamatanAR_1_7.png" /> Grabag<br />\
    <img src="styles/legend/BatasKecamatanAR_1_8.png" /> Kaligesing<br />\
    <img src="styles/legend/BatasKecamatanAR_1_9.png" /> Kemiri<br />\
    <img src="styles/legend/BatasKecamatanAR_1_10.png" /> Kutoarjo<br />\
    <img src="styles/legend/BatasKecamatanAR_1_11.png" /> Loano<br />\
    <img src="styles/legend/BatasKecamatanAR_1_12.png" /> Ngombol<br />\
    <img src="styles/legend/BatasKecamatanAR_1_13.png" /> Pituruh<br />\
    <img src="styles/legend/BatasKecamatanAR_1_14.png" /> Purwodadi<br />\
    <img src="styles/legend/BatasKecamatanAR_1_15.png" /> Purworejo<br />' });
var lyr_RunUpTsunami_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Run Up Tsunami<br />\
    <img src="styles/legend/RunUpTsunami_2_0.png" /> 0,0<br />\
    <img src="styles/legend/RunUpTsunami_2_1.png" /> 7,6<br />\
    <img src="styles/legend/RunUpTsunami_2_2.png" /> 15,2<br />\
    <img src="styles/legend/RunUpTsunami_2_3.png" /> 22,7<br />\
    <img src="styles/legend/RunUpTsunami_2_4.png" /> 30,3<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RunUpTsunami_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12222568.581576, -881837.814701, 12260942.986024, -839256.965900]
        })
    });
var format_BatasKecamatanLN_3 = new ol.format.GeoJSON();
var features_BatasKecamatanLN_3 = format_BatasKecamatanLN_3.readFeatures(json_BatasKecamatanLN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatanLN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatanLN_3.addFeatures(features_BatasKecamatanLN_3);
var lyr_BatasKecamatanLN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatanLN_3, 
                style: style_BatasKecamatanLN_3,
                popuplayertitle: 'Batas Kecamatan LN',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatanLN_3.png" /> Batas Kecamatan LN'
            });
var format_JaringanTransportasiKabupatenPurworejoLN_4 = new ol.format.GeoJSON();
var features_JaringanTransportasiKabupatenPurworejoLN_4 = format_JaringanTransportasiKabupatenPurworejoLN_4.readFeatures(json_JaringanTransportasiKabupatenPurworejoLN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanTransportasiKabupatenPurworejoLN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanTransportasiKabupatenPurworejoLN_4.addFeatures(features_JaringanTransportasiKabupatenPurworejoLN_4);
var lyr_JaringanTransportasiKabupatenPurworejoLN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanTransportasiKabupatenPurworejoLN_4, 
                style: style_JaringanTransportasiKabupatenPurworejoLN_4,
                popuplayertitle: 'Jaringan Transportasi Kabupaten Purworejo LN',
                interactive: true,
                title: '<img src="styles/legend/JaringanTransportasiKabupatenPurworejoLN_4.png" /> Jaringan Transportasi Kabupaten Purworejo LN'
            });
var format_TitikAwalKecamatanGrabag_5 = new ol.format.GeoJSON();
var features_TitikAwalKecamatanGrabag_5 = format_TitikAwalKecamatanGrabag_5.readFeatures(json_TitikAwalKecamatanGrabag_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikAwalKecamatanGrabag_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikAwalKecamatanGrabag_5.addFeatures(features_TitikAwalKecamatanGrabag_5);
var lyr_TitikAwalKecamatanGrabag_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikAwalKecamatanGrabag_5, 
                style: style_TitikAwalKecamatanGrabag_5,
                popuplayertitle: 'Titik Awal Kecamatan Grabag',
                interactive: true,
                title: '<img src="styles/legend/TitikAwalKecamatanGrabag_5.png" /> Titik Awal Kecamatan Grabag'
            });
var format_TitikAwalKecamatanNgombol_6 = new ol.format.GeoJSON();
var features_TitikAwalKecamatanNgombol_6 = format_TitikAwalKecamatanNgombol_6.readFeatures(json_TitikAwalKecamatanNgombol_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikAwalKecamatanNgombol_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikAwalKecamatanNgombol_6.addFeatures(features_TitikAwalKecamatanNgombol_6);
var lyr_TitikAwalKecamatanNgombol_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikAwalKecamatanNgombol_6, 
                style: style_TitikAwalKecamatanNgombol_6,
                popuplayertitle: 'Titik Awal Kecamatan Ngombol',
                interactive: true,
                title: '<img src="styles/legend/TitikAwalKecamatanNgombol_6.png" /> Titik Awal Kecamatan Ngombol'
            });
var format_TitikAwalKecamatanPurwodadi_7 = new ol.format.GeoJSON();
var features_TitikAwalKecamatanPurwodadi_7 = format_TitikAwalKecamatanPurwodadi_7.readFeatures(json_TitikAwalKecamatanPurwodadi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikAwalKecamatanPurwodadi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikAwalKecamatanPurwodadi_7.addFeatures(features_TitikAwalKecamatanPurwodadi_7);
var lyr_TitikAwalKecamatanPurwodadi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikAwalKecamatanPurwodadi_7, 
                style: style_TitikAwalKecamatanPurwodadi_7,
                popuplayertitle: 'Titik Awal Kecamatan Purwodadi',
                interactive: true,
                title: '<img src="styles/legend/TitikAwalKecamatanPurwodadi_7.png" /> Titik Awal Kecamatan Purwodadi'
            });
var format_TitikEvakuasiSementaraKecamatanGrabag_8 = new ol.format.GeoJSON();
var features_TitikEvakuasiSementaraKecamatanGrabag_8 = format_TitikEvakuasiSementaraKecamatanGrabag_8.readFeatures(json_TitikEvakuasiSementaraKecamatanGrabag_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikEvakuasiSementaraKecamatanGrabag_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikEvakuasiSementaraKecamatanGrabag_8.addFeatures(features_TitikEvakuasiSementaraKecamatanGrabag_8);
var lyr_TitikEvakuasiSementaraKecamatanGrabag_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikEvakuasiSementaraKecamatanGrabag_8, 
                style: style_TitikEvakuasiSementaraKecamatanGrabag_8,
                popuplayertitle: 'Titik Evakuasi Sementara Kecamatan Grabag',
                interactive: true,
                title: '<img src="styles/legend/TitikEvakuasiSementaraKecamatanGrabag_8.png" /> Titik Evakuasi Sementara Kecamatan Grabag'
            });
var format_TitikEvakuasiSementaraKecamatanNgombol_9 = new ol.format.GeoJSON();
var features_TitikEvakuasiSementaraKecamatanNgombol_9 = format_TitikEvakuasiSementaraKecamatanNgombol_9.readFeatures(json_TitikEvakuasiSementaraKecamatanNgombol_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikEvakuasiSementaraKecamatanNgombol_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikEvakuasiSementaraKecamatanNgombol_9.addFeatures(features_TitikEvakuasiSementaraKecamatanNgombol_9);
var lyr_TitikEvakuasiSementaraKecamatanNgombol_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikEvakuasiSementaraKecamatanNgombol_9, 
                style: style_TitikEvakuasiSementaraKecamatanNgombol_9,
                popuplayertitle: 'Titik Evakuasi Sementara Kecamatan Ngombol',
                interactive: true,
                title: '<img src="styles/legend/TitikEvakuasiSementaraKecamatanNgombol_9.png" /> Titik Evakuasi Sementara Kecamatan Ngombol'
            });
var format_TitikEvakuasiSementaraKecamatanPurwodadi_10 = new ol.format.GeoJSON();
var features_TitikEvakuasiSementaraKecamatanPurwodadi_10 = format_TitikEvakuasiSementaraKecamatanPurwodadi_10.readFeatures(json_TitikEvakuasiSementaraKecamatanPurwodadi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikEvakuasiSementaraKecamatanPurwodadi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikEvakuasiSementaraKecamatanPurwodadi_10.addFeatures(features_TitikEvakuasiSementaraKecamatanPurwodadi_10);
var lyr_TitikEvakuasiSementaraKecamatanPurwodadi_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikEvakuasiSementaraKecamatanPurwodadi_10, 
                style: style_TitikEvakuasiSementaraKecamatanPurwodadi_10,
                popuplayertitle: 'Titik Evakuasi Sementara Kecamatan Purwodadi',
                interactive: true,
                title: '<img src="styles/legend/TitikEvakuasiSementaraKecamatanPurwodadi_10.png" /> Titik Evakuasi Sementara Kecamatan Purwodadi'
            });
var format_JalurEvakuasiKecamatanGrabag_11 = new ol.format.GeoJSON();
var features_JalurEvakuasiKecamatanGrabag_11 = format_JalurEvakuasiKecamatanGrabag_11.readFeatures(json_JalurEvakuasiKecamatanGrabag_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurEvakuasiKecamatanGrabag_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurEvakuasiKecamatanGrabag_11.addFeatures(features_JalurEvakuasiKecamatanGrabag_11);
var lyr_JalurEvakuasiKecamatanGrabag_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurEvakuasiKecamatanGrabag_11, 
                style: style_JalurEvakuasiKecamatanGrabag_11,
                popuplayertitle: 'Jalur Evakuasi Kecamatan Grabag',
                interactive: true,
                title: '<img src="styles/legend/JalurEvakuasiKecamatanGrabag_11.png" /> Jalur Evakuasi Kecamatan Grabag'
            });
var format_JalurEvakuasiKecamatanNgombol_12 = new ol.format.GeoJSON();
var features_JalurEvakuasiKecamatanNgombol_12 = format_JalurEvakuasiKecamatanNgombol_12.readFeatures(json_JalurEvakuasiKecamatanNgombol_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurEvakuasiKecamatanNgombol_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurEvakuasiKecamatanNgombol_12.addFeatures(features_JalurEvakuasiKecamatanNgombol_12);
var lyr_JalurEvakuasiKecamatanNgombol_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurEvakuasiKecamatanNgombol_12, 
                style: style_JalurEvakuasiKecamatanNgombol_12,
                popuplayertitle: 'Jalur Evakuasi Kecamatan Ngombol',
                interactive: true,
                title: '<img src="styles/legend/JalurEvakuasiKecamatanNgombol_12.png" /> Jalur Evakuasi Kecamatan Ngombol'
            });
var format_JalurEvakuasiKecamatanPurwodadi_13 = new ol.format.GeoJSON();
var features_JalurEvakuasiKecamatanPurwodadi_13 = format_JalurEvakuasiKecamatanPurwodadi_13.readFeatures(json_JalurEvakuasiKecamatanPurwodadi_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurEvakuasiKecamatanPurwodadi_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurEvakuasiKecamatanPurwodadi_13.addFeatures(features_JalurEvakuasiKecamatanPurwodadi_13);
var lyr_JalurEvakuasiKecamatanPurwodadi_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurEvakuasiKecamatanPurwodadi_13, 
                style: style_JalurEvakuasiKecamatanPurwodadi_13,
                popuplayertitle: 'Jalur Evakuasi Kecamatan Purwodadi',
                interactive: true,
                title: '<img src="styles/legend/JalurEvakuasiKecamatanPurwodadi_13.png" /> Jalur Evakuasi Kecamatan Purwodadi'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BatasKecamatanAR_1.setVisible(true);lyr_RunUpTsunami_2.setVisible(true);lyr_BatasKecamatanLN_3.setVisible(true);lyr_JaringanTransportasiKabupatenPurworejoLN_4.setVisible(true);lyr_TitikAwalKecamatanGrabag_5.setVisible(true);lyr_TitikAwalKecamatanNgombol_6.setVisible(true);lyr_TitikAwalKecamatanPurwodadi_7.setVisible(true);lyr_TitikEvakuasiSementaraKecamatanGrabag_8.setVisible(true);lyr_TitikEvakuasiSementaraKecamatanNgombol_9.setVisible(true);lyr_TitikEvakuasiSementaraKecamatanPurwodadi_10.setVisible(true);lyr_JalurEvakuasiKecamatanGrabag_11.setVisible(true);lyr_JalurEvakuasiKecamatanNgombol_12.setVisible(true);lyr_JalurEvakuasiKecamatanPurwodadi_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BatasKecamatanAR_1,lyr_RunUpTsunami_2,lyr_BatasKecamatanLN_3,lyr_JaringanTransportasiKabupatenPurworejoLN_4,lyr_TitikAwalKecamatanGrabag_5,lyr_TitikAwalKecamatanNgombol_6,lyr_TitikAwalKecamatanPurwodadi_7,lyr_TitikEvakuasiSementaraKecamatanGrabag_8,lyr_TitikEvakuasiSementaraKecamatanNgombol_9,lyr_TitikEvakuasiSementaraKecamatanPurwodadi_10,lyr_JalurEvakuasiKecamatanGrabag_11,lyr_JalurEvakuasiKecamatanNgombol_12,lyr_JalurEvakuasiKecamatanPurwodadi_13];
lyr_BatasKecamatanAR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'SUMBER': 'SUMBER', 'STATUS': 'STATUS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'L': 'L', });
lyr_BatasKecamatanLN_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'SUMBER': 'SUMBER', 'Shape_Leng': 'Shape_Leng', });
lyr_JaringanTransportasiKabupatenPurworejoLN_4.set('fieldAliases', {'NAMA_JLN': 'NAMA_JLN', 'STATUS': 'STATUS', 'FUNGSI': 'FUNGSI', 'SUMBER_1': 'SUMBER_1', 'panjang': 'panjang', });
lyr_TitikAwalKecamatanGrabag_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORDE_1': 'ORDE_1', 'Keterangan': 'Keterangan', });
lyr_TitikAwalKecamatanNgombol_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMA_OBJEK': 'NAMA_OBJEK', 'Keterangan': 'Keterangan', });
lyr_TitikAwalKecamatanPurwodadi_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMA_OBJEK': 'NAMA_OBJEK', 'Keterangan': 'Keterangan', });
lyr_TitikEvakuasiSementaraKecamatanGrabag_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'remark': 'remark', 'Keterangan': 'Keterangan', });
lyr_TitikEvakuasiSementaraKecamatanNgombol_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'remark': 'remark', 'Keterangan': 'Keterangan', });
lyr_TitikEvakuasiSementaraKecamatanPurwodadi_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FolderPath': 'FolderPath', 'Keterangan': 'Keterangan', });
lyr_JalurEvakuasiKecamatanGrabag_11.set('fieldAliases', {'Id': 'Id', });
lyr_JalurEvakuasiKecamatanNgombol_12.set('fieldAliases', {'Id': 'Id', });
lyr_JalurEvakuasiKecamatanPurwodadi_13.set('fieldAliases', {'Id': 'Id', });
lyr_BatasKecamatanAR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'SUMBER': 'TextEdit', 'STATUS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'L': 'TextEdit', });
lyr_BatasKecamatanLN_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_JaringanTransportasiKabupatenPurworejoLN_4.set('fieldImages', {'NAMA_JLN': 'TextEdit', 'STATUS': 'TextEdit', 'FUNGSI': 'TextEdit', 'SUMBER_1': 'TextEdit', 'panjang': 'TextEdit', });
lyr_TitikAwalKecamatanGrabag_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'ORDE_1': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_TitikAwalKecamatanNgombol_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_TitikAwalKecamatanPurwodadi_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_TitikEvakuasiSementaraKecamatanGrabag_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'remark': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_TitikEvakuasiSementaraKecamatanNgombol_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'remark': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_TitikEvakuasiSementaraKecamatanPurwodadi_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'FolderPath': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_JalurEvakuasiKecamatanGrabag_11.set('fieldImages', {'Id': 'Range', });
lyr_JalurEvakuasiKecamatanNgombol_12.set('fieldImages', {'Id': 'Range', });
lyr_JalurEvakuasiKecamatanPurwodadi_13.set('fieldImages', {'Id': 'Range', });
lyr_BatasKecamatanAR_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'inline label - always visible', 'WADMKK': 'no label', 'SUMBER': 'no label', 'STATUS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'L': 'no label', });
lyr_BatasKecamatanLN_3.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'SUMBER': 'no label', 'Shape_Leng': 'no label', });
lyr_JaringanTransportasiKabupatenPurworejoLN_4.set('fieldLabels', {'NAMA_JLN': 'no label', 'STATUS': 'no label', 'FUNGSI': 'no label', 'SUMBER_1': 'no label', 'panjang': 'no label', });
lyr_TitikAwalKecamatanGrabag_5.set('fieldLabels', {'OBJECTID': 'no label', 'ORDE_1': 'no label', 'Keterangan': 'no label', });
lyr_TitikAwalKecamatanNgombol_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAMA_OBJEK': 'no label', 'Keterangan': 'no label', });
lyr_TitikAwalKecamatanPurwodadi_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMA_OBJEK': 'no label', 'Keterangan': 'no label', });
lyr_TitikEvakuasiSementaraKecamatanGrabag_8.set('fieldLabels', {'OBJECTID': 'no label', 'remark': 'no label', 'Keterangan': 'no label', });
lyr_TitikEvakuasiSementaraKecamatanNgombol_9.set('fieldLabels', {'OBJECTID': 'no label', 'remark': 'no label', 'Keterangan': 'no label', });
lyr_TitikEvakuasiSementaraKecamatanPurwodadi_10.set('fieldLabels', {'OBJECTID': 'no label', 'FolderPath': 'no label', 'Keterangan': 'no label', });
lyr_JalurEvakuasiKecamatanGrabag_11.set('fieldLabels', {'Id': 'no label', });
lyr_JalurEvakuasiKecamatanNgombol_12.set('fieldLabels', {'Id': 'no label', });
lyr_JalurEvakuasiKecamatanPurwodadi_13.set('fieldLabels', {'Id': 'no label', });
lyr_JalurEvakuasiKecamatanPurwodadi_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});