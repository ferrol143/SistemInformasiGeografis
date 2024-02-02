var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_FerrolAzkiMashudi_J0403221018_2 = new ol.format.GeoJSON();
var features_FerrolAzkiMashudi_J0403221018_2 = format_FerrolAzkiMashudi_J0403221018_2.readFeatures(json_FerrolAzkiMashudi_J0403221018_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FerrolAzkiMashudi_J0403221018_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FerrolAzkiMashudi_J0403221018_2.addFeatures(features_FerrolAzkiMashudi_J0403221018_2);
var lyr_FerrolAzkiMashudi_J0403221018_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FerrolAzkiMashudi_J0403221018_2, 
                style: style_FerrolAzkiMashudi_J0403221018_2,
                interactive: true,
                title: '<img src="styles/legend/FerrolAzkiMashudi_J0403221018_2.png" /> Ferrol Azki Mashudi_J0403221018'
            });
var format_DataKostMahasiswaTPLeditable_3 = new ol.format.GeoJSON();
var features_DataKostMahasiswaTPLeditable_3 = format_DataKostMahasiswaTPLeditable_3.readFeatures(json_DataKostMahasiswaTPLeditable_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataKostMahasiswaTPLeditable_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataKostMahasiswaTPLeditable_3.addFeatures(features_DataKostMahasiswaTPLeditable_3);
var lyr_DataKostMahasiswaTPLeditable_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DataKostMahasiswaTPLeditable_3, 
                style: style_DataKostMahasiswaTPLeditable_3,
                interactive: true,
                title: '<img src="styles/legend/DataKostMahasiswaTPLeditable_3.png" /> Data Kost Mahasiswa TPL (editable)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_FerrolAzkiMashudi_J0403221018_2.setVisible(true);lyr_DataKostMahasiswaTPLeditable_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_FerrolAzkiMashudi_J0403221018_2,lyr_DataKostMahasiswaTPLeditable_3];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_FerrolAzkiMashudi_J0403221018_2.set('fieldAliases', {'id': 'id', 'nama kos': 'nama kos', 'sewa': 'sewa', });
lyr_DataKostMahasiswaTPLeditable_3.set('fieldAliases', {'Timestamp': 'Timestamp', 'NIM': 'NIM', 'Nama_Kost': 'Nama_Kost', 'Alamat': 'Alamat', 'Daya_Tampung': 'Daya_Tampung', 'Peruntukan': 'Peruntukan', 'Lattitude_y': 'Lattitude_y', 'Longitude_x': 'Longitude_x', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_FerrolAzkiMashudi_J0403221018_2.set('fieldImages', {'id': 'TextEdit', 'nama kos': 'TextEdit', 'sewa': 'TextEdit', });
lyr_DataKostMahasiswaTPLeditable_3.set('fieldImages', {'Timestamp': 'TextEdit', 'NIM': 'TextEdit', 'Nama_Kost': 'TextEdit', 'Alamat': 'TextEdit', 'Daya_Tampung': 'Range', 'Peruntukan': 'TextEdit', 'Lattitude_y': 'TextEdit', 'Longitude_x': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_FerrolAzkiMashudi_J0403221018_2.set('fieldLabels', {'id': 'no label', 'nama kos': 'no label', 'sewa': 'no label', });
lyr_DataKostMahasiswaTPLeditable_3.set('fieldLabels', {'Timestamp': 'no label', 'NIM': 'no label', 'Nama_Kost': 'no label', 'Alamat': 'no label', 'Daya_Tampung': 'no label', 'Peruntukan': 'no label', 'Lattitude_y': 'no label', 'Longitude_x': 'no label', });
lyr_DataKostMahasiswaTPLeditable_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});