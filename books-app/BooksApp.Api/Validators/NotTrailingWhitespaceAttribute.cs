using System.ComponentModel.DataAnnotations;

namespace BooksApp.Api.Validators;

public class NotTrailingWhitespaceAttribute: ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if (value is string stringValue && stringValue.EndsWith(' '))
        {
            return new ValidationResult($"The field {validationContext.DisplayName} cannot end with a space.");
        }

        return ValidationResult.Success;
    }
}
