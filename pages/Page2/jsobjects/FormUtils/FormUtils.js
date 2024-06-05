export default {
	businessLoanTermOptions: [2,4,10],
	homeLoanTermOptions: [5,10,15],
	personalLoanTermOptions: [2,3,4,5],
	
	getLoanTerms: () => {
		let termLoanOptions = [];
		switch (sel_creditProduct.selectedOptionValue) {
			case "Business Loan":
				termLoanOptions = FormUtils.businessLoanTermOptions
				break;
			case "Home Loan":
				termLoanOptions = FormUtils.homeLoanTermOptions;
				break;
			case "Personal Loan":
				termLoanOptions = FormUtils.personalLoanTermOptions
				break;
		}
		return termLoanOptions.map((years) => {
			return {
				label: years + " Years",
				value: years
			}
		});
	},
	
	validatedLoanAmount: () => {
	  let loanAmount = parseFloat(cur_amountRequested.text);
    switch (sel_creditProduct.selectedOptionValue) {
			case "Business Loan":
				return loanAmount < 500000;
			case "Home Loan":
				return loanAmount < 1000000;
			case "Personal Loan":
				return loanAmount < 100000;
		}
  },
		
	getLoanValidationMessage: () => {
		switch (sel_creditProduct.selectedOptionValue) {
			case "Business Loan":
				return "Business loans cannot be above $500k"
			case "Home Loan":
				return "Home loans cannot be above $1M"
			case "Personal Loan":
				return "Personal loans cannot be above $100k"
		}
	}
}