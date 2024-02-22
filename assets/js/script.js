$(document).ready(function() {
  // Left Nav Bar
  function setCurrentMenuPage() {
    var url = window.location.href;
    // console.log(url);
    var anchors = $('#leftNav > ul > li a');
    anchors.removeClass('text-ci-primary');
    var funB = anchors.filter(function () {
        return this.href == url;
    })
    funB.addClass('text-ci-primary').parent('.nav-item').parent('.nav').parent('.downb').removeClass('hidden').parent('.nav-item').children('a').addClass('text-ci-primary');
    funB.parent('li').find('.downb').removeClass('hidden');
  }
  $(function () {
    setCurrentMenuPage();
    $('#leftNav > ul > li a').on('click', function (e) {
      if ($(this).attr('href').indexOf("#") >= 0) {
        setTimeout(function () {
          setCurrentMenuPage();
        }, 100);
      }
    });
  });

  
  // $('#leftNav > ul > li > a').on('click', function(){
  //   $('#leftNav > ul > li a').removeClass('text-ci-primary');
  //   $(this).addClass('text-ci-primary');
  // });

  $(function() { // Dropdown toggle
      $('.drop > a').click(function() { $(this).next('.down').slideToggle();
    });
    $(document).click(function(e) { 
      var target = e.target; 
      if (!$(target).is('.drop > a') && !$(target).parents().is('.drop > a')) 
      //{ $('.down').hide(); }
        { $('.down').slideUp(); }
      });
  });

  
  // $('#leftNav .dropb').on('click', function(){
    // $(this).find('.down').animate({
    //   height: 'toggle'
    // });
    // $(this).find('.downb').toggleClass('hidden');
    // $(this).find('.arrow').toggleClass('rotate-180');
  // });
  // $('#leftNav .downb .nav-item a.text-ci-primary').parent('li').parent('ul').parent(".downb").removeClass('hidden');
  // $('#leftNav li.nav-item.dropb a.text-ci-primary').parent('li').find(".downb").removeClass('hidden');
  // $('#leftNav .downb .nav-item a.text-ci-primary').parent('li').parent('ul').parent(".downb").parent('.dropb')
});

// $('#leftNav .downb .nav-item a.text-ci-primary').parent(".downb").children("ul").slideToggle("100");

function sidenavMain() {
  const mediaQueryMax = window.matchMedia('(max-width: 1023px)')
  const mediaQueryMin = window.matchMedia('(min-width: 1024px)')
  if (mediaQueryMax.matches) {
    $('#sidenav-main').addClass('active');
    $('.sidenav-toggler').on('click', function(){
      $('#sidenav-main').toggleClass('navBox bg-white');
      $('#contentBox').toggleClass('content-left');
    })
  }
  if (mediaQueryMin.matches) {
    $('#sidenav-main').removeClass('navBox bg-white');
    $('.sidenav-toggler').on('click', function(){
      $('#sidenav-main').toggleClass('active');
    })
  }
}

$(document).ready(sidenavMain);
$(window).resize(sidenavMain);


// DataTabel

// $(document).ready(function() {
//   var dataTabelLang = {
//     paginate: {
//       previous: "<span class='flex items-center'><svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' clip-rule='evenodd' d='M4.47037 8.19636C6.52777 8.19636 8.19562 6.5285 8.19562 4.4711C8.19562 2.4137 6.52777 0.745851 4.47037 0.745851C2.41297 0.745851 0.745119 2.4137 0.745119 4.4711C0.745119 6.5285 2.41297 8.19636 4.47037 8.19636ZM8.94067 4.4711C8.94067 6.93998 6.93925 8.94141 4.47037 8.94141C2.00149 8.94141 6.8752e-05 6.93998 6.886e-05 4.4711C6.89679e-05 2.00222 2.00149 0.000800783 4.47037 0.000800891C6.93925 0.000800999 8.94067 2.00222 8.94067 4.4711ZM4.67535 6.31501C4.82083 6.46049 5.0567 6.46049 5.20218 6.31501C5.34766 6.16953 5.34766 5.93366 5.20218 5.78818L3.88511 4.4711L5.20218 3.15403C5.34766 3.00855 5.34766 2.77268 5.20218 2.6272C5.0567 2.48172 4.82083 2.48172 4.67535 2.6272L3.09486 4.20769C2.94938 4.35317 2.94938 4.58904 3.09486 4.73452L4.67535 6.31501Z' class='fill-current'/> </svg><span class='block pl-2'> Previous</span></span>",
//       next: "<span class='flex items-center'><span class='block pr-2'> Next</span> <svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' clip-rule='evenodd' d='M4.47018 8.19636C2.41278 8.19636 0.744928 6.5285 0.744928 4.4711C0.744928 2.4137 2.41278 0.745851 4.47018 0.745851C6.52758 0.745851 8.19543 2.4137 8.19543 4.4711C8.19543 6.5285 6.52758 8.19636 4.47018 8.19636ZM-0.000122266 4.4711C-0.000122158 6.93998 2.0013 8.94141 4.47018 8.94141C6.93906 8.94141 8.94048 6.93998 8.94048 4.4711C8.94048 2.00222 6.93906 0.000800783 4.47018 0.000800891C2.0013 0.000800999 -0.000122374 2.00222 -0.000122266 4.4711ZM4.2652 6.31501C4.11972 6.46049 3.88385 6.46049 3.73837 6.31501C3.59289 6.16953 3.59289 5.93366 3.73837 5.78818L5.05544 4.4711L3.73837 3.15403C3.59289 3.00855 3.59289 2.77268 3.73837 2.6272C3.88385 2.48172 4.11972 2.48172 4.2652 2.6272L5.84569 4.20769C5.99117 4.35317 5.99117 4.58904 5.84569 4.73452L4.2652 6.31501Z' class='fill-current'/> </svg></span>"
//     },
//     // lengthMenu: "Show _MENU_ entries",
//     // zeroRecords: '0',
//     // info: "<span><p class='text-ci-primary d-inline-block mb-0'>Showing _START_ </p>to _END_ of _TOTAL_ entries</span>",
//     // // infoEmpty: "",
//     // "infoFiltered": "",
//     // search: "Search:"
//     "decimal":        "",
//     "emptyTable":     "<span>No data available in table</span>",
//     "info":           "<span><p class='text-ci-primary d-inline-block mb-0'>Showing _START_ </p>to _END_ of _TOTAL_ entries</span>",
//     "infoEmpty":      "<span><p class='text-ci-primary d-inline-block mb-0'>Showing 0 </p>to _END_ of _MAX_ entries</span>",
//     "infoFiltered":   "<span>(filtered from _MAX_ total entries)</span>",
//     "infoPostFix":    "",
//     "thousands":      ",",
//     "lengthMenu":     "Show _MENU_ entries",
//     "loadingRecords": "Loading...",
//     "processing":     "Processing...",
//     "search":         "Search:",
//     "zeroRecords":    "No matching records found",
//   }
  
//   var Dom = '<"tableTop"lf><"overflow-auto block w-full"rt><"tableBottom"ip>'


//   var table = $('table.dataTable').DataTable({
//     language: dataTabelLang,
//     "dom": Dom,
//     // rowReorder: {
//     //   selector: 'td:nth-child(2)'
//     // },
//     responsive: true
//   });

// });


// Tabs





// Sweet Alert2

$('.deleteBtn').click(function(){  
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn green mx-1',
      cancelButton: 'btn red mx-1'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
});


// Select2
$("select.select2").select2({
  width: 'resolve' // need to override the changed default
});

$("select.tags").select2({
  multiple: true,
  tags: true,
  width: 'resolve' // need to override the changed default
});

function clearSelectedOptions() {
  $(this).parents('form').find('select').val(null).trigger('change');
}
$(document).ready(function() {
  $("[type='reset']").on("click", clearSelectedOptions);
});


// PopUp
$('.popup').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#backDrop, .popclose').click(function(){
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
});


// DatePicker
$('[data-toggle="datepicker"]').datepicker();

// 
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          $('#EmployeeProfile').attr('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
  }
};

// Password
$(document).ready(function(){
  $("[data-pass='showPassword'").click(function () {
    if ($(this).hasClass("fi-rr-eye-crossed")) {
      $(this).removeClass("fi-rr-eye-crossed");  
      $(this).addClass("fi-rr-eye");  
      $(this).parents('.passwordInput').children('input').attr("type", "text");
    } else {
      $(this).removeClass("fi-rr-eye");  
      $(this).addClass("fi-rr-eye-crossed");  
      $(this).parents('.passwordInput').children('input').attr("type", "password");
    }
  });
});


// ChackBox
$('.boxid').click(function() {
  if ($(this).is(':checked')) {
    // $(this).siblings('*').html('Enabled');
    $(this).siblings('*').html('On');
  } else {
    // $(this).siblings('*').html('Disabled');
    $(this).siblings('*').html('Off');
  }
});



// Auto Nav
// function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,50)};return c};

// $('#more').hide();
// on_resize( function() {
// 	var navSpace = $('#links').outerWidth();
//   var linksWidth = 0;
//   $('#links > a').each(function() {
//     linksWidth += $(this).outerWidth();
//   });
// 	if( linksWidth > navSpace ) {
//     while( linksWidth > navSpace ) {
//       var lastLink = $('#links > a:last');
//       var lastLinkWidth = lastLink.outerWidth();
//       $(lastLink).data( 'foo', lastLinkWidth );
//       $('#overflow').prepend(lastLink);
// 		  linksWidth = linksWidth - lastLinkWidth;
//     }
//     $('#more').show();
//     $('#more-label').text( $('#overflow > a').length + ' More.' );
//   } else {
//     while( linksWidth <= navSpace ) {
//       var firstOverflowLink = $('#overflow > a:first');
//       var firstOverflowLinkWidth = firstOverflowLink.data('foo');
//       if( navSpace - linksWidth > firstOverflowLinkWidth ) {
//         $('#links').append(firstOverflowLink);
//       }
//       linksWidth = linksWidth + firstOverflowLinkWidth;
//     }
//     $('#more-label').text( $('#overflow > a').length + ' More.' );
//     if( $('#overflow > a').length == 0 ){
//       $('#more').hide();
//     }
//   }
// });


// Drag And Drop

// Form Validation

// 
$('.textEditor').summernote({
  // placeholder: 'Hello stand alone ui',
  tabsize: 2,
  height: 100,
  spellCheck: true,
  tooltip: false,
  toolbar: [
    ['style', ['style']],
    ['font', ['bold', 'italic', 'underline', 'clear']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['table', ['table']],
    ['insert', ['link', 'picture', 'video']],
    ['view', ['fullscreen', 'codeview', 'help']]
  ]
});


// var myDate = new Date();
// var hrs = myDate.getHours();

// var greet;

// if (hrs < 12)
//     greet = 'Good Morning';
// else if (hrs >= 12 && hrs <= 17)
//     greet = 'Good Afternoon';
// else if (hrs >= 17 && hrs <= 24)
//     greet = 'Good Evening';

// document.getElementById('lblGreetings').innerHTML = greet;