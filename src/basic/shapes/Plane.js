import THREE from "../../../js/three.js";

const geometry = new THREE.PlaneGeometry( 5, 5 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );

plane.rotation.x +=  Math.PI * .5

export default plane