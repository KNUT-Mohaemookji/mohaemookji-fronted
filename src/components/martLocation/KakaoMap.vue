<template>
  <div id="map" class="map">
      <Loader v-if="loaderState == true" class="loader"/>
      <button class="currentLocation">내 위치</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '../Loader.vue'
export default {
    data(){
        return{
            logoImg: "https://user-images.githubusercontent.com/76980526/148074503-94784be9-47a4-41cc-9fa5-bf88c79b2b18.jpeg",
            martLocation: [],
            martTitle: '',
            currentLatitude: 0,
            currentLongitude: 0,
        }
    },
    components:{
        Loader
    },
    // 자기 위치를 찾기 전까지 지도에 로딩 표시 뜨도록 하기.
    computed: {
        ...mapState('town', ['martData','townList', 'townLocation']),
        ...mapState('main', ['loaderState',])
    },
    mounted(){
        this.currentLocation()
    },
    methods: {
        // 현재 자신의 위치를 알려줌.
        currentLocation(){
            let latitude = 0 
            let longitude = 0;
            function watchMap(){
                return new Promise((resolve, reject) => {
                    if(navigator.geolocation){
                        navigator.geolocation.getCurrentPosition(function(position){
                            // alert(position.coords.latitude + ' ' + position.coords.longitude);
                            latitude = position.coords.latitude;
                            longitude = position.coords.longitude;
                            resolve('성공!');
                        }, function(error){
                            console.log(error);
                        }, {
                            enableHighAccuracy: false,
                            maximumAge: 0,
                            timeout: Infinity
                        });
                    }else{
                        alert('GPS를 지원하지 않습니다.');
                        reject('실패..')
                    }
                })
            }
            watchMap()
            // 위치 찾기에 성공했으면
            .then((res) => {
                // 현재위치의 위도, 경도를 해당 변수에 넣어주고,
                this.currentLatitude = latitude;
                this.currentLongitude = longitude;
                this.currentLocation();
                console.log("현재 위치에서 위도는 " + this.currentLatitude + "경도는 : " + this.currentLongitude);
                console.log(res);
                // 로딩 이미지를 없애고, kakaoMap을 실행시켜준다.
                this.$store.commit('main/loaderState');
                this.kakaoMap();
            }).catch((err) => {
                alert(err);
            })
        },
        kakaoMap(){

            let currentLatitude = this.currentLatitude;
            let currentLongitude = this.currentLongitude;

            // martLocation에 마트 데이터 넣어주기
            this.martLocation = this.martData.towns[this.townLocation]

            var mapContainer = document.getElementById('map');
            var mapOptions = {
                // 현재위치 적용 완료.
                center: new kakao.maps.LatLng(36.97119012428337, 127.92837941506313),
                level: 7
            };
            // 지도생성
            var map = new kakao.maps.Map(mapContainer, mapOptions);  
            // 마커가 표시될 위치
            let martTitle = [];
            let location1 = [];
            let location2 = [];
            // 여기 아래 코드가 어떻게 연수동이라는 데이터에 접근을 하는지.. 의문 쨋든 동네 마트 별 마커 위치들 불러오기 성공!
            for(var i = 0; i < 10; i++){
                for(var j in this.martLocation){
                    console.log(this.martLocation[j][i].location1);
                    martTitle.push(this.martLocation[j][i].name);
                    location1.push(this.martLocation[j][i].location1);
                    location2.push(this.martLocation[j][i].location2);
                }
            }
            // 마커 이미지 생성
            var imageSrc = this.logoImg,
            imageSize = new kakao.maps.Size(64, 69),
            imageOption = {offset: new kakao.maps.Point(27, 69)};
            
            
            for(var i = 0; i < location1.length; i++){
                let positions = 
                {
                    // title: `<div>${martTitle[i]}</div>`,
                    title: `<div class = "abc" style = "
                    padding: 3px;
                    color: #333;
                    font-weight: 500;
                    font-size: 18px;
                    ">${martTitle[i]}</div>`,
                    latlng: new kakao.maps.LatLng(location1[i], location2[i])
                }

                var imageSize = new kakao.maps.Size(50, 50); 

                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions.latlng, // 마커를 표시할 위치
                    title : positions.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image : markerImage, // 마커 이미지 
                    clickable: true,
                });
                
                var infoWindow = new kakao.maps.InfoWindow({
                    content: positions.title
                });

                kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infoWindow));
                kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infoWindow));;
            }
            // 인포윈도우를 표시하는 클로저를 만드는 함수.
            function makeOverListener(map, marker, infowindow){
                return function(){
                    infowindow.open(map, marker);
                };
            }
            // 인포윈도우를 닫는 클로저를 만드는 함수.
            function makeOutListener(infowindow){
                return function(){
                    infowindow.close();
                }
            }

            // 내 위치 버튼을 누르면 내위치를 마커로 표시해주고, 지도를 내 위치에 맞게 이동시켜줌.
            let currentBtn = document.querySelector('.currentLocation');
            currentBtn.addEventListener('click', function(){
                var moveLatLon = new kakao.maps.LatLng(currentLatitude, currentLongitude);
                map.panTo(moveLatLon);
                var markerPosition  = new kakao.maps.LatLng(currentLatitude, currentLongitude); 
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);
            })
        },
    }
}
</script>

<style scoped>
.map{
    position: relative;
}
.currentLocation{
    position: absolute;
    width: 80px;
    height: 50px;
    border-radius: 10px;
    border: 3px solid rgb(205, 205, 205);
    color: #333;
    font-weight: 700;
    right: 0;
    bottom: 0;
    z-index: 10;
}
.loader{
    position: absolute;
    z-index: 10;
}
</style>