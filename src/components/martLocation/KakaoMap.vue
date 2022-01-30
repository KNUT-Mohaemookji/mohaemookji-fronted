<template>
  <div id="map"/>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            logoImg: "https://user-images.githubusercontent.com/76980526/148074503-94784be9-47a4-41cc-9fa5-bf88c79b2b18.jpeg",
            martLocation: [],
        }
    },
    computed: {
        ...mapState('town', ['martData','townList', 'townLocation'])
    },
    mounted(){
        // kakao에 url 중 동네 정보를 인자에 담아주기.
        this.kakaoMap();
    },
    methods: {
        // 36.96994247559955, 127.87126855364261
        kakaoMap(){
            // martLocation에 마트 데이터 넣어주기
            this.martLocation = this.martData.towns[this.townLocation]

            var mapContainer = document.getElementById('map');
            var mapOptions = {
                center: new kakao.maps.LatLng(36.994995235199085, 127.93190332435753),
                level: 3
            };
            // 지도생성
            var map = new kakao.maps.Map(mapContainer, mapOptions);  
            // 마커가 표시될 위치
            // var markerPosition = new kakao.maps.LatLng(36.963388228024755, 127.87039923648587);
            let martTitle = [];
            let location1 = [];
            let location2 = [];
            // 여기 아래 코드가 어떻게 연수동이라는 데이터에 접근을 하는지.. 의문 쨋든 동네 마트 별 마커 위치들 불러오기 성공!
            for(var i = 0; i < 4; i++){
                for(var j in this.martLocation){
                    console.log(this.martLocation[j][i].location1);
                    martTitle.push(this.martLocation[j][i].name);
                    location1.push(this.martLocation[j][i].location1);
                    location2.push(this.martLocation[j][i].location2);
                }
            }
            console.log('location1은' + location1);
            console.log('location2은' + location2);
            // 마커 이미지 생성
            var imageSrc = this.logoImg,
            imageSize = new kakao.maps.Size(64, 69),
            imageOption = {offset: new kakao.maps.Point(27, 69)};
            // 마커를 표시할 위치위 title 객체 배열
            for(var i = 0; i < location1.length; i++){
                let positions = 
                {
                    title: martTitle[i],
                    latlng: new kakao.maps.LatLng(location1[i], location2[i])
                }
                console.log('aaaaa: ' + positions.title);
                console.log('bbbbb: ' + positions.latlng);

                var imageSize = new kakao.maps.Size(50, 50); 

                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions.latlng, // 마커를 표시할 위치
                    title : positions.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image : markerImage // 마커 이미지 
                });
            }
        },
    }
}
</script>

<style>

</style>