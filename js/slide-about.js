"use strict";

// Slider certificates

let slidesCertificate = document.querySelectorAll(".slide-c");
let btnCertificateLeft = document.querySelector(".slider-certificate__btn-left");
let btnCertificateRight = document.querySelector(".slider-certificate__btn-right");

let maxSlideCertificate = slidesCertificate.length;
let currentSlideCertificate = 0;

function goToSlideCertificate(slide)
{
	slidesCertificate.forEach(function(e, i)
	{
		e.style.transform = `translateX(${150 * (i - slide)}%)`;
	})
}

goToSlideCertificate(0);

function goSlideCertificateLeft()
{
	if(currentSlideCertificate == 0)
	{
		currentSlideCertificate = maxSlideCertificate - 1;
	}
	else
	{
		currentSlideCertificate--;
	}

	goToSlideCertificate(currentSlideCertificate);
}

function goSlideCertificateRight()
{
	if(currentSlideCertificate == maxSlideCertificate - 1)
	{
		currentSlideCertificate = 0;
	}
	else
	{
		currentSlideCertificate++;
	}

	goToSlideCertificate(currentSlideCertificate);
}

btnCertificateLeft.addEventListener("click", goSlideCertificateLeft);
btnCertificateRight.addEventListener("click", goSlideCertificateRight);