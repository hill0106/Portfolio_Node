$(document).ready(function() {
    // Add smooth transition effect
    $('<style>')
        .text(`
            .accordion-collapse {
                transition: all 0.3s ease-in-out;
            }
            .accordion-button {
                transition: all 0.3s ease-in-out;
            }
            .accordion-button:not(.collapsed) {
                background-color: #e9ecef;
                color: #477e9d;
            }
            .accordion-button:focus {
                box-shadow: none;
                border-color: rgba(0,0,0,.125);
            }
        `)
        .appendTo('head');

    // Handle accordion button clicks
    $('.accordion-button').on('click', function() {
        const $button = $(this);
        const $target = $($button.data('bs-target'));
        
        if ($target.hasClass('show')) {
            // Close the current section
            $target.removeClass('show');
            $button.addClass('collapsed')
                   .attr('aria-expanded', 'false');
        } else {
            // Close all other sections
            $('.accordion-collapse').removeClass('show');
            $('.accordion-button').addClass('collapsed')
                                .attr('aria-expanded', 'false');
            
            // Open the clicked section
            $target.addClass('show');
            $button.removeClass('collapsed')
                   .attr('aria-expanded', 'true');
        }
    });

    // Add hover effect
    $('.accordion-button').hover(
        function() {
            $(this).css('background-color', '#f8f9fa');
        },
        function() {
            if (!$(this).hasClass('collapsed')) {
                $(this).css('background-color', '#e9ecef');
            } else {
                $(this).css('background-color', '');
            }
        }
    );
}); 