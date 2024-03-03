import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../ef85eb18-f69c-431c-bcfd-dd51d70a604f/src/item"
import Script2 from "../504cd7ac-2873-40d8-9172-13c9c24304b0/src/item"
import Script3 from "../56985185-7512-4359-9d0e-1142dc6b65a6/src/item"
import Script4 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script5 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script6 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script7 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script8 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("3bd7d322-f897-444e-99f1-e4e82fb2c035/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const verticalWhitePad = new Entity('verticalWhitePad')
engine.addEntity(verticalWhitePad)
verticalWhitePad.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(21.235836029052734, 0.6780209541320801, 2.9307143688201904),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7489051818847656, 0.7489051818847656, 0.7489051818847656)
})
verticalWhitePad.addComponentOrReplace(transform4)

const blueButton = new Entity('blueButton')
engine.addEntity(blueButton)
blueButton.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(21.527795791625977, 2.208629608154297, 2.1912074089050293),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.000002384185791, 1.000002384185791)
})
blueButton.addComponentOrReplace(transform5)

const blueButton2 = new Entity('blueButton2')
engine.addEntity(blueButton2)
blueButton2.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(21.437583923339844, 21.01711654663086, 2.1912074089050293),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000040531158447, 1.0000040531158447)
})
blueButton2.addComponentOrReplace(transform6)

const blueButton3 = new Entity('blueButton3')
engine.addEntity(blueButton3)
blueButton3.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(20.846647262573242, 2.208629608154297, 2.1912074089050293),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000026226043701, 1.0000026226043701)
})
blueButton3.addComponentOrReplace(transform7)

const blueButton4 = new Entity('blueButton4')
engine.addEntity(blueButton4)
blueButton4.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(20.8768367767334, 21.01711654663086, 2.1912074089050293),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000042915344238, 1.0000042915344238)
})
blueButton4.addComponentOrReplace(transform8)

const indicatorArrowBlue = new Entity('indicatorArrowBlue')
engine.addEntity(indicatorArrowBlue)
indicatorArrowBlue.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(20.84241485595703, 2.322356939315796, 2.210447072982788),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5591833591461182, 0.5591833591461182, 0.7599244713783264)
})
indicatorArrowBlue.addComponentOrReplace(transform9)

const indicatorArrowBlue2 = new Entity('indicatorArrowBlue2')
engine.addEntity(indicatorArrowBlue2)
indicatorArrowBlue2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(21.527719497680664, 2.7262425422668457, 2.210447311401367),
  rotation: new Quaternion(0, 0, -1, -5.960464477539063e-8),
  scale: new Vector3(0.5591833591461182, 0.5591833591461182, 0.7599244713783264)
})
indicatorArrowBlue2.addComponentOrReplace(transform10)

const indicatorArrowBlue3 = new Entity('indicatorArrowBlue3')
engine.addEntity(indicatorArrowBlue3)
indicatorArrowBlue3.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(21.437223434448242, 21.139780044555664, 2.210447072982788),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5591833591461182, 0.5591833591461182, 0.7599244713783264)
})
indicatorArrowBlue3.addComponentOrReplace(transform11)

const indicatorArrowBlue4 = new Entity('indicatorArrowBlue4')
engine.addEntity(indicatorArrowBlue4)
indicatorArrowBlue4.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(20.87462043762207, 21.521373748779297, 2.2289154529571533),
  rotation: new Quaternion(-1, -5.960464477539063e-8, 2.2351748896198842e-8, -1.1920927533992653e-7),
  scale: new Vector3(0.5591833591461182, 0.5591833591461182, 0.7599244713783264)
})
indicatorArrowBlue4.addComponentOrReplace(transform12)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(16.257904052734375, 20.25899887084961, 8.644201278686523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
videoStream.addComponentOrReplace(transform13)

const nftPictureFrame25 = new Entity('nftPictureFrame25')
engine.addEntity(nftPictureFrame25)
nftPictureFrame25.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(11.056485176086426, 20.45121955871582, 12.042595863342285),
  rotation: new Quaternion(-0.137949600815773, 0.6935200095176697, 0.6935198903083801, 0.13794969022274017),
  scale: new Vector3(1.1410490274429321, 1.1410516500473022, 0.21850548684597015)
})
nftPictureFrame25.addComponentOrReplace(transform14)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(25.79513168334961, 20.459497451782227, 11.413552284240723),
  rotation: new Quaternion(-0.0474492684006691, 0.7055131196975708, 0.7055129408836365, 0.04744936525821686),
  scale: new Vector3(1.58428955078125, 1.3697166442871094, 0.21850723028182983)
})
nftPictureFrame18.addComponentOrReplace(transform15)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(9.290227890014648, 20.426799774169922, 6.783077239990234),
  rotation: new Quaternion(4.649673014504602e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(3.0194575786590576, 3.0194435119628906, 0.5880606770515442)
})
nftPictureFrame21.addComponentOrReplace(transform16)

const videoStream2 = new Entity('videoStream2')
engine.addEntity(videoStream2)
videoStream2.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(20.780593872070312, 23.616376876831055, 7.072032928466797),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.728485107421875, 0.728485107421875, 0.728485107421875)
})
videoStream2.addComponentOrReplace(transform17)

const externalLink6 = new Entity('externalLink6')
engine.addEntity(externalLink6)
externalLink6.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(4.6311540603637695, 23.852609634399414, 10.579967498779297),
  rotation: new Quaternion(5.83302124049917e-15, -1, 1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(0.7339770793914795, 0.7339770793914795, 0.2912816107273102)
})
externalLink6.addComponentOrReplace(transform18)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(4.243311882019043, 23.061321258544922, 13.783044815063477),
  rotation: new Quaternion(6.609534883246287e-15, -1, 1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(2.0766496658325195, 1.8383605480194092, 0.48325204849243164)
})
nftPictureFrame22.addComponentOrReplace(transform19)

const nftPictureFrame27 = new Entity('nftPictureFrame27')
engine.addEntity(nftPictureFrame27)
nftPictureFrame27.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(5.716893672943115, 23.061321258544922, 13.783044815063477),
  rotation: new Quaternion(6.609534883246287e-15, -1, 1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(2.0766496658325195, 1.8383605480194092, 0.48325204849243164)
})
nftPictureFrame27.addComponentOrReplace(transform20)

const nftPictureFrame28 = new Entity('nftPictureFrame28')
engine.addEntity(nftPictureFrame28)
nftPictureFrame28.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(7.100736141204834, 23.061321258544922, 12.949810981750488),
  rotation: new Quaternion(-2.4542694943398627e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(2.0766544342041016, 1.8383605480194092, 0.48325327038764954)
})
nftPictureFrame28.addComponentOrReplace(transform21)

const nftPictureFrame29 = new Entity('nftPictureFrame29')
engine.addEntity(nftPictureFrame29)
nftPictureFrame29.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(7.100736141204834, 23.061321258544922, 11.65913200378418),
  rotation: new Quaternion(-2.4542694943398627e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(2.0766549110412598, 1.8383605480194092, 0.4832533895969391)
})
nftPictureFrame29.addComponentOrReplace(transform22)

const nftPictureFrame30 = new Entity('nftPictureFrame30')
engine.addEntity(nftPictureFrame30)
nftPictureFrame30.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(6.284374713897705, 23.061321258544922, 10.791016578674316),
  rotation: new Quaternion(7.105426934084528e-15, 5.960464477539063e-8, -8.96382272607462e-15, -1),
  scale: new Vector3(2.0766496658325195, 1.8383605480194092, 0.48325204849243164)
})
nftPictureFrame30.addComponentOrReplace(transform23)

const nftPictureFrame31 = new Entity('nftPictureFrame31')
engine.addEntity(nftPictureFrame31)
nftPictureFrame31.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(4.923574447631836, 23.061321258544922, 10.791016578674316),
  rotation: new Quaternion(7.105426934084528e-15, 5.960464477539063e-8, -8.96382272607462e-15, -1),
  scale: new Vector3(2.0766496658325195, 1.8383605480194092, 0.48325204849243164)
})
nftPictureFrame31.addComponentOrReplace(transform24)

const dclARTPenthousePoolSurfac = new Entity('dclARTPenthousePoolSurfac')
engine.addEntity(dclARTPenthousePoolSurfac)
dclARTPenthousePoolSurfac.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(16.17420768737793, 0, 2.8335461616516113),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
dclARTPenthousePoolSurfac.addComponentOrReplace(transform25)
const gltfShape2 = new GLTFShape("480b0187-1832-41f0-b628-c50117874f1c/DCL_ ART Penthouse_Pool Surface_Final Details.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
dclARTPenthousePoolSurfac.addComponentOrReplace(gltfShape2)

const externalLink7 = new Entity('externalLink7')
engine.addEntity(externalLink7)
externalLink7.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(26.734424591064453, 20.02400016784668, 3.98028826713562),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.10689344257116318, 0.10689344257116318, 0.10689344257116318)
})
externalLink7.addComponentOrReplace(transform26)

const externalLink8 = new Entity('externalLink8')
engine.addEntity(externalLink8)
externalLink8.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(22.46240997314453, 20.27206802368164, 11.789177894592285),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.24932964146137238, 0.24932964146137238, 0.24932964146137238)
})
externalLink8.addComponentOrReplace(transform27)

const clickArea8 = new Entity('clickArea8')
engine.addEntity(clickArea8)
clickArea8.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(5.854387283325195, 20.33965492248535, 6.016144275665283),
  rotation: new Quaternion(-0.6237003803253174, 0.12993834912776947, 0.0562996007502079, 0.7687289714813232),
  scale: new Vector3(0.1844257414340973, 0.0390874445438385, 0.2946494519710541)
})
clickArea8.addComponentOrReplace(transform28)

const externalLink9 = new Entity('externalLink9')
engine.addEntity(externalLink9)
externalLink9.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(5.8751678466796875, 19.984304428100586, 6.087220191955566),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.2762784957885742, 0.2762784957885742, 0.2762784957885742)
})
externalLink9.addComponentOrReplace(transform29)

const clickArea9 = new Entity('clickArea9')
engine.addEntity(clickArea9)
clickArea9.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(5.826894283294678, 20.16735076904297, 9.939189910888672),
  rotation: new Quaternion(0.004572233650833368, -0.07774766534566879, -0.0048020449467003345, 0.9969511032104492),
  scale: new Vector3(0.21413849294185638, 0.04469037801027298, 0.2517871558666229)
})
clickArea9.addComponentOrReplace(transform30)

const externalLink10 = new Entity('externalLink10')
engine.addEntity(externalLink10)
externalLink10.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(5.831681251525879, 20.081432342529297, 10.004923820495605),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.13444139063358307, 0.13444139063358307, 0.13444139063358307)
})
externalLink10.addComponentOrReplace(transform31)

const clickArea10 = new Entity('clickArea10')
engine.addEntity(clickArea10)
clickArea10.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(3.4093096256256104, 20.287681579589844, 9.947159767150879),
  rotation: new Quaternion(0.6137899160385132, 0.1463073343038559, -0.08039809763431549, 0.7716166377067566),
  scale: new Vector3(0.28729212284088135, 0.04386773332953453, 0.2589152157306671)
})
clickArea10.addComponentOrReplace(transform32)

const externalLink11 = new Entity('externalLink11')
engine.addEntity(externalLink11)
externalLink11.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(3.331667184829712, 19.99462127685547, 9.901089668273926),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.17382459342479706, 0.17382459342479706, 0.03132406994700432)
})
externalLink11.addComponentOrReplace(transform33)

const clickArea11 = new Entity('clickArea11')
engine.addEntity(clickArea11)
clickArea11.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(10.779314994812012, 20.61284828186035, 8.809598922729492),
  rotation: new Quaternion(0.004572233650833368, -0.07774766534566879, -0.0048020449467003345, 0.9969511032104492),
  scale: new Vector3(0.2295805811882019, 0.04791324958205223, 0.26994436979293823)
})
clickArea11.addComponentOrReplace(transform34)

const externalLink12 = new Entity('externalLink12')
engine.addEntity(externalLink12)
externalLink12.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(10.791825294494629, 20.49983024597168, 8.840420722961426),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.22123144567012787, 0.22123144567012787, 0.22123144567012787)
})
externalLink12.addComponentOrReplace(transform35)

const clickArea12 = new Entity('clickArea12')
engine.addEntity(clickArea12)
clickArea12.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(16.636005401611328, 22.596357345581055, 5.3898162841796875),
  rotation: new Quaternion(0.003400562098249793, 0.14404264092445374, -0.005692224018275738, 0.9895493388175964),
  scale: new Vector3(0.28281497955322266, 0.04814597964286804, 0.4443323016166687)
})
clickArea12.addComponentOrReplace(transform36)

const externalLink13 = new Entity('externalLink13')
engine.addEntity(externalLink13)
externalLink13.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(16.668521881103516, 21.274839401245117, 5.351551532745361),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.08872132748365402, 0.08872132748365402, 0.08872132748365402)
})
externalLink13.addComponentOrReplace(transform37)

const clickArea13 = new Entity('clickArea13')
engine.addEntity(clickArea13)
clickArea13.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(17.03820037841797, 22.597797393798828, 6.189663410186768),
  rotation: new Quaternion(0.00040415505645796657, 0.5827045440673828, -0.00661835353821516, 0.8126569986343384),
  scale: new Vector3(0.28281524777412415, 0.04814598336815834, 0.44433262944221497)
})
clickArea13.addComponentOrReplace(transform38)

const externalLink14 = new Entity('externalLink14')
engine.addEntity(externalLink14)
externalLink14.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(17.180524826049805, 21.274839401245117, 6.324695110321045),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.08872132748365402, 0.08872132748365402, 0.08872132748365402)
})
externalLink14.addComponentOrReplace(transform39)

const clickArea14 = new Entity('clickArea14')
engine.addEntity(clickArea14)
clickArea14.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(15.847886085510254, 22.581871032714844, 6.008711814880371),
  rotation: new Quaternion(0.003444868139922619, 0.13631795346736908, -0.005665518343448639, 0.9906429648399353),
  scale: new Vector3(0.2828151285648346, 0.04814598336815834, 0.4443325996398926)
})
clickArea14.addComponentOrReplace(transform40)

const externalLink15 = new Entity('externalLink15')
engine.addEntity(externalLink15)
externalLink15.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(15.703878402709961, 21.274839401245117, 5.771487712860107),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.08872132748365402, 0.08872132748365402, 0.08872132748365402)
})
externalLink15.addComponentOrReplace(transform41)

const clickArea15 = new Entity('clickArea15')
engine.addEntity(clickArea15)
clickArea15.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(8.897175788879395, 22.84731101989746, 6.745689868927002),
  rotation: new Quaternion(0.003444868139922619, 0.13631795346736908, -0.005665518343448639, 0.9906429648399353),
  scale: new Vector3(0.17335745692253113, 0.07632280141115189, 0.17915412783622742)
})
clickArea15.addComponentOrReplace(transform42)

const externalLink16 = new Entity('externalLink16')
engine.addEntity(externalLink16)
externalLink16.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(8.847955703735352, 22.771728515625, 6.738045692443848),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.056080300360918045, 0.056080300360918045, 0.056080300360918045)
})
externalLink16.addComponentOrReplace(transform43)

const clickArea16 = new Entity('clickArea16')
engine.addEntity(clickArea16)
clickArea16.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(8.73613452911377, 22.665739059448242, 2.7686219215393066),
  rotation: new Quaternion(0.0029778846073895693, 0.21557798981666565, -0.0059243179857730865, 0.9764642119407654),
  scale: new Vector3(0.6080641746520996, 0.6221185326576233, 0.6283671855926514)
})
clickArea16.addComponentOrReplace(transform44)

const externalLink17 = new Entity('externalLink17')
engine.addEntity(externalLink17)
externalLink17.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(8.727712631225586, 22.51377296447754, 2.798591136932373),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.056080300360918045, 0.056080300360918045, 0.056080300360918045)
})
externalLink17.addComponentOrReplace(transform45)

const clickArea17 = new Entity('clickArea17')
engine.addEntity(clickArea17)
clickArea17.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(8.121882438659668, 22.665739059448242, 6.793350696563721),
  rotation: new Quaternion(-0.0007622542907483876, 0.716136634349823, -0.006586737930774689, 0.6979286670684814),
  scale: new Vector3(0.8094920516014099, 0.7290322184562683, 1.0638697147369385)
})
clickArea17.addComponentOrReplace(transform46)

const externalLink18 = new Entity('externalLink18')
engine.addEntity(externalLink18)
externalLink18.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(8.060551643371582, 22.517324447631836, 6.792789459228516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.056080300360918045, 0.056080300360918045, 0.056080300360918045)
})
externalLink18.addComponentOrReplace(transform47)

const dclARTPenthouseFinalDetai = new Entity('dclARTPenthouseFinalDetai')
engine.addEntity(dclARTPenthouseFinalDetai)
dclARTPenthouseFinalDetai.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dclARTPenthouseFinalDetai.addComponentOrReplace(transform48)
const gltfShape3 = new GLTFShape("7a5f6e59-e795-4ddd-a3d9-d47b328efd58/DCL_ ART Penthouse_Final Details.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
dclARTPenthouseFinalDetai.addComponentOrReplace(gltfShape3)

const clickArea18 = new Entity('clickArea18')
engine.addEntity(clickArea18)
clickArea18.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(24.77661895751953, 21.206321716308594, 2.9200220108032227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.3383262157440186, 0.12191612273454666)
})
clickArea18.addComponentOrReplace(transform49)

const externalLink19 = new Entity('externalLink19')
engine.addEntity(externalLink19)
externalLink19.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(24.794893264770508, 21.616662979125977, 2.718623638153076),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.37789252400398254, 0.37789252400398254, 0.37789252400398254)
})
externalLink19.addComponentOrReplace(transform50)

const clickArea19 = new Entity('clickArea19')
engine.addEntity(clickArea19)
clickArea19.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(5.938506603240967, 23.49574851989746, 10.492806434631348),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2265342473983765, 1.3389662504196167, 0.12191612273454666)
})
clickArea19.addComponentOrReplace(transform51)

const externalLink20 = new Entity('externalLink20')
engine.addEntity(externalLink20)
externalLink20.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(5.89432430267334, 23.852609634399414, 10.642776489257812),
  rotation: new Quaternion(5.83302124049917e-15, -1, 1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(0.26347312331199646, 0.26347312331199646, 0.10456031560897827)
})
externalLink20.addComponentOrReplace(transform52)

const clickArea20 = new Entity('clickArea20')
engine.addEntity(clickArea20)
clickArea20.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(26.751476287841797, 20.158706665039062, 3.9489169120788574),
  rotation: new Quaternion(8.667011515512187e-18, -0.11914695799350739, 1.4203424214542792e-8, 0.9928766489028931),
  scale: new Vector3(0.4010789692401886, 0.0957718938589096, 0.5238365530967712)
})
clickArea20.addComponentOrReplace(transform53)

const clickArea6 = new Entity('clickArea6')
engine.addEntity(clickArea6)
clickArea6.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(22.529165267944336, 20.417476654052734, 11.837352752685547),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4989621937274933, 0.15865324437618256, 0.6332188844680786)
})
clickArea6.addComponentOrReplace(transform54)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(1.6310739517211914, 1.431138038635254, 10.664918899536133),
  rotation: new Quaternion(2.1808129541318107e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(8.214221954345703, 8.214201927185059, 1.8090271949768066)
})
nftPictureFrame.addComponentOrReplace(transform55)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(1.6310749053955078, 1.573760986328125, 5.347846984863281),
  rotation: new Quaternion(2.1808129541318107e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(8.120807647705078, 8.120777130126953, 1.7884548902511597)
})
nftPictureFrame2.addComponentOrReplace(transform56)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(5.2566447257995605, 1.526909351348877, 13.71681022644043),
  rotation: new Quaternion(-3.084135052379422e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(7.873542785644531, 7.873542785644531, 1.7339985370635986)
})
nftPictureFrame3.addComponentOrReplace(transform57)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(6.02124547958374, 0.9831173419952393, 2.2893457412719727),
  rotation: new Quaternion(-1.4210854715202004e-14, 0, -2.4190138654927706e-15, -1),
  scale: new Vector3(10.337350845336914, 10.337350845336914, 2.2766056060791016)
})
nftPictureFrame5.addComponentOrReplace(transform58)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(14.949742317199707, 1.5237559080123901, 13.71253776550293),
  rotation: new Quaternion(-3.084135052379422e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(7.599900722503662, 7.599900722503662, 1.6737339496612549)
})
nftPictureFrame7.addComponentOrReplace(transform59)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(21.092884063720703, 1.2427082061767578, 13.723945617675781),
  rotation: new Quaternion(-3.084135052379422e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(8.735635757446289, 8.735635757446289, 1.923858404159546)
})
nftPictureFrame8.addComponentOrReplace(transform60)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(26.975967407226562, 1.5237559080123901, 13.738731384277344),
  rotation: new Quaternion(-3.084135052379422e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(7.599900722503662, 7.599900722503662, 1.6737339496612549)
})
nftPictureFrame12.addComponentOrReplace(transform61)

const plainText3 = new Entity('plainText3')
engine.addEntity(plainText3)
plainText3.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(21.055965423583984, 6.389643669128418, 13.766611099243164),
  rotation: new Quaternion(1.151959726068165e-14, 1, -1.1920927533992653e-7, 5.21540641784668e-8),
  scale: new Vector3(2.887326955795288, 2.887333631515503, 2.887326955795288)
})
plainText3.addComponentOrReplace(transform62)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(1.6217479705810547, 11.171281814575195, 5.169750213623047),
  rotation: new Quaternion(2.1808129541318107e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(7.086264610290527, 7.086212158203125, 1.560624361038208)
})
nftPictureFrame4.addComponentOrReplace(transform63)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(1.6217479705810547, 11.171281814575195, 10.799529075622559),
  rotation: new Quaternion(2.1808129541318107e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(7.086262226104736, 7.086212158203125, 1.560622215270996)
})
nftPictureFrame10.addComponentOrReplace(transform64)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(5.089955806732178, 11.171281814575195, 13.749226570129395),
  rotation: new Quaternion(2.6305986723103953e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(7.086245536804199, 7.086212158203125, 1.5606120824813843)
})
nftPictureFrame6.addComponentOrReplace(transform65)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(5.089955806732178, 11.171281814575195, 2.2482528686523438),
  rotation: new Quaternion(-1.4210854715202004e-14, -2.9802322387695312e-8, -1.1390517909849567e-16, 1),
  scale: new Vector3(7.086245536804199, 7.086212158203125, 1.5606120824813843)
})
nftPictureFrame11.addComponentOrReplace(transform66)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(13.312151908874512, 10.663463592529297, 13.725873947143555),
  rotation: new Quaternion(2.6305986723103953e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(9.503843307495117, 9.503798484802246, 2.0930423736572266)
})
nftPictureFrame9.addComponentOrReplace(transform67)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(19.883066177368164, 11.155461311340332, 13.747163772583008),
  rotation: new Quaternion(2.6305986723103953e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(7.608369827270508, 7.608334064483643, 1.6756001710891724)
})
nftPictureFrame13.addComponentOrReplace(transform68)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(27.227785110473633, 11.155462265014648, 13.747162818908691),
  rotation: new Quaternion(-2.1706591466766e-15, -1, 1.1920926823449918e-7, -2.9802322387695312e-8),
  scale: new Vector3(7.608369827270508, 7.608334064483643, 1.6756001710891724)
})
nftPictureFrame14.addComponentOrReplace(transform69)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(30.37268829345703, 11.155462265014648, 10.417920112609863),
  rotation: new Quaternion(4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(7.608391761779785, 7.608334064483643, 1.6756082773208618)
})
nftPictureFrame15.addComponentOrReplace(transform70)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(30.3726863861084, 11.155460357666016, 5.508856296539307),
  rotation: new Quaternion(4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(7.608393669128418, 7.608334064483643, 1.6756083965301514)
})
nftPictureFrame16.addComponentOrReplace(transform71)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(26.398590087890625, 10.685670852661133, 2.2822139263153076),
  rotation: new Quaternion(3.552713678800501e-15, 1.0094493354632688e-21, 8.467876465127755e-15, -1),
  scale: new Vector3(9.811359405517578, 9.811312675476074, 2.1607673168182373)
})
nftPictureFrame17.addComponentOrReplace(transform72)

const dclARTPenthouseMessingPla = new Entity('dclARTPenthouseMessingPla')
engine.addEntity(dclARTPenthouseMessingPla)
dclARTPenthouseMessingPla.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(30.648635864257812, 1.6131073236465454, 13.185310363769531),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.0000019073486328, 1)
})
dclARTPenthouseMessingPla.addComponentOrReplace(transform73)
const gltfShape4 = new GLTFShape("d3ca5c63-f67e-4268-83ab-78e283cd669d/DCL_ ART Penthouse_Messing Plate.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
dclARTPenthouseMessingPla.addComponentOrReplace(gltfShape4)

const dclARTPenthouseMessingPla2 = new Entity('dclARTPenthouseMessingPla2')
engine.addEntity(dclARTPenthouseMessingPla2)
dclARTPenthouseMessingPla2.setParent(_scene)
dclARTPenthouseMessingPla2.addComponentOrReplace(gltfShape4)
const transform74 = new Transform({
  position: new Vector3(1.3517608642578125, 1.6085131168365479, 2.808168411254883),
  rotation: new Quaternion(-0.7071068286895752, 0.7071068286895752, -4.2146844236867764e-8, -1.2644053981603065e-7),
  scale: new Vector3(1.0000038146972656, 1.0000038146972656, 1.0000030994415283)
})
dclARTPenthouseMessingPla2.addComponentOrReplace(transform74)

const dclARTPenthouseGalleryTit = new Entity('dclARTPenthouseGalleryTit')
engine.addEntity(dclARTPenthouseGalleryTit)
dclARTPenthouseGalleryTit.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(26.265819549560547, 3.075619697570801, 2.2195348739624023),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.9538378119468689, 1.031716227531433, 1.031716227531433)
})
dclARTPenthouseGalleryTit.addComponentOrReplace(transform75)
const gltfShape5 = new GLTFShape("34bf120f-bc7c-4a95-83a5-9bea2a008565/DCL_ ART Penthouse_Gallery Title.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
dclARTPenthouseGalleryTit.addComponentOrReplace(gltfShape5)

const plainText6 = new Entity('plainText6')
engine.addEntity(plainText6)
plainText6.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(1.5873031616210938, 6.574670791625977, 7.7688751220703125),
  rotation: new Quaternion(9.394152732729484e-15, 0.7071067690849304, -8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(3.059587240219116, 3.059593915939331, 3.059587240219116)
})
plainText6.addComponentOrReplace(transform76)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(1.5873031616210938, 15.706908226013184, 7.908690452575684),
  rotation: new Quaternion(9.394152732729484e-15, 0.7071067690849304, -8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(3.0375118255615234, 3.0375185012817383, 3.0375118255615234)
})
plainText.addComponentOrReplace(transform77)

const plainText4 = new Entity('plainText4')
engine.addEntity(plainText4)
plainText4.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(16.921688079833984, 15.960342407226562, 13.7709379196167),
  rotation: new Quaternion(1.2659565541315535e-14, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.983535051345825, 2.983541488647461, 2.983535051345825)
})
plainText4.addComponentOrReplace(transform78)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(30.412765502929688, 16.148548126220703, 7.886138916015625),
  rotation: new Quaternion(-9.041357580967437e-15, -0.7071068286895752, 8.429371689544496e-8, 0.7071067690849304),
  scale: new Vector3(3.187807083129883, 3.187814235687256, 3.187807083129883)
})
plainText2.addComponentOrReplace(transform79)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script1.spawn(verticalWhitePad, {"distance":25,"speed":5,"autoStart":false,"onReachEnd":[{"entityName":"verticalWhitePad","actionId":"goToEnd","values":{}}],"onReachStart":[]}, createChannel(channelId, verticalWhitePad, channelBus))
script2.spawn(blueButton, {"onClick":[{"entityName":"verticalWhitePad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, blueButton, channelBus))
script2.spawn(blueButton2, {"onClick":[{"entityName":"verticalWhitePad","actionId":"goToStart","values":{}}]}, createChannel(channelId, blueButton2, channelBus))
script2.spawn(blueButton3, {"onClick":[{"entityName":"verticalWhitePad","actionId":"goToStart","values":{}}]}, createChannel(channelId, blueButton3, channelBus))
script2.spawn(blueButton4, {"onClick":[{"entityName":"verticalWhitePad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, blueButton4, channelBus))
script3.spawn(indicatorArrowBlue, {"active":true}, createChannel(channelId, indicatorArrowBlue, channelBus))
script3.spawn(indicatorArrowBlue2, {"active":true}, createChannel(channelId, indicatorArrowBlue2, channelBus))
script3.spawn(indicatorArrowBlue3, {"active":true}, createChannel(channelId, indicatorArrowBlue3, channelBus))
script3.spawn(indicatorArrowBlue4, {"active":true}, createChannel(channelId, indicatorArrowBlue4, channelBus))
script4.spawn(videoStream, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"customStation":"https://player.vimeo.com/external/777792769.m3u8?s=a0f0df3270decf2e26edc561d5b949c7fccf6ca0","station":"https://theuniverse.club/live/genesisplaza/index.m3u8"}, createChannel(channelId, videoStream, channelBus))
script5.spawn(nftPictureFrame25, {"id":"110466434685535267528312366585544489607100704110403619358250249112484866687076","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame25, channelBus))
script5.spawn(nftPictureFrame18, {"id":"110466434685535267528312366585544489607100704110403619358250249117982424825857","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script5.spawn(nftPictureFrame21, {"id":"110466434685535267528312366585544489607100704110403619358250249111385355059300","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script4.spawn(videoStream2, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream2","actionId":"toggle","values":{}}],"customStation":"https://player.vimeo.com/external/777813162.m3u8?s=11a70b1c5076078dbd40fa642ddfeb0197fec05c"}, createChannel(channelId, videoStream2, channelBus))
script6.spawn(externalLink6, {"url":"https://dara.network/cryptoqueen/","name":"Access Chatbot"}, createChannel(channelId, externalLink6, channelBus))
script5.spawn(nftPictureFrame22, {"id":"110466434685535267528312366585544489607100704110403619358250249125679006220289","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script5.spawn(nftPictureFrame27, {"id":"110466434685535267528312366585544489607100704110403619358250249128977541103617","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame27, channelBus))
script5.spawn(nftPictureFrame28, {"id":"110466434685535267528312366585544489607100704110403619358250249131176564359169","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame28, channelBus))
script5.spawn(nftPictureFrame29, {"id":"110466434685535267528312366585544489607100704110403619358250249127878029475841","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame29, channelBus))
script5.spawn(nftPictureFrame30, {"id":"110466434685535267528312366585544489607100704110403619358250249130077052731393","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame30, channelBus))
script5.spawn(nftPictureFrame31, {"id":"110466434685535267528312366585544489607100704110403619358250249126778517848065","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame31, channelBus))
script6.spawn(externalLink7, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249114683889942628","name":"Open UI"}, createChannel(channelId, externalLink7, channelBus))
script6.spawn(externalLink8, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249115783401570404"}, createChannel(channelId, externalLink8, channelBus))
script7.spawn(clickArea8, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink9","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea8, channelBus))
script6.spawn(externalLink9, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249121280959709185","name":"Open UI"}, createChannel(channelId, externalLink9, channelBus))
script7.spawn(clickArea9, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink10","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea9, channelBus))
script6.spawn(externalLink10, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249119081936453633","name":"Open UI"}, createChannel(channelId, externalLink10, channelBus))
script7.spawn(clickArea10, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink11","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea10, channelBus))
script6.spawn(externalLink11, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249120181448081409","name":"Open UI"}, createChannel(channelId, externalLink11, channelBus))
script7.spawn(clickArea11, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink12","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea11, channelBus))
script6.spawn(externalLink12, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249116882913198090","name":"Open UI"}, createChannel(channelId, externalLink12, channelBus))
script7.spawn(clickArea12, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink13","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea12, channelBus))
script6.spawn(externalLink13, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249122380471337060","name":"Open UI"}, createChannel(channelId, externalLink13, channelBus))
script7.spawn(clickArea13, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink14","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea13, channelBus))
script6.spawn(externalLink14, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249123479982964836","name":"Open UI"}, createChannel(channelId, externalLink14, channelBus))
script7.spawn(clickArea14, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink15","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea14, channelBus))
script6.spawn(externalLink15, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249124579494592612","name":"Open UI"}, createChannel(channelId, externalLink15, channelBus))
script7.spawn(clickArea15, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink16","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea15, channelBus))
script6.spawn(externalLink16, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249134475099242596","name":"Open UI"}, createChannel(channelId, externalLink16, channelBus))
script7.spawn(clickArea16, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink17","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea16, channelBus))
script6.spawn(externalLink17, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249132276075987044","name":"Open UI"}, createChannel(channelId, externalLink17, channelBus))
script7.spawn(clickArea17, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink18","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea17, channelBus))
script6.spawn(externalLink18, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249133375587614820","name":"Open UI"}, createChannel(channelId, externalLink18, channelBus))
script7.spawn(clickArea18, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink19","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea18, channelBus))
script6.spawn(externalLink19, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249113584378314852","name":"Open UI"}, createChannel(channelId, externalLink19, channelBus))
script7.spawn(clickArea19, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink20","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea19, channelBus))
script6.spawn(externalLink20, {"url":"https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/110466434685535267528312366585544489607100704110403619358250249110285843431524","name":"Open UI"}, createChannel(channelId, externalLink20, channelBus))
script7.spawn(clickArea20, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink7","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea20, channelBus))
script7.spawn(clickArea6, {"enabled":true,"onClickText":"Open UI","button":"POINTER","onClick":[{"entityName":"externalLink8","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea6, channelBus))
script5.spawn(nftPictureFrame, {"id":"7","contract":"0xBdf4f17B7D638d7d3E5dcAdF27E812b07B2B5c9E","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script5.spawn(nftPictureFrame2, {"id":"6","contract":"0xBdf4f17B7D638d7d3E5dcAdF27E812b07B2B5c9E","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script5.spawn(nftPictureFrame3, {"id":"10","contract":"0xBdf4f17B7D638d7d3E5dcAdF27E812b07B2B5c9E","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script5.spawn(nftPictureFrame5, {"id":"1","contract":"0xBdf4f17B7D638d7d3E5dcAdF27E812b07B2B5c9E","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script5.spawn(nftPictureFrame7, {"id":"1","contract":"0x1C7576619032eAf8B8A938C352E535bbA92a366c","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script5.spawn(nftPictureFrame8, {"id":"5","contract":"0x1C7576619032eAf8B8A938C352E535bbA92a366c","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script5.spawn(nftPictureFrame12, {"id":"11","contract":"0x1C7576619032eAf8B8A938C352E535bbA92a366c","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script8.spawn(plainText3, {"text":"Rebellion","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText3, channelBus))
script5.spawn(nftPictureFrame4, {"id":"34399","contract":"0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script5.spawn(nftPictureFrame10, {"id":"33163","contract":"0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script5.spawn(nftPictureFrame6, {"id":"33332","contract":"0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script5.spawn(nftPictureFrame11, {"id":"36315","contract":"0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script5.spawn(nftPictureFrame9, {"id":"5","contract":"0x47542736C9d1086dc87Cc45138B2d57EC79eAFa3","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script5.spawn(nftPictureFrame13, {"id":"6","contract":"0x47542736C9d1086dc87Cc45138B2d57EC79eAFa3","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script5.spawn(nftPictureFrame14, {"id":"5","contract":"0xA4dc93da01458D38f691db5C98e9157891feBE86","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script5.spawn(nftPictureFrame15, {"id":"3","contract":"0xA4dc93da01458D38f691db5C98e9157891feBE86","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script5.spawn(nftPictureFrame16, {"id":"10","contract":"0xA4dc93da01458D38f691db5C98e9157891feBE86","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script5.spawn(nftPictureFrame17, {"id":"8","contract":"0xA4dc93da01458D38f691db5C98e9157891feBE86","style":"Minimal_White","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame17, channelBus))
script8.spawn(plainText6, {"text":"Paradox","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText6, channelBus))
script8.spawn(plainText, {"text":"Genesis","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script8.spawn(plainText4, {"text":"Absurdism","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText4, channelBus))
script8.spawn(plainText2, {"text":"Fragmentation","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText2, channelBus))