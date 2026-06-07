var wms_layers = [];


        var lyr_EsriStreet_0 = new ol.layer.Tile({
            'title': 'Esri Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Lithology_9_1 = new ol.format.GeoJSON();
var features_Lithology_9_1 = format_Lithology_9_1.readFeatures(json_Lithology_9_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lithology_9_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lithology_9_1.addFeatures(features_Lithology_9_1);
var lyr_Lithology_9_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lithology_9_1, 
                style: style_Lithology_9_1,
                popuplayertitle: 'Lithology_9',
                interactive: true,
                title: '<img src="styles/legend/Lithology_9_1.png" /> Lithology_9'
            });
var format_Lithology_9_2 = new ol.format.GeoJSON();
var features_Lithology_9_2 = format_Lithology_9_2.readFeatures(json_Lithology_9_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lithology_9_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lithology_9_2.addFeatures(features_Lithology_9_2);
var lyr_Lithology_9_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lithology_9_2, 
                style: style_Lithology_9_2,
                popuplayertitle: 'Lithology_9',
                interactive: true,
                title: '<img src="styles/legend/Lithology_9_2.png" /> Lithology_9'
            });

lyr_EsriStreet_0.setVisible(true);lyr_Lithology_9_1.setVisible(true);lyr_Lithology_9_2.setVisible(true);
var layersList = [lyr_EsriStreet_0,lyr_Lithology_9_1,lyr_Lithology_9_2];
lyr_Lithology_9_1.set('fieldAliases', {'Id': 'Id', 'NAME': 'NAME', 'Length': 'Length', 'Area': 'Area', });
lyr_Lithology_9_2.set('fieldAliases', {'Id': 'Id', 'NAME': 'NAME', 'Length': 'Length', 'Area': 'Area', });
lyr_Lithology_9_1.set('fieldImages', {'Id': '', 'NAME': '', 'Length': '', 'Area': '', });
lyr_Lithology_9_2.set('fieldImages', {'Id': '', 'NAME': '', 'Length': '', 'Area': '', });
lyr_Lithology_9_1.set('fieldLabels', {'Id': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Length': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Lithology_9_2.set('fieldLabels', {'Id': 'no label', 'NAME': 'no label', 'Length': 'no label', 'Area': 'no label', });
lyr_Lithology_9_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});