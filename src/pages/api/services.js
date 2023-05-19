export default function services(req, res) {
  res.status(200).json([
    {
      category: 'Service Suite',
      link: '',
      childServices : [
        {name: 'Control Internal Affairs', text: 'We help clients control internal affairs by providing company administration, management, and internal audit services.'},
        {name: 'Streamline Accounts', text: 'We streamline client\'s accounts by providing bookkeeping, accounting and financial services.'},
        {name: 'Secure Your Workspace', text: 'We help clients secure their workspace by providing IT security and cybersecurity services.'},
        {name: 'Optimize Finances', text: 'We help clients optimize their finances by providing financial analysis, budgeting, and forecasting services.'}
      ]
    },
    {
      category: 'Product Suite',
      link: '',
      childServices : [
        {name: 'Expense Reimbursement Tool', text: 'We provide an expense reimbursement tool that helps clients manage employee expense claims, including tracking, approval, and reimbursement process.'},
        {name: 'Payroll Management System', text: 'We provide a payroll management system that helps clients automate and streamline their payroll processes, including employee pay and benefits administration.'},
        {name: 'AP Management System', text: 'We provide an Accounts Payable management system that helps clients automate and streamline their vendor and invoice management processes.'}
      ]
    },
    {
      category: 'BPO Suite',
      link: 'https://google.com',
      childServices : [
        {name: 'Back Office Services', text: 'We provide Back Office Services that help clients manage their administrative operations, including data processing and other administrative support functions.'},
        {name: 'Contact Center Services', text: 'We provide Contact Center Services that help clients manage their customer interactions, including call centre operations and customer support.'},
        {name: 'Data Labelling and Annotation', text: 'Our Data Labelling and Annotation Services help clients categorize and label their data for AI/ML model training'}
      ]
    }
  ])
}
  