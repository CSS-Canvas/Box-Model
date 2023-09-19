import { BoxModel, BoxModelOverlay } from 'src/index.js';

// Box model.
window.model = new BoxModel(document.getElementById('display'));
window.overlay = new BoxModelOverlay(document.getElementById('exampleElement'));
window.overlay.enabled = false;

// Page controls.
const updateFromElement = document.getElementById('updateFromElement');
const contentWidth = document.getElementById('contentWidth');
const contentWidthOutput = document.getElementById('contentWidthOutput');
const contentHeight = document.getElementById('contentHeight');
const contentHeightOutput = document.getElementById('contentHeightOutput');
const paddingTop = document.getElementById('paddingTop');
const paddingTopOutput = document.getElementById('paddingTopOutput');
const paddingRight = document.getElementById('paddingRight');
const paddingRightOutput = document.getElementById('paddingRightOutput');
const paddingBottom = document.getElementById('paddingBottom');
const paddingBottomOutput = document.getElementById('paddingBottomOutput');
const paddingLeft = document.getElementById('paddingLeft');
const paddingLeftOutput = document.getElementById('paddingLeftOutput');
const borderTop = document.getElementById('borderTop');
const borderTopOutput = document.getElementById('borderTopOutput');
const borderRight = document.getElementById('borderRight');
const borderRightOutput = document.getElementById('borderRightOutput');
const borderBottom = document.getElementById('borderBottom');
const borderBottomOutput = document.getElementById('borderBottomOutput');
const borderLeft = document.getElementById('borderLeft');
const borderLeftOutput = document.getElementById('borderLeftOutput');
const marginTop = document.getElementById('marginTop');
const marginTopOutput = document.getElementById('marginTopOutput');
const marginRight = document.getElementById('marginRight');
const marginRightOutput = document.getElementById('marginRightOutput');
const marginBottom = document.getElementById('marginBottom');
const marginBottomOutput = document.getElementById('marginBottomOutput');
const marginLeft = document.getElementById('marginLeft');
const marginLeftOutput = document.getElementById('marginLeftOutput');
const positionTop = document.getElementById('positionTop');
const positionTopOutput = document.getElementById('positionTopOutput');
const positionRight = document.getElementById('positionRight');
const positionRightOutput = document.getElementById('positionRightOutput');
const positionBottom = document.getElementById('positionBottom');
const positionBottomOutput = document.getElementById('positionBottomOutput');
const positionLeft = document.getElementById('positionLeft');
const positionLeftOutput = document.getElementById('positionLeftOutput');

window.updateContentBox = () => {
	contentWidthOutput.innerText = `${contentWidth.value}px`;
	contentHeightOutput.innerText = `${contentHeight.value}px`;
	if (!Boolean(updateFromElement.checked)) {
		model.content = [contentWidth.value, contentHeight.value];
	}
};

window.updatePaddingBox = () => {
	paddingTopOutput.innerText = `${paddingTop.value}px`;
	paddingRightOutput.innerText = `${paddingRight.value}px`;
	paddingBottomOutput.innerText = `${paddingBottom.value}px`;
	paddingLeftOutput.innerText = `${paddingLeft.value}px`;
	if (!Boolean(updateFromElement.checked)) {
		model.padding = [paddingTop.value, paddingRight.value, paddingBottom.value, paddingLeft.value];
	}
};

window.updateBorderBox = () => {
	borderTopOutput.innerText = `${borderTop.value}px`;
	borderRightOutput.innerText = `${borderRight.value}px`;
	borderBottomOutput.innerText = `${borderBottom.value}px`;
	borderLeftOutput.innerText = `${borderLeft.value}px`;
	if (!Boolean(updateFromElement.checked)) {
		model.border = [borderTop.value, borderRight.value, borderBottom.value, borderLeft.value];
	}
};

window.updateMarginBox = () => {
	marginTopOutput.innerText = `${marginTop.value}px`;
	marginRightOutput.innerText = `${marginRight.value}px`;
	marginBottomOutput.innerText = `${marginBottom.value}px`;
	marginLeftOutput.innerText = `${marginLeft.value}px`;
	if (!Boolean(updateFromElement.checked)) {
		model.margin = [marginTop.value, marginRight.value, marginBottom.value, marginLeft.value];
	}
};

window.updatePositionBox = () => {
	positionTopOutput.innerText = `${positionTop.value}px`;
	positionRightOutput.innerText = `${positionRight.value}px`;
	positionBottomOutput.innerText = `${positionBottom.value}px`;
	positionLeftOutput.innerText = `${positionLeft.value}px`;
	if (!Boolean(updateFromElement.checked)) {
		model.position = [positionTop.value, positionRight.value, positionBottom.value, positionLeft.value];
	}
};

window.updateAll = () => {
	updateContentBox();
	updatePaddingBox();
	updateBorderBox();
	updateMarginBox();
	updatePositionBox();
};

window.updateFromExampleElement = () => {
	if (Boolean(updateFromElement.checked)) {
		model.updateFromElement(exampleElement);
	} else {
		updateAll();
	}
};

updateAll();
