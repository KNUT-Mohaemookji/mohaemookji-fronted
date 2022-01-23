<template>
  <div id="map"/>
</template>

<script>
export default {
    data(){
        return{
            logoImg: "https://user-images.githubusercontent.com/76980526/148074503-94784be9-47a4-41cc-9fa5-bf88c79b2b18.jpeg",
        }
    },
    mounted(){
        this.kakaoMap();
    },
    methods: {
        // 36.96994247559955, 127.87126855364261
        kakaoMap(){
            var mapContainer = document.getElementById('map');
            var mapOptions = {
                center: new kakao.maps.LatLng(36.963388228024755, 127.87039923648587),
                level: 3
            };
            // 지도생성
            var map = new kakao.maps.Map(mapContainer, mapOptions);  
            // 마커가 표시될 위치
            // var markerPosition = new kakao.maps.LatLng(36.963388228024755, 127.87039923648587);

            // 마커 이미지 생성
            var imageSrc = this.logoImg,
            imageSize = new kakao.maps.Size(64, 69),
            imageOption = {offset: new kakao.maps.Point(27, 69)};

            // imageSrc.style.borderRadius = '50%';

            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                markerPosition = new kakao.maps.LatLng(36.963388228024755, 127.87039923648587); // 마커가 표시될 위치입니다

            var marker = new kakao.maps.Marker({
                position: markerPosition,
                image: markerImage
            });
            marker.setMap(map);
        },
    }
}
</script>

<style>

</style>