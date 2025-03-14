var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_hermes_NPL_new_wgs_2_1 = new ol.format.GeoJSON();
var features_hermes_NPL_new_wgs_2_1 = format_hermes_NPL_new_wgs_2_1.readFeatures(json_hermes_NPL_new_wgs_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hermes_NPL_new_wgs_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hermes_NPL_new_wgs_2_1.addFeatures(features_hermes_NPL_new_wgs_2_1);
var lyr_hermes_NPL_new_wgs_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hermes_NPL_new_wgs_2_1, 
                style: style_hermes_NPL_new_wgs_2_1,
                popuplayertitle: 'hermes_NPL_new_wgs_2',
                interactive: true,
                title: '<img src="styles/legend/hermes_NPL_new_wgs_2_1.png" /> hermes_NPL_new_wgs_2'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_hermes_NPL_new_wgs_2_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_hermes_NPL_new_wgs_2_1];
lyr_hermes_NPL_new_wgs_2_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINCE': 'PROVINCE', 'PR_NAME': 'PR_NAME', 'DISTRICT': 'DISTRICT', });
lyr_hermes_NPL_new_wgs_2_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINCE': 'TextEdit', 'PR_NAME': 'TextEdit', 'DISTRICT': 'TextEdit', });
lyr_hermes_NPL_new_wgs_2_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'PROVINCE': 'inline label - always visible', 'PR_NAME': 'inline label - always visible', 'DISTRICT': 'header label - visible with data', });
lyr_hermes_NPL_new_wgs_2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});